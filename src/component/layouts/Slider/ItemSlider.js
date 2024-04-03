import React, { useEffect, useState } from "react";
import img from "../../../assets/img/film.jpeg";
import useAxios from "../../../Hook/useAxios";
import { Get_Film_Id, Get_Img_Film } from "../../../service/Film_Service";
import { Date_Handle } from "../../../Util";
import { useNavigate } from "react-router-dom";
export default function ItemSlider({ id, classHidden }) {
  const [state, dispatch] = useAxios();
  const { launch_date, name_Film, time, description } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  const Navigate = useNavigate();
  useEffect(() => {
    Get_Film_Id(id).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
      Get_Img_Film(res.data.poster).then((response) => {
        if (response.status === 200) {
          Set_URL_Result(URL.createObjectURL(response.data));
        } else {
          Set_URL_Result("");
        }
      });
    });
  }, [id]);
  let Date = Date_Handle(launch_date);
  return (
    <div
      className={`ItemSlider ${classHidden}`}
      style={{
        backgroundImage: `url("${URL_Result}")`,
      }}
    >
      <img src={URL_Result} alt="" />
      <div className="contentISlider">
        <h1>{name_Film} </h1>
        <h3>Thời lượng: {time}p</h3>
        <h2>Khởi chiếu: {Date.day + "-" + Date.month + "-" + Date.year}</h2>

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
