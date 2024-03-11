import React, { useRef, useState } from "react";
import ItemSlider from "./ItemSlider";
import "./Silder.css";
import { Api__Test } from "../../../Test/Api_Test";
import { ArrowRightIcon, ArrowLeftIcon } from "../../icons/Icon";
export default function Slilder() {
  const listSongs = Api__Test.ListSongs;

  const Slider = useRef();
  const [Index, setIndex] = useState(0);
  return (
    <div className="FrameSilder">
      <div className="Slider" ref={Slider}>
        {listSongs.map((item, i) => (
          <ItemSlider
            key={i}
            value={item}
            classHidden={i === Index ? "" : "ItemSlider_Hidden"}
          />
        ))}
      </div>
      <div className="btnFrameSlider">
        <button
          onClick={() =>
            setIndex(Index <= 0 ? listSongs.length - 1 : Index - 1)
          }
        >
          <ArrowLeftIcon />
        </button>
        <button
          onClick={() => {
            setIndex(Index >= listSongs.length - 1 ? 0 : Index + 1);
          }}
        >
          <ArrowRightIcon />
        </button>
      </div>
    </div>
  );
}
