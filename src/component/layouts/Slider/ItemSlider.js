import React, { useEffect, useState } from "react";
import { PlayIcon } from "../../icons/Icon";
import useAxios from "../../../Hook/useAxios";
import { Get_Film_Id } from "../../../service/Film_Service";
import { Date_Handle } from "../../../Util";
import { useNavigate } from "react-router-dom";
export default function ItemSlider({ id, classHidden }) {
  const [state, dispatch] = useAxios();
  const { launch_date, name, poster, time, description } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    Get_Film_Id(id).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
    });
  }, [id]);
  let Date = Date_Handle(launch_date);
  return (
    <div className={`ItemSlider ${classHidden}`}>
      <img src={URL_Result} alt="" />
      <div className="contentISlider">
        <h1>{name} </h1>
        <h3>Time:{"    " + time}</h3>
        <h2>Date: {Date.day + "-" + Date.month + "-" + Date.year}</h2>

        <p>{description}</p>
      </div>
      <div className="buttonISlider">
        <div
          className="IconSlider"
          onClick={() => {
            Navigate(`/Detail?Film_id=${id}`);
          }}
        >
          Chi tiết
        </div>
      </div>
    </div>
  );
}
