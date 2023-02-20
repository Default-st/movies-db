import React, { useState, useEffect } from "react";
import axios from "axios";
const url =
  "https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=";

const Video = ({ videoId }) => {
  //const apiUrl = `${url}${videoId}&key=${process.env.REACT_APP_YT_API_KEY}`;
  //console.log("api url is " + apiUrl);
  const [videoDetails, setVideoDetails] = useState("");
  useEffect(() => {
    const fetchVideoData = async () => {
      const {
        data: { items },
      } = await axios.get(
        `${url}${videoId}&key=${process.env.REACT_APP_YT_API_KEY}`
      );
      console.log(items[0].snippet.title);
      setVideoDetails(items[0]);
    };
    fetchVideoData();
  }, [videoId]);

  return (
    <div>
      {videoDetails && <h3>{videoDetails.snippet.title}</h3>}
      <div className="videoCard">
        {videoDetails && (
          <iframe
            width="420"
            height="315"
            title={videoDetails.snippet.title}
            src={`https://www.youtube.com/embed/${videoId}`}
          ></iframe>
        )}
        {videoDetails && <p>{videoDetails.snippet.description}</p>}
      </div>
    </div>
  );
};

export default Video;
