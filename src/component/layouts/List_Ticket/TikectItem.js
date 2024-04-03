import React, { useEffect, useState } from "react";
import img from "../../../assets/img/avatar.jpg";
import { Date_Handle } from "../../../Util";
import { Get_Film_Id } from "../../../service/Film_Service";
export default function TikectItem({ ticket }) {
  const {
    Duration,
    Film_Name,
    Price,
    Showtime_Time,
    creation_time,
    finish_date,
    launch_date,
    poster,
    seat_index,
    tiket_Id,
  } = ticket;

  const Showtime_times = Date_Handle(Showtime_Time);
  const Current_time = Date_Handle(new Date());

  console.log("showtime >>>" + Showtime_Time);
  console.log(Current_time);
  const check_Date = () => {
    if (Showtime_times.year === Current_time.year) {
      if (Showtime_times.month >= Current_time.month) {
        if (Current_time.day < Showtime_times.day) {
          return true;
        } else if (Current_time.day === Showtime_times.day) {
          if (Current_time.hour < Showtime_times.hour) {
            return true;
          } else {
            return false;
          }
        } else {
          return false;
        }
      } else if (Showtime_times.month > Current_time.month) {
        return true;
      } else if (Showtime_times.month < Current_time.month) {
        return false;
      }
    } else {
      return true;
    }
  };

  return (
    <div className="Frame_Ticket">
      {!check_Date() && <div className="noite">Đã quá hạn</div>}

      <div
        className={`ticket ${
          Current_time.year !== Showtime_times.year ? "blur_Item" : ""
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
              <h5>Duration: {Duration + "p"}</h5>
              <h5>User: {""}</h5>
            </div>
            <div className="Right_Ticket">
              <h5>Director:huung</h5>
            </div>
          </div>
          <div className="info">
            <section>
              <div className="title">Day</div>
              {Showtime_times.day +
                "/" +
                Showtime_times.month +
                "/" +
                Showtime_times.year}
            </section>

            <section>
              <div className="title">Time</div>
              {Showtime_times.hour + "h" + Showtime_times.minute + "p"}
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
