import React, { useEffect, useState } from "react";
import "./Page_Result.css";
import LinePlaylistItem from "../../component/layouts/Line_Playlist_Item/Line_Playlist_Item";
import useAxios from "../../Hook/useAxios";
import { useSearchParams } from "react-router-dom";
import { Search_Film } from "../../service/Film_Service";
export default function PageResult() {
  const [Array_Result, Set_Array_Result] = useState([]);
  const [searchParams] = useSearchParams();
  const search_Value = searchParams.get("value");
  const [state, dispatch] = useAxios();
  const { is_Loading } = state;

  useEffect(() => {
    Search_Film(search_Value).then((res) => Set_Array_Result(res.data));
  }, [search_Value]);
  return (
    <div className="Page_Result">
      <div className="Content_Page">
        <LinePlaylistItem
          title={"Kết quả tìm kiếm"}
          list_Id={Array_Result}
          is_Loading={is_Loading}
        />
      </div>
    </div>
  );
}
