import React, { useState } from "react";
import Button from "../../Components/Button/Button";

export default function BitCounting() {
  const [number, setNumber] = useState(0);
  const [binaryNum, setBinaryNum] = useState(0);
  const [bits, setBits] = useState(0);

  function numberToBin(num) {
    const positiveNum = Math.abs(num);
    const toBinaryNum = positiveNum.toString(2);
    setBinaryNum(toBinaryNum);
    let count = 0;
    for (let i = 0; i < binaryNum.length; i++) {
      if (parseInt(binaryNum[i]) === 1) count += 1;
      setBits(count);
    }
  }

  // other solution
  // function numberToBin(num) {
  //   const binaryNum = Math.abs(num).toString(2);
  //   const bitCount = binaryNum.split("").filter((number) => number > 0).length;
  //   setBinaryNum(binaryNum);
  //   setBits(bitCount);
  // }

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
          <h3>
            Is {binaryNum} in binary, which has {bits} 1's
          </h3>
        </div>
      ) : null}
    </div>
  );
}
