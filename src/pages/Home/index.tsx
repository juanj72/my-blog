import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { TbFileCv } from "react-icons/tb";
import myphoto from "../../assets/profile.webp";

export const Home = () => {
  return (
    <div className="bg-[#0a0a23] min-h-screen flex flex-col md:flex-row items-center justify-center gap-4 p-8">
      {/* Texto + redes + descripción */}
      <div className="flex flex-col items-center md:items-start max-w-lg">
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-200 text-center md:text-left max-w">
          Hola, soy{" "}
          <span className="bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Juan Jose Jara
          </span>
        </h1>

        {/* Redes sociales */}
        <div className="flex space-x-6 mt-4">
          <a
            href="https://github.com/juanj72"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a perfil de GitHub"
            title="Ir a perfil de GitHub"
          >
            <FaGithub className="text-3xl text-gray-300 hover:text-white transition" />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-josé-jara-álvarez-a3a7731b4/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a perfil de LinkedIn"
            title="Ir a perfil de LinkedIn"
          >
            <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-500 transition" />
          </a>
          <a
            href="https://x.com/juanjosjaraalv2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ir a perfil de Twitter"
            title="Ir a perfil de Twitter"
          >
            <FaTwitter className="text-3xl text-blue-300 hover:text-blue-400 transition" />
          </a>
          <a
            href="https://docs.google.com/document/d/1p1xpH8IiODRPg0WNlx08R5MyN_HkdPhy/edit?tab=t.0"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Ver curriculum"
            title="Ver curriculum"
          >
            <TbFileCv className="text-3xl text-green-300 hover:text-green-400 transition" />
          </a>
        </div>

        {/* Descripción personal */}
        <p className="mt-6 text-gray-400 text-justify leading-relaxed ">
          Soy ingeniero de sistemas y desarrollador backend, actualmente en
          formación para convertirme en desarrollador full stack. Me apasiona
          resolver problemas reales mediante código y me enfoco en escribir
          soluciones limpias, eficientes y sostenibles.
        </p>
        {/* <p className="mt-6 text-gray-400 text-justify leading-relaxed ">
          Tengo experiencia práctica en Python, JavaScript y PHP, trabajando con
          frameworks como Django y React.js para construir herramientas robustas
          y eficientes.
        </p> */}
        <div className="flex flex-wrap gap-2 mt-4">
          <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white px-2 py-1 rounded text-sm">
            Python
          </span>
          <span className="bg-green-700 text-white px-2 py-1 rounded text-sm">
            Django
          </span>
          <span className="bg-teal-500 text-white px-2 py-1 rounded text-sm">
            FastAPI
          </span>
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm">
            SQL
          </span>
          <span className="bg-cyan-400 text-white px-2 py-1 rounded text-sm">
            React.js
          </span>
          <span className="bg-green-600 text-white px-2 py-1 rounded text-sm">
            MongoDB
          </span>
        </div>
      </div>

      {/* Imagen */}
      <div>
        <img
          src={myphoto}
          alt="Juan Jose Jara"
          className="w-52 h-52 rounded-full object-cover border-4 border-indigo-500 shadow-lg"
        />
      </div>
    </div>
  );
};
