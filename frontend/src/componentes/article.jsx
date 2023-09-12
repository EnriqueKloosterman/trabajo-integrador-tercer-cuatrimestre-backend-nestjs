import { useState, useEffect } from "react";

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
          placeholder="Buscar artículos..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 border rounded-l-lg focus:outline-none focus:border-violet-500"
        />
        <button
          onClick={() => setSearchTerm("")}
          className="py-2 px-4 bg-violet-500 border border-violet-500 text-white rounded-r-lg hover:bg-violet-600 transition-colors duration-300"
        >
          Limpiar
        </button>
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredArticles.map((article, i) => (
          <li key={i} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={article.img} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-violet-900 mb-2">{article.title}</h2>
              <ul className="pl-6">
                {article.article.slice(0, 1).map((paragraph, j) => (
                  <li key={j} className="text-violet-700 text-base mb-2">{paragraph}</li>
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
