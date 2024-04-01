import React from "react";
import "./Line_Playlist_Item.css";
import ItemLinePlaylist from "./Item_Playlist";
import { LoadingIcon } from "../../icons/Icon";
function LinePlaylistItem({ title, list_Id, is_Loading }) {
  return (
    <div className="FrameList">
      <h1 className="title_List">{title}</h1>
      <div className="listEle">
        {is_Loading && <LoadingIcon />}
        {!is_Loading && (
          <>
            {list_Id.map((item, index) => {
              return (
                <ItemLinePlaylist item={item} key={index} list_Item={list_Id} />
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

export default LinePlaylistItem;
