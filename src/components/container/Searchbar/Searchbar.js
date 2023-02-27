import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Searchbar(props) {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    setSearchTerm(e.target.elements.searchInput.value);
  }

  // http request for articles everytime the searchTerm is changed
  useEffect(() => {
    fetch(
      `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=extracts|pageimages&inprop=url&utf8=&format=json&srlimit=20&srsearch=${searchTerm}&origin=*`
    )
      // fetch(`https://en.wikipedia.org/w/api.php?action=query&list=search&gsrsearch=${searchTerm}&exintro=&prop=extracts|pageimages&format=json&origin=*`)
      .then((response) => response.json())
      .then((result) => {
        let articles = result.query.search;
        props.setArticlesList(articles);
      })
      .catch((err) => "There was an error: " + err);
      navigate(`/search`);
  }, [searchTerm]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for topics"
          name="searchInput"
        ></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default Searchbar;
