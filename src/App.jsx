import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Title from "./components/Title";
import NavBar from "./components/NavBar";
import NewsCard from "./components/NewsCard";

import "./App.css";

function App() {
  const [news, setNews] = useState([]);

  const APIkey = "shUTtwkOu5rFIUDBqPODiGUkhvgNaBs-CPA9luchgGnPYdSI";

  function fetchAPI() {
    fetch(
      "https://api.currentsapi.services/v1/search?keywords=technology&language=en&page_number=1&page_size=5",
      {
        headers: {
          Authorization: `Bearer ${APIkey}`
        }
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("API DATA:", data);
        setNews(data.news || []);
      })
      .catch((error) => {
        console.log("Error:", error);
      });
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
  <>
    <Header />
    <Title />
    <main className="mn">
      <NavBar />
      <NewsCard news={news} />
    </main>
    <Footer />
  </>
);
}

export default App;