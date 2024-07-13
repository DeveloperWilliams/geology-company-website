import React from "react";
import PropTypes from "prop-types";
import "./youtube.css";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="my-cont">
      <div className="video-responsive">
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoId}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        ></iframe>
      </div>
    </div>
  );
};

YouTubeEmbed.propTypes = {
  videoId: PropTypes.string.isRequired,
};

export default YouTubeEmbed;
