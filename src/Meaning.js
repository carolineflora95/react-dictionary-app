import React from "react";
import "./Results.css";

export default function Meaning(props) {
  console.log(props.results);
  return (
    <div className="Meanings Dictionary">
      <h4 className="pos">{props.meaning.partOfSpeech}</h4>
      <p className="Definition">{props.meaning.definition}</p>
      <p className="Example">{props.meaning.example}</p>
    </div>
  );
}
