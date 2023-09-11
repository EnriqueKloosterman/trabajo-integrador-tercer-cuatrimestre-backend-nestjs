import { useState, useEffect } from "react";

function Article() {
  const [articles, setArticles] = useState([]);
  const articlesUrl = "http://localhost:3000/api/v1/articles/";

  useEffect(() => {
    fetch(articlesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article, i) => (
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
