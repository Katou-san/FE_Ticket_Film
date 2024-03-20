const Reducer_Change = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "CHANGE":
      return { ...state, ...payload };
    default:
      break;
  }
};

export { Reducer_Change };
