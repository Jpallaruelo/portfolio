import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    const NavStyles = {

        color: "#fff",
        listStyle: "none",
        textDecoration: "none"
    }
    return (
        <nav>
            <Link to="/cartMain" style={NavStyles}>   {/* Establece la ruta a la que quieres navegar */}
                <h2>Store</h2>
            </Link>
            <ul className="nav-list">
                <Link to="/cart" style={NavStyles}>
                    <li>
                        cart items: <span className="cart-count">0</span>
                    </li>
                </Link>

            </ul>
        </nav>
    );
};