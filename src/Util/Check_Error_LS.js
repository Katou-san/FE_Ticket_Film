const HandleErrors = {
  isEmail: (value) => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value);
  },
  CheckLenght: (value, number) => {
    return value.trim().length < number;
  },
  isNotEqual: (value1, value2) => {
    return value1 !== value2;
  },
};

const Register_Error = (value) => {
  const Error = {};

  if (HandleErrors.CheckLenght(value.Email, 9)) {
    Error["Email"] = "Please enter your email address";
  } else if (!HandleErrors.isEmail(value.Email)) {
    Error["Email"] = "This not a valid email address";
  }
  if (HandleErrors.CheckLenght(value.Pass, 4)) {
    Error["Pass"] = "Please enter all 6 characters";
  } else if (HandleErrors.CheckLenght(value.Confirm_Pass, 4)) {
    Error["Con_Pass"] = "Please enter your Confirm Pass";
  } else if (HandleErrors.isNotEqual(value.Pass, value.Confirm_Pass)) {
    Error["Con_Pass"] = "Confirm Pass not macth";
  }

  if (HandleErrors.CheckLenght(value.Phone, 10)) {
    Error["Phone"] = "Please enter all 8 characters";
  }

  if (HandleErrors.CheckLenght(value.Address, 2)) {
    Error["Address"] = "Please enter characters";
  }

  const is_Error = Object.keys(Error).length > 0;
  return { is_Error, Detail_Error: Error };
};

const Login_Error = (value) => {
  const Error = {};
  if (HandleErrors.CheckLenght(value.Email)) {
    Error["Email"] = "Please enter your email address";
  } else if (!HandleErrors.isEmail(value.Email)) {
    Error["Email"] = "This not a valid email address";
  }
  if (HandleErrors.CheckLenght(value.Pass)) {
    Error["Pass"] = "Please enter all 6 characters";
  }
  const is_Error = Object.keys(Error).length > 0;
  return { is_Error, Detail_Error: Error };
};

export { Register_Error, Login_Error };
