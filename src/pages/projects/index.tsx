import React from "react";
import demoVideo from "../../assets/orderins-demo.webm";

export const Projects = () => {
  const projects = [
    {
      name: "Orderins",
      embedUrl: "", // deja vacío si usas local
      localVideo: demoVideo,
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
  ];

  const getTechColor = (tech) => {
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
    <div className="max-w-6xl mx-auto px-4 py-12">
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
                  poster="/src/assets/orderins-thumbnail.jpg" // opcional
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
    </div>
  );
};
