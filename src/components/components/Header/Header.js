import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../container/Searchbar/Searchbar";
import "./Header.scss";

function Header({ setSearchTerm }) {
  return (
    <div className="Header">
      <div className="Header__home">
        <Link to={"/"} className="Header__home__link">
          Home
        </Link>
      </div>
      <Searchbar
        className="Header__searchbr"
        setSearchTerm={setSearchTerm}
      />
    </div>
  );
}

export default Header;
