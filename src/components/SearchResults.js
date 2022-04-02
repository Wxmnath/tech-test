import React from "react";
import PropTypes from "prop-types";
import "../styles/SearchResults.css";

function SearchResults({ results }) {
  if (!results.length) {
    return <p className="no-result-title">No results found!</p>;
  } else {
    return (
      <>
        {results.map((image) => (
          <img
            className="search-results"
            src={image}
            aria-hidden
            alt="space-image"
          />
        ))}
      </>
    );
  }
}

SearchResults.propTypes = {
  results: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default SearchResults;
