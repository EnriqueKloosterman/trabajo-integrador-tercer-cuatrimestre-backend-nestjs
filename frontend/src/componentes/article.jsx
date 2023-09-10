import { useState,  useEffect } from "react";

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
    <div>
      <h1 className="text-center text-4xl text-bold text-lime-700">Articles</h1>
      <ul>
        {articles.map((article, i) => (
          <li key={i}>
            <h2 className="text-3xl text-strong">{article.title}</h2>
            {article.article.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
            <img src={article.img} alt={article.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Article;
