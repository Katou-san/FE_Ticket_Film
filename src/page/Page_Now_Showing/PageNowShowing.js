import React from "react";
import Slilder from "../../component/layouts/Slider/Slilder";
import "./BRHome.css";
import "./Content_Now_Showing.css";
import LinePlaylistItem from "../../component/layouts/Line_Playlist_Item/Line_Playlist_Item";
import { Api__Test } from "../../Test/Api_Test";
export default function PageNowShowing() {
  const list_Item = Api__Test.ListSongs;
  return (
    <div className="Content_Now_Showing">
      <div className="bookmark" id="Home"></div>
      <div className="Slilder_Content">
        {/* <h3>Hot </h3> */}
        <Slilder />
      </div>
      <div className="List_Content">
        <LinePlaylistItem title="Vừa Cập nhật" list_Item={list_Item} />
      </div>
      <div className="bookmark" id="Now"></div>
      <div className="List_Content">
        <LinePlaylistItem title="Đang chiếu" list_Item={list_Item} />
      </div>
      <div className="bookmark" id="Coming_Soon"></div>
      <div className="List_Content" id="Coming_Soon">
        <LinePlaylistItem title="Sắp chiếu" list_Item={list_Item} />
      </div>
    </div>
  );
}
