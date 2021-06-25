// this is where all of the data layer logic goes

// in the beginning
export const initialState = {
    basket: [],
    user: null,
}
export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0)

// anything inside the data layer is state
function reducer(state, action) {
    console.log(action)
    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item]
            }
        case 'REMOVE_FROM_BASKET':
            let newBasket = [...state.basket]
            const index = state.basket.findIndex((basketItem) => basketItem.id === action.id)
            if(index >= 0){
                newBasket.splice(index, 1)
            }else{
                console.error(`Cannot remove product (id: ${action.id}) as it does not exist`)
            }
            return {
                ...state,
                basket: newBasket
            }
        default:
            return state
    }
}

export default reducer