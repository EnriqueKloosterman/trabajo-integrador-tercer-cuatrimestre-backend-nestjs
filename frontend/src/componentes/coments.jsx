import { useState, useEffect } from "react";

function Coments() {
  const [coments, setComents] = useState([]);
  const comentsUrl = "http://localhost:3000/api/v1/coments";

  useEffect(() => {
    fetch(comentsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComents(data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-lime-700 mb-8">Comentarios</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coments.map((coment, i) => (
          <li key={i} className="bg-white shadow-lg rounded-lg overflow-hidden p-4">
            <p className="text-lg text-gray-700 mb-2">{coment.coment}</p>
            <img src={coment.img} alt={`Comentario ${i}`} className="w-full h-48 object-cover" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coments;


