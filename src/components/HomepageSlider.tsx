import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";
import {
  faPython,
  faWindows,
  faHtml5,
  faCss3Alt,
  faReact,
  faRust,
  faGitAlt,
  faGithub,
  faDocker,
  faJs,
  faNode,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";

function HomepageSlider() {
  const [collection] = useState([
    { termo: "React", figura: faReact },
    { termo: "Typescript", figura: faJs },
    { termo: "Rust", figura: faRust },
    { termo: "SQL", figura: faDatabase },
    { termo: "Python", figura: faPython },
    { termo: "Node", figura: faNode },
    { termo: "HTML5", figura: faHtml5 },
    { termo: "CSS3", figura: faCss3Alt },
    { termo: "Javascript", figura: faJs },
    { termo: "Git", figura: faGitAlt },
    { termo: "GitHub", figura: faGithub },
    { termo: "Power BI", figura: faWindows },
    { termo: "Docker", figura: faDocker },
    // Adicione mais objetos à coleção conforme necessário
  ]);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-white font-bold text-base sm:text-xl lg:text-xl pt-10">
          Tecnologias que possuo habilidades
        </h1>
      </motion.div>
      <div className="flex text-white flex-wrap sm:pl-30 sm:pr-30 pt-10 pb-30 justify-center">
        {collection.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
          >
            <div className="flex flex-col items-center p-10">
              <FontAwesomeIcon className=" text-8xl" icon={item.figura} />
              <a className="icon-skill-text">{item.termo}</a>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default HomepageSlider;
