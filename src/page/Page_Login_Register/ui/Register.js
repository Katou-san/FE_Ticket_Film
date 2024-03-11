import React, { useContext, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { Get_Playlist_User, SigupService } from "../../../Service/User_Service";
// import { User_Init } from "../../../Modules/Init_Provider";
// import { Check_Error_Register } from "../../../Modules/Handle_Login";
// import { LoadingSVGWatting } from "../../../Component/Logo_Icon/Loading";
// import { contextLogin } from "../../../Hook/index_Context";
// import useAxios from "../../../Hook/Custom_Hook/useAxios_Get";

function Register({ Value }) {
  // const { dispatch_Login, dispatch_Playlist_user } = useContext(contextLogin);

  // const [state, dispatch] = useAxios();
  // const { Is_Loading } = state;
  // const Navigate = useNavigate();
  const [FormValue, setFormValue] = useState({
    User_Id: "",
    User_Email: "",
    User_Name: "",
    User_Pass: "",
    User_Confirm_Pass: "",
  });
  const [ValueError, setValueError] = useState({});

  const Set_Change_Value = (value) => {
    setFormValue({ ...FormValue, ...value });
  };

  const SubmitRegister = (e) => {
    e.preventDefault();
    console.log(FormValue);
  };

  return (
    <div className="FromLS RegisterForm">
      <form onSubmit={SubmitRegister}>
        <h1>Sign Up</h1>
        <div className="inputText">
          <label htmlFor="SEmail"> Email</label>
          <input
            type="text"
            required
            value={FormValue.User_Email}
            onChange={(e) => Set_Change_Value({ User_Email: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SPass">Password</label>
          <input
            type="password"
            required
            value={FormValue.User_Pass}
            onChange={(e) => Set_Change_Value({ User_Pass: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SRPass">Confirm Pass</label>
          <input
            type="password"
            required
            value={FormValue.User_Confirm_Pass}
            onChange={(e) =>
              Set_Change_Value({ User_Confirm_Pass: e.target.value })
            }
          />

          <div className="toastInput"></div>
        </div>
        <button
          className="mt-30U Loginbtn"
          id={true ? "Registerbtn" : "normal2"}
          type="submit"
        >
          Register
        </button>
        <div className="btnLink mt-20U">
          <p>
            I have an account
            <span
              style={{ color: "#fff", cursor: "pointer" }}
              onClick={Value.HandleChangeForm}
            >
              Login
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Register;
