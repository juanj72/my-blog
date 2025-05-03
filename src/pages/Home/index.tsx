import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import myphoto from "../../assets/profile.png";

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
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl text-gray-300 hover:text-white transition" />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-3xl text-blue-400 hover:text-blue-500 transition" />
          </a>
          <a
            href="https://twitter.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="text-3xl text-blue-300 hover:text-blue-400 transition" />
          </a>
        </div>

        {/* Descripción personal */}
        <p className="mt-6 text-gray-400 text-justify leading-relaxed ">
          Soy un apasionado desarrollador web con experiencia en React,
          TypeScript y Tailwind CSS. Me encanta crear interfaces elegantes,
          aprender nuevas tecnologías y colaborar en proyectos desafiantes.
          Cuando no estoy programando, disfruto leer, explorar nuevas
          herramientas y compartir conocimiento con la comunidad.
        </p>
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
