import { Link } from "react-router-dom";
import logo from "./assets/pokemontypes/logo-pokemon.svg";
import "./index.css";
const Header = () => {
  return (
    <section
      id="header"
      className="header flex justify-center md:justify-start "
    >
      <Link to="/pokedex-app">
        <img src={logo} alt="" className="pt-10 md:ml-20" />
      </Link>
    </section>
  );
};

export default Header;
