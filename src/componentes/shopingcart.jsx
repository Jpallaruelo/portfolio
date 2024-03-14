import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "./cartslice"; 
import '../table.css';// Importa la acción removeFromCart desde tu slice de Redux

const Shop = () => {
    const dispatch = useDispatch(); // Obtiene la función dispatch de Redux
    const cartItems = useSelector(state => state.cart.items);

    // Define la función para eliminar un producto del carrito
    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart({ id }));
    };

    return (
        <div className="table-container">
            <h3>Productos en el carrito:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Título</th>
                        <th>Cantidad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map(item => (
                        <tr key={item.id}>
                            <td><img src={item.image} alt={item.title} className="product-image" /></td>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>
                                <button className="button" onClick={() => handleRemoveFromCart(item.id)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Shop;

