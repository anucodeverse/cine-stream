import { useEffect, useRef } from "react";

function useInfiniteScroll({ loading, hasMore, onLoadMore }) {
  const observerRef = useRef(null);
  const targetRef = useRef(null);

  useEffect(() => {
    if (loading) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      const firstEntry = entries[0];

      if (firstEntry.isIntersecting && hasMore) {
        onLoadMore();
      }
    });

    const currentTarget = targetRef.current;

    if (currentTarget) {
      observerRef.current.observe(currentTarget);
    }

    return () => {
      if (observerRef.current && currentTarget) {
        observerRef.current.unobserve(currentTarget);
      }
    };
  }, [loading, hasMore, onLoadMore]);

  return targetRef;
}

export default useInfiniteScroll;