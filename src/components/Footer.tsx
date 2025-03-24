import React from 'react';
import { GithubLogo, InstagramLogo, LinkedinLogo, TiktokLogo, YoutubeLogo } from '@phosphor-icons/react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#181C23] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className='mr-20'>
            <h3 className="text-lg font-semibold mb-4">Sobre mim</h3>
            <p className="text-gray-400">
            Este espaço foi criado para promover minhas criações no universo da programação e, ao mesmo tempo, ajudar no desenvolvimento de novos Jedi da programação.
            </p>
            <p className="mt-5">"Seja o escritor de sua própria história!"</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Acesso Rápido</h3>
            <ul className="space-y-2 text-gray-400">
                <li><a href="/" className="hover:text-white">Início</a></li>
                <li><a href="/portfolio" className="hover:text-white">Portfólio</a></li>
                <li><a href="/tutorial" className="hover:text-white">Tutoriais</a></li>
                <li><a href="/resume" className="hover:text-white">Currículo</a></li>
                <li><a href="/about" className="hover:text-white">Sobre mim</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Redes Sociais</h3>
            <div className="flex space-x-4">
            <a href="https://github.com/therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <GithubLogo size={32} />
              </a>
              <a href="https://www.linkedin.com/in/rogeriooliveiradossantos/"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <LinkedinLogo size={32} />
              </a>
              <a href="https://www.instagram.com/therogerioos_dev/"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <InstagramLogo size={32} />
              </a>
              <a href="https://www.tiktok.com/@therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <TiktokLogo size={32} />
              </a>
              <a href="https://www.youtube.com/@therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <YoutubeLogo size={32} />
              </a>
            </div>
            <div className="mt-10">
              <h6 className="mb-3">Desenvolvido por:</h6>
              <h1 className="text-3xl font-extrabold">THEROGERIOOS</h1>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} THEROGERIOOS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;