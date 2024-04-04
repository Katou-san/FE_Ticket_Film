import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CircleNotchIcon, LoadingIcon } from "../../icons/Icon";
import useAxios from "../../../Hook/useAxios";
import { Get_Film_Id, Get_Img_Film } from "../../../service/Film_Service";
import { Date_Handle } from "../../../Util";
import img from "../../../assets/img/film.jpeg";
export default function ItemLinePlaylist({ item, list_Item }) {
  const [state, dispatch] = useAxios();
  const { is_Loading } = state;
  const { launch_date, name_Film, poster, rated, name_cate, time } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  useEffect(() => {
    Get_Film_Id(item).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
      Get_Img_Film(res.data.poster).then((response) => {
        if (response.status === 200) {
          Set_URL_Result(URL.createObjectURL(response.data));
        } else {
          Set_URL_Result("");
        }
      });
    });
  }, [item]);

  let Date = Date_Handle(launch_date);
  const navigate = useNavigate();

  return (
    <div
      className="itemE"
      onClick={() => {
        navigate(`/Detail?Film_id=${item}`);
      }}
    >
      {!is_Loading && (
        <>
          <div className="Farme_Img_Item">
            <img src={URL_Result || img} alt="" srcSet="" />
          </div>
          <div className="Conten_ItemE">
            <h3>{name_Film}</h3>
            <h5>Thời lượng: {time}</h5>
            <h5>Khởi chiếu: {Date.day + "-" + Date.month + "-" + Date.year}</h5>
            <h5>Thể loại: {name_cate} </h5>
            <h5>Giới hạn: {rated}</h5>
          </div>

          <div className="Icon_ItemE">
            <CircleNotchIcon />
          </div>
        </>
      )}

      {is_Loading && <LoadingIcon color={"#000"} />}
    </div>
  );
}
