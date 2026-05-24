function SearchBar({ value, onChange }) {
  return (
    <div className="search-wrapper">
      <input
        type="text"
        value={value}
        placeholder="Search movies..."
        onChange={(event) => onChange(event.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;