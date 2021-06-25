import React from 'react'
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from './StateProvider'
import Subtotal from "./Subtotal"

function Checkout() {
    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
                <img 
                    className="checkout_ad"
                    src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
                    alt=""
                />
            <div className="checkout_content">
                <div className="checkout_left">
                    {basket?.length === 0 ? (
                        <div className="checkout_empty">
                            <h2>Your Amazon Basket is empty</h2>
                            <p>
                                You have no items in your basket. To buy one or more items, click "Add to basket" next to the item.
                            </p>
                        </div>
                    ):(
                        <div>
                            <h2 className="checkout_title">Shopping Cart</h2>
                            {/* list  of all checkout products */}
                            {basket?.map(item => (
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {basket?.length > 0 && (
                    <div className="checkout_right">
                        <img
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png"
                            alt=""
                        />
                        <Subtotal/>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout
