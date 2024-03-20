import React from "react";
import "./Page_Deatil.css";
import LinePlaylistItem from "../../component/layouts/Line_Playlist_Item/Line_Playlist_Item";
import img from "../../assets/img/avatar.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Api__Test } from "../../Test/Api_Test";
import LineArtistItem from "../../component/layouts/Line_Artist_Item/Line_Artist_Item";
export default function PageDetail() {
  const list_Item = Api__Test.ListSongs;
  const Navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const Film_Id = searchParams.get("Film_id");
  return (
    <div className="Detail_Frame">
      <div className="Content_Detail">
        <div className="Content_Left">
          <h1 className="Name_Film">Name</h1>
          <div className="Info_Film">
            <p>Mô tả: asdasdasdadasdadasdadadad</p>
          </div>
          <div className="List_Content">
            <LineArtistItem List_Artist={list_Item} />
          </div>
        </div>
        <div className="Content_Right">
          <img src={img} alt="" />
          <div className="Btn_Deatail_Film">
            <button
              onClick={() => {
                Navigate(`/ticket?Film_id=${Film_Id}`);
              }}
            >
              Đặt vé
            </button>
          </div>
          <div className="info_Film_Right">
            <div className="box_Info">
              <h4>Thể loại</h4>
              <h5>history</h5>
            </div>
            <div className="box_Info">
              <h4>Thời Lượng</h4>
              <h5>history</h5>
            </div>
            <div className="box_Info">
              <h4>Dạo diễn</h4>
              <h5>history</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
