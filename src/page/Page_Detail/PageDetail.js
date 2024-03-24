import React, { useEffect, useState } from "react";
import "./Page_Deatil.css";
import { toast } from "react-toastify";
import LinePlaylistItem from "../../component/layouts/Line_Playlist_Item/Line_Playlist_Item";
import img from "../../assets/img/avatar.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Api__Test } from "../../Test/Api_Test";
import LineArtistItem from "../../component/layouts/Line_Artist_Item/Line_Artist_Item";
import useAxios from "../../Hook/useAxios";
import { Get_Film_Id } from "../../service/Film_Service";
export default function PageDetail() {
  const list_Item = Api__Test.ListSongs;
  const Navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const Film_Id = searchParams.get("Film_id");
  const [state, dispatch] = useAxios();
  const {
    launch_date,
    name,
    poster,
    time,
    description,
    finish_date,
    actors,
    rated,
    category_id,
    director,
    name_cate,
  } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  useEffect(() => {
    Get_Film_Id(Film_Id).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
    });
  }, [Film_Id]);
  return (
    <div className="Detail_Frame">
      <div className="Content_Detail">
        <div className="Content_Left">
          <h1 className="Name_Film">{name}</h1>
          <div className="Info_Film">
            <p>{description}</p>
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
                if (localStorage.getItem("Access_Token")) {
                  Navigate(`/ticket?Film_id=${Film_Id}`);
                } else {
                  toast.error("Vui lòng đăng nhập");
                }
              }}
            >
              Đặt vé
            </button>
          </div>
          <div className="info_Film_Right">
            <div className="box_Info">
              <h4>Thể loại: </h4>
              <h5>{name_cate}</h5>
            </div>
            <div className="box_Info">
              <h4>Thời Lượng</h4>
              <h5>{time}</h5>
            </div>
            <div className="box_Info">
              <h4>Dạo diễn</h4>
              <h5>{director}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
