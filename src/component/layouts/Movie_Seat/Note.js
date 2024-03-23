import React from "react";

export default function Note() {
  return (
    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>

      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>

      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>
  );
}
