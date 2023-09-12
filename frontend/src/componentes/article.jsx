import React, { useState, useEffect } from "react";

function Article() {
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredArticles, setFilteredArticles] = useState([]);
  const articlesUrl = "http://localhost:3000/api/v1/articles/";

  useEffect(() => {
    fetch(articlesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  useEffect(() => {
    const filtered = articles.filter((article) =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredArticles(filtered);
  }, [searchTerm, articles]);

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex items-center">
        <input
          type="text"
          placeholder="Buscar recetas..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:border-lime-500"
        />
        <button
          onClick={() => setSearchTerm("")}
          className="py-2 px-4 bg-lime-500 text-white rounded-r-lg hover:bg-lime-600 transition-colors duration-300"
        >
          Limpiar
        </button>
        <span className="text-gray-500 ml-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m0 0l-6-6m6 6l-6-6M4 12l6 6m0 0l6-6m-6 6l6 6M12 4l6 6m0 0l-6 6"
            />
          </svg>
        </span>
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, i) => (
          <li key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-gray-900 mb-2">{article.title}</h2>
              <ul className="list-disc pl-6">
                {article.article.map((paragraph, j) => (
                  <li key={j} className="text-gray-700 text-base mb-2">{paragraph}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Article;
