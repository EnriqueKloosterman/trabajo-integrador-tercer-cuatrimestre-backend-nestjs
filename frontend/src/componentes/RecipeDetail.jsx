import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Realiza una solicitud a tu API para obtener los detalles de la receta con el ID proporcionado
    fetch(`http://localhost:3000/api/v1/recipe/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setRecipe(data);
      });
  }, [id]);

  if (!recipe) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-purple-600 border-solid"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-12 px-4">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={recipe.img} alt={recipe.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-3xl font-semibold text-purple-800 mb-4">{recipe.title}</h2>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Descripción:</h3>
              {recipe.description.map((paragraph, i) => (
                <p key={i} className="text-gray-800 text-base">{paragraph}</p>
              ))}
            </div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-purple-700 mb-2">Ingredientes:</h3>
              <ul>
                {recipe.ingredients.map((ingredient, i) => (
                  <li key={i} className="text-gray-800 text-base mb-2">{ingredient}</li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <Link to="/recipes">
                <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600 active:bg-purple-800">
                  Volver a recetas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetail;