export function getPosterUrl(path) {
  if (!path) {
    return "https://via.placeholder.com/500x750?text=No+Poster";
  }

  return `https://image.tmdb.org/t/p/w500${path}`;
}

export function getReleaseYear(date) {
  if (!date) {
    return "N/A";
  }

  return date.split("-")[0];
}

export function normalizeMovie(movie) {
  return {
    id: movie.id,
    title: movie.title || "Untitled",
    poster_path: movie.poster_path,
    release_date: movie.release_date,
    vote_average: movie.vote_average,
    overview: movie.overview,
  };
}