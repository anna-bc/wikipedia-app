import React from "react"
import { Route, Routes } from "react-router-dom";
import Article from "../components/components/Article/Article";
import SearchResult from "../components/components/SearchResult/SearchResult";

function AppRoutes({articles}) {
  return (
    <Routes>
        <Route path='/' element={ null } />
        <Route path='/search' element={<SearchResult articles={articles} />} />
        <Route path="/:title" element={<Article />} />
    </Routes>
  )
};

export default AppRoutes;
