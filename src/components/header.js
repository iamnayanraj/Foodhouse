import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import Signin from "./signin";
import "../../index.css";
import CartLink from "./cartLink";
import userContext from "../utils/userContext";
import { useContext } from "react";

const Header = () => {
  const { name, email } = useContext(userContext);

  return (
    <div className="header">
      <Logo />
      <HeaderLinks />
      <CartLink />
      {
        <h1>
          {name}-{email}
        </h1>
      }
      <Signin />
    </div>
  );
};

export default Header;
