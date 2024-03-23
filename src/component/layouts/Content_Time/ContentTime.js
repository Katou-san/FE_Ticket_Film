import React from "react";
import { Date_Handle } from "../../../Util";

export default function ContentTime({
  Current_Index,
  i,
  time,
  dispacth_Value_Index,
}) {
  const Time = Date_Handle(time.time);
  return (
    <div
      className={`Content_Time ${Current_Index === i ? "Active_Day" : ""}`}
      key={i}
      onClick={() => {
        dispacth_Value_Index({ type: "CHANGE", payload: { Index_Time: i } });
      }}
    >
      {Time.hour + ":" + Time.minute}
    </div>
  );
}
