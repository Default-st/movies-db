import React, { useEffect, useState } from "react";
import Row from "../Row/Row";
import "./Home.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { BiPlay } from "react-icons/bi";
import { AiOutlinePlus } from "react-icons/ai";

const url = "https://api.themoviedb.org/3/";
const upcoming = "upcoming";
const popular = "popular";
const top_rated = "top_rated";
const now_playing = "now_playing";
const imgUrl = "https://image.tmdb.org/t/p/original";
const api = process.env.REACT_APP_API_KEY;

const Home = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
  const [genre, setGenre] = useState([]);
  useEffect(() => {
    const fetchDataUpcoming = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}movie/${upcoming}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      setUpcomingMovies(results);
    };
    const fetchDataPopular = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}movie/${popular}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      setPopularMovies(results);
    };
    const fetchDataTopRated = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}movie/${top_rated}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      setTopRatedMovies(results);
    };
    const fetchDataNowPlaying = async () => {
      const {
        data: { results },
      } = await axios.get(
        `${url}movie/${now_playing}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
      );

      setNowPlayingMovies(results);
    };
    const getAllGenre = async () => {
      const {
        data: { genres },
      } = await axios.get(
        `${url}genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setGenre(genres);
    };
    getAllGenre();
    fetchDataUpcoming();
    fetchDataPopular();
    fetchDataTopRated();
    fetchDataNowPlaying();
  }, []);

  return (
    <section className="home">
      <div
        className="banner"
        style={{
          backgroundImage: popularMovies[0]
            ? `url(${`${imgUrl}/${popularMovies[0].poster_path}`})`
            : "rgb(16, 16, 16)",
        }}
      >
        {popularMovies[0] && <h1>{popularMovies[0].original_title}</h1>}
        {popularMovies[0] && <p>{popularMovies[0].overview}</p>}

        <div>
          <button>
            <BiPlay /> Play{" "}
          </button>
          <button>
            My List <AiOutlinePlus />{" "}
          </button>
        </div>
      </div>
      <Row title={"Upcoming Movies"} arr={upcomingMovies} />
      <Row title={"Popular Movies"} arr={popularMovies} />
      <Row title={"Now Playing"} arr={nowPlayingMovies} />
      <Row title={"TopRated"} arr={topRatedMovies} />

      <div className="genreBox">
        {genre.map((item) => {
          return (
            <Link key={item.id} to={`/genre/${item.id}`}>
              {item.name}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default Home;
