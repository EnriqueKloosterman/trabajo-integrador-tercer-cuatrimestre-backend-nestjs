import React, { useState } from "react";

function RecipeForm() {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
    prepTime: "",
    cookTime: "",
    servings: "",
    category: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({
      ...recipe,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //enviar los datos de la receta al servidor o realizar otras acciones.
    console.log("Datos de receta enviados:", recipe);
  };

  return (
    <div>
      <h2>Agregar Nueva Receta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Ingredientes:</label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Instrucciones:</label>
          <textarea
            name="instructions"
            value={recipe.instructions}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div>
          <label>Tiempo de Preparación:</label>
          <input
            type="text"
            name="prepTime"
            value={recipe.prepTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Tiempo de Cocción:</label>
          <input
            type="text"
            name="cookTime"
            value={recipe.cookTime}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Porciones:</label>
          <input
            type="text"
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Categoría:</label>
          <input
            type="text"
            name="category"
            value={recipe.category}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <button type="submit">Agregar Receta</button>
      </form>
    </div>
  );
}

export default RecipeForm;
