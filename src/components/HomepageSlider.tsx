import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { faPython, faWindows, faHtml5, faCss3Alt, faReact, faRust, faGitAlt, faGithub, faDocker, faJs, faNode } from '@fortawesome/free-brands-svg-icons';


function HomepageSlider() {

  const [collection] = useState([
    { termo: 'React', figura: faReact },
    { termo: 'Typescript', figura: faJs },
    { termo: 'Rust', figura: faRust },
    { termo: 'SQL', figura: faDatabase },
    { termo: 'Python', figura: faPython },
    { termo: 'Node', figura: faNode },
    { termo: 'HTML5', figura: faHtml5 },
    { termo: 'CSS3', figura: faCss3Alt },
    { termo: 'Javascript', figura: faJs },
    { termo: 'Git', figura: faGitAlt },
    { termo: 'GitHub', figura: faGithub },
    { termo: 'Power BI', figura: faWindows },
    { termo: 'Docker', figura: faDocker },
    // Adicione mais objetos à coleção conforme necessário
  ]);

  return (
    <>
    <h1 className='text-white font-bold text-base sm:text-xl lg:text-xl pt-10'>Tecnologias que possuo habilidades</h1>
    <div className="flex text-white flex-wrap sm:pl-30 sm:pr-30 pt-10 pb-30 justify-center">
      {collection.map((item, index) => (
        <div className='flex flex-col items-center p-10' key={index}>
          <FontAwesomeIcon className=' text-8xl' icon={item.figura} />
          <a className='icon-skill-text'>{item.termo}</a>
        </div>
      ))}
    </div>
    </>
  );
}

export default HomepageSlider;