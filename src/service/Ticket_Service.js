import axios from "axios";
import {
  BE_URL,
  Get_Seats_Ticket,
  Create_Ticket,
  Get_Film_Ticket,
} from "../Util";
const Get_seats_Date = async (value) => {
  const res = await axios.post(`${BE_URL}${Get_Seats_Ticket}`, value);
  return res.data;
};

const Create_Ticket_Date = async (value) => {
  const res = await axios.post(`${BE_URL}${Create_Ticket}`, value, {
    headers: { "x-access-token": localStorage.getItem("Access_Token") },
  });
  return res.data;
};

const Get_Ticket = async () => {
  const res = await axios.get(`${BE_URL}${Get_Film_Ticket}`, {
    headers: { "x-access-token": localStorage.getItem("Access_Token") },
  });
  return res.data;
};

export { Get_seats_Date, Create_Ticket_Date, Get_Ticket };
