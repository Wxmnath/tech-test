import React from "react";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p>No results found!</p>;
  } else {
    return (
      <>
        <p className="search-result"> Search Results: </p>
        <img
          className="search-results"
          src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
          aria-hidden
          alt="space-image"
        />
      </>
    );
  }
}

export default SearchResults;
