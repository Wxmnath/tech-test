import React, { useEffect, useState } from "react";
import "../styles/Search.css";
import getImages from "../requests/getImages";

function SearchForm() {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    getImages(value);
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

export default SearchForm;
