import React, { useState } from "react";
import Button from "../../Components/Button/Button";
import "./Pangram.scss";

export default function Pangram() {
  const [sentence, setSentence] = useState("");
  const [isPangram, setIsPangram] = useState(false);
  const myRegex = /[a-z]/g;

  function onClickHandler(str) {
    const lowerCaseStr = str.toLowerCase();
    new Set(lowerCaseStr.match(myRegex)).size >= 26
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
        <Button
          label="Check it"
          onClickHandler={onClickHandler}
          argument={sentence}
        />
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
