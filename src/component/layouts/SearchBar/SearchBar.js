import React, { useState } from "react";
import { SearchIcon } from "../../icons/Icon";
import "./SearchBar.css";
import { useNavigate } from "react-router-dom";
export default function SearchBar() {
  const Navigate = useNavigate();
  const [ValueSearch, SetValueSearch] = useState("");

  const OnSubmit = (e) => {
    e.preventDefault();
    Navigate(`/result?value=${ValueSearch}`);
  };
  return (
    <form
      onSubmit={OnSubmit}
      className="inputSearch"
      id={ValueSearch === "" ? "notSearchValue" : "hasSearchValue"}
    >
      <SearchIcon color={"transparent"} />
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          SetValueSearch(e.target.value);
        }}
      />
      <button type="submit" className="btn btn-primar">
        Go
      </button>
    </form>
  );
}
