import React from "react";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="resultsSection">
        <div className="Word">{props.results.word}</div>
        <div className="pos">{props.results.meanings[0].partOfSpeech}</div>
        <span className="Phonetic">{props.results.phonetic}</span>
        <div className="Definition">
          {props.results.meanings[0].definition}
        </div>{" "}
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
