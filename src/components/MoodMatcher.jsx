import { useState } from "react";

const moodMovieMap = [
  {
    keywords: ["sad", "low", "depressed", "emotional", "cry"],
    movie: "The Pursuit of Happyness",
  },
  {
    keywords: ["sad action", "angry", "revenge", "fight", "action"],
    movie: "Mad Max: Fury Road",
  },
  {
    keywords: ["romantic", "love", "date", "relationship"],
    movie: "La La Land",
  },
  {
    keywords: ["funny", "comedy", "laugh", "happy"],
    movie: "The Grand Budapest Hotel",
  },
  {
    keywords: ["scared", "horror", "fear", "dark"],
    movie: "The Conjuring",
  },
  {
    keywords: ["motivated", "inspired", "success", "hard work"],
    movie: "Rocky",
  },
  {
    keywords: ["mind", "confused", "thriller", "mystery"],
    movie: "Inception",
  },
  {
    keywords: ["space", "future", "sci fi", "science"],
    movie: "Interstellar",
  },
  {
    keywords: ["family", "kids", "animation", "cartoon"],
    movie: "Inside Out",
  },
  {
    keywords: ["adventure", "journey", "explore"],
    movie: "Indiana Jones",
  },
];

function getMovieTitleFromMood(prompt) {
  const lowerPrompt = prompt.toLowerCase();

  const matchedMood = moodMovieMap.find((item) =>
    item.keywords.some((keyword) => lowerPrompt.includes(keyword))
  );

  if (matchedMood) {
    return matchedMood.movie;
  }

  const fallbackMovies = [
    "The Dark Knight",
    "Forrest Gump",
    "Avatar",
    "Titanic",
    "Gladiator",
    "The Matrix",
    "Jurassic Park",
  ];

  const randomIndex = Math.floor(Math.random() * fallbackMovies.length);
  return fallbackMovies[randomIndex];
}

function MoodMatcher({ onMoodSearch }) {
  const [mood, setMood] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    if (!mood.trim()) return;

    try {
      setLoading(true);

      const movieTitle = getMovieTitleFromMood(mood);

      onMoodSearch(movieTitle);
      setMood("");
    } catch (error) {
      console.error("Mood matcher failed:", error);
      alert("Mood matcher failed. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="mood-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={mood}
        placeholder='Mood matcher: "I feel sad but want action"'
        onChange={(event) => setMood(event.target.value)}
        className="search-input"
      />

      <button type="submit" disabled={loading} className="primary-button">
        {loading ? "Matching..." : "Find Mood Movie"}
      </button>
    </form>
  );
}

export default MoodMatcher;