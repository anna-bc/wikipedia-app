import React, { Suspense } from "react"
import AsyncSearchResult from "../components/SearchResult/AsyncSearchResult";

function SearchResultPage({searchTerm}) {
  return (
    <Suspense fallback={<h3>Searching for articles...</h3>}>
        <AsyncSearchResult searchTerm={searchTerm} />
    </Suspense>
  )
};

export default SearchResultPage;
