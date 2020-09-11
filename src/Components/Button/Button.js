import React from "react";

export default function Button(props) {
  const { label, onClickHandler, argument } = props;
  return (
    <button className="btn" onClick={() => onClickHandler(argument)}>
      {label}
    </button>
  );
}
