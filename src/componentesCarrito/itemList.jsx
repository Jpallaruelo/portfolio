import React from "react";
import storeItems from "../componentesCarrito/data/products.json"
import { Item } from "./item";
import { Navbar } from "./Navbar";

export const ItemList = () => {


    return (

        <div>
            <Navbar></Navbar>
            <div className="cart-containerShop">
                {
                    storeItems.map((product, index) => {


                        return (<Item key={product.id} {...product} />)

                    })
                }
            </div>
        </div>

    )
}

