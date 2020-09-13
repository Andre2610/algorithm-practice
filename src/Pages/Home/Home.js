import React from "react";
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <div className="componentWrapper">
      <div className="cardsWrapper">
        <NavLink to="/pangram">
          <div className="card">Pangram Algorithm</div>
        </NavLink>
        <NavLink to="/bitcounting">
          <div className="card">Bit Counting Algorithm</div>
        </NavLink>
      </div>
    </div>
  );
}
