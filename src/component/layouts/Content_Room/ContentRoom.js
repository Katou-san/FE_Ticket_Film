import React from "react";

export default function ContentRoom({
  Current_Index,
  i,
  dispacth_Value_Index,
  Value,
}) {
  return (
    <div
      className={`Content_Room ${Current_Index === i ? "Active_Day" : ""}`}
      key={i}
      onClick={() => {
        dispacth_Value_Index({ type: "CHANGE", payload: { Index_Room: i } });
      }}
    >
      {Value}
    </div>
  );
}
