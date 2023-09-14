import { useState } from "react";
import Swal from "sweetalert2";

function CreateArticle() {
  const [formData, setFormData] = useState({
    title: '',
    article: [],
    img: '',
    user_id: 1, // Usar mientras no haya inicio de sesión de usuarios
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "article") {
      const arrayValue = value.split("/");
      setFormData({ ...formData, [name]: arrayValue });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/v1/articles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Articulo creado con éxito",
          showConfirmButton: false,
          timer: 7000,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error al crear el articulo",
          text: "Hubo un problema al crear el articulo. Por favor, inténtalo de nuevo.",
        });
      }
    } catch (error) {
      console.error("Error al crear el articulo:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-black">
        Crear un nuevo articulo
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-black">
            Título del Ariculo
          </label>
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
          <label htmlFor="article" className="block text-black">
            Contenido del Ariculo
          </label>
          <textarea
            id="article"
            name="article"
            value={formData.article.join("/")}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-purple-500"
          />
          <div className="mb-4">
            <label htmlFor="img" className="block text-black">
              URL de la imagen
            </label>
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
            Crear Articulo
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateArticle;
