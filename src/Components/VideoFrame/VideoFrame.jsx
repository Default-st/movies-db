import React from "react";
import Video from "../Video/Video";

const VideoFrame = ({ movieVid }) => {
  return (
    <div className="video">
      {movieVid.map((video) => {
        return (
          <div key={video.key}>
            <Video videoId={video.key} />
          </div>
        );
      })}
    </div>
  );
};

export default VideoFrame;
