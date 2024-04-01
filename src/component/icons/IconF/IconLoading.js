import React from "react";
import { LoadingIcon } from "../Icon";
import "./Icon.css";
export default function IconLoading({ w, color }) {
  return (
    <div className="IconFrame">
      <LoadingIcon w={w} color={color || "White"} />
    </div>
  );
}
