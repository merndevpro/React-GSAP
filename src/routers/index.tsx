import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import GsapPage from "../pages/Gsap";
import ReactHookForm from "../pages/React-hook-form";
import Navbar from "../layout/Navbar";
import ExtraPge from "../pages/Extra";

const MainRouter: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='gsap' element={<GsapPage />} />
        <Route path='form' element={<ReactHookForm />} />
        <Route path='extra' element={<ExtraPge />} />
        <Route path='/*' element={<Navigate to='form' replace={true} />} />
      </Routes>
    </div>
  );
};

export default MainRouter;
