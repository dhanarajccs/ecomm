import './CartScreen.css'
import {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'

// Components
import CartItem from '../components/CartItem'

// Actions
import {addToCart, removeFromCart} from '../redux/actions/cartActions'
import { checkout } from '../redux/actions/checkoutActions'
// import useLogin from '../utils/hooks/useLogin'

const CartScreen = ({ match, history }) => {
  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)

  // const {loginInfo} = useLogin()

  const {cartItems} = cart

  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty))
  }

  const removeFromCartHandler = item => {
    dispatch(removeFromCart({pId: item.product, _id: item._id}))
  }

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  const getCartSubTotal = () => {
    return cartItems
      .reduce((price, item) => price + item.price * item.qty, 0)
      .toFixed(2)
  }
  const proceedToCheckout = () => {
    console.log(getCartSubTotal(), "getCartSubTotal()")
    let subTotal = getCartSubTotal()
    dispatch(checkout(getCartSubTotal(subTotal)))
    history.push({pathname: `/checkout`})
    return
  }

 if (true)
    return (
      <>
        <div className="cartscreen">
          <div className="cartscreen__left">
            <h2>Shopping Cart</h2>

            {cartItems?.length === 0 ? (
              <div>
                Your Cart Is Empty <Link to="/">Go Back</Link>
              </div>
            ) : (
              cartItems.map(item => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeHandler={() => removeFromCartHandler(item)}
                />
              ))
            )}
          </div>

          <div className="cartscreen__right">
            <div className="cartscreen__info">
              <p>Subtotal ({getCartCount()}) items</p>
              <p>${getCartSubTotal()}</p>
            </div>
            <div>
              <button onClick={proceedToCheckout}>Proceed To Checkout</button>
            </div>
          </div>
        </div>
      </>
    )
}

export default CartScreen
