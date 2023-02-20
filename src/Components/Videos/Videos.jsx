import React, { useEffect, useState } from "react";
import "./Videos.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import VideoFrame from "../VideoFrame/VideoFrame";
const movieUrl = "https://api.themoviedb.org/3/movie/";
const Videos = () => {
  const [movieData, setMovieData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(4);
  const movieId = useParams();

  useEffect(() => {
    const fetchDataMovieRelated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${movieUrl}${movieId.id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
      );
      setMovieData(results);
      //   console.log(movieData);
    };
    fetchDataMovieRelated();
  }, [movieId.id]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movieData.slice(firstPostIndex, lastPostIndex);
  return <VideoFrame movieVid={currentPosts} />;
};

export default Videos;
