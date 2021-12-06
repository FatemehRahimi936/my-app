import "../css/DoctorList.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeDoctor from "./HomeDoctor";
import DetailDoctor from "./DetailDoctor";
import ImageDoctor from "./ImageDoctor";

function App() {
  return (
    <div>
      {/* <header>
        <h1>Welcome to React Router!</h1>
      </header> */}

      <Routes>
        <Route path="/" element={<HomeDoctor />} />
        {/* <Route path="DetailDoctor/" element={<DetailDoctor />} /> */}
        <Route path="DetailDoctor/:id" element={<DetailDoctor />} />
        <Route path="ImageDoctor" element={<ImageDoctor />} />
      </Routes>
    </div>
  );
}

export default App;
