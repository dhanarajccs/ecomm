import './SideDrawer.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const SideDrawer = ({ show, click }) => {
  const sideDrawerClass = ['sidedrawer']
  const history = useHistory()

  const dispatch = useDispatch()

  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  const getCartCount = () => {
    return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0)
  }

  if (show) {
    sideDrawerClass.push('show')
  }


  return (
    <div className={sideDrawerClass.join(' ')}>
      <ul className="sidedrawer__links" onClick={click}>
        <li>
          <Link to="/">Shop</Link>
        </li>
        <li>
          <Link to="/cart">
            <i className="fas fa-shopping-cart"></i>
            <span>
              {' '}
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default SideDrawer
