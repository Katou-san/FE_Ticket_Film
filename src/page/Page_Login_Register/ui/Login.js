import { useState } from "react";
import "../css/Login.css";
const Client_Id = "330b6c67acca4d537d39";
// Client_Id lay trong github nha
function Login({ dispacth_Value, Value }) {
  // const [state, dispatch] = useAxios();
  // const { Is_Loading } = state;
  const [ValueError, setValueError] = useState({});
  const [FormLogin, setFormLogin] = useState({
    User_Id: "",
    User_Email: "",
    User_Name: "",
    User_Pass: "",
    User_Confirm_Pass: "",
  });

  const Change_Value_Login = (value) => {
    setFormLogin({ ...FormLogin, ...value });
  };

  const Login_With_Github = () => {
    window.location.assign(
      "https://github.com/login/oauth/authorize?client_id=" + Client_Id

      // Sau khi xac nhan github tra ve duong dan "localhost:3000/code="ddaddwrfrf"
      //                                                          code này do github trả về
    );
  };

  const LoginSubmitForm = (e) => {
    e.preventDefault();
    console.log("Suubmit form submission");
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
            value={FormLogin.User_Email}
            onChange={(e) => Change_Value_Login({ User_Email: e.target.value })}
          />
          <div className="toastInput"></div>
        </div>
        <div className="inputText">
          <label htmlFor="Pass">Password</label>
          <input
            type="password"
            required
            value={FormLogin.User_Pass}
            onChange={(e) => Change_Value_Login({ User_Pass: e.target.value })}
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
        <button className="optionLogin" onClick={Login_With_Github}>
          Github
        </button>
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
