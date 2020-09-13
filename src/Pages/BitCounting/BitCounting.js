import React, { useState } from "react";
import Button from "../../Components/Button/Button";

export default function BitCounting() {
  const [number, setNumber] = useState(0);
  const [bits, setBits] = useState(0);

  function numberToBin(num) {
    const positiveNum = Math.abs(num);
    setBits(positiveNum.toString(2));
  }

  return (
    <div className="componentWrapper">
      <input
        type="number"
        className="inputText"
        placeholder="Write your sentence here"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <div className="menu">
        <label>How many bits in your number?</label>
        <Button
          label="Check it"
          onClickHandler={numberToBin}
          argument={number}
        />
      </div>
      {bits ? (
        <div>
          <h2>{Math.abs(number)}</h2>
          <h3>Is {bits} in binary!</h3>
        </div>
      ) : null}
    </div>
  );
}
