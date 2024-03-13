import React from 'react';
import '../navbar.css'

const Navbar = () => {
    return (
        <nav>
            <div>
                <img className='logoimage' src="/images/libroslogo.webp" alt="" />
            </div>
            <div>
                <img className='carrito-image' src="/images/reactcarrito.png" alt="" />
            </div>
        </nav>
    );
}

export default Navbar;
