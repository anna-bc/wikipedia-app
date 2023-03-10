import { useEffect, useState } from "react";
import "./App.scss";
import Header from "./components/components/Header/Header";
import SearchResult from "./components/components/SearchResult/SearchResult";
import ArticleCard from "./components/container/ArticleCard/ArticleCard";
import Searchbar from "./components/container/Searchbar/Searchbar";
import AppRoutes from "./Routes/AppRoutes";

function App() {
  // const [articlesList, setArticlesList] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Header setSearchTerm={setSearchTerm} />
      <AppRoutes searchTerm={searchTerm} />
    </div>
  );
}

export default App;
