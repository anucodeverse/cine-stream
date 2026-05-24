const BASE_URL = "https://api.themoviedb.org/3";

const ACCESS_TOKEN = import.meta.env.VITE_TMDB_ACCESS_TOKEN;

async function tmdbFetch(endpoint) {
  if (!ACCESS_TOKEN) {
    throw new Error("Missing TMDB access token. Check your .env file.");
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      accept: "application/json",
    },
  });

  if (!response.ok) {
    const errorText = await response.text();

    console.error("TMDB API Error:", {
      status: response.status,
      statusText: response.statusText,
      errorText,
    });

    throw new Error(`TMDB API failed with status ${response.status}`);
  }

  return response.json();
}

export function getPopularMovies(page = 1) {
  return tmdbFetch(`/movie/popular?language=en-US&page=${page}`);
}

export function searchMovies(query, page = 1) {
  const cleanQuery = query.trim();

  if (!cleanQuery) {
    return getPopularMovies(page);
  }

  return tmdbFetch(
    `/search/movie?query=${encodeURIComponent(
      cleanQuery
    )}&include_adult=false&language=en-US&page=${page}`
  );
}

export function getMovieDetails(movieId) {
  return tmdbFetch(`/movie/${movieId}?language=en-US`);
}

export function getMovieVideos(movieId) {
  return tmdbFetch(`/movie/${movieId}/videos?language=en-US`);
}