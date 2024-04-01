import React, { useContext, useRef } from "react";

import { LogoutIcon, BellIcon } from "../../icons/Icon";
import { contextLogin } from "../../../Hook/Context/Context_Login";
import { contextForm } from "../../../Hook/Context/Context_Form";
export default function MenuHeader({ showMenu, event }) {
  const { dispatch_Login } = useContext(contextLogin);
  const { dispatch_Form } = useContext(contextForm);
  const menuElement = useRef();

  return (
    <div className="optionNav" id={showMenu ? "ShowMenu" : ""}>
      <ul ref={menuElement} className="ulForm">
        <li
          onClick={() => {
            event();
            dispatch_Form({
              type: "CHANGE",
              payload: { Ticket_Form_Hidden: false },
            });
          }}
        >
          <BellIcon />
          <span>Vé đã mua</span>
        </li>
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
