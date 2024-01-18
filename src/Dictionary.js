import React, { useState } from "react";
import "./Dictionary.css";
import Results from "./Results";
import axios from "axios";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
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
        <h1 className="title">VocabVault</h1>
        <h2 className="subtitle">Discover Something You Never Knew</h2>
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
