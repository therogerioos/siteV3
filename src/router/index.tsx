// src/router/index.tsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Portfolio from "../pages/Portfolio";
import Tutorial from "../pages/Tutorial";
import Resume from "../pages/Resume";
import About from "../pages/About";
import ProjectDetail from "../pages/ProjectDetail";
import TutorialDetail from "../pages/TutorialDetail";
import "../index.css"

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* Rota principal com Layout */}
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/portfolio/:id" element={<ProjectDetail />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/tutorial/:id" element={<TutorialDetail />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
