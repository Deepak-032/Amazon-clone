import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'

function CheckoutProduct({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue()

    const removeFromBasket = () => {
        // remove item from basket...
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        })
    }
    return (
        <div className="checkoutProduct">
            <img src={image} alt="" />
            <div className="checkoutProduct_info">
                <p className="checkoutProduct_title">{title}</p>
                <p className="checkoutproduct_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutproduct_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>⭐</span>
                        ))
                    }
                </div>

                <button onClick={removeFromBasket}>Remove from Cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
