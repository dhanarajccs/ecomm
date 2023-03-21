import './Navbar.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Navbar = ({ click }) => {
  const cart = useSelector(state => state.cart)
  const history = useHistory()
  const dispatch = useDispatch()
  // console.log({user})

  const { cartItems } = cart

  const getCartCount = () => {
    let cartItemsDetails = cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
    console.log(cartItems, "header")
    return cartItemsDetails
  }

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <h2>Dhanaraj-e-comm</h2>
      </div>

      <ul className="navbar__links">

        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              <span className="cartlogo_image">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={click}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  )
}

export default Navbar
