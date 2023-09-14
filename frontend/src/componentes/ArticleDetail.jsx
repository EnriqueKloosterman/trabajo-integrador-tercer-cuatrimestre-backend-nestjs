import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function ArticleDetail() {
    const { id } = useParams();
    const [article, setArticle] = useState(null);

    useEffect(() =>{
        fetch(`http://localhost:3000/api/v1/articles/${id}`)
        .then((res) => res.json())
        .then((data) => {
            setArticle(data);
        });
    },[id]);

    if(!article){
        return <div>Cargando...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                {article.title}
            </h2>
            <img src={article.img} alt={article.title} className="w-full object-cover" />
            {article.article.map((paragraph, i) => (
                <p key={i} className="text-black text-base mb-2">{paragraph}</p>
            ))}
                  <div className="text-center mt-8">
        <Link to="/">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple active:bg-purple-700">
            Volver 
          </button>
        </Link>
      </div>
    </div>
    )
}

export default ArticleDetail;

