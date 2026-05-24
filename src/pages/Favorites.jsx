import MovieGrid from "../components/MovieGrid";
import useLocalStorage from "../hooks/useLocalStorage";

function Favorites() {
  const [favorites, setFavorites] = useLocalStorage("cine-stream-favorites", []);

  function toggleFavorite(movie) {
    setFavorites((previousFavorites) =>
      previousFavorites.filter((item) => item.id !== movie.id)
    );
  }

  return (
    <div>
      <section className="page-header">
        <h1>My Favorites</h1>
        <p>Your saved movies are synced with localStorage.</p>
      </section>

      <MovieGrid
        movies={favorites}
        favorites={favorites}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}

export default Favorites;