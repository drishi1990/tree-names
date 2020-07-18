import React, { FunctionComponent, useState } from 'react';
import { getFluidGatsbyImage } from 'gatsby-source-sanity';
import Img from 'gatsby-image';
import { Preloader, Oval } from 'react-preloader-icon';
import { getYouTubeId } from '../../helpers/youtube';
import { ReactComponent as IconYoutube } from '../../images/icons/youtube.svg';
import './styles.scss';

const Video: FunctionComponent<VideoInterface> = ({
  videoMetaData,
  sanityConfig,
}) => {
  const [showVideo, setShowVideo] = useState(false);
  const [videoSourceUrl, setVideoSourceUrl] = useState('');
  const [videoLoading, setVideoLoading] = useState(false);

  const playVideo = (event: any) => {
    setVideoLoading(true);
    setVideoSourceUrl(
      `https://www.youtube.com/embed/${getYouTubeId(
        event.currentTarget.dataset.url
      )}?autoplay=1`
    );
    setShowVideo(true);
  };

  const fluidProps = getFluidGatsbyImage(
    videoMetaData.node.heroImage.asset._id,
    { maxWidth: 800 },
    sanityConfig
  );

  const onFrameLoad = () => {
    setVideoLoading(false);
  };

  return (
    <section className="bp-video">
      <h3 className="bp-video_title">{videoMetaData.node.youTubeCaption}</h3>
      <div className="bp-video_image">
        {!showVideo && (
          <Img fluid={fluidProps} alt={videoMetaData.node.heroImage.alt} />
        )}
        {!showVideo && !videoLoading && (
          <button
            type="button"
            className="bp-video_icon"
            onClick={playVideo}
            data-url={videoMetaData.node.url}
          >
            <IconYoutube />
            <span className="srOnly">Play Video</span>
          </button>
        )}
        {videoLoading && (
          <Preloader
            use={Oval}
            size={60}
            strokeWidth={11}
            strokeColor="#000"
            duration={500}
          />
        )}
        {showVideo && (
          <iframe
            width="560"
            height="399"
            src={videoSourceUrl}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={onFrameLoad}
          ></iframe>
        )}
      </div>
    </section>
  );
};

interface VideoInterface {
  videoMetaData: any;
  sanityConfig?: any;
}
export default Video;
