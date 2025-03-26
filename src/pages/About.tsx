// src/pages/About.tsx
import { motion } from "framer-motion";
import React from "react";

const About: React.FC = () => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.9, delay: 0.03 }}
  >
    <div className="lg:pt-10 lg:pb-10 text-gray-300">
      <div className="max-w-3xl mx-auto p-6 bg-gray-700 text-white rounded-lg shadow-lg">
        {/* Header */}
        <header className="text-center mb-6 mt-6">
          <h1 className="text-3xl font-bold">Sobre mim</h1>
        </header>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">Origem</h2>
          <div className="mb-2">
            <p className="text-base  pb-1 mb-3">
              Sou natural de Feira de Santana, a segunda maior cidade do estado
              da Bahia. Realizei o meu ensino fundamental e médio em escola
              pública, nascido e criado na periferia da minha cidade. Sempre com
              o objetivo de voar cada vez mais alto. Apesar de todas as
              dificuldades que enfrentei na minha infância e adolescência,
              sempre acreditei que estudar era a única forma de mudar a vida da
              minha família. Lembro-me de minha mãe enfrentando diversas
              humilhações para pagar as contas e garantir que eu terminasse o
              ensino básico. Nunca permiti desistir de nada; esse é um lema que
              carrego até hoje. Enfrentando uma rotina pesada de estudar e
              trabalhar, sempre entendi que aquele sacrifício valeria a pena e
              que um dia alcançaria meus objetivos.
            </p>
          </div>
        </section>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Início da carreira
          </h2>
          <div className="mb-2">
            <p className="text-base  pb-1 mb-3">
              Desde os 14 anos, eu sabia que precisava de um curso de nível
              superior para garantir meu sucesso profissional. Naquela época,
              escolhi trilhar o caminho da administração de empresas,
              acreditando ser minha vocação. No entanto, tive minha primeira
              frustração profissional. Não conseguia me encaixar na
              administração; sentia-me um "peixe fora d'água". Mas minha
              história não permitia desistir, então insisti até onde consegui.
              Chegou um momento em que percebi que precisava "respirar fora do
              mar" e começar a observar as oportunidades ao meu redor. Nessa
              época, estava trabalhando na área de planejamento de um
              call-center, onde tive minha primeira imersão na área de
              tecnologia, mais especificamente em análise de dados, trabalhando
              com Excel, VBA e, posteriormente, com a linguagem SQL. Foi aí que
              percebi que essa área realmente me dava satisfação.
            </p>
          </div>
        </section>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Descobrindo a programação
          </h2>
          <div className="mb-2">
            <p className="text-base  pb-1 mb-3">
              Se há uma coisa que me levou além do que eu imaginava, foi a minha
              curiosidade e minha insistência. Lembro-me de quando procurei
              scripts VBA para otimizar um dashboard de acompanhamento; foi aí
              que comecei a ser levado pelos algoritmos até a programação. Foi
              amor à primeira vista. Conheci o Python, SQL e JavaScript, e a
              partir daí nunca mais parei de estudar. Entrei na faculdade de
              Análise e Desenvolvimento de Sistemas e, para complementar,
              participei de diversos Bootcamps, como os promovidos pelo Potência
              Tech by iFood e Santander Becas, em parceria com a DIO. Hoje,
              olhando para o meu passado, vejo que trabalhar com o que gosto é
              uma enorme realização profissional. Sempre recordo das pessoas que
              me apoiaram e estiveram ao meu lado, incentivando-me nos momentos
              em que a vontade de desistir era grande.
            </p>
          </div>
        </section>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Quais skills já possuo?
          </h2>
          <div className="mb-2">
            <p className="text-base  pb-1 mb-3">
              Sou um desenvolvedor com uma sólida experiência tanto no
              desenvolvimento de sistemas Front-End quanto Back-End, com foco em
              criação de soluções eficientes, seguras e escaláveis. Tenho uma
              paixão por trabalhar com tecnologias que impulsionam a automação e
              otimizam processos, e sou especializado na criação de interfaces
              dinâmicas e responsivas usando React e TypeScript. Além disso, sou
              habilidoso na construção de aplicações desktop com Tauri,
              integrando perfeitamente front-end e back-end. No campo do
              Back-End, tenho profundo conhecimento em Rust, permitindo-me
              desenvolver soluções de alta performance e segurança. Também sou
              especializado em Banco de Dados SQL, com experiência em criação,
              exclusão e atualização de tabelas, índices, dados e até mesmo no
              desenvolvimento de queries complexas para consultas eficientes.
              Meu trabalho inclui a criação de procedures, triggers e views,
              além da manutenção e gerenciamento de dados, incluindo estratégias
              de backup e recuperação. Minha experiência em análise de dados me
              permite aplicar soluções robustas, utilizando Python e bibliotecas
              como Pandas para manipulação e visualização de dados, além de
              integrar e otimizar processos com APIs. Tenho também um sólido
              entendimento de práticas de ETL (Extração, Transformação e Carga),
              automatizando e organizando fluxos de dados. Além de minhas
              habilidades técnicas, estou sempre em busca de novos desafios e
              oportunidades para aprimorar meus conhecimentos e ajudar a criar
              soluções tecnológicas inovadoras e de alto impacto.
            </p>
          </div>
        </section>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Rogerioverso
          </h2>
          <div className="mb-2">
            <p className="text-base  pb-1 mb-3">
              No meio de uma rotina corrida, encontro tempo para minhas paixões:
              jogar, assistir filmes e séries. No mundo dos games, tenho
              preferência por jogos de corrida como Gran Turismo, Need For
              Speed, Forza Horizon, e jogos de simulação, como Euro Truck
              Simulator 2, Farming Simulator e Cities Skylines. No que diz
              respeito a filmes, gosto de dois nichos: ficção científica, com
              títulos como Star Wars, Interestelar, Independence Day e Sinais, e
              comédias e filmes de ação – afinal, ninguém é de ferro. Minhas
              séries favoritas incluem The Blacklist, The Handmaid's Tale, Star
              Trek, Dragon Ball Z e Dark. Estava planejando criar um site
              portfolio que unisse minhas duas paixões: programar e ficção
              científica. E assim surgiu o Rogerioverso, meu espaço no universo
              da internet para expor meus trabalhos, projetos e dicas. Além de
              aprender a programar, acredito que é importante ajudar quem está
              começando.
            </p>
          </div>
        </section>
        <section className="pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Conclusão
          </h2>
          <div className="mb-6">
            <p className="text-base  pb-1 mb-3">
              A vida não é fácil, e nunca será. Precisamos trabalhar arduamente
              todos os dias para conquistar nossos objetivos. Por isso, sempre
              digo: seja o escritor da sua própria história. Nunca permita que
              alguém aponte um dedo, dizendo que você nunca será nada, pois quem
              constrói seu futuro é você. Eu acreditei nisso e consegui avançar
              muito, e sei que poderei avançar ainda mais. Um dia, padawan, no
              futuro, um mestre Jedi.
            </p>
          </div>
        </section>
      </div>
    </div>
    </motion.div>
  );
};

export default About;
