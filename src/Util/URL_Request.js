const BE_URL = "https://be-ticket-film.onrender.com/api";
// "http://localhost:8080/api";
// "https://be-ticket-film.onrender.com/api"
const Login = "/user/login";
const Signup = "/user/signup";
const Auth = "/user/auth";
//film
const Get_Film = "/film/get";
const Recommed = "/film/get-recommend";
const Search = "/film/search";
const Get_Img = "/send/film-img";
//Show time
const Get_ST_Room = "/show-time/get-Room";
const Get_ST_Time = "/show-time/get-Time";
const Get_ST_Price = "/show-time/get-Price";
// Ticket
const Get_Seats_Ticket = "/ticket/get-seats";
const Create_Ticket = "/ticket/create";
const Get_Film_Ticket = "/ticket/get";

export {
  BE_URL,
  Login,
  Signup,
  Auth,
  Recommed,
  Get_Film,
  Get_ST_Room,
  Get_ST_Time,
  Get_Seats_Ticket,
  Create_Ticket,
  Get_Film_Ticket,
  Get_ST_Price,
  Search,
  Get_Img,
};
