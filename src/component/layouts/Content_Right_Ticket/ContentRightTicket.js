import React, { useEffect, useState } from "react";
import img from "../../../assets/img/avatar.jpg";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { Get_Film_Id } from "../../../service/Film_Service";
import useAxios from "../../../Hook/useAxios";
import { Create_Ticket_Date } from "../../../service/Ticket_Service";
export default function ContentRightTicket({
  state_VaLue_Index,
  dispacth_Value_Index,
  Array_Data,
}) {
  const Navigate = useNavigate();
  const {
    Index_Day,
    Index_Room,
    Index_Time,
    Array_Seats,
    Quantity,
    Price,
    Total,
  } = state_VaLue_Index;
  const { Array_Day, Array_RoomV, Array_TimeV } = Array_Data;

  const [searchParams] = useSearchParams();
  const Film_Id = searchParams.get("Film_id");

  const [state, dispatch] = useAxios();
  const { name, poster, time } = state.data;
  const [URL_Result, Set_URL_Result] = useState("");
  useEffect(() => {
    Get_Film_Id(Film_Id).then((res) => {
      dispatch({ type: "SUCCESS", payload: { data: res.data } });
    });
  }, [Film_Id]);

  const Hanlde_Quantity = (status) => {
    if (Quantity < 10 && status === "up") {
      dispacth_Value_Index({
        type: "CHANGE",
        payload: { Quantity: Quantity + 1 },
      });
    }

    if (Quantity > 1 && status === "down") {
      dispacth_Value_Index({
        type: "CHANGE",
        payload: { Quantity: Quantity - 1 },
      });
    }
  };

  useEffect(() => {
    dispacth_Value_Index({
      type: "CHANGE",
      payload: { Total: Quantity * Price },
    });
  }, [Quantity]);

  const Submit_Pay_Ticket = () => {
    if (localStorage.getItem("Access_Token")) {
      if (Array_Seats.length === Quantity) {
        let Value = {
          Film_Id,
          Date: Array_Day[Index_Day],
          Room_Id: Array_RoomV[Index_Room],
          Time: Array_TimeV[Index_Time].time,
          Quantity,
          Seats: Array_Seats,
          Price,
        };
        Create_Ticket_Date(Value).then((res) => {
          if (res.status === 200) {
            toast.success(res.message);
            Navigate(`/Detail?Film_id=${Film_Id}`);
          }
        });
      } else {
        toast.error("Please choose more Seat");
      }
    } else {
      toast.error("vui lòng đăng nhập");
    }
  };

  return (
    <>
      <div className="Frame_Img_Ticket">
        <img src={img} alt="" />
      </div>
      <h1>{name}</h1>
      <div className="Content_Ticket">
        <h3>
          Số Lượng:
          <span className="Number_Btn">
            <span onClick={() => Hanlde_Quantity("down")}>-</span>
            <h3>{Quantity}</h3>
            <span onClick={() => Hanlde_Quantity("up")}>+</span>
          </span>
        </h3>
        <h3>Giá: {Price}</h3>

        <h3>Tổng: {Total}</h3>
      </div>
      <button className="btn_Pay_Ticket" onClick={Submit_Pay_Ticket}>
        Mua vé
      </button>
    </>
  );
}
