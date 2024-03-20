import React, { useContext, useRef } from "react";

import { LogoutIcon } from "../../icons/Icon";
import { contextLogin } from "../../../Hook/Context/Context_Login";
export default function MenuHeader({ showMenu, event }) {
  const { dispatch_Login } = useContext(contextLogin);

  const menuElement = useRef();

  return (
    <div className="optionNav" id={showMenu ? "ShowMenu" : ""}>
      <ul ref={menuElement} className="ulForm">
        <li
          onClick={() => {
            event();

            localStorage.removeItem("Access_Token");
            dispatch_Login({
              type: "CHANGE",
              payload: { Access_Token: "", Name: "", is_Login: false },
            });
          }}
        >
          <LogoutIcon />
          <span>Logout</span>
        </li>
      </ul>
    </div>
  );
}
