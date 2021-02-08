import React from "react";
import { useState, useEffect } from "react";
import "./Row.css";

const Row = ({ title, endpoint, isLarge }) => {
  const [movies, setMovies] = useState([]);
  const urlForImage = (poster) => {
    return `https://image.tmdb.org/t/p/w500/${poster}`;
  };

  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, [endpoint]);
  return (
    <div className="row">
      <h3 className="row__title">{title}</h3>

      <div className="rowCard">
        {movies.map((movie) => (
          <div className="rowCard__wrapper">
            <img
              className={`rowCard__image ${
                isLarge && "rowCard__image--isLarge"
              }`}
              src={urlForImage(movie.poster_path)}
              alt={title}
              key={movie.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Row;
