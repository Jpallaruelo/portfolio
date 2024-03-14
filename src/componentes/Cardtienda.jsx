import React from 'react';
import '../Cardproducts.css'; 
import { addToCart } from './cartslice'; // Importa la acción addToCart desde tu slice de Redux

const Products = ({ product, addToCart }) => {
    return (
        <div className="card">
            <img className="card-image" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Precio: {product.price}</p>
            <button className='button' onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
    );
}

export default Products;
