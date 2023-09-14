import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Recipe() {
  const [recipes, setRecipes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const recipesUrl = "http://localhost:3000/api/v1/recipe";

  useEffect(() => {
    fetch(recipesUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setRecipes(data);
      });
  }, []);

  useEffect(() => {
    const filteredRecipes = recipes.filter((recipe) =>
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(filteredRecipes);
  }, [searchTerm, recipes]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Buscar recetas..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="px-4 py-2 border border-gray-300 rounded-lg w-full"
        />
      </div>
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {searchResults.map((recipe, i) => (
          <div className="recipe-card" key={i}>
            <Link to={`/recipes/${recipe.id}`}>
              <li className="bg-white shadow-lg rounded-lg overflow-hidden h-full">
                <img
                  src={recipe.img}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h2 className="text-2xl font-semibold text-neutral-900 mb-2">
                    {recipe.title}
                  </h2>
                </div>
              </li>
            </Link>
          </div>
        ))}
      </ul>
      {/* Agregar un botón al final que redirija a create-recipe */}
      <div className="text-center mt-8">
        <Link to="/create-recipe">
          <button className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple active:bg-purple-700">
            Crear nueva receta
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Recipe;
