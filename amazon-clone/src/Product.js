import React from 'react'
import "./Product.css"
import {useStateValue} from "./StateProvider"

function Product({id, title, image, price, rating}) {
    const [{basket}, dispatch] = useStateValue()
    const addToBasket = () => {
        // Add item to the basket....
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>&#8377;</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <span>⭐</span>
                        ))
                    }
                </div>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product


// in E67 if our key name is same as the value name then, we can actually get rid of the these ones and just write as:
// item: {id, title, image, price, rating}