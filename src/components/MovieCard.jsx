import { Link } from "react-router-dom";
import { getPosterUrl, getReleaseYear } from "../utils/movieHelpers";

function MovieCard({ movie, isFavorite, onToggleFavorite }) {
  function handleFavoriteClick(event) {
    event.preventDefault();
    event.stopPropagation();
    onToggleFavorite(movie);
  }

  return (
    <Link to={`/movie/${movie.id}`} className="movie-card-link">
      <article className="movie-card">
        <div className="poster-wrapper">
          <img
            src={getPosterUrl(movie.poster_path)}
            alt={movie.title}
            loading="lazy"
            className="poster"
          />

          <button
            className={`heart-button ${isFavorite ? "active" : ""}`}
            onClick={handleFavoriteClick}
            aria-label="Toggle favorite"
          >
            {isFavorite ? "♥" : "♡"}
          </button>
        </div>

        <div className="movie-info">
          <h3>{movie.title}</h3>

          <div className="movie-meta">
            <span>{getReleaseYear(movie.release_date)}</span>
            <span>⭐ {movie.vote_average?.toFixed(1) || "N/A"}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

export default MovieCard;