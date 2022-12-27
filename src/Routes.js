import React from "react";
import MacBookAirM2Two from "pages/MacBookAirM2Two";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/macbookairm2two" element={<MacBookAirM2Two />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
