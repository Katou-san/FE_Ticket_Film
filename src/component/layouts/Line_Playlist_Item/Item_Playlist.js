import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PlayIcon } from "../../icons/Icon";
import useAxios from "../../../Hook/useAxios";
import { Get_Film_Id } from "../../../service/Film_Service";
import { Date_Handle } from "../../../Util";

export default function ItemLinePlaylist({ item, list_Item }) {
  const [state, dispatch] = useAxios();
  const { launch_date, name, poster, time } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  useEffect(() => {
    Get_Film_Id(item).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
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
      <div className="Farme_Img_Item">
        <img src={URL_Result} alt="" srcSet="" />
      </div>
      <div className="Conten_ItemE">
        <h3>{name}</h3>
        <h5>Thời lượng: {time}</h5>
        <h5>
          Khởi chiếu: {Date.day + "-" + (Date.month + 1) + "-" + Date.year}
        </h5>
      </div>

      <div className="Icon_ItemE">
        <PlayIcon w={30} />
      </div>
    </div>
  );
}
