import { useState } from 'react';
import Swal from 'sweetalert2';


const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: [], 
    ingredients: [], 
    img: '',
    userId: 1, // usar mientras no haya login de usuarios
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'description' || name === 'ingredients') {

      const arrayValue = value.split('/');
      setFormData({ ...formData, [name]: arrayValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/api/v1/recipe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 201) {
        Swal.fire({
          icon: 'success',
          title: 'Receta creada con éxito',
          showConfirmButton: false, 
          timer: 10000, 
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al crear la receta',
          text: 'Hubo un problema al crear la receta. Por favor, inténtalo de nuevo.',
        });
      }
    } catch (error) {
      console.error('Error al crear la receta:', error);
    }
  };

  return (
    <div>
      <h2>Crear una nueva receta</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción (Agregar / al final de cada parrafo)</label>
          <textarea
            type="text"
            id="description"
            name="description"
            value={formData.description.join('/')} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="ingredients">Ingredientes (Agregar / al final de cada ingrediente para separarlos)</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients.join('/')} 
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="img">URL de la imagen</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Crear Receta</button>
      </form>
    </div>
  );
};

export default RecipeForm;
