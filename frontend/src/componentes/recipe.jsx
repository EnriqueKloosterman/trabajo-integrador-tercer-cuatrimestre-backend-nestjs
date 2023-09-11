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
      <ul>
        {recipes.map((recipe, i) => (
          <li key={i}>
            <h2 className="text-3xl font-bold text-neutral-900">{recipe.title}</h2>
            {/* <p>{recipe.recipe}</p> */}
            {recipe.recipe.map((paragraph, j) => (
              <p key={j}>{paragraph}</p>
            ))}
            <ul className="list-disc">
              {recipe.ingredients.map((ingredient, k) => (
                <li key={k}>{ingredient}</li>
              ))}
            </ul>
            <img src={recipe.img} alt={recipe.title} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
