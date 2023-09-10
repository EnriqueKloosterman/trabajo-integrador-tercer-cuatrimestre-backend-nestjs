import React, { useState, useEffect } from "react";

function Coments() {
  const [coments, setComents] = useState([]);
  const comentsUrl = "http://localhost:3000/api/v1/coments";

  useEffect(() => {
    fetch(comentsUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComents(data.Coments); // Accede a la propiedad "Coments" en el objeto JSON
      });
  }, []);

  return (
    <div>
      <h1>Coments</h1>
      <ul>
        {coments.map((coment, i) => (
          <li key={i}>
            <p>{coment.coment}</p>
            <img src={coment.img} alt={`Coment ${i}`} />
            {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Coments;

