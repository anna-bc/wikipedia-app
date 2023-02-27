import React from "react";
import { Link } from "react-router-dom";
import Searchbar from "../../container/Searchbar/Searchbar";
import "./Header.scss";

function Header({ setArticlesList }) {
  return (
    <div className="Header">
      <div className="Header__home">
        <Link to={"/"} className="Header__home__link">
          Home
        </Link>
      </div>
      <Searchbar
        className="Header__searchbr"
        setArticlesList={setArticlesList}
      />
    </div>
  );
}

export default Header;
