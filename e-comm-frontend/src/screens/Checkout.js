import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Api } from '../utils/Api'


const CheckoutScreen = ({ history }) => {
  const dispatch = useDispatch()
  const [fullName, setFullName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [country, setCountry] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [city, setCity] = useState('')
  const [state, setState] = useState('')
  const checkout = useSelector(state => state?.checkout)

  const handleCheckout = (e) => {
    if (e.target.name === 'fullName') {
      setFullName(e.target.value)
    }
    if (e.target.name === 'address') {
      setAddress(e.target.value)
    }
    if (e.target.name === 'email') {
      setEmail(e.target.value)
    }
    if (e.target.name === 'country') {
      setCountry(e.target.value)
    }
    if (e.target.name === 'zipCode') {
      setZipCode(e.target.value)
    }
    if (e.target.name === 'city') {
      setCity(e.target.value)
    }
    if (e.target.name === 'state') {
      setState(e.target.value)
    }
  }

  const makePayment = async () => {
    if (email) {
      let response = await Api.postRequest('/api/cart/makePayment', { destinationEmail: email, fullName: fullName, subTotal: checkout?.totalAmount?.totalAmount || 0 })
      if (response.statusCode === 201) {
        history.push('/')
      }
    }
  }
  return (
    <div className="container mt-4">
      <div className='col-9'>
        <div className="mb-3 row">
          <div>
            <h2>Shipping</h2>
            <h5> Please enter your shipping details.</h5>
          </div>
          <div className='mt-2'>
            <label for="exampleDataList" class="form-label">Full Name</label>
            <input className="form-control form-control-lg" type="text" placeholder="" name='fullName' value={fullName} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
          </div>
          <div className='mt-2'>
            <label for="exampleDataList" class="form-label">Address</label>
            <input className="form-control form-control-lg" type="text" placeholder="" name='address' value={address} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
          </div>
          <div className='mt-2'>
            <label for="exampleDataList" class="form-label">Email</label>
            <input className="form-control form-control-lg" type="text" placeholder="" name='email' value={email} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
          </div>
          <div className='mt-2'>
            <label for="exampleDataList" class="form-label">Country</label>
            <input className="form-control form-control-lg" type="text" placeholder="" name='country' value={country} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
          </div>
          <div className='col-12 mt-2'>
            <div className='row'>
              <div className='col-4'>
                <label for="exampleDataList" class="form-label">Zip Code</label>
                <input className="form-control form-control-lg" type="text" placeholder="" name='zipCode' value={zipCode} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
              </div>
              <div className='col-4'>
                <label for="exampleDataList" class="form-label">City</label>
                <input className="form-control form-control-lg" type="text" placeholder="" name='city' value={city} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
              </div>
              <div className='col-4'>
                <label for="exampleDataList" class="form-label">State</label>
                <input className="form-control form-control-lg" type="text" placeholder="" name='state' value={state} onChange={(e) => handleCheckout(e)} aria-label=".form-control-sm example" />
              </div>
            </div>
          </div>
          <div className='mt-3'>
            <button type="button" className="btn btn-primary btn-lg btn-block w-100" onClick={(e) => makePayment(e)}>Pay ₹ {checkout?.totalAmount?.totalAmount || 0}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutScreen
