import React, { useEffect, useState } from "react";
import { ViewIcon } from "../../icons/Icon";

export default function ItemArtist({ item }) {
  // const [state, dispatch] = useAxios();
  // const { is_Loading } = state;
  // const [URL_Result, Set_URL_Result] = useState("");
  // useEffect(() => {
  //   Get_User_Avatar(item.Avatar).then((res) =>
  //     Set_URL_Result(URL.createObjectURL(res))
  //   );
  // }, [item]);

  return (
    <div className="ItemArt">
      <div className="ImgFarme">
        <img src={item.Avatar} alt="" srcSet="" />
      </div>
      <div className="Content_Artist">
        <h4>{item.Name}</h4>
      </div>
      <div className="Icon_Artist">
        <ViewIcon />
        <span>View</span>
      </div>
    </div>
  );
}
