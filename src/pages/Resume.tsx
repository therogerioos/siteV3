// src/pages/Resume.tsx
import { motion } from "framer-motion";
import React from "react";

const Resume: React.FC = () => {
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
          <h1 className="text-3xl font-bold">Rogerio Oliveira dos Santos</h1>
          <p className="text-lg">Desenvolvedor de Sistemas & Analista de Dados</p>
        </header>

        {/* Contact Info */}
        <section className="mb-6 text-center">
          <p>📞 (75) 99205 - 5896</p>
          <p>
            ✉️{" "}
            <a href="mailto:therogerioos@gmail.com" className="underline">
              therogerioos@gmail.com
            </a>
          </p>
          <p>
            🌐{" "}
            <a
              href="https://therogerioos.com.br/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              www.therogerioos.com.br
            </a>
          </p>
        </section>
        <section className="p-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Perfil
          </h2>
          <div className="mb-2">
            <h3 className="text-lg font-bold">Desenvolvedor de Sistemas</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
              Desenvolvimento do sistema Sheets: Gerenciador de propostas comerciais para uma empresa de instalação de placas fotovoltaicas, criado com Tauri.js, utilizando Vite + React + TypeScript no front-end e Rust no back-end, com banco de dados local SQLite.
              </li>
              <li>Desenvolvimento do site www.therogerioos.com.br: Hospedado no GitHub Pages, com domínio adquirido na GoDaddy.com, desenvolvido com Vite + React + TypeScript. O site exibe meu portfólio e tutoriais, que são publicados através do Scriba.</li>
              <li>Desenvolvimento do sistema Scriba: Editor baseado em Draft.js, projetado para buscar dados da API do GitHub no formato JSON. Permite a criação de novos arquivos .json ou a edição de arquivos já armazenados no repositório. A lógica do site processa e exibe o conteúdo dinamicamente conforme os visitantes acessam os links.</li>
              <li>Desenvolvimento de disparador de e-mails marketing: Criação de um script iterativo em Python para envio automatizado de e-mails marketing a um endpoint responsável pela entrega. Desenvolvido com as bibliotecas Pandas (para manipulação de dados) e Tkinter (para interface gráfica).</li>
            </ul>
            <h3 className="text-lg font-bold mt-4">Analista de dados</h3>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>Apliquei o método ETL na minha última experiência de trabalho, extraindo dados de diversas fontes, desenvolvendo mecanismos para organização, padronização de fluxos e processos de tratamento, e carregando as informações no banco de dados para consultas futuras.
              </li>
              <li>Utilizei Pandas e SQL para automatizar processos e otimizar rotinas.</li>
            </ul>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-6 pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Experiências Profissionais
          </h2>
          <div className="mb-4">
            <h3 className="text-lg font-bold">Tel Centro de Contatos</h3>
            <p className="text-sm text-gray-400">
              Analista de Mailing | 2021-2025
            </p>
            <ul className="list-disc list-inside mt-2 text-gray-300">
              <li>
                Elaboração de estratégias para alcance de resultados.
              </li>
              <li>Realizei análises detalhadas para identificar ofensores e oportunidades, visando melhorar o desempenho operacional e otimizar processos.</li>
              <li>Utilizei ferramentas de análise de dados para identificar comportamentos que causavam desvios nas métricas dimensionadas, promovendo correções e ajustes operacionais.</li>
            </ul>
          </div>
        </section>

        {/* Education */}
        <section className="mb-6 pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Experiências Educacionais
          </h2>
          <p>
            Estácio - Formado em tecnológo de Análise e Desenvolvimento de Sistemas (2024)
          </p>
          <p>
            Participação em bootcamp na DIO e ADAtech.
          </p>
        </section>

        {/* Certifications */}
        <section className="mb-10 pl-10 pr-10">
          <h2 className="text-xl font-semibold border-b pb-1 mb-3">
            Habilidades
          </h2>
          <h4 className="mt-4">Habilidades em Banco de Dados SQL:</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Criação, exclusão e atualização de tabelas, índices e dados em bancos de dados SQL.
            </li>
            <li>Desenvolvimento e otimização de queries para consultas eficientes e complexas.
            </li>
            <li> Criação de procedures e triggers para automação de processos. </li>
            <li>Desenvolvimento de views para facilitar a visualização e organização de dados.
            </li>
            <li>Manutenção e gerenciamento de dados, incluindo backup e recuperação.</li>
          </ul>
          <h4 className="mt-4">Desenvolvedor Front-End e Back-End</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Experiência no desenvolvimento de sistemas utilizando React e TypeScript, criando interfaces dinâmicas e responsivas.
            </li>
            <li>Criação de aplicações desktop com Tauri, integrando funcionalidades de front-end e back-end de forma eficiente.
            </li>
            <li>Profundo conhecimento em Rust para desenvolvimento de soluções backend, garantindo alta performance e segurança.</li>
            <li>Habilidade no consumo de APIs para leitura e manipulação de arquivos, permitindo integração de sistemas e otimização de processos.
            </li>
          </ul>
          <h4 className="mt-4">Demais Habilidades Técnicas:</h4>
          <ul className="list-disc list-inside text-gray-300">
            <li>Análise de Dados: Profundo conhecimento em Python para análise de dados, utilizando bibliotecas como Pandas para manipulação e visualização de dados.
            </li>
            <li>Automação: Experiência no uso de Selenium para automação de testes e processos.
            </li>
            <li>ETL: Aplicação de práticas de ETL (Extração, Transformação e Carga) para manipulação e organização de dados.</li>
          </ul>
        </section>
      </div>
    </div>
    </motion.div>
  );
};

export default Resume;
