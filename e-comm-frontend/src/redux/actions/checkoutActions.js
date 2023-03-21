import * as actionTypes from '../constants/cartConstants'

export const checkout = (totalAmount) => async dispatch => {
  dispatch({
    type: actionTypes.CHECKOUT_CART,
    payload: {
      totalAmount,
    }
  })
}
