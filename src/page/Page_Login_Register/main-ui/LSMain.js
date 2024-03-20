import React, { useEffect, useReducer, useState } from "react";
import Login from "../ui/Login";
import Register from "../ui/Register";
import { useSearchParams } from "react-router-dom";
import { Login_Reducer } from "../../../Hook/useReduce";
import Axios from "axios";

function LSForm() {
  const [ChangeForm, setChangeForm] = useState(false);
  const [valueError, setValueError] = useState({});
  const valueSend = {
    HandleChangeForm: () => {
      setChangeForm((prev) => !prev);
    },
    ChangeForm,
    GetValueError: (value) => {
      setValueError(value);
    },
  };
  //lay dữ liệu của code trên đường dẫn

  // http://localhost:3000/?code=aba6ed6e17210fa055ca ("code=" do github trả về )
  // const code_Github = searchParams.get("code");
  //console.log(code_Github)  (aba6ed6e17210fa055ca)

  useEffect(() => {}, []);

  return (
    <div className="farme">
      <div className="formContent ">
        <span className="iconf">
          <ion-icon className="iconClose" name="close-outline"></ion-icon>
        </span>
        <Login Value={valueSend} />
        <Register Value={valueSend} />
      </div>
    </div>
  );
}

export default LSForm;
