import React from "react";

export const Item = ({ name, price, id, imgUrl }) => {

    return (
        <div className="item-box">

            <div>{name}</div>
            <img src={imgUrl} width="250" height="250" alt="" />
            <div className="item-price">{price}</div>
            <button className=" button" >+ Add to cart</button>
            <button className=" button" >+ Add to cart</button>



        </div>
    )

}

