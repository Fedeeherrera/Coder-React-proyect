import Button from "../container/Button.js";
import Logo from "../container/Logo";
import logo from "../images/logo.jpg";
import CartWidget from "../container/CartWidget";

function NavBar() {
  return (
    <>
      <div className="nav__bar d-flex justify-content-between">
        <div className="logo">
          <Logo imagen={logo} />
        </div>
        <h1 className="navbar__h1">HeartBreaker Commerce</h1>
        <div className="navBottoms">
          <Button msg="REMERAS" />
          <Button msg="BUZOS" />
          <Button msg="PANTALONES" />
          <Button msg="ZAPATILLAS" />
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default NavBar;
