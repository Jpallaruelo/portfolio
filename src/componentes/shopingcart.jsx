import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "./cartslice"; // Importa decreaseQuantity desde tu slice
import { FaTimes, FaPlus,FaMinus } from "react-icons/fa"; // Importa FaTimes desde react-icons/fa
import "../table.css"; // Importa los estilos CSS
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const toggleNavigate = () => {
    navigate("/tienda");
    console.log("navegar");
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id })); // Despacha la acción decreaseQuantity con el ID del artículo
  };

  // Calcular la cantidad total de artículos y el precio total
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="table-container">
      <h3>
        Products{" "}
        <img
          onClick={() => toggleNavigate()}
          className="logoimagecarrito"
          src="/images/libroslogo.webp"
          alt=""
        />
      </h3>

      <table className="table">
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Quantity</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id}>
              <td>
                <img
                  src={item.image}
                  alt={item.title}
                  className="product-image"
                />
              </td>
              <td>{item.title}</td>
              <td>
                {item.quantity}
                <FaMinus
                  className="icon-minus"
                  onClick={() => handleDecreaseQuantity(item.id)} // Llama a la función para disminuir la cantidad
                />
                <FaPlus
                  className="icon-plus"
                  onClick={() => handleIncreaseQuantity(item.id)}
                />
              </td>
              <td>
                <FaTimes
                  className="icon-x"
                  onClick={() => handleRemoveFromCart(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Div que muestra la cantidad total de artículos y el precio total */}
      <div className="cart-summary">
        <p>Total Items: {totalQuantity}</p>
        <p>Total Price: {totalPrice.toFixed(2)} € </p>
      </div>
      <button className="button">BY</button>
    </div>
  );
};

export default Shop;
