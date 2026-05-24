import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getMovieDetails, getMovieVideos } from "../api/tmdb";
import { getPosterUrl, getReleaseYear } from "../utils/movieHelpers";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [trailerKey, setTrailerKey] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMovieDetails() {
      try {
        setLoading(true);

        const detailsData = await getMovieDetails(id);
        const videosData = await getMovieVideos(id);

        const officialTrailer =
          videosData.results.find(
            (video) =>
              video.site === "YouTube" &&
              video.type === "Trailer" &&
              video.official
          ) ||
          videosData.results.find(
            (video) =>
              video.site === "YouTube" &&
              (video.type === "Trailer" || video.type === "Teaser")
          );

        setMovie(detailsData);
        setTrailerKey(officialTrailer?.key || "");
      } catch (error) {
        console.error("Movie details fetch failed:", error);
        alert(error.message || "Failed to fetch movie details.");
      } finally {
        setLoading(false);
      }
    }

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return <p className="empty-message">Loading movie details...</p>;
  }

  if (!movie) {
    return <p className="empty-message">Movie not found.</p>;
  }

  return (
    <section className="details-page">
      <Link to="/" className="back-link">
        ← Back to Home
      </Link>

      <div className="details-layout">
        <img
          src={getPosterUrl(movie.poster_path)}
          alt={movie.title}
          className="details-poster"
          loading="lazy"
        />

        <div className="details-content">
          <h1>{movie.title}</h1>

          <p className="details-meta">
            {getReleaseYear(movie.release_date)} • ⭐{" "}
            {movie.vote_average?.toFixed(1) || "N/A"}
          </p>

          <p className="movie-overview">
            {movie.overview || "No overview available."}
          </p>

          <div className="details-info">
            <p>
              <strong>Runtime:</strong>{" "}
              {movie.runtime ? `${movie.runtime} minutes` : "N/A"}
            </p>

            <p>
              <strong>Genres:</strong>{" "}
              {movie.genres?.length
                ? movie.genres.map((genre) => genre.name).join(", ")
                : "N/A"}
            </p>

            <p>
              <strong>Status:</strong> {movie.status || "N/A"}
            </p>

            <p>
              <strong>Release Date:</strong> {movie.release_date || "N/A"}
            </p>
          </div>

          {trailerKey ? (
            <div className="trailer-box">
              <h2>Play Trailer</h2>

              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}`}
                title={`${movie.title} Trailer`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="trailer-frame"
              ></iframe>
            </div>
          ) : (
            <p className="no-trailer">No trailer available for this movie.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;