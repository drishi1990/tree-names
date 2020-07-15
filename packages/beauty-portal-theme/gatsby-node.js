/* eslint-disable no-console */
const path = require('path');
const { getPagePath } = require('./scripts/utils');
const TerserJSPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const createLandingPages = require('./scripts/build/createLandingPages');
const createHowtoPages = require('./scripts/build/createHowtoPages');
const createProductPages = require('./scripts/build/createProductPages');
const createFeaturePages = require('./scripts/build/createFeaturePages');
const createGalleryPages = require('./scripts/build/createGalleryPages');
const express = require(`express`);

exports.onCreateDevServer = ({ app }) => {
  app.use(
    express.static(path.resolve(process.cwd(), `../beauty-portal-theme/static`))
  );
};

exports.createResolvers = ({ createResolvers }) => {
  const pathResolver = {
    path: {
      type: 'String',
      resolve(source, args, context, info) {
        const parentPage = source.parentPage
          ? context.nodeModel.getNodeById({
              id: source.parentPage._ref,
            })
          : null;

        return getPagePath({
          slug: source.slug,
          parentPage,
        });
      },
    },
  };

  createResolvers({
    SanityHowToArticle: pathResolver,
    SanityGalleryArticle: pathResolver,
    SanityFeatureArticle: pathResolver,
    SanityLandingPage: pathResolver,
    SanityProduct: pathResolver,
  });
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const pagesCreators = [
    createLandingPages({
      graphql,
      createPage,
    }),
    createHowtoPages({
      graphql,
      createPage,
    }),
    createFeaturePages({
      graphql,
      createPage,
    }),
    createProductPages({
      graphql,
      createPage,
    }),
    createGalleryPages({
      graphql,
      createPage,
    }),
  ];

  await Promise.all(pagesCreators);
};

exports.onCreateWebpackConfig = ({
  actions,
  getConfig,
  stage,
  loaders,
  plugins,
}) => {
  if (stage === 'build-javascript') {
    const config = getConfig();
    const miniCssExtractPlugin = config.plugins.find(
      plugin => plugin.constructor.name === 'MiniCssExtractPlugin'
    );
    if (miniCssExtractPlugin) {
      miniCssExtractPlugin.options.ignoreOrder = true;
    }
    actions.replaceWebpackConfig(config);
  }

  const envKeys = Object.keys(process.env).reduce((prev, next) => {
    if (next.indexOf('app_') === 0) {
      const key = next
        .split('_')
        .slice(2)
        .join('_');
      prev[`process.env.${key}`] = JSON.stringify(process.env[next]);
    }
    return prev;
  }, {});

  actions.setWebpackConfig({
    plugins: [plugins.define(envKeys)],
  });

  // disable map-files
  actions.setWebpackConfig({
    devtool: false,
  });

  const config = getConfig();

  if (stage === 'develop') {
    config.module.rules.push({
      test: /react-hot-loader/,
      use: [loaders.js()],
    });
  }

  if (stage === 'build-html') {
    config.module.rules.push({
      test: /elasticsearch-browser/,
      use: loaders.null(),
    });
  }

  actions.replaceWebpackConfig(config);
};
