import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import Signin from "./signin";
import "../../index.css";
import CartLink from "./cartLink";
import { userContext } from "../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(userContext);

  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>

      <HeaderLinks />
      <CartLink />
      {
        <h4>
          {user.name}-{user.email}
        </h4>
      }
      <Signin />
    </div>
  );
};

export default Header;
