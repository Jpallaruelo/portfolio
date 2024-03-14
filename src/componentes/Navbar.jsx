import React from 'react';
import '../navbar.css';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);

    const handleNavigate = () => {
        navigate('/shop');
    };

    // Calcular la cantidad total de elementos en el carrito
    const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <nav>
            <div onClick={handleNavigate}>
                <img className='logoimage' src="/images/libroslogo.webp" alt="" />
            </div>
            <div onClick={handleNavigate} className="cart-icon-container">
            {totalItems > 0 && <span className="badge">{totalItems}</span>}
                <img className='carrito-image' src="/images/reactcarrito.png" alt="" />
               
            </div>
        </nav>
    );
};

export default Navbar;
