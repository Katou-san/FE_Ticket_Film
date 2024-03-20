import React, { createContext, useEffect, useReducer } from "react";
import { verify_JWT, Get_Playlist_User, Auth_S } from "../../service";
import { Reducer_Change } from "../useReduce";

const contextLogin = createContext();

function ContextLoginProvider({ children }) {
  const [state_Login, dispatch_Login] = useReducer(Reducer_Change, {
    Access_Token: "",
    Name: "",
    is_Login: false,
  });

  console.log(state_Login);

  useEffect(() => {
    if (localStorage.getItem("Access_Token")) {
      Auth_S(localStorage.getItem("Access_Token"))
        .then((res) => {
          if (res.status === 200) {
            dispatch_Login({
              type: "CHANGE",
              payload: { ...res.data, is_Login: true },
            });
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <contextLogin.Provider
      value={{
        state_Login,
        dispatch_Login,
      }}
    >
      {children}
    </contextLogin.Provider>
  );
}

export { ContextLoginProvider, contextLogin };
