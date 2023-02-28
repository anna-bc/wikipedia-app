import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.scss";

function Searchbar(props) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    props.setSearchTerm(e.target.elements.searchInput.value);
    navigate(`/search`);
  }

  // http request for articles everytime the searchTerm is changed
  // useEffect(() => {
  //   fetch(
  //     `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=extracts|pageimages&inprop=url&utf8=&format=json&srlimit=20&srsearch=${searchTerm}&origin=*`
  //   )
  //     .then((response) => response.json())
  //     .then((result) => {
  //       let articles = result.query.search;
  //       props.setArticlesList(articles);
  //     })
  //     .catch((err) => "There was an error: " + err);
  //     navigate(`/search`);
  // }, [searchTerm]);

  return (
    <div className="Searchbar">
      <form onSubmit={handleSubmit} className="Searchbar__form">
        <input
          type="text"
          placeholder="Search for topics"
          name="searchInput"
          className="Searchbar__input"
        ></input>
        <input type="submit" className="Searchbar__submit"></input>
      </form>
    </div>
  );
}

export default Searchbar;
