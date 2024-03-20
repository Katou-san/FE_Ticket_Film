import React from "react";
import { PlayIcon } from "../../icons/Icon";
export default function ItemSlider({ value, classHidden }) {
  return (
    <div className={`ItemSlider ${classHidden}`}>
      <img src={value.Avatar} alt="" />
      <div className="contentISlider">
        <h1>{value.Name}</h1>
        <h2>{value.Singer}</h2>
        <p>
          xdfgdfgdgdfdgdfgdfgdgggggggggggvsddddddddddddddddddddddddddddddddddd
        </p>
      </div>
      <div className="buttonISlider">
        <div className="IconSlider">Đặt vé</div>
      </div>
    </div>
  );
}
