import React, { useEffect, useState } from "react";
import img from "../../../assets/img/avatar.jpg";
import { Date_Handle } from "../../../Util";
import { Get_Film_Id } from "../../../service/Film_Service";
export default function TikectItem({ ticket }) {
  const {
    id,
    showtime_id,
    user_id,
    creation_time,
    seat_index,
    room_id,
    film_id,
    time,
    tiket_Id,
  } = ticket;
  const [Film_Name, Set_Film_Name] = useState("");
  const Time = Date_Handle(time);
  const Current_day = Date_Handle(new Date());

  useEffect(() => {
    Get_Film_Id(film_id).then((res) => {
      Set_Film_Name(res.data.name_Film);
    });
  }, [ticket]);

  return (
    <div className="Frame_Ticket">
      {Current_day.day > Time.day &&
        Current_day.month === Time.month &&
        Current_day.year === Time.year && (
          <div className="noite">Đã quá hạn</div>
        )}
      <div
        className={`ticket ${
          Current_day.day > Time.day &&
          Current_day.month === Time.month &&
          Current_day.year === Time.year
            ? "blur_Item"
            : ""
        }`}
      >
        <div
          className="stub"
          style={{ backgroundImage: `url("${img}")`, backgroundSize: "cover" }}
        >
          <div className="top"></div>
          <div className="number">{tiket_Id}</div>
          <div className="invite"></div>
        </div>
        <div className="check">
          <div className="big">{Film_Name} </div>
          <div className="Main_Content">
            <div className="Left_Ticket">
              <h5>Time: {Time.hour + "h" + Time.minute + "p"}</h5>
              <h5>User: {user_id}</h5>
            </div>
            <div className="Right_Ticket">
              <h5>Director:huung</h5>
            </div>
          </div>
          <div className="info">
            <section>
              <div className="title">Day</div>
              {Time.day + "/" + Time.month + "/" + Time.year}
            </section>

            <section>
              <div className="title">Time</div>
              {Time.hour + "h" + Time.minute + "p"}
            </section>
            <section>
              <div className="title">Seat</div>
              {String(seat_index).toUpperCase()}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
