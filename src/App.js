import React, { useState } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import { searchMeals } from "./services/mealService";

function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async (query) => {
    const results = await searchMeals(query);
    setSearchResults(results);
  };

  const handleWatchVideo = (url) => {
    // Open the YouTube video URL in a new tab
    window.open(url, "_blank");
  };

  return (
    <div className="App container px-5">
      <h1 className="text-white">MealsDB</h1>
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={searchResults} onWatchVideo={handleWatchVideo} />
    </div>
  );
}

export default App;
