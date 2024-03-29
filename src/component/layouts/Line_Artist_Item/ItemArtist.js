import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../icons/Icon";

export default function ItemArtist({ item }) {
  return (
    <div className="ItemArt">
      <div className="ImgFarme">
        <img src={item.Avatar} alt="" srcSet="" />
      </div>
      <div className="Content_Artist">
        <h4>{item.Singer}</h4>
      </div>
      <div className="Icon_Artist">
        <ViewIcon />
        <span>View</span>
      </div>
    </div>
  );
}
