import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { ContextLoginProvider } from "./Hook/Context/Context_Login";
import { ContextFormProvider } from "./Hook/Context/Context_Form";
import reportWebVitals from "./reportWebVitals";
import { PageLogin, PageDetail, PageNowShowing, PagePayTicket } from "./page";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ContextLoginProvider>
    <ContextFormProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<PageLogin />}></Route>
          <Route path="/" element={<App />}>
            <Route path="/" element={<PageNowShowing />}></Route>
            <Route path="/detail" element={<PageDetail />}></Route>
            <Route path="/ticket" element={<PagePayTicket />}></Route>
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          theme="light"
        />
      </BrowserRouter>
    </ContextFormProvider>
  </ContextLoginProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
