import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const CartLink = () => {
  const items = useSelector((store) => store.cart.items);

  return (
    <Link className="link" to="/cart">
      <h3>{`Cart : ${items.length} items`}</h3>
    </Link>
  );
};

export default CartLink;
