import './App.css'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

// Components
import Navbar from './components/Navbar'
import SideDrawer from './components/SideDrawer'
import Backdrop from './components/Backdrop'

// Screens
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import CheckoutScreen from './screens/Checkout'
import { useDispatch } from 'react-redux'
import { fetchCart } from './redux/actions/cartActions'

function App() {
  const [sideToggle, setSideToggle] = useState(false)
  // fetchCart
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCart())
  }, [dispatch])

  return (
    <Router>
      <Navbar click={() => setSideToggle(true)} />
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} />

      <main className="app">
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/product/:id" component={ProductScreen} />
          <Route exact path="/cart" component={CartScreen} />
          <Route exact path="/checkout" component={CheckoutScreen} />
        </Switch>
      </main>
    </Router>
  )
}

export default App
