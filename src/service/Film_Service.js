import axios from "axios";
import { BE_URL, Recommed, Get_Film } from "../Util";

const Get_Film_Id = async (id) => {
  const res = await axios.get(`${BE_URL}${Get_Film}/${id}`);
  return res.data;
};

const Get_Film_RC = async (id) => {
  const res = await axios.get(`${BE_URL}${Recommed}`);
  return res.data;
};

export { Get_Film_Id, Get_Film_RC };
