import Button from "./Button.js";
import Logo from "./Logo";
import logo from "../../src/images/logo.jpg";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <>
      <div className="nav__bar d-flex justify-content-between">
        <div className="logo">
          <Logo imagen={logo} />
        </div>
        <h1 className="navbar__h1">HeartBreaker Commerce</h1>
        <div className="navBottoms">
          <Button msg="SHOP" />
          <Button msg="ABOUT US" />
          <Button msg="CART" />
          <CartWidget />
        </div>
      </div>
    </>
  );
}

export default NavBar;
