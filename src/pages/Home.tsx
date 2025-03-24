// src/pages/Home.tsx
import React from "react";
import avatarSorrindo from "../assets/images/avatar-1.svg";
import "animate.css";
import HomepageSlider from "../components/HomepageSlider";
import CardHome from "../components/CardHome";
import CardHomeAbout from "../components/CardHomeAbout";
import SetaScroll from "../components/SetaScroll";


const Home: React.FC = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-center pt-10 pb-5 lg:pt-30 lg:pb-20">
        <div>
          <h1 className="text-white font-bold text-5xl lg:text-7xl sm:mr-5 mb-5 animate__animated animate__slideInDown sm:animate__slideInRight">
            Olá,
          </h1>
          <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-5xl mr-10 mb-5 animate__animated animate__zoomIn">
            sou Rogerio Oliveira!
          </h1>
          <h1 className="text-white text-2xl pb-3 lg:text-3xl animate__animated animate__backInDown">
            Desenvolvedor de Sistemas
          </h1>
        </div>
        <div className="relative w-80 h-80 rounded-full overflow-hidden bg-gray-400 animate__animated animate__zoomIn">
          <img
            src={avatarSorrindo}
            alt="Imagem recortada"
            className="absolute top-2 bottom-0 w-80 h-80 animate__animated animate__slideInUp"
          />
        </div>
        
      </div>
      <SetaScroll/>
      <div className="flex items-center justify-center flex-col">
        <HomepageSlider />
      </div>
      <div className="flex items-center justify-center flex-col ">
        <CardHome />
      </div>
      <div className="flex items-center justify-center flex-col ">
        <CardHomeAbout />
      </div>
    </>
  );
};

export default Home;
