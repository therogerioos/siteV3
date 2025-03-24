// src/components/Layout.tsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom"; // Importa o Outlet para renderizar as páginas filhas

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="bg-[#232832]">
        <Outlet /> {/* Aqui o conteúdo das páginas será injetado */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
