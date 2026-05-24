import MovieCard from "./MovieCard";

function MovieGrid({ movies, favorites, onToggleFavorite }) {
  if (!movies.length) {
    return <p className="empty-message">No movies found.</p>;
  }

  return (
    <section className="movie-grid">
      {movies.map((movie) => {
        const isFavorite = favorites.some((item) => item.id === movie.id);

        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={isFavorite}
            onToggleFavorite={onToggleFavorite}
          />
        );
      })}
    </section>
  );
}

export default MovieGrid;