import { Route, Routes, Navigate } from "react-router-dom";
import { Navbar } from "../../ui";
import { Marvel, DC, Search, Hero } from "../pages";

export const HeroesRoutes = () => {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="marvel" element={<Marvel />} />
          <Route path="dc" element={<DC />} />
          <Route path="search" element={<Search />} />
          <Route path="hero" element={<Hero />} />
          <Route path="/" element={<Navigate to="/marvel" />} />
        </Routes>
      </div>
    </>
  );
};
