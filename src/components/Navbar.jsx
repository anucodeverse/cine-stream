import { NavLink } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

function Navbar() {
  const [favorites] = useLocalStorage("cine-stream-favorites", []);

  return (
    <header className="navbar">
      <NavLink to="/" className="logo">
        Cine-Stream
      </NavLink>

      <nav className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/favorites">Favorites ({favorites.length})</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;