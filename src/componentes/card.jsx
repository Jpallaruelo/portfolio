import React from "react";
import { Navbar } from "../componentesCarrito/Navbar";
import { ItemList } from "../componentesCarrito/itemList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ShoopingCart } from "../componentesCarrito/ShoppingCart";


const Shopping = () => {


    return (
        <div>
            <Router>
                <Navbar></Navbar>
                <Routes>

                    <Route path="/" element={<ItemList />}></Route>

                </Routes>

            </Router>


        </div>
    )


}

export default Shopping