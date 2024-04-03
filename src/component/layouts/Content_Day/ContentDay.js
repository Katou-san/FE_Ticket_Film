import React, { useEffect } from "react";
import { Date_Handle } from "../../../Util";

export default function ContentDay({
  index,
  Value,
  Current_Index,
  dispacth_Value_Index,
  Array_Day = [],
}) {
  const Current = Date_Handle(new Date());

  return (
    <div
      className={`Content_Day ${
        Value.Date < Current.day
          ? "Out"
          : Current_Index === index
          ? "Active_Day"
          : ""
      }`}
      onClick={() => {
        if (Value.Date < Current.day) {
          dispacth_Value_Index({ type: "CHANGE", payload: {} });
        } else {
          dispacth_Value_Index({
            type: "CHANGE",
            payload: { Index_Day: index },
          });
        }
      }}
    >
      <div className="Month_WDay">
        <div>{Value.Week_Month}</div>
        <div>{Value.Week_Day}</div>
      </div>
      <div className="Day">{Value.Day}</div>
    </div>
  );
}
