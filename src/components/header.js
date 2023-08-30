import Logo from "./logo";
import HeaderLinks from "./headerLinks";
import Signin from "./signin";
import "../../index.css";
import CartLink from "./cartLink";
import { userContext } from "../utils/context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/hooks/useOnline";

const Header = () => {
  const { user } = useContext(userContext);

  const isOnline = useOnline();
  return (
    <div className="header">
      <Link to="/">
        <Logo />
      </Link>

      <HeaderLinks />
      <CartLink />

      {isOnline && (
        <h4>
          {user.name}-{user.email}
        </h4>
      )}
      {isOnline ? "🟢" : "🔴"}
      {isOnline && <Signin />}
    </div>
  );
};

export default Header;
