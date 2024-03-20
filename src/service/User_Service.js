import axios from "axios";
import { BE_URL, Login, Signup, Auth } from "../Util";

const Login_S = async (value) => {
  const res = await axios.post(`${BE_URL}${Login}`, value);
  return res.data;
};

const Sigup_S = async (value) => {
  const res = await axios.post(`${BE_URL}${Signup}`, value);
  return res.data;
};

const Auth_S = async (value) => {
  const res = await axios.get(`${BE_URL}${Auth}`, {
    headers: {
      "x-access-token": value,
    },
  });
  return res.data;
};

// const Update_User = async (data, Token) => {
//   const res = await axios.put(`${BACKEND_URL}${type}${UPDATE_uSER}`, data, {
//     headers: {
//       "x-access-token": Token,
//     },
//   });
//   return res.data;
// };

// const Get_Playlist_User = async (data, Token) => {
//   const res = await axios.post(
//     `${BACKEND_URL}${type}${GET_PLAYLIST_USER}`,
//     { User_Id: data },
//     {
//       headers: {
//         "x-access-token": Token,
//       },
//     }
//   );
//   return res.data;
// };

export { Login_S, Sigup_S, Auth_S };
//   SigupService,
//   verify_JWT,
//   Get_Playlist_User,
//   Update_User,
