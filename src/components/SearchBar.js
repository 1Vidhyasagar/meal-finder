// src/components/SearchBar.js
import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim() === "") {
      alert("Enter a food name to search");
    } else {
      onSearch(query);
    }
  };

  return (
    <div className="search-bar">
      <input
        class="w-25"
        type="text"
        placeholder="Enter a food name..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button
        onClick={handleSearch}
        type="button"
        class="btn btn-danger p-1  "
        style={{
          backgroundColor: "#ff4500",
          color: "white",
          width: "80px",
          height: "40px",
          marginLeft: "5px",
          marginBottom: "8px",
        }}
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
