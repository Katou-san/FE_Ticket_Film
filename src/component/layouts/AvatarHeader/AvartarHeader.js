import React, { useContext, useEffect, useState } from "react";
import { UserIcon } from "../../icons/Icon";
import { Link } from "react-router-dom";
import "./AvaterHeader.css";
// import { Get_User_Avatar } from "../../../Service/Get_File_Service";
// import { contextLogin } from "../../../Hook/index_Context";

export default function AvartarHeader() {
  // const { state_Login } = useContext(contextLogin);
  // const { is_Login } = state_Login;
  // const { Avatar, User_Name } = state_Login.Data_User;
  // const [Avatar_url, Set_Avatar_url] = useState(null);
  // const [StatusMenu, Set_StatusMenu] = useState(false);
  const is_Login = true;
  // useEffect(() => {
  //   if (is_Login) {
  //     Get_User_Avatar(Avatar)
  //       .then((res) => {
  //         Set_Avatar_url(URL.createObjectURL(res));
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // }, [state_Login]);

  // const TogoMenu = () => {
  //   return Set_StatusMenu((prev) => !prev);
  // };
  return (
    <div className="FrameBtnLogin">
      <Link to="/Login&Register">
        <div className="LoginButton" id={is_Login ? "Hidden" : ""}>
          <UserIcon />
          <span>Login</span>
        </div>
      </Link>
      <div
        className="LoginButton FormUserName"
        id={!is_Login ? "Hidden" : ""}
        // onClick={TogoMenu}
      >
        <img src={is_Login ? "" : ""} alt="" />
        <span>teest</span>
      </div>
    </div>
  );
}
