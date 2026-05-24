# Prompts.md

## Project-Based AI Prompts

### Prompt 1: React Project Architecture

Explain a professional React + Vite project architecture for a TMDB movie discovery SPA with pages, components, hooks, API services, and utility functions.

---

### Prompt 2: TMDB API Integration

How do I connect a React Vite application to the TMDB API using an environment variable and a reusable API service file?

---

### Prompt 3: Environment Variable Debugging

My React Vite app is not reading my TMDB token from the `.env` file. What should I check and how can I debug it?

---

### Prompt 4: Failed to Fetch Movies Error

My movie app shows “Failed to fetch movies.” How do I debug TMDB API errors, token issues, and fetch failures in React?

---

### Prompt 5: Popular Movies Fetch Logic

How do I fetch popular movies from the TMDB `/movie/popular` endpoint and render them in a reusable movie grid?

---

### Prompt 6: Search API Logic

How do I implement TMDB movie search in React using the `/search/movie` endpoint while keeping the API logic reusable?

---

### Prompt 7: Debounced Search

How do I implement a reusable debounce hook in React so the search API does not run on every keystroke?

---

### Prompt 8: Infinite Scroll Logic

How do I implement infinite scroll in React using the IntersectionObserver API and append the next page of TMDB results?

---

### Prompt 9: Infinite Scroll Debugging

My infinite scroll is not loading the next page correctly. How do I debug IntersectionObserver, loading state, hasMore state, and page number updates?

---

### Prompt 10: Duplicate Movie Prevention

How do I prevent duplicate movies from being appended when using infinite scroll with paginated API results?

---

### Prompt 11: localStorage Favorites

How do I save favorite movies in localStorage using a reusable React hook?

---

### Prompt 12: Favorites Persistence

How do I keep favorite movies saved after refreshing the browser using localStorage?

---

### Prompt 13: Favorites Count Update Issue

My favorites count in the navbar updates only after page reload. How do I sync localStorage state across multiple React components?

---

### Prompt 14: Favorite/Unfavorite Logic

How do I implement favorite and unfavorite logic in React without duplicating movie records?

---

### Prompt 15: React Router Setup

How do I set up React Router routes for Home, Favorites, and Movie Details pages in a Vite React app?

---

### Prompt 16: Movie Card Navigation

My movie card displays correctly but does not open anything when clicked. How do I make each movie card navigate to a details page?

---

### Prompt 17: Dynamic Movie Details Route

How do I create a dynamic route like `/movie/:id` and fetch movie details using the movie ID from the URL?

---

### Prompt 18: Vite Import Error

Vite says “Failed to resolve import ./pages/MovieDetails from src/App.jsx.” What causes this and how do I fix it?

---

### Prompt 19: TMDB Movie Videos

How do I fetch trailer videos from TMDB using the `/movie/:id/videos` endpoint?

---

### Prompt 20: Trailer Embed Logic

How do I find the official YouTube trailer from TMDB video results and embed it in a React movie details page?

---

### Prompt 21: Full Movie Playback Limitation

Can TMDB be used to play full movies, or does it only provide metadata and trailers?

---

### Prompt 22: Lazy Loading Images

How do I improve image performance in a movie grid by using native lazy loading on poster images?

---

### Prompt 23: Poster URL Helper

How do I create a reusable helper function for TMDB poster URLs and fallback poster images?

---

### Prompt 24: Release Year Helper

How do I extract only the release year from a TMDB release date safely?

---

### Prompt 25: Loading Skeleton UI

How do I add skeleton loading cards to a React movie grid while API data is loading?

---

### Prompt 26: Clear Search Button

How do I add a Clear Search button that resets the search input and returns the app to popular movies?

---

### Prompt 27: Empty State UI

How do I create professional empty states for no search results and no favorite movies?

---

### Prompt 28: Mood Matcher Logic

How do I build a simple keyword-based Mood Matcher that converts user mood text into a TMDB movie search query?

---

### Prompt 29: Mood Matcher Same Result Issue

My Mood Matcher gives the same result for different inputs. How do I improve the logic so different moods return different searches?

---

### Prompt 30: Mood Matcher Without Real AI

How do I explain a local keyword-based Mood Matcher as a mock AI feature for a frontend sprint project?

---

### Prompt 31: Real AI Architecture

If I wanted to use Gemini or OpenAI later, what would be the secure architecture for connecting React, a backend/serverless function, AI API, and TMDB search?

---

### Prompt 32: Avoid Exposing API Keys

Why should I not put Gemini/OpenAI API keys directly inside a React Vite frontend project?

---

### Prompt 33: DRY Code Review

Review my React project structure and suggest how to avoid duplicated logic, hardcoded mappings, and repeated API calls.

---

### Prompt 34: Reusable Hooks Review

How can I improve my custom hooks for debounce, infinite scroll, and localStorage so the code stays reusable and maintainable?

---

### Prompt 35: Config-Based Mapping

How do I replace repeated if/else mood matching logic with a reusable config-based mapping array?

---

### Prompt 36: Component Responsibility

How do I split responsibilities between MovieCard, MovieGrid, SearchBar, MoodMatcher, Navbar, and page components?

---

### Prompt 37: API Service Refactor

How do I centralize all TMDB fetch logic in one `tmdb.js` API service file instead of duplicating fetch calls inside components?

---

### Prompt 38: Error Handling

How do I improve API error handling in React so users see friendly messages and developers can debug using console logs?

---

### Prompt 39: Deployment Environment Variables

How do I configure TMDB environment variables correctly when deploying a Vite React app to Vercel or Netlify?

---

### Prompt 40: Demo Video Checklist

What should I demonstrate in a 3-minute project demo for a React TMDB movie app with infinite scroll, debounced search, favorites, and trailer playback?

---

### Prompt 41: GitHub README

Create a professional README for a React TMDB movie discovery project including setup, features, environment variables, architecture, and demo checklist.

---

### Prompt 42: Performance Explanation

Explain how infinite scroll, debounced search, lazy image loading, and skeleton UI improve frontend performance.

---

### Prompt 43: Browser Console Debugging

How do I use the browser console and network tab to debug React API requests, failed fetches, and debounce behavior?

---

### Prompt 44: Search Network Request Testing

How do I verify in the browser Network tab that my search input is debounced and not making requests on every keystroke?

---

### Prompt 45: localStorage Testing

How do I test that favorite movies are saved in localStorage and persist after browser refresh?

---

### Prompt 46: Code Quality Review

Review my Cine-Stream React project for maintainability, reusable architecture, clean component separation, and DRY logic.

---

### Prompt 47: UI Polish Suggestions

Suggest small professional UI improvements for a React movie discovery app without changing the core architecture.

---

### Prompt 48: Responsive Design Review

How do I make my movie grid, search area, navbar, and movie details page responsive for mobile and desktop?

---

### Prompt 49: Movie Details Page UI

How do I design a professional movie details page with poster, overview, genres, rating, runtime, release date, and trailer?

---

### Prompt 50: Final Submission Review

Check whether my Cine-Stream project satisfies the sprint requirements: TMDB API, search, debounce, infinite scroll, favorites, lazy loading, Mood Matcher, documentation, and deployment readiness.