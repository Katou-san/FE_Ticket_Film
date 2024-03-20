import React, { useContext } from "react";
import "./Line_Artist_Item.css";
import ItemArtist from "./ItemArtist";
function LineArtistItem({ Value, List_Artist }) {
  return (
    <div className="FramePopularArtist mt-30">
      <div className="btnlr">
        <button>1</button>
        <button>2</button>
      </div>
      <h1 className="title">{Value ? Value.Title : "Artists"}</h1>
      <div className="listArtist">
        {List_Artist.map((item, index) => (
          <ItemArtist key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default LineArtistItem;
