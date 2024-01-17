import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "9a33fd779e40o2b13tb533b7a79f4beb";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div>
      <div className="block">
        <h1>Caroline's Dictionary</h1>
        <div className="Dictionary">
          <form onSubmit={search}>
            <input
              type="search"
              autoFocus={true}
              placeholder="Search for a Word....Any Word"
              className="form-control"
              onChange={handleKeywordChange}
            />
          </form>
        </div>
        <Results results={results} />
      </div>
    </div>
  );
}
