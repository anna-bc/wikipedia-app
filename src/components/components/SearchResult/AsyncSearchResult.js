import React, { useCallback, useMemo } from "react";
import fetchArticlesResource from "../../../Api/fetchArticlesPromise";
import ArticleCard from "../../container/ArticleCard/ArticleCard";

function AsyncSearchResult({searchTerm}) {
  const articles = fetchArticlesResource(searchTerm).read();
  return (
    <div className="AsyncSearchResult">
      {articles.length === 0
        ? null
        : articles.map((article) => (
            <li>
              <ArticleCard article={article} />
            </li>
          ))}
    </div>
  )
};

export default AsyncSearchResult;
