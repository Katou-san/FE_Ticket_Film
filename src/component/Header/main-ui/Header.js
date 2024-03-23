import React from "react";
import "../css/Nav.css";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../layouts/SearchBar/SearchBar";
import AvartarHeader from "../../layouts/AvatarHeader/AvartarHeader";
function Header() {
  return (
    <div className="headerR filterBulrH">
      <ul className="NavR">
        <li className="btnNavR">
          <div className="Content_Nav">
            <a href="/#Home" style={{ textDecoration: "none" }}>
              <div className="Content_Nav">Logo</div>
            </a>
          </div>
        </li>
        <li className="btnNavR">
          <a href="/#Now" style={{ textDecoration: "none" }}>
            <div className="Content_Nav">Đang chiếu</div>
          </a>
        </li>
        <li className="btnNavR">
          <a href="/#Coming_Soon" style={{ textDecoration: "none" }}>
            <div className="Content_Nav">Sắp chiếu</div>
          </a>
        </li>
      </ul>
      <SearchBar />
      <AvartarHeader />
    </div>
  );
}

export default Header;
