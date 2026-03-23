import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "./cartSlice";
import { ThemeContext } from "./ThemeContext";

function Axios() {
  const [data, setData] = useState([]);
  let dispatch = useDispatch();
  let cartItems = useSelector((state) => state.cart);
  const {theme} = useContext(ThemeContext);

  function addItem(item) {
    let exists = cartItems.find((i) => i.id === item.id);
    if (exists) {
      alert("Product is already in cart");
    } else {
      dispatch(add(item));
    }
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => {
        let updated = res.data.map((i) => ({
          ...i,
          quantity: 1
        }));
        setData(updated);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={`${theme=="light"?"bg-white text-black":"bg-black text-white"}`}>
      {data.map((i) => (
        <div key={i.id}>
          <img src={i.image} alt="" width="100" />
          <h3>{i.title}</h3>
          <p>{i.price}</p>
          <button onClick={() => addItem(i)}>Add To Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Axios;