import React, { useEffect } from "react";
import Slilder from "../../component/layouts/Slider/Slilder";
import "./BRHome.css";
import "./Content_Now_Showing.css";
import LinePlaylistItem from "../../component/layouts/Line_Playlist_Item/Line_Playlist_Item";
import { Get_Film_RC } from "../../service/Film_Service";
import useAxios from "../../Hook/useAxios";
export default function PageNowShowing() {
  const [state, dispatch] = useAxios();
  const { Result_Now, Result_Soon } = state.data;

  useEffect(() => {
    dispatch({ type: "REQUEST" });
    Get_Film_RC().then((res) => {
      console.log(res);
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
    });
  }, []);
  return (
    <div className="Content_Now_Showing">
      <div className="bookmark" id="Home"></div>
      <div className="Slilder_Content">
        <Slilder list_Id={Result_Now ? Result_Now : []} />
      </div>
      {/* <div className="List_Content">
        <LinePlaylistItem title="Vừa Cập nhật" list_Id={list_Item} />
      </div> */}
      <div className="bookmark" id="Now"></div>
      <div className="List_Content">
        <LinePlaylistItem
          title="Đang chiếu"
          list_Id={Result_Now ? Result_Now : []}
        />
      </div>
      <div className="bookmark" id="Coming_Soon"></div>
      <div className="List_Content" id="Coming_Soon">
        <LinePlaylistItem
          title="Sắp chiếu"
          list_Id={Result_Soon ? Result_Soon : []}
        />
      </div>
    </div>
  );
}
