import * as actionTypes from '../constants/cartConstants'

const CHECKOUT_INITIAL_STATE = {
    totalAmount: 0,
}

export const checkoutReducer = (state = CHECKOUT_INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.CHECKOUT_CART:
            return {
                ...state,
                totalAmount: action.payload
            }

        default:
            return state
    }
}
