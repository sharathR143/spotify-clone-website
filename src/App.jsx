import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MianHome from "./MainHome";
import PREMIUM from "./PREMIUM";
import SUPPORT from "./SUPPORT";
import DOWNLOAD from "./DOWNLOAD";
import SIGNUP from "./SIGNUP";
import LOGIN from "./LOGIN";
import Home from "./HOME";
import Nav from "./Components/Nav";
import ENTERHOME from "./ENTERHOME";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Home>
          <Nav />
        </Home>
        <Routes>
          <Route element={<MianHome />} path="/" />
          <Route element={<PREMIUM />} path="/PREMIUM" />
          <Route element={<SUPPORT />} path="/SUPPORT" />
          <Route element={<DOWNLOAD />} path="/DOWNLOAD" />
          <Route element={<SIGNUP />} path="/SIGNUP" />
          <Route element={<LOGIN />} path="/LOGIN" />
          <Route element={<ENTERHOME />} path="/ENTERHOME" />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
