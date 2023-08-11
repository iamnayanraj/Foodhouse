import "../../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLinks = () => {
  const items = useSelector((store) => store.cart.items);

  return (
    <ul className="header-links">
      <Link className="link" to="/">
        <li>Home</li>
      </Link>
      <Link className="link" to="/about">
        <li>About Us</li>
      </Link>
      <Link className="link" to="/contact">
        <li>Contact Us</li>
      </Link>
    </ul>
  );
};

export default HeaderLinks;
