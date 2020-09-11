import React, { useState } from "react";
import "./Pangram.scss";

export default function Pangram() {
  const [sentence, setSentence] = useState("");
  const [isPangram, setIsPangram] = useState(false);
  const myRegex = /[a-z]/g;

  function onClickHandler(str) {
    new Set(str.match(myRegex)).size >= 26
      ? setIsPangram(true)
      : setIsPangram(false);
  }
  return (
    <div className="componentWrapper">
      <input
        className="inputText"
        placeholder="Write your sentence here"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <div className="menu">
        <label>Is your sentence a pangram?</label>
        <button
          className="btn"
          onClick={() => onClickHandler(sentence.toLowerCase())}
        >
          Check it!
        </button>
      </div>
      {isPangram ? (
        <div>
          <h2>{sentence}</h2>
          <h3>IS A PRANGRAM!</h3>
        </div>
      ) : null}
    </div>
  );
}
