import React from 'react';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>Precio: {item.price}</p>
            <p>Cantidad: {item.quantity}</p>
            <button className='button' onClick={() => removeFromCart(item)}>Eliminar del carrito</button>
        </div>
    );
}

export default CartItem;
