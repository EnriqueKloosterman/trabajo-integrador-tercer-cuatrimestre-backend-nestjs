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
    return <div>Cargando...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      {/* Renderiza los detalles de la receta aquí */}
      <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
        {recipe.title}
      </h2>
      <img src={recipe.img} alt={recipe.title} className="w-full object-cover" />
        {recipe.description.map((paragraph, i) => (
            <p key={i} className="text-black text-base mb-2">{paragraph}</p>
        ))}
        <ul className="p-4">
            {recipe.ingredients.map((ingredient, i) => (
                <li key={i} className="text-black text-base mb-2">{ingredient}</li>
            ))}
        </ul>

      {/* Otros detalles de la receta */}
      <div className="text-center mt-8">
        <Link to="/recipes">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple active:bg-purple-700">
            Volver a recetas
          </button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeDetail;
