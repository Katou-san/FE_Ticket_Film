import React, { useContext, useReducer } from "react";
import "./test.css";
import { Get_Playlist_User } from "../../Service/User_Service";
import { ReducerAxios } from "../../Hook/useReducer/Reduce_Func";
import useFooter from "../../Hook/Custom_Hook/useFooter";
import { contextLogin } from "../../Hook/useContext/contextLogin";
import { contextComponent } from "../../Hook/useContext/contextComponent";
export default function PageTest() {
  const [state, dispatch] = useContext(contextComponent);
  console.log(state);
  return (
    <div className="Main_Test">
      <button
        onClick={() => {
          dispatch({
            type: "CHANGE",
            payload: {
              Current_Index: 6,
              Current_Playlist: [1, 1, 12, 2],
            },
          });
        }}
      >
        Get value{" "}
      </button>
    </div>
  );
}
