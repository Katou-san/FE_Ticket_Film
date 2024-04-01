import React, { useContext, useState } from "react";
import { Register_Error } from "../../../Util";
import { Sigup_S } from "../../../service";
import { useAxios } from "../../../Hook";
import { useNavigate } from "react-router-dom";
import { contextLogin } from "../../../Hook/Context/Context_Login";
import { toast } from "react-toastify";

function Register({ Value }) {
  const { state_Login, dispatch_Login } = useContext(contextLogin);
  const Navigate = useNavigate();
  const [state, dispatch] = useAxios();

  const [FormValue, setFormValue] = useState({
    Email: "",
    Pass: "",
    Confirm_Pass: "",
    Phone: "",
    Address: "",
  });
  const [ValueError, setValueError] = useState({});

  const Set_Change_Value = (value) => {
    setFormValue({ ...FormValue, ...value });
  };

  const SubmitRegister = (e) => {
    e.preventDefault();
    setValueError(Register_Error(FormValue).Detail_Error);
    if (!Register_Error(FormValue).is_Error) {
      dispatch({ type: "REQUEST" });
      Sigup_S(FormValue)
        .then((res) => {
          if (res.status === 200) {
            dispatch({ type: "SUCCESS" });
            localStorage.setItem("Access_Token", res.data.Access_Token);
            dispatch_Login({
              type: "CHANGE",
              payload: { ...res.data, is_Login: true },
            });
            toast.success("SignUp Complete");
            Navigate("/");
          } else {
            console.log(res.message);
            toast.error(res.message);
          }
        })
        .catch((err) => {
          dispatch({ type: "ERROR", payload: { error: err.messeage } });
        });
    } else {
      const Error_Value = Register_Error(FormValue).Detail_Error;
      let Arraykey = Object.keys(Error_Value);
      Arraykey.map((key) => toast.error(Error_Value[key]));
    }
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
            value={FormValue.Email}
            onChange={(e) => Set_Change_Value({ Email: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SPass">Password</label>
          <input
            type="password"
            required
            value={FormValue.Pass}
            onChange={(e) => Set_Change_Value({ Pass: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>

        <div className="inputText">
          <label htmlFor="SRPass">Confirm Pass</label>
          <input
            type="password"
            required
            value={FormValue.Confirm_Pass}
            onChange={(e) => Set_Change_Value({ Confirm_Pass: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>
        <div className="inputText">
          <label htmlFor="SRPass">Phone</label>
          <input
            type="password"
            required
            value={FormValue.Phone}
            onChange={(e) => Set_Change_Value({ Phone: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>
        <div className="inputText">
          <label htmlFor="SRPass">Address</label>
          <input
            type="password"
            required
            value={FormValue.Address}
            onChange={(e) => Set_Change_Value({ Address: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>
        <button
          className="mt-30U Loginbtn"
          id={true ? "" : "normal2"}
          // id={true ? "Registerbtn" : "normal2"}
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
