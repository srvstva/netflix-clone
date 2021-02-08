import { React, useState, useEffect } from "react";
import "./App.css";
import Navbar from "./Navbar";
import Banner from "./Banner";
import Row from "./Row";
import {
  MOVIE_NOW_PLAYING,
  MOVIE_POPULAR,
  MOVIE_TOP_RATED,
  MOVIE_UPCOMING,
} from "./requests";

function App() {
  const [movie, setMovie] = useState(null);
  useEffect(() => {
    fetch(MOVIE_POPULAR)
      .then((res) => res.json())
      .then((data) => {
        const movies = data.results;
        const randomIndex = Math.floor(Math.random() * movies.length) - 1;
        setMovie(movies[randomIndex]);
      });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Banner
        title={movie?.title}
        overview={movie?.overview}
        backdropUrl={`https://image.tmdb.org/t/p/original/${
          movie?.poster_path || movie?.backdrop_path
        }`}
      />
      <Row isLarge title="Now Playing" endpoint={MOVIE_NOW_PLAYING} />
      <Row title="Popular Movies" endpoint={MOVIE_POPULAR} />
      <Row title="Top Rated Movies" endpoint={MOVIE_TOP_RATED} />
      <Row title="Upcoming Movies" endpoint={MOVIE_UPCOMING} />
    </div>
  );
}

export default App;
