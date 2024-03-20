import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../../icons/Icon";
// import {
//   Get_Playlist_Img,
//   Get_Thumbnail,
// } from "../../../Service/Get_File_Service";

export default function ItemLinePlaylist({ item, list_Item }) {
  // const [state, dispatch] = useAxios();
  // const { is_Loading } = state;
  // const [URL_Result, Set_URL_Result] = useState("");
  // useEffect(() => {
  //   Get_Playlist_Img(item.Image).then((res) =>
  //     Set_URL_Result(URL.createObjectURL(res))
  //   );
  // }, [item]);

  const navigate = useNavigate();

  return (
    <div
      className="itemE"
      onClick={() => {
        navigate(`/Detail?Film_id=${item.Id}`);
      }}
    >
      <div className="Farme_Img_Item">
        <img src={item.Avatar} alt="" srcSet="" />
      </div>
      <div className="Conten_ItemE">
        <h3>{item.Name}</h3>
        <h4>{item.Singer}</h4>
      </div>

      <div className="Icon_ItemE">
        <PlayIcon w={30} />
      </div>
    </div>
  );
}
