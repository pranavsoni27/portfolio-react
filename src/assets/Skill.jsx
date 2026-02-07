import React, {useEffect} from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import js from "../assets/js.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import java from "../assets/java.png";
import mysql from "../assets/mysql.png";
import github from "../assets/github.png";
import spring from "../assets/spring.png";
import springboot from "../assets/springboot.png";

const Skill = () => {
  const skills = [
    {
      id: 1,
      src: html,
      title: "Html",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "Css",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: bootstrap,
      title: "Bootstrap",
      style: "shadow-purple-500",
    },
    {
      id: 4,
      src: js,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 5,
      src: react,
      title: "React.js",
      style: "shadow-blue-500",
    },    
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-blue-300",
    },
    {
      id: 8,
      src: java,
      title: "Java",
      style: "shadow-orange-700",
    },
    {
      id: 9,
      src: mysql,
      title: "MySql",
      style: "shadow-blue-400",
    },
    {
      id: 10,
      src: spring,
      title: "Spring",
      style: "shadow-green-600",
    },
    {
      id: 11,
      src: springboot,
      title: "Spring Boot",
      style: "shadow-green-500",
    },
    {
      id: 12,
      src: github,
      title: "Github",
      style: "shadow-blue-200",
    },
  ];

  useEffect(() => {
    if (window.Shery) {
      Shery.makeMagnet('.a');
    }
  }, []);

  return (
    <div
      name="𝚂𝚔𝚒𝚕𝚕𝚜"
      className="pb-20 md:pb-28 bg-gradient-to-b from-green-950 to-orange-950 w-full h-full md:pt-0 pt-2 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col h-full">
        <p className="text-4xl font-bold">
          <span className='inline border-b-4 border-gray-500'>Skills:</span>
        </p>
      </div>
      <div className="mt-8 w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-80">
        {skills.map(({ id, src, title, style }) => (
          <div 
            key={id} 
            className={`bb group relative bg-black/30 backdrop-blur-sm rounded-lg p-4 
              transform transition-all duration-300 hover:scale-105 hover:-translate-y-2
              ${style} hover:shadow-lg hover:shadow-current`}
          >
            <div className="relative z-10">
              <img 
                className="a w-20 mx-auto transform group-hover:scale-110 transition-transform duration-300" 
                src={src} 
                alt={title} 
              />
              <p className="mt-4 font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                {title}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-current to-transparent 
              opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg">
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
