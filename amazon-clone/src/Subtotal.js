import React from 'react'
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer'
import { useStateValue } from './StateProvider'
import "./Subtotal.css"

function Subtotal() {
    const [{basket}] = useStateValue()

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>Subtotal ({basket.length} items): <b>{`${value}`}</b></p>
                        <small className="subtotal_gift">
                            <input type="checkbox"/> This order contais a gift
                        </small>
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix="&#8377;"
            />
            <button>Proceed to Buy</button>
        </div>
    )
}

export default Subtotal
