import React from "react"
import { Link } from "react-router-dom";
import "./ArticleCard.scss";

function ArticleCard({article}) {
  return (
    <div className="ArticleCard">
      <div className="ArticleCard__title"><Link to={"/" + article.title}>{article.title}</Link></div>
      <div className="ArticleCard__snippet" dangerouslySetInnerHTML={{__html: article.snippet}}></div>
    </div>
  )
};

export default ArticleCard;
