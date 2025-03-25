
import { useState } from "react";
import rogerioversolazer from "../assets/images/avatar-party-1.svg";


function CardHomeAbout() {
  const [collection] = useState([
    {
      pagina: "Sobre mim",
      caminho: "#/about",
      conteudo:
        "Primeiramente, agradeço pela visita ao Rogerioverso. Eu criei uma aba com detalhamentos sobre quem sou, o que faço, meus planos e minhas áreas de estudo, apresentando um pouco da minha carreira profissional. Portanto, caso não tenha muito tempo para verificar mais detalhes, vou fazer um resumo bem simples. Quando decidi criar meu espaço na internet, quis unir minhas paixões pelos games, filmes de ficção científica e minha outra grande paixão: programar! Descobri essa paixão um pouco tarde, pois sempre acreditei que seria administrador de empresa. No entanto, quando conheci o mundo da programação, foi amor à primeira vista. E aqui estou, desenvolvendo do zero um site do meu jeito, do meu estilo e compreendendo todo o conhecimento que adquiri até a criação desse Rogerioverso. Poderia ser melhor? Sim! Nada é perfeito, sempre há margem para melhoria, mas é um prêmio pessoal conseguir criar algo do zero e entregar a aplicação na web para pessoas como você, que podem ser um padawan como eu ou um mestre Jedi interessado em conhecer meu trabalho.",
    },


  ]);

  return (
    <>

      <div className="flex flex-col items-center sm:m-10 sm:mb-20 sm:p-5 lg:p-30 justify-center bg-cover bg-center rounded-3xl shadow-2xl" style={{ backgroundImage: `url(${rogerioversolazer})`}}>
      <div className="flex flex-wrap items-center justify-center ">
        {collection.map((item, index) => (
          <div
            className="max-w-5xl  rounded-2xl overflow-hidden bg-white p-10 m-5 border border-gray-200 bg-white/30 backdrop-blur-md border border-white/20 shadow-2xl"
            key={index}
          >
            <h2 className="text-xl font-bold text-gray-900">
              <a className="h2-portfolio" href={item.caminho}>
                {item.pagina}
              </a>
            </h2>
            <p className="text-gray-800 mt-2">{item.conteudo}</p>
          </div>
        ))}
        </div>
      </div>
    </>
  );
}

export default CardHomeAbout;
