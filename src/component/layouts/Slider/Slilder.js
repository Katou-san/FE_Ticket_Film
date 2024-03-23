import React, { useRef, useState } from "react";
import ItemSlider from "./ItemSlider";
import "./Silder.css";
import { Api__Test } from "../../../Test/Api_Test";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/Icon";
export default function Slilder({ list_Id }) {
  const Slider = useRef();
  const [Index, setIndex] = useState(0);
  return (
    <div className="FrameSilder">
      <div className="Slider" ref={Slider}>
        {list_Id.map((id, i) => (
          <ItemSlider
            key={i}
            id={id}
            classHidden={i === Index ? "" : "ItemSlider_Hidden"}
          />
        ))}
      </div>
      <div className="btnFrameSlider">
        <button
          onClick={() => setIndex(Index <= 0 ? list_Id.length - 1 : Index - 1)}
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={() => {
            setIndex(Index >= list_Id.length - 1 ? 0 : Index + 1);
          }}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
