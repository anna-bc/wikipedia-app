import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Article() {
  const { title } = useParams();
const [article, setArticle] = useState({});

useEffect(() => {
    fetch(`https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=extracts|pageimages|info&pithumbsize=400&inprop=url&redirects=&format=json&origin=*`)
    .then((res) => res.json())
    .then((result) => {
        const pageId = Object.keys(result.query.pages)[0];
        setArticle(result.query.pages[pageId]);
    });
}, []);
  
  return <div className="Article">
    <h1 className="Article__title">{title}</h1>
    <div className="Article__extract" dangerouslySetInnerHTML={{__html: article.extract}}></div>
  </div>;
}

export default Article;
