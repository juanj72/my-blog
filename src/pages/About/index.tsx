import { Skills } from "./components/Skills";
import { FormContact } from "./components/FormContact";
export const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-300 mt-10">
      <h2 className="text-3xl font-bold mb-4">Sobre mí</h2>

      <p className="mb-4 text-justify">
        Soy Juan Jose Jara, ingeniero de sistemas y desarrollador backend con{" "}
        <b>2+ años </b>
        de experiencia. Me apasiona resolver problemas reales mediante código,
        construir soluciones eficientes y trabajar con tecnologías como
        <span className="bg-gradient-to-r from-yellow-400 to-blue-500 text-white px-2 py-1 rounded text-sm">
          Python
        </span>
        ,
        <span className="bg-green-700 text-white px-2 py-1 rounded text-sm">
          Django
        </span>
        ,{" "}
        <span className="bg-teal-500 text-white px-2 py-1 rounded text-sm">
          FastAPI
        </span>{" "}
        y{" "}
        <span className="bg-cyan-400 text-white px-2 py-1 rounded text-sm">
          React.js
        </span>{" "}
        mientras avanzo hacia el desarrollo full stack.
      </p>

      <p className="mb-4 text-justify">
        Me considero una persona versátil, con gran capacidad de aprendizaje y
        curiosidad constante por mejorar mis habilidades técnicas y personales.
      </p>

      <p className="mb-4 text-justify">
        Cuando no estoy escribiendo código, disfruto jugar al fútbol, tocar la
        guitarra y explorar nuevos desafíos creativos fuera del mundo del
        software.
      </p>
      <Skills />
      <FormContact />
    </div>
  );
};
