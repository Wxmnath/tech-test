import React, { useEffect, useState } from "react";
import "../styles/Search.css";

function SearchForm() {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="search-form">
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
