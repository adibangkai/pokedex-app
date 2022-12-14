import { Link } from "react-router-dom";
import logo from "./assets/pokemontypes/logo-pokemon.svg";
import "./index.css";
const Header = () => {
  return (
    <section id="header" className="header">
      <Link to="/">
        <img src={logo} alt="" className="pt-10 ml-20" />
      </Link>
    </section>
  );
};

export default Header;
