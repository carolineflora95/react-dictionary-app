import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";
import Phonetic from "./Phonetic.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="resultsSection">
        <h2 className="Word">{props.results.word}</h2>

        <Phonetic phonetic={props.results.phonetic} />

        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
