import { useSelector, useDispatch } from "react-redux";
import { removeItem, clearCart } from "../redux/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const removefromCart = (item) => {
    dispatch(removeItem(item));
  };

  const clear = () => {
    dispatch(clearCart());
  };

  return (
    <>
      {!items.length ? (
        <>
          <h2>Cart is empty!!</h2>
          <h3>Add items</h3>
        </>
      ) : (
        <>
          <h2>Items</h2>
          {items.map((item) => {
            return (
              <>
                <h3>{item}</h3>
                <button
                  onClick={() => {
                    removefromCart(item);
                  }}
                >
                  Remove
                </button>
              </>
            );
          })}
          <button
            onClick={() => {
              clear();
            }}
          >
            Clear Cart
          </button>
        </>
      )}
    </>
  );
};

export default Cart;
