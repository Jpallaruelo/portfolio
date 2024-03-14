import React from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch desde react-redux
import { addToCart } from './cartslice'; // Importa la acción addToCart desde tu slice de Redux
import Navbar from './Navbar';
import Products from './Cardtienda';

const availableProducts = [
    {
        id: 1,
        title: 'El Señor de los Anillos',
        author: 'J.R.R. Tolkien',
        price: 25.99,
        image: '/images/librolaravel.jpg'
    },
    {
        id: 2,
        title: 'Cien años de soledad',
        author: 'Gabriel García Márquez',
        price: 19.99,
        image: 'images/libronode.jpg'
    },
    {
        id: 3,
        title: 'Harry Potter y la piedra filosofal',
        author: 'J.K. Rowling',
        price: 15.50,
        image: '/images/librolaravel.jpg'
    }
];

const Tienda = () => {
    const dispatch = useDispatch(); // Obtiene la función dispatch de Redux

    // Define la función para agregar al carrito
    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Despacha la acción addToCart con el producto como argumento
    };

    return (
        <div className="store">
            <Navbar />
            <div className="cards-carrito">
                {availableProducts.map(product => (
                    <Products key={product.id} product={product} addToCart={handleAddToCart} />
                ))}
            </div>
        </div>
    );
}

export default Tienda;
