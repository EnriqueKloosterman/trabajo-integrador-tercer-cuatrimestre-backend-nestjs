import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';


const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    description: [],
    ingredients: [],
    img: '',
    userId: 1, // Usar mientras no haya inicio de sesión de usuarios
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
        Navigate('/recipes')
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
  
  const Navigate = useNavigate();

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">Crear una nueva receta</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-black">Título</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-black">Descripción (Agregar / al final de cada párrafo)</label>
          <textarea
            id="description"
            name="description"
            value={formData.description.join('/')}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ingredients" className="block text-black">Ingredientes (Agregar / al final de cada ingrediente para separarlos)</label>
          <input
            type="text"
            id="ingredients"
            name="ingredients"
            value={formData.ingredients.join('/')}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="img" className="block text-black">URL de la imagen</label>
          <input
            type="text"
            id="img"
            name="img"
            value={formData.img}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
          />
        </div>
        <button
          type="submit"
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-purple active:bg-purple-700"
        >
          Crear Receta
        </button>
      </form>
    </div>
  );
};

export default RecipeForm;
