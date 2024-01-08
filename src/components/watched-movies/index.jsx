import { useState } from "react";
import WatchedItems from "./WatchedItems";
import WatchedSummary from "./WatchedSummary";

function WatchedMovies({ watched }) {
  const [isOpen2, setIsOpen2] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen2((open) => !open)}
      >
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />

          <ul className="list">
            {watched.map((movie) => (
              <WatchedItems key={movie.imdbID} movie={movie} />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default WatchedMovies;
