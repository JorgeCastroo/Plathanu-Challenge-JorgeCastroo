import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Rocket from "../pages/Rocket";

const AppRoutes: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rocket/:id" element={<Rocket />} />
      </Routes>
    </Router>
  );
};

export { AppRoutes };
