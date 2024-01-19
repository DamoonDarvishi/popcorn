import MovieItems from "./MovieItems";

function MoviesList({ movies, onSelectMovie }) {
  return (
    <ul className="list list-movies">
      {movies.map((movie) => (
        <MovieItems
          key={movie.imdbID}
          movie={movie}
          onSelectMovie={onSelectMovie}
        />
      ))}
    </ul>
  );
}

export default MoviesList;
