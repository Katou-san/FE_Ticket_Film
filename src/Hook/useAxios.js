import { useEffect, useReducer } from "react";

function reducerAxios(state, action) {
  switch (action.type) {
    case "REQUEST":
      return { ...state, is_Loading: true };
    case "SUCCESS":
      return { ...state, is_Loading: false, ...action.payload };
    case "ERROR":
      return { ...state, is_Loading: false, ...action.payload };
    default:
      break;
  }
}

export default function useAxios() {
  const [state, dispatch] = useReducer(reducerAxios, {
    data: {},
    is_Loading: false,
    error: null,
  });

  return [state, dispatch];
}

export { reducerAxios, useAxios };
