import React from "react";
import "../css/Nav.css";
import SearchBar from "../../layouts/SearchBar/SearchBar";
import AvartarHeader from "../../layouts/AvatarHeader/AvartarHeader";
function Header() {
  return (
    <div className="headerR filterBulrH">
      <ul className="NavR">
        <li className="btnNavR">
          <div className="Content_Nav">Logo</div>
        </li>
        <li className="btnNavR">
          <div className="Content_Nav">Đang chiếu</div>
        </li>
        <li className="btnNavR">
          <div className="Content_Nav">Sắp chiếu</div>
        </li>
      </ul>
      <SearchBar />
      <AvartarHeader />
    </div>
  );
}

export default Header;
