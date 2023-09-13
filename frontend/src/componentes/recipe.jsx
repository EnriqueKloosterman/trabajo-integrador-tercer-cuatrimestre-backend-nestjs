import { useState, useEffect } from "react";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const recipesUrl = "http://localhost:3000/api/v1/recipe";

  useEffect(() => {
    fetch(recipesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe, i) => (
          <li key={i} className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
            <img src={recipe.img} alt={recipe.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl font-semibold text-neutral-900 mb-2">{recipe.title}</h2>
              {/* <p className="text-neutral-700 text-base mb-2">{recipe.description.slice(0, 1).join(" ")}...</p> */}
              {/* <ul className="text-2xl font-semibold text-neutral-900 mb-2">
                {recipe.description.slice(0, 1).map((paragraph, j) => (
                  <li key={j} className="text-neutral-700 text-base mb-2">{paragraph}</li>
                ))}
              </ul> */}
              {/* <h3 className="text-lg font-semibold text-neutral-900 mt-4">Ingredientes:</h3>
              <ul className="list-disc pl-6">
                {recipe.ingredients.map((ingredient, k) => (
                  <li key={k} className="text-neutral-700 text-base mb-2">{ingredient}</li>
                ))}
              </ul> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipe;
