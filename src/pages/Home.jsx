import { useCallback, useEffect, useState } from "react";
import { getPopularMovies, searchMovies } from "../api/tmdb";
import SearchBar from "../components/SearchBar";
import MovieGrid from "../components/MovieGrid";
import MoodMatcher from "../components/MoodMatcher";
import SkeletonGrid from "../components/SkeletonGrid";
import useDebounce from "../hooks/useDebounce";
import useInfiniteScroll from "../hooks/useInfiniteScroll";
import useLocalStorage from "../hooks/useLocalStorage";
import { normalizeMovie } from "../utils/movieHelpers";

function Home() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useLocalStorage("cine-stream-favorites", []);

  const [searchText, setSearchText] = useState("");
  const debouncedSearchText = useDebounce(searchText, 500);

  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [mode, setMode] = useState("popular");

  const hasSearchText = searchText.trim().length > 0;
  const hasMore = page < totalPages;
  const isInitialLoading = loading && movies.length === 0;

  async function fetchMovies({ query = "", pageNumber = 1, append = false }) {
    try {
      setLoading(true);

      const data = query
        ? await searchMovies(query, pageNumber)
        : await getPopularMovies(pageNumber);

      const normalizedResults = data.results.map(normalizeMovie);

      setMovies((previousMovies) => {
        if (!append) {
          return normalizedResults;
        }

        const existingIds = new Set(previousMovies.map((movie) => movie.id));

        const uniqueNewMovies = normalizedResults.filter(
          (movie) => !existingIds.has(movie.id)
        );

        return [...previousMovies, ...uniqueNewMovies];
      });

      setPage(data.page);
      setTotalPages(data.total_pages);
    } catch (error) {
      console.error("Movie fetch failed:", error);
      alert(error.message || "Failed to fetch movies.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    const query = debouncedSearchText.trim();

    if (query) {
      setMode("search");
      fetchMovies({ query, pageNumber: 1, append: false });
    } else {
      setMode("popular");
      fetchMovies({ query: "", pageNumber: 1, append: false });
    }
  }, [debouncedSearchText]);

  const loadMore = useCallback(() => {
    if (loading || !hasMore) return;

    const nextPage = page + 1;
    const query = mode === "search" ? debouncedSearchText.trim() : "";

    fetchMovies({
      query,
      pageNumber: nextPage,
      append: true,
    });
  }, [loading, hasMore, page, mode, debouncedSearchText]);

  const bottomRef = useInfiniteScroll({
    loading,
    hasMore,
    onLoadMore: loadMore,
  });

  function toggleFavorite(movie) {
    setFavorites((previousFavorites) => {
      const alreadyExists = previousFavorites.some((item) => item.id === movie.id);

      if (alreadyExists) {
        return previousFavorites.filter((item) => item.id !== movie.id);
      }

      return [...previousFavorites, movie];
    });
  }

  function handleMoodSearch(movieTitleOrQuery) {
    setSearchText(movieTitleOrQuery);
  }

  function handleClearSearch() {
    setSearchText("");
    setMode("popular");
  }

  return (
    <div>
      <section className="hero">
        <h1>Cine-Stream Media Explorer</h1>
        <p>
          Discover popular movies, search TMDB, save favorites, and test
          performance with infinite scrolling.
        </p>
      </section>

      <div className="search-area">
        <SearchBar value={searchText} onChange={setSearchText} />

        {hasSearchText && (
          <button className="clear-search-button" onClick={handleClearSearch}>
            Clear Search
          </button>
        )}
      </div>

      <MoodMatcher onMoodSearch={handleMoodSearch} />

      {mode === "search" && debouncedSearchText.trim() && (
        <p className="results-label">
          Showing results for: <strong>{debouncedSearchText}</strong>
        </p>
      )}

      {isInitialLoading ? (
        <SkeletonGrid count={12} />
      ) : (
        <MovieGrid
          movies={movies}
          favorites={favorites}
          onToggleFavorite={toggleFavorite}
        />
      )}

      <div ref={bottomRef} className="scroll-sentinel">
        {loading && movies.length > 0 && <p>Loading more movies...</p>}
        {!hasMore && movies.length > 0 && <p>No more movies to load.</p>}
      </div>
    </div>
  );
}

export default Home;