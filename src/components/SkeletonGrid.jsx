function SkeletonGrid({ count = 12 }) {
  return (
    <section className="movie-grid" aria-label="Loading movies">
      {Array.from({ length: count }).map((_, index) => (
        <article className="movie-card skeleton-card" key={index}>
          <div className="skeleton-poster skeleton"></div>

          <div className="movie-info">
            <div className="skeleton-title skeleton"></div>
            <div className="skeleton-meta-row">
              <div className="skeleton-meta skeleton"></div>
              <div className="skeleton-meta skeleton"></div>
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}

export default SkeletonGrid;