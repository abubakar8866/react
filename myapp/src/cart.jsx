import React,{useContext} from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove, increment, decrement } from "./cartSlice";
import { ThemeContext } from "./ThemeContext";

function Cart() {
  let items = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const {theme} = useContext(ThemeContext);

  return (
    <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
      {items.map((i) => (
        <div key={i.id}>
          <img src={i.image} alt="" width="100" />
          <h3>{i.title}</h3>
          <p>{i.price}</p>

          <button onClick={() => dispatch(decrement(i.id))}>-</button>
          <span>{i.quantity}</span>
          <button onClick={() => dispatch(increment(i.id))}>+</button>

          <button onClick={() => dispatch(remove(i.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default Cart;