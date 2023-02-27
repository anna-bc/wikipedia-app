import React from "react";
import ArticleCard from "../../container/ArticleCard/ArticleCard";

function SearchResult({articles}) {
  return (
    <div>
      {articles.length === 0
        ? null
        : articles.map((article) => (
            <li>
              <ArticleCard article={article} />
            </li>
          ))}
    </div>
  );
}

export default SearchResult;
