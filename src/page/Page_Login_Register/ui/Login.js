import { useContext, useState } from "react";
import "../css/Login.css";
import { Login_Error } from "../../../Util";
import { Login_S } from "../../../service";
import { useAxios } from "../../../Hook";
import { useNavigate } from "react-router-dom";
import { contextLogin } from "../../../Hook/Context/Context_Login";
import { toast } from "react-toastify";
const Client_Id = "330b6c67acca4d537d39";
// Client_Id lay trong github nha
function Login({ Value }) {
  const [state, dispatch] = useAxios();
  const Navigate = useNavigate();
  const { state_Login, dispatch_Login } = useContext(contextLogin);
  const [ValueError, setValueError] = useState({});
  const [FormLogin, setFormLogin] = useState({
    Email: "",
    Pass: "",
  });

  const Change_Value_Login = (value) => {
    setFormLogin({ ...FormLogin, ...value });
  };

  const LoginSubmitForm = (e) => {
    e.preventDefault();
    setValueError(Login_Error(FormLogin).Detail_Error);
    if (!Login_Error(FormLogin).is_Error) {
      dispatch({ type: "REQUEST" });
      Login_S(FormLogin)
        .then((res) => {
          if (res.status === 200) {
            localStorage.setItem("Access_Token", res.data.Access_Token);
            dispatch_Login({
              type: "CHANGE",
              payload: { ...res.data, is_Login: true },
            });
            toast.success("Login Complete");
            Navigate("/");
          } else {
            toast.error("Login Fail");
          }
          dispatch({ type: "SUCCESS" });
        })
        .catch((err) => {
          dispatch({ type: "ERROR", payload: { Error: err } });
        });
    }
  };

  return (
    <div className={`FromLS LoginForm ${Value.ChangeForm ? "active" : ""}`}>
      <form onSubmit={LoginSubmitForm}>
        <h1>Login</h1>
        <div className="inputText">
          <label htmlFor="Email"> Email</label>
          <input
            type="text"
            required
            value={FormLogin.Email}
            onChange={(e) => Change_Value_Login({ Email: e.target.value })}
          />
          <div className="toastInput"></div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Password</label>
          <input
            type="password"
            required
            value={FormLogin.Pass}
            onChange={(e) => Change_Value_Login({ Pass: e.target.value })}
          />

          <div className="toastInput"></div>
        </div>
        <div className="selection">
          <div className="remeber">
            <input type="checkbox" name="" />
            <p>Remember</p>
          </div>
          <p>Forgot Password</p>
        </div>
        <button className="Loginbtn" type="submit">
          Login
        </button>
      </form>
      <div className="otherOptions">
        <div className="titleOther">Or</div>
        <button className="optionLogin ">Github</button>
        <button className="optionLogin ">Twitter</button>
      </div>
      <div className="btnLink mt-20U ">
        <p>
          Don't have an account
          <span
            style={{ color: "#fff", cursor: "pointer" }}
            onClick={Value.HandleChangeForm}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
