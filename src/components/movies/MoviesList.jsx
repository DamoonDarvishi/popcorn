import React from "react";
import MovieItems from "./MovieItems";

function MoviesList({ movies }) {
  return (
    <ul className="list">
      {movies.map((movie) => (
        <MovieItems key={movie.imdbID} movie={movie} />
      ))}
    </ul>
  );
}

export default MoviesList;
