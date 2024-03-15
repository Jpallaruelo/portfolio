import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity, removeAllFromCart } from "./cartslice";
import { FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import "../table.css";
import { useNavigate } from "react-router-dom";

const Shop = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();
  const [actionImage, setActionImage] = useState(""); // Estado local para la imagen de acción

  const toggleNavigate = () => {
    navigate("/tienda");
    console.log("navegar");
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
     // Establecer la imagen cuando se elimina un artículo
  };

  const handleRemoveAllFromCart = () => {
    dispatch(removeAllFromCart());
     // Establecer la imagen cuando se limpia el carrito
  };

  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
    // Establecer la imagen cuando se aumenta la cantidad
  };

  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
     // Establecer la imagen cuando se disminuye la cantidad
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
      {/* Mostrar la imagen de acción */}
      {actionImage && <img src={actionImage} alt="Action" />}
      <button className="button">BY</button>
      <button onClick={handleRemoveAllFromCart} className="button">CLEAN</button>
    </div>
  );
};

export default Shop;
