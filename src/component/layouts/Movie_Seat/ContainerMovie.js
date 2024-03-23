import React from "react";
import "./Movie_Seat.css";
import { Seat_Handle, Seat_Number } from "../../../config/Seat_Movie";
export default function ContainerMovie({
  Occupied,
  dispacth_Value_Index,
  state_VaLue_Index,
}) {
  const { Array_Seats, Quantity } = state_VaLue_Index;
  const Array_Seat_Setup = Seat_Number(6, 8);

  return (
    <div className="container">
      <div className="screen"></div>
      {Array_Seat_Setup.map((row, i) => {
        return (
          <div className="row" key={i}>
            {row.map((col, i) => {
              return (
                <div
                  className={`seat ${Occupied === col && " occupied "} 
                  
                  ${Array_Seats.map((value) => value === col && " selected ")}`}
                  key={i}
                  onClick={() => {
                    dispacth_Value_Index({
                      type: "CHANGE",
                      payload: {
                        Array_Seats: [
                          ...Seat_Handle([...Array_Seats, col], Quantity),
                        ],
                      },
                    });
                  }}
                >
                  {row[col]}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
