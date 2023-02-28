import React from "react";
import { Route, Routes } from "react-router-dom";
import Article from "../components/components/Article/Article";
import SearchResultPage from "../components/pages/SearchResultPage";

function AppRoutes({ searchTerm }) {
  return (
    <Routes>
      <Route path="/" element={null} />
      <Route path='/search' element={<SearchResultPage searchTerm={searchTerm} />} />
      <Route path="/:title" element={<Article />} />
    </Routes>
  );
}

export default AppRoutes;
