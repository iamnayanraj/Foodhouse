import "../../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderLinks = () => {
  const items = useSelector((store) => store.cart.items);

  return (
    <ul className="header-links">
      <Link className="link" to="/">
        <li key="home">Home</li>
      </Link>
      <Link className="link" to="/about">
        <li key="about">About Us</li>
      </Link>
      <Link className="link" to="/contact">
        <li key="contact">Contact Us</li>
      </Link>
      <Link className="link" to="/instamart">
        <li key="instamart">Instamart</li>
      </Link>
    </ul>
  );
};

export default HeaderLinks;
