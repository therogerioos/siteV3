import {
  GithubLogo,
  InstagramLogo,
  LinkedinLogo,
  List,
  TiktokLogo,
  X,
  YoutubeLogo,
} from "@phosphor-icons/react";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Header: React.FC = () => {
  const location = useLocation();
  const [activeToggle, setActiveToggle] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path
      ? "text-white"
      : "text-gray-400 hover:text-gray-300";
  };

  const toggle = () => {
    setActiveToggle(prevState => !prevState);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setActiveToggle(false); // Desativa o toggle se a largura for maior que 640px
      } else {
        setActiveToggle(true); // Ativa o toggle se a largura for menor ou igual a 640px
      }
    };

    // Adiciona o event listener para resize
    window.addEventListener("resize", handleResize);

    // Chama a função handleResize para definir o estado inicial
    handleResize();

    // Limpeza do event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-10 bg-[#181C23] text-white shadow-sm ">
      <div className="sm:hidden absolute right-8 top-4 text-4xl text-bold p-2 cursor-pointer select-none">
        {!activeToggle ?
        <X onClick={toggle}/> : <List onClick={toggle}/>
        }
        
      </div>
      <div className="sm:max-w-7xl sm:mx-auto sm:px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center sm:h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold mt-8 ml-10 mb-8 sm:mb-0 sm:ml-0 sm:mt-2 sm:text-2xl select-none">
              THEROGERIOOS
            </span>
          </Link>
{!activeToggle &&
          <nav className="flex flex-col mt-5 p-5 ml-10 sm:ml-0 sm:flex-row sm:mt-1 sm:space-x-2 sm:text-sm lg:space-x-8 md:space-x-5 sm:space-x-3 sm:text-sm select-none">
            <Link to="/" className={`${isActive("/")} font-bold`}>
              Início
            </Link>
            <Link
              to="/portfolio"
              className={`${isActive("/portfolio")} font-bold`}
            >
              Portfólio
            </Link>
            <Link
              to="/tutorial"
              className={`${isActive("/tutorial")} font-bold`}
            >
              Tutoriais
            </Link>
            <Link to="/resume" className={`${isActive("/resume")} font-bold`}>
              Currículo
            </Link>
            <Link to="/about" className={`${isActive("/about")} font-bold`}>
              Sobre
            </Link>
          </nav>
        }
          <div className="flex space-x-4 hidden lg:flex">
            <a
              href="https://github.com/therogerioos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <GithubLogo size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/rogeriooliveiradossantos/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <LinkedinLogo size={25} />
            </a>
            <a
              href="https://www.instagram.com/therogerioos_dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <InstagramLogo size={25} />
            </a>
            <a
              href="https://www.tiktok.com/@therogerioos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <TiktokLogo size={25} />
            </a>
            <a
              href="https://www.youtube.com/@therogerioos"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white"
            >
              <YoutubeLogo size={25} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
