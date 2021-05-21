import React from 'react';
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, price, rating }) {
    const [{ user }, dispatch] = useStateValue();

    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        });
    };
    
    return (
        <div className="product">
            <img src={image} alt="" />
           <div className="product__info">
                <p>{title}</p>
                
                <div className="product__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                    <p>&#11088;</p>
                    ))}
                </div>
                <p className="product__price">
                    <small>&euro;</small>
                    <strong>{price}</strong>
                </p>
            </div>
           
            

            <button disabled={!user} onClick={addToBasket}>Add to Basket<p hidden={user}>please Sign in to add to Basket</p></button>
        </div>
    )
}

export default Product;
