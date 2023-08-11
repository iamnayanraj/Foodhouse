import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import Signin from "./signin";
import "../../index.css";
import CartLink from "./cartLink";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderLinks />
      <CartLink />
      <Signin />
    </div>
  );
};

export default Header;
