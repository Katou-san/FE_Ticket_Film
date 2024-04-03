import React, { useEffect, useReducer, useState } from "react";
import "./Page_Pay_Tickket.css";
import "./Form_Seat.css";
import { CloseIcon } from "../../component/icons/Icon";
import { Convert_DateToString, getDaysInMonth } from "../../Util/Get_Time";
import ContentDay from "../../component/layouts/Content_Day/ContentDay";
import ContentRoom from "../../component/layouts/Content_Room/ContentRoom";
import ContentTime from "../../component/layouts/Content_Time/ContentTime";
import { Reducer_Change } from "../../Hook/useReduce";
import ContentRightTicket from "../../component/layouts/Content_Right_Ticket/ContentRightTicket";
import ContainerMovie from "../../component/layouts/Movie_Seat/ContainerMovie";
import Note from "../../component/layouts/Movie_Seat/Note";
import {
  Get_Price_ShowTime,
  Get_Room_ShowTime,
  Get_Time_ShowTime,
} from "../../service/ShowTime_Service";
import { useSearchParams } from "react-router-dom";
import { Get_seats_Date } from "../../service/Ticket_Service";
import { wait } from "@testing-library/user-event/dist/utils";
export default function PagePayTicket() {
  const [state_VaLue_Index, dispacth_Value_Index] = useReducer(Reducer_Change, {
    Index_Day: 0,
    Index_Room: 0,
    Index_Time: 0,
    Array_Seats: [],
    Quantity: 1,
    Price: 0,
    Total: 0,
    status_Form_Seat: false,
  });

  const [Array_RoomV, Set_Array_RoomV] = useState([]);
  const [Array_TimeV, Set_Array_TimeV] = useState([]);
  const [Array_Occupied, Set_Array_Occupied] = useState([]);

  const { Index_Day, Index_Room, Index_Time, Array_Seats, status_Form_Seat } =
    state_VaLue_Index;
  const [searchParams] = useSearchParams();
  const Film_Id = searchParams.get("Film_id");
  const Array_Day = getDaysInMonth(
    new Date().getDate(),
    new Date().getMonth(),
    new Date().getFullYear()
  );

  useEffect(() => {
    Get_Room_ShowTime({
      Film_Id,
      Time: Convert_DateToString(Array_Day[Index_Day]),
    }).then((res) => {
      const Array_R = [...new Set(res.data.Array_Room)].sort();
      Set_Array_RoomV(Array_R);
    });
  }, [Index_Day, Film_Id, state_VaLue_Index]);

  useEffect(() => {
    Get_Time_ShowTime({
      Film_Id,
      Time: Convert_DateToString(Array_Day[Index_Day]),
      Room_Id: Array_RoomV[Index_Room],
    }).then((res) => {
      if (res.status === 200) {
        Set_Array_TimeV([...new Set(res.data.Array_Time)]);
      } else {
        Set_Array_TimeV([]);
      }
    });
  }, [state_VaLue_Index]);

  useEffect(() => {
    Get_seats_Date({
      Film_Id,
      Room_Id: Array_RoomV[Index_Room],
      Time: Array_TimeV[Index_Time]?.time,
    }).then((res) => {
      if (res.status === 200) {
        Set_Array_Occupied(res.data?.Seats);
      } else {
        Set_Array_Occupied([]);
      }
    });
  }, [state_VaLue_Index]);

  return (
    <div className="Frame_Pay_Ticket">
      <div className="Left_Content_Ticket">
        <div className="List_Day_Container">
          {Array_Day.map((day, i) => (
            <ContentDay
              Array_Day={Array_Day}
              key={i}
              Value={day}
              index={i}
              Current_Index={Index_Day}
              dispacth_Value_Index={dispacth_Value_Index}
            />
          ))}
        </div>

        {Array_RoomV.length === 0 && (
          <div className="no_data_Pay">Ngày này không có xuất chiếu</div>
        )}
        {Array_RoomV.length !== 0 && (
          <>
            <div className="Room_Frame">
              <h1>PHÒNG</h1>
              <div className="List_Room_Container">
                {Array_RoomV.map((room, i) => (
                  <ContentRoom
                    key={i}
                    Current_Index={Index_Room}
                    i={i}
                    dispacth_Value_Index={dispacth_Value_Index}
                    Value={room}
                  />
                ))}
              </div>
            </div>
            <div className="Time_Frame">
              <h1>THỜI GIAN</h1>
              <div className="List_Time_Container">
                {Array_TimeV.map((time, i) => (
                  <ContentTime
                    key={i}
                    Current_Index={Index_Time}
                    i={i}
                    time={time}
                    dispacth_Value_Index={dispacth_Value_Index}
                  />
                ))}
              </div>
            </div>
            <div className="Time_Frame Chair">
              <div className="Tittle_Chair">
                <h1>GHẾ</h1>
                <div
                  className="Choose_Chair"
                  onClick={() => {
                    dispacth_Value_Index({
                      type: "CHANGE",
                      payload: { status_Form_Seat: true },
                    });
                  }}
                >
                  Chọn ghế
                </div>
              </div>
              <div className="List_Time_Container">
                {Array_Seats.map((chair, i) => (
                  <div className={`Content_Time  Active_Day `} key={i}>
                    {chair}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>

      <div
        className={`Form_Choose_Seat ${!status_Form_Seat ? "hidden_Form" : ""}`}
      >
        <div className="Content_Seat">
          <Note />
          <ContainerMovie
            Array_Occupied={Array_Occupied}
            dispacth_Value_Index={dispacth_Value_Index}
            state_VaLue_Index={state_VaLue_Index}
            Array_TimeV={Array_TimeV}
          />
          <div
            className="Icon_Close"
            style={{ cursor: "pointer" }}
            onClick={() => {
              dispacth_Value_Index({
                type: "CHANGE",
                payload: { status_Form_Seat: false },
              });
            }}
          >
            <CloseIcon w={30} />
          </div>
        </div>
      </div>
      <div className="Right_Content_Ticket">
        <ContentRightTicket
          state_VaLue_Index={state_VaLue_Index}
          dispacth_Value_Index={dispacth_Value_Index}
          Array_Data={{ Array_Day, Array_RoomV, Array_TimeV }}
        />
      </div>
    </div>
  );
}
