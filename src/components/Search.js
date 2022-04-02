import React, { useState } from "react";
import "../styles/Search.css";
import PropTypes from "prop-types";
import getImages from "../requests/getImages";

function SearchForm({ setSearchResults }) {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSearchResults(await getImages(value));
  };

  return (
    <>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          className="search-input"
          type="text"
          placeholder="Search Image"
          onChange={(e) => setValue(e.target.value)}
        />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </>
  );
}

SearchForm.propTypes = {
  setSearchResults: PropTypes.func.isRequired,
};

export default SearchForm;
