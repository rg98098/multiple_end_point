import { useState } from "react";
import { Routes, Route, Outlet, NavLink } from "react-router-dom";
import About from "./components/Home/About";
import Home from "./components/Home/Home";
import Pokemon from "./components/molecules/Pokemon";
import Starwars from "./components/molecules/Starwars";
import RickyMorty from "./components/molecules/RickyMorty";

const App = () => {
  const [isVisible, setVisible] = useState(false);

  return (
    <Routes>
      <Route element={<Layout visibility={isVisible} />}>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about" element={<About handler={setVisible} />} />
        <Route path="pokemon" element={<Pokemon />} />
        <Route path="starwars" element={<Starwars />} />
        <Route path="rickymorty" element={<RickyMorty />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Route>
    </Routes>
  );
};

const Layout = ({ visibility }) => {
  const style = ({ isActive }) => ({
    fontWeight: isActive ? "bold" : "normal",
    marginRight: "1rem",
    pointerEvents: !visibility ? "auto" : "none",
    cursor: !visibility ? "pointer" : "default",
  });

  return (
    <>
      <h1>React Router with Multi End Point</h1>

      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <NavLink to="/home" style={style}>
          Home
        </NavLink>
        <NavLink to="/about" style={style}>
          About
        </NavLink>
        <NavLink to="/pokemon" style={style}>
          Pokemon
        </NavLink>
        <NavLink to="/starwars" style={style}>
          Starwars
        </NavLink>
        <NavLink to="/rickymorty" style={style}>
          Ricky And Morty
        </NavLink>
      </nav>

      <main style={{ padding: "1rem 0" }}>
        <Outlet />
      </main>
    </>
  );
};

export default App;
