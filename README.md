# Cine-Stream Media Explorer

Cine-Stream is a Netflix-style media discovery Single Page Application built with React, Vite, React Router, and the TMDB API.

The project focuses on frontend performance optimization, client-side polish, infinite scrolling, debounced searching, localStorage persistence, lazy-loaded media assets, and a mood-based movie recommendation feature.

---

## Live Demo

Add your deployed URL here:

```txt
Live URL: https://anucodeverse.github.io/cine-stream/
GitHub URL: your-github-repository-link
Demo Video URL: your-demo-video-link

##Features

Fetches popular movies from the TMDB API
High-quality responsive movie grid layout
Movie poster, title, release year, and rating display
Debounced movie search with 500ms delay
Infinite scroll using IntersectionObserver
Favorite/unfavorite movies using heart action
Favorites saved in localStorage
Dedicated Favorites page
Movie details page
Trailer playback using TMDB video data and YouTube embed
Native lazy loading for poster images
Loading skeleton UI
Clear Search button
Mood Matcher recommendation feature
Responsive design for desktop and mobile
Tech Stack
React
Vite
React Router DOM
TMDB REST API
JavaScript
CSS Grid
localStorage
IntersectionObserver API


##Project Structure

cine-stream/
│
├── public/
│
├── src/
│   ├── api/
│   │   └── tmdb.js
│   │
│   ├── components/
│   │   ├── MoodMatcher.jsx
│   │   ├── MovieCard.jsx
│   │   ├── MovieGrid.jsx
│   │   ├── Navbar.jsx
│   │   ├── SearchBar.jsx
│   │   └── SkeletonGrid.jsx
│   │
│   ├── hooks/
│   │   ├── useDebounce.js
│   │   ├── useInfiniteScroll.js
│   │   └── useLocalStorage.js
│   │
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   ├── Home.jsx
│   │   └── MovieDetails.jsx
│   │
│   ├── utils/
│   │   └── movieHelpers.js
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── .env
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
└── Prompts.md
Environment Variables

Create a .env file in the root folder.

VITE_TMDB_ACCESS_TOKEN=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MTU3YTE5YzZjNjA1YjYyMzU2MTI1NDczOWZkZDE3MSIsIm5iZiI6MTc3OTYwMzUyMS4yMTIsInN1YiI6IjZhMTI5ODQxZTBjNjNlOTBlMzI2NmIzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m3zxbZ_dwOcuvHueN7rb0K86bi4TbO-thvzhQHlRkII

Important:

Use the TMDB API Read Access Token, not the short API key.

Correct token usually starts like this:

eyJhbGciOiJIUzI1NiJ9...
Installation

Clone the repository:

git clone your-github-repository-url

Go into the project folder:

cd cine-stream

Install dependencies:

npm install

Start the development server:

npm run dev

Open the app in browser:

http://localhost:5173
Build for Production
npm run build

Preview production build:

npm run preview
Main Pages
Home Page

The Home page displays popular movies from TMDB.

Users can:

View popular movies
Search movies
Add movies to favorites
Open movie details
Play trailers
Use infinite scroll
Use Mood Matcher
Favorites Page

The Favorites page displays all saved favorite movies.

Favorites are stored in browser localStorage, so they remain available after refreshing the page.

Movie Details Page

Each movie card opens a detail page.

The details page displays:

Poster
Title
Release year
Rating
Overview
Runtime
Genres
Status
Release date
Trailer video
Performance Features
Infinite Scroll

The app uses the IntersectionObserver API.

When the user scrolls near the bottom of the page, the app automatically fetches the next page from TMDB and appends the new movies to the existing movie grid.

This avoids loading too much data at once.

Debounced Search

The search input uses a 500ms debounce.

This prevents unnecessary API calls while the user is typing.

Example:

Without debounce:

b
ba
bat
batm
batma
batman

This could trigger many API calls.

With debounce:

batman

Only one API call is triggered after the user stops typing.

Lazy Loading Images

Movie posters use native lazy loading:

loading="lazy"

This helps reduce initial page load time because images load only when needed.

Skeleton Loading UI

While movies are loading, the app displays skeleton cards instead of showing a blank screen.

This improves perceived performance and gives users visual feedback.

Favorites Persistence

Favorites are stored in localStorage using a reusable custom hook.

Storage key:

cine-stream-favorites

The app supports:

Add to favorites
Remove from favorites
Favorites count update
Persistence after refresh
Mood Matcher

The Mood Matcher is a local keyword-based recommendation feature.

Example inputs:

I feel sad
I want action
I want comedy
I want horror
I need motivation
I want a space movie
I want a family movie
I want mystery thriller

The app converts the mood into a movie search query and sends it to TMDB search.

This is not a real AI integration. It is a frontend-based mock recommendation system. In production, this feature could be upgraded using Gemini or OpenAI through a secure backend API.

API Usage

This project uses TMDB endpoints such as:

/movie/popular
/search/movie
/movie/:id
/movie/:id/videos

The API logic is centralized in:

src/api/tmdb.js

This keeps API calls reusable and avoids duplicated fetch logic.

Code Quality Notes

The project follows reusable architecture principles:

API logic is centralized
Custom hooks are used for reusable behavior
Components are separated by responsibility
Utility functions are kept in a dedicated utils folder
localStorage logic is reusable
Search debounce is reusable
Infinite scroll behavior is reusable
Mood mapping is handled through a config-based structure instead of repeated hardcoded if/else blocks
Deployment

This project can be deployed on Vercel or Netlify.

Vercel Deployment

Build command:

npm run build

Output directory:

dist

Add this environment variable in Vercel project settings:

VITE_TMDB_ACCESS_TOKEN=your_tmdb_api_read_access_token
Netlify Deployment

Build command:

npm run build

Publish directory:

dist

Add this environment variable in Netlify site settings:

VITE_TMDB_ACCESS_TOKEN=your_tmdb_api_read_access_token
Demo Checklist

In the demo video, show:

Popular movies loading on the Home page
Infinite scroll loading more movies when scrolling down
Search working with debounce
Clear Search button
Favorite button adding movies
Favorites count updating
Favorites page
Favorites persisting after browser refresh
Movie details page opening on movie click
Trailer playing on the details page
Mood Matcher searching based on mood input
Example Demo Script
This is my Cine-Stream Media Explorer project.

The app fetches popular movies from the TMDB API and displays them in a responsive movie grid.

When I scroll down, the app uses IntersectionObserver to automatically fetch the next page of movies and append them to the existing grid.

The search input uses a 500ms debounce, so the app does not send an API request for every keystroke.

I can clear the search and return to popular movies using the Clear Search button.

Each movie card has a heart button. When I click it, the movie is saved to localStorage.

The Favorites page displays saved movies, and the favorites remain after refreshing the browser.

When I click a movie card, it opens a movie details page with extra information and a trailer.

The Mood Matcher feature converts mood text into a movie search query and displays matching movie results.
Important Note

TMDB provides movie metadata, posters, ratings, descriptions, and trailers.

TMDB does not provide full movies for streaming.

This project plays trailers only through YouTube embeds from TMDB video data.

Author
Name: AnanthaLakshmi
Project: Cine-Stream Media Explorer
Sprint: Performance Optimization & Client-Side Polish
