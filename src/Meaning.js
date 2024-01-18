import React from "react";
import "./Results.css";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meanings Dictionary shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <h4 className="pos">{props.meaning.partOfSpeech}</h4>
      <p className="Definition">{props.meaning.definition}</p>
      <p className="Example">{props.meaning.example}</p>
      <Synonyms synonyms={props.meaning.synonyms} />
    </div>
  );
}
