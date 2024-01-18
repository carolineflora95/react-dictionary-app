import React from "react";

export default function Phonetic(props) {
  return (
    <div>
      <h4 className="Phonetic">
        {"/"}
        {props.phonetic}
        {"/"}
      </h4>
    </div>
  );
}
