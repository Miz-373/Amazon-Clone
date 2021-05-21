import React from 'react';
import "./Checkout.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();
     //Scroll up on refresh
     window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img className="checkout__ad" src="https://328897-1008310-2-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/Amazon-Banner-Ad-Example-1-1.jpg" alt="" />

            <div>
                <h3 className="welcome__user">Hello, ({user?.email})</h3>
                <h2  className="checkout__title">Your Shopping Basket</h2>

                {basket.map(item => (
                    <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    />
                ))}
            </div>
        </div>

            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
