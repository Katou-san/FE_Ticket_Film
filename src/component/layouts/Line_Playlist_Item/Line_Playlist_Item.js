import React from "react";
import "./Line_Playlist_Item.css";
import ItemLinePlaylist from "./Item_Playlist";
function LinePlaylistItem({ title, list_Id }) {
  return (
    <div className="FrameList">
      <div className="btnlr">
        <button>1</button>
        <button>2</button>
      </div>
      <h1 className="title_List">{title}</h1>
      <div className="listEle">
        {list_Id.map((item, index) => {
          return (
            <ItemLinePlaylist item={item} key={index} list_Item={list_Id} />
          );
        })}
      </div>
    </div>
  );
}

export default LinePlaylistItem;
