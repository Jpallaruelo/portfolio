import React from 'react';
import '../navbar.css'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const chandlenavigate = () => {
        navigate('/shop');


    }
    return (
        <nav>
            <div >
                <img className='logoimage' src="/images/libroslogo.webp" alt="" />
            </div>
            <div onClick={chandlenavigate}>
                <img className='carrito-image' src="/images/reactcarrito.png" alt="" />
            </div>
        </nav>
    );
}

export default Navbar;
