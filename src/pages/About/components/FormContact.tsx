export const FormContact = () => {
  return (
    <div className=" mx-auto mt-10 p-6 bg-[#121233] text-white rounded-lg ">
      <h1 className="text-2xl font-semibold mb-6 text-center text-gray-200">
        Déjame un mensaje
      </h1>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="space-y-4"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div>
          <label className="block text-sm text-gray-300 mb-1">Nombre</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded-md bg-[#1a1a3b] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Tu nombre"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded-md bg-[#1a1a3b] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="tucorreo@ejemplo.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-300 mb-1">Mensaje</label>
          <textarea
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded-md bg-[#1a1a3b] border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Escribe tu mensaje..."
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
          >
            Enviar mensaje
          </button>
        </div>
      </form>
    </div>
  );
};
