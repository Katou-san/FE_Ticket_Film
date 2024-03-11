const Login_Reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE":
      return { ...state, Is_Loading: false, ...payload };
    default:
      break;
  }
};

export { Login_Reducer };
