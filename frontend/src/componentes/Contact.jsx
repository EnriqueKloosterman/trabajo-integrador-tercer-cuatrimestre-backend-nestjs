import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-violet-700 mb-8">Contáctanos</h1>
      <p className="text-lg text-gray-700">
        Si tienes preguntas, comentarios o sugerencias, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte en lo que necesites.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Puedes enviarnos un correo electrónico a <a href="mailto:info@miblogdecocina.com" className="text-violet-500 hover:underline">info@miblogdecocina.com</a> o llenar el formulario de contacto a continuación.
      </p>

      <form onSubmit={handleSubmit} className="mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 text-lg font-semibold">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-lg font-semibold">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 text-lg font-semibold">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-violet-500"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-violet-500 hover:bg-violet-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;


