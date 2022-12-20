import Button from "../container/Button.js";
import Logo from "../container/Logo";
import logo from "../images/logo.jpg";
import CartWidget from "../container/CartWidget";
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className="nav__bar d-flex justify-content-between">
        <div className="logo">
        <Link to='/'><Logo imagen={logo}>  </Logo></Link>
        </div>
        <h1 className="navbar__h1">HeartBreaker Commerce</h1>
        <div className="navBottoms">
          <Link to="/category/10"> <Button msg="REMERAS"></Button> </Link>
          <Link to="/category/20"> <Button msg="BUZOS"></Button> </Link>
          <Link to="/category/30"> <Button msg="PANTALONES"></Button> </Link>
          <Link to="/category/40"> <Button msg="ZAPATILLAS"></Button> </Link>
          <Link to="/Cart"> <CartWidget className = "Carrito__logo"></CartWidget> </Link>
          
          
          
        </div>
      </div>
    </>
  );
}

export default NavBar;
