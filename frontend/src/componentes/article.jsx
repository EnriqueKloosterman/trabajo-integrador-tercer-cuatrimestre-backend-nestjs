import React, { useState, useEffect } from "react";

function Article() {
  const [articles, setArticles] = useState([]);
  const articlesUrl = "http://localhost:3000/api/v1/article";

  useEffect(() => {
    fetch(articlesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setArticles(data.Article); // Accede a la propiedad "Article" en el objeto JSON
      });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map((article, i) => (
          <li key={i}>
            <h2>{article.title}</h2>
            {article.article.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
            <img src={article.img} alt={article.title} />
            {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Article;

