import { useState, useEffect } from "react";


function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const recipesUrl = "http://localhost:3000/api/v1/recipe";

  useEffect(() => {
    fetch(recipesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data); // Accede a la propiedad "Recipe" en el objeto JSON
      });
  }, []);

  return (
    <div>
      <h1>Recipes</h1>
      <ul>
        {recipes.map((recipe, i) => (
          <li key={i}>
            <h2>{recipe.title}</h2>
            <p>{recipe.recipe}</p>
            <img src={recipe.img} alt={recipe.title} />
            {}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
