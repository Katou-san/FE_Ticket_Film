import React, { useContext, useEffect, useState } from "react";
import { UserIcon } from "../../icons/Icon";
import { Link } from "react-router-dom";
import "./AvaterHeader.css";
import MenuHeader from "../MenuHeader/MenuHeader";
import { contextLogin } from "../../../Hook/Context/Context_Login";

export default function AvartarHeader() {
  const { state_Login } = useContext(contextLogin);
  const { is_Login, Name } = state_Login;

  const [StatusMenu, Set_StatusMenu] = useState(false);

  const TogoMenu = () => {
    return Set_StatusMenu((prev) => !prev);
  };
  return (
    <div className="FrameBtnLogin">
      <Link to="/Login">
        <div className="LoginButton" id={is_Login ? "Hidden" : ""}>
          <UserIcon />
          <span>Login</span>
        </div>
      </Link>
      <div
        className="LoginButton FormUserName"
        id={!is_Login ? "Hidden" : ""}
        onClick={TogoMenu}
      >
        <img src={is_Login ? "" : ""} alt="" />
        <span>{Name}</span>
      </div>
      <MenuHeader showMenu={StatusMenu} event={TogoMenu} />
    </div>
  );
}
