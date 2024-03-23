import axios from "axios";
import { BE_URL, Get_ST_Room, Get_ST_Time } from "../Util";

const Get_Room_ShowTime = async (data) => {
  const res = await axios.post(`${BE_URL}${Get_ST_Room}`, data);
  return res.data;
};

const Get_Time_ShowTime = async (data) => {
  const res = await axios.post(`${BE_URL}${Get_ST_Time}`, data);
  return res.data;
};

export { Get_Room_ShowTime, Get_Time_ShowTime };
