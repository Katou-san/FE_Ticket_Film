import React from "react";
import "./Page_Deatil.css";
import img from "../../assets/img/avatar.jpg";
export default function PageDetail() {
  return (
    <div className="Detail_Frame">
      <div className="Content_Detail">
        <div className="Content_Left">
          <img src={img} alt="" />
        </div>
        <div className="Content_Right">hello</div>
      </div>
    </div>
  );
}
