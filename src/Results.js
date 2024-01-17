import React from "react";
import "./Results.css";
import Meaning from "./Meaning.js";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="resultsSection">
        <h2 className="Word">{props.results.word}</h2>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div key={index}>
              <Meaning meaning={meaning} />
            </div>
          );
        })}
        <div className="pos">{props.results.meanings[0].partOfSpeech}</div>
        <span className="Phonetic">{props.results.phonetic}</span>
        <div className="Synonyms">
          <div className="row">
            <div className="col-4 synonym">
              {props.results.meanings[0].synonyms[0]}
            </div>
            <div className="col-4 synonym">
              {props.results.meanings[0].synonyms[1]}
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
