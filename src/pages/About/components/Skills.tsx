import { //TODO: importar iconos desde el archivo de iconos
    FaReact,
    FaJsSquare,
    FaPython,
    FaBootstrap,
    FaCss3Alt,
    FaHtml5,
    FaLinux,
    FaAws
  } from 'react-icons/fa';
  import {
    SiTypescript,
    SiPostgresql,
    SiMysql,
    SiMongodb,
    SiTailwindcss,
    SiVite,
    SiDjango,
    SiFastapi,
  } from 'react-icons/si';
  import { FaPhp } from "react-icons/fa6";

  import { VscAzure } from "react-icons/vsc";
  import { JSX } from 'react';
  
  export const Skills = () => {
    const frontend = [
      { name: 'TypeScript', icon: <SiTypescript size={40} color="#3178C6" /> },
      { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F7DF1E" /> },
      { name: 'React.js', icon: <FaReact size={40} color="#61DAFB" /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} color="#38B2AC" /> },
      { name: 'Bootstrap', icon: <FaBootstrap size={40} color="#7952B3" /> },
      { name: 'CSS3', icon: <FaCss3Alt size={40} color="#264de4" /> },
      { name: 'HTML5', icon: <FaHtml5 size={40} color="#E34F26" /> },
      { name: 'Vite', icon: <SiVite size={40} color="#646CFF" /> },
    ];
  
    const backend = [
      { name: 'Python', icon: <FaPython size={40} color="#3776AB" /> },
      { name: 'Django', icon: <SiDjango size={40} color="#092E20" /> },
      { name: 'FastAPI', icon: <SiFastapi size={40} color="#009688" /> },
      { name: 'PHP', icon: <FaPhp size={40} color="#8892BF" /> },
      
    ];
  
    const databases = [
      { name: 'PostgreSQL', icon: <SiPostgresql size={40} color="#336791" /> },
      { name: 'MySQL', icon: <SiMysql size={40} color="#00758F" /> },
      { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" /> },
    ];
  
    const devops = [
      { name: 'Azure', icon: <VscAzure size={40} color="blue" /> },
      { name: 'Linux', icon: <FaLinux size={40} color="#FCC624" /> },
      { name: 'AWS', icon: <FaAws size={40} color="#FF9900" /> },
    ];
  
    const renderSection = (title:string, items:{ name: string; icon: JSX.Element }[]) => ( //TODO: mejorar el renderizado de las secciones
      <div className="mb-10">
        <h3 className="text-2xl font-semibold text-gray-200 mb-6">{title}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {items.map((skill) => (
            <div
              key={skill.name}
              className="flex flex-col items-center justify-center p-4 bg-[#0a0a23] rounded-lg shadow hover:scale-105 transform transition"
            >
              <div className="mb-2">{skill.icon}</div>
              <span className="text-gray-300 text-sm font-medium">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  
    return (
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center text-gray-200 mb-10">
          Skills
        </h2>
        {renderSection('Frontend', frontend)}
        {renderSection('Backend', backend)}
        {renderSection('Bases de datos', databases)}
        {renderSection('DevOps / Herramientas', devops)}
      </div>
    );
  };
  