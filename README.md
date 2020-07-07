# Liberty portal template

This repo includes several packages:
1. `studio` - sanity studio
2. `beauty-portal-theme` - Gatsby theme for the portal
3. `web` - Gatsby website, based on `beauty-portal-theme`

## Configuration

1. `studio` currently includes hardcoded config (sanityId - *8azq2eb8*), can be changed on `packages/studio/sanity.json:7`
2. `web` supports configuration files (`packages/web/.env.production`, `packages/web/.env.development`) where you can specify required env vars.

`.env.development` should contain sanity projectId and datataset name (sanityToken is optional), e.g:

```
app_local_sanityId = "8azq2eb8"
app_local_sanityDataset = "production"
app_local_sanityToken = "yourTokenValue"
```

# Installation

1. run `yarn` from repo root
2. put `.env.development` file with proper sanity details
2. that's it :)

## Commands

1. Run gatsby website: `yarn workspace web develop`
2. Run sanity studio: `yarn workspace studio develop`
3. Deploy sanity studio: `yarn workspace studio deploy`
Changes will be deployed to **sanity.studio* domain
4. Deploy sanity graphql: `yarn workspace studio graphql-deploy`
Grapqh will be updated at the playground:
*https://<sanityid>.api.sanity.io/v1/graphql/<datasetName>/default*
