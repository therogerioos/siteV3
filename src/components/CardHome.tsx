import { GithubLogo, InstagramLogo, LinkedinLogo, TiktokLogo, YoutubeLogo } from "@phosphor-icons/react";
import { useState } from "react";
import rogerioverso from "../assets/images/rogerioverso.svg";


function CardHome() {
  const [collection] = useState([
    {
      pagina: "Portfólio",
      caminho: "#/portfolio",
      conteudo:
        "Esse é o espaço onde ficará todo o meu talento, habilidades e desenvolvimento profissional. Não pense que estou parado no meio do Rogerioverso, pois, estou vivendo em expansão para o infinito e além!!!",
    },
    {
      pagina: "Tutoriais",
      caminho: "#/tutorial",
      conteudo:
        "Conhecimento nunca deverá ficar privado, seria muito egoísmo. Por isso, criei essa seção para demonstrar de forma minuciosa diversos tutoriais que ajudarão aos pequenos gafanhotos que estão viajando pela Rogerioverso.",
    },
    {
      pagina: "Currículo",
      caminho: "#/resume",
      conteudo:
        "Nunca deveremos abandonar o tradicional, mas evolução é necessária. Por isso, coloquei o meu currículo em versão web, para que algum mestre Jedi possa me recrutar para seu time.",
    },

  ]);

  return (
    <>

      <div className="flex flex-col items-center sm:m-30 sm:p-5 justify-center bg-cover bg-center rounded-3xl shadow-2xl" style={{ backgroundImage: `url(${rogerioverso})`}}>
      <h1 className="text-white font-bold text-xl lg:text-xl pt-10">
        Veja na Rogerioverso
      </h1>
      <div className="flex flex-wrap items-center justify-center ">
        {collection.map((item, index) => (
          <div
            className="max-w-xs sm:max-w-sm rounded-2xl overflow-hidden bg-white p-2 sm:p-6 sm:m-5 border border-gray-200 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl"
            key={index}
          >
            <h2 className="sm:text-xl font-bold text-gray-900">
              <a className="h2-portfolio" href={item.caminho}>
                {item.pagina}
              </a>
            </h2>
            <p className="text-gray-800 mt-2">{item.conteudo}</p>
          </div>
        ))}
        <div
          className="max-w-xs sm:max-w-sm rounded-2xl overflow-hidden shadow-2xl bg-white p-2 sm:p-6 sm:m-10 border border-gray-200 bg-white/30 backdrop-blur-md border border-white/2"
        >
          <h2 className="text-xl font-bold text-gray-800">
            <a className="h2-portfolio">
                Redes Sociais
            </a>
          </h2>
          <p className="text-gray-900 mt-2 pl-20 pr-20 pt-10 pb-10 flex items-center justify-center">
          <a href="https://github.com/therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-900 hover:text-gray-500">
                <GithubLogo size={32} />
              </a>
              <a href="https://www.linkedin.com/in/rogeriooliveiradossantos/"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-900 hover:text-gray-500">
                <LinkedinLogo size={32} />
              </a>
              <a href="https://www.instagram.com/therogerioos_dev/"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-900 hover:text-gray-500">
                <InstagramLogo size={32} />
              </a>
              <a href="https://www.tiktok.com/@therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-900 hover:text-gray-500">
                <TiktokLogo size={32} />
              </a>
              <a href="https://www.youtube.com/@therogerioos"
                target="_blank"
                rel="noopener noreferrer" className="text-gray-900 hover:text-gray-500">
                <YoutubeLogo size={32} />
              </a>
          </p>
        </div>
        </div>
      </div>
    </>
  );
}

export default CardHome;
