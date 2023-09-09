// src/components/SearchResults.js
import React from "react";

function SearchResults({ results, onWatchVideo }) {
  return (
    <div className="search-results">
      {results.length === 0 ? (
        <p>No food found.</p>
      ) : (
        <div className="pt-4 row row-cols-1 row-cols-md-4">
          {results.map((result) => (
            <div key={result.idMeal} className="col mb-4">
              <div className="result-item card">
                <img
                  src={result.strMealThumb}
                  alt={result.strMeal}
                  className="card-img-top px-2 pt-4"
                />
                <div className="card-body">
                  <h5
                    className="card-title text-secondary
"
                  >
                    {result.strMeal}
                  </h5>
                  <button
                    onClick={() => onWatchVideo(result.strYoutube)}
                    className="btn btn-dark btn-sm"
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResults;
