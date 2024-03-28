import "./Navbar.css";
import logo from "../../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { scrollToTop } from "../../helper/ScrollToTop";
const Navbar = () => {
  return (
    <div className="navBarWrapper">
      <Link onClick={scrollToTop} className="logoWrapper" to="/">
        <img className="logo" src={logo} alt="BarberLogo" />
      </Link>
      <div className="linkWrapper">
        <div onClick={scrollToTop} className="navLink">
          <Link  to="/reservation">
            <p>Запази час</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
