export const Projects = () => {
  const projects = [
    {
      name: "Orderins",
      embedUrl:
        "https://drive.google.com/file/d/12Xv4qKloUe1rsc53_8KTVkZmBuxkIvwP/preview",
      localVideo: "",
      technologies: [
        "HTML",
        "CSS",
        "javascript",
        "Django",
        "MySQL",
        "Bootstrap",
      ],
      description:
        "Proyecto para gestionar y controlar material de técnicos Claro. Permite supervisar órdenes, generar recibos según tarifas, reportes personalizados, cargue masivo de agenda y optimización diaria. Actualmente es un MVP en refactorización para mejorar mantenibilidad y escalabilidad. Desplegado en Azure App Service.",
    },
    {
      name: "Reto Factus",
      embedUrl: "https://www.youtube.com/embed/L3HobX0NKm4?si=cIGqQNGAt_fEtvJt",
      localVideo: "",
      technologies: [
        "React.js",
        "typescript",
        "REST API de facturación electrónica",
      ],
      description:
        "Mini proyecto frontend que consume API REST de facturación electrónica para la DIAN.",
    },
    {
      name: "Turnos Keca",
      embedUrl: "https://www.youtube.com/embed/apxFXnMwIfU?si=ezbRZfrT45fGzZcS",
      localVideo: "",
      technologies: [
        "Django",
        "WebScket",
        "MySQL",
        "Bootstrap",
        "HTML",
        "CSS",
        "Javascript",
      ],
      description:
        "Este innovador mini proyecto transforma la experiencia de espera en cualquier entidad, convirtiendo un momento aburrido en una experiencia entretenida e interactiva. Los usuarios pueden disfrutar de dos clásicos atemporales, Memorama o Tetris, directamente desde su dispositivo mientras aguardan su turno. Lo mejor de todo: cuando llega su momento, el sistema les envía una notificación emergente en su sesión, eliminando la necesidad de estar atentos a las pantallas del lugar. Este proyecto no solo mejora la comodidad del usuario, sino que también eleva la percepción del servicio, ofreciendo una espera amena, moderna y eficiente.",
    },
  ];

  const getTechColor = (tech: string) => {
    switch (tech) {
      case "React.js":
        return "bg-cyan-400";
      case "TypeScript":
        return "bg-blue-600";
      case "Python":
        return "bg-yellow-500";
      case "Django":
        return "bg-green-700";
      case "FastAPI":
        return "bg-teal-500";
      case "PostgreSQL":
        return "bg-blue-700";
      default:
        return "bg-gray-600";
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-6xl mx-auto px-4 py-12">
      <main className="flex-grow">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
          Proyectos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-[#0a0a23] rounded-lg shadow p-4"
            >
              <div className="relative pb-[56.25%] mb-4">
                {project.localVideo ? (
                  <video
                    controls
                    className="absolute top-0 left-0 w-full h-full rounded"
                  >
                    <source src={project.localVideo} type="video/mp4" />
                    Tu navegador no soporta el video.
                  </video>
                ) : (
                  <iframe
                    src={project.embedUrl}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute top-0 left-0 w-full h-full rounded"
                  />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-200 mb-2">
                {project.name}
              </h3>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className={`px-2 py-1 text-xs rounded text-black ${getTechColor(
                      tech
                    )}`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p className="text-gray-400 text-sm">{project.description}</p>
            </div>
          ))}
        </div>
      </main>

      {/* Sección de Contacto */}
      <div className="mt-12 text-center bg-[#0a0a23] rounded-lg shadow p-4">
        <h3 className="text-2xl font-semibold text-gray-200 mb-2">
          💬 Contáctame
        </h3>
        <p className="text-gray-400 max-w-xl mx-auto mb-4">
          ¿Te interesa alguno de estos proyectos o quieres saber más sobre cómo
          trabajo? Estoy disponible para charlar. Escríbeme por{" "}
          <a
            href="https://wa.me/573213437645"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:underline"
          >
            WhatsApp
          </a>{" "}
          o{" "}
          <a
            href="https://www.linkedin.com/in/juan-josé-jara-álvarez-a3a7731b4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:underline"
          >
            LinkedIn
          </a>{" "}
          para hablar sobre desarrollo, colaboración o nuevas oportunidades.
        </p>

        {/* Frase personal */}
        <p className="text-gray-400 italic">
          “Experiencia es el nombre que todos le dan a sus errores.” — Oscar
          Wilde
        </p>
        <p className="text-gray-400 italic flex items-center justify-center mt-2">
          “La determinación es el arte de nunca rendirse”
          <span className="ml-2 text-2xl">🇨🇴</span> — de Colombia para el mundo
        </p>
      </div>
    </div>
  );
};
