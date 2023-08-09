import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import Signin from "./signin";
import "../../index.css";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <HeaderLinks />
      <Signin />
    </div>
  );
};

export default Header;
