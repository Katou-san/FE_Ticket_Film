import axios from "axios";
import { BE_URL, Recommed, Get_Film, Search, Get_Img } from "../Util";

const Get_Film_Id = async (id) => {
  const res = await axios.get(`${BE_URL}${Get_Film}/${id}`);
  return res.data;
};

const Get_Film_RC = async () => {
  const res = await axios.get(`${BE_URL}${Recommed}`);
  return res.data;
};

const Search_Film = async (value) => {
  const res = await axios.get(`${BE_URL}${Search}/${value}`);
  return res.data;
};

const Get_Img_Film = async (id) => {
  const res = await axios.get(`${BE_URL}${Get_Img}/${id}`, {
    responseType: "blob",
  });
  return res;
};

export { Get_Film_Id, Get_Film_RC, Search_Film, Get_Img_Film };
