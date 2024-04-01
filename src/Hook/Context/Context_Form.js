import React, { createContext, useEffect, useReducer } from "react";
import { verify_JWT, Get_Playlist_User, Auth_S } from "../../service";
import { Reducer_Change } from "../useReduce";

const contextForm = createContext();

function ContextFormProvider({ children }) {
  const [state_Form, dispatch_Form] = useReducer(Reducer_Change, {
    Ticket_Form_Hidden: true,
  });

  return (
    <contextForm.Provider
      value={{
        state_Form,
        dispatch_Form,
      }}
    >
      {children}
    </contextForm.Provider>
  );
}

export { ContextFormProvider, contextForm };
