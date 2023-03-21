const Cart = require('../models/Cart')

const getCartProducts = async (req, res) => {
  try {
    const carts = await Cart.find().populate('productId')
    // console.log(carts)
    res.status(200).send({ status: 'ok', carts })
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: `Error ${err}` })
  }
}

const addProductInCart = async (req, res) => {
  const { productId, count } = req.body
  try {
    const cart = await Cart.findOneAndUpdate(
      { productId },
      { productId, count },
      { upsert: true },
    )

    res.status(201).send({ status: 'ok', cart })
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: `Error ${err}` })
  }
}
const deleteProductInCart = async (req, res) => {
  try {
    await Cart.findByIdAndRemove(req.params.id)
    res.status(200).send({ status: 'ok' })
  } catch (e) {
    console.log(e)
    res.status(500).send({ status: `Error ${e}` })
  }
}

const makePayment = async (req, res) => {
  const { destinationEmail, subTotal, fullName } = req.body
  console.log(destinationEmail, subTotal, "destinationEmail, subTotal")
  try {
    const Sib = require('sib-api-v3-sdk')
    require('dotenv').config()
    const client = Sib.ApiClient.instance
    const apiKey = client.authentications['api-key']
    apiKey.apiKey = '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'

    const tranEmailApi = new Sib.TransactionalEmailsApi()
    const sender = {
      email: 'techibye007@gmail.com',
      name: 'Dhanaraj-E-comm',
    }
    const receivers = [
      {
        email: `${destinationEmail}`,
      },
    ]

    tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject: 'Welcome to Dhanaraj E-comm',
      textContent: `Welcome to Dhanaraj E-comm`,
      htmlContent: `<h1>Hello ${fullName}</h1> </br> <h4>Your order has been placed, you need to pay the total amount(Including shipping charge) : ₹ ${subTotal}  </h4>`,
      params: {
        role: 'Admin'
      },
    })
      .then(console.log("Successfully email sent"))
      .catch((err) => {
        console.log(err, "Failed to sent an email")
      })

    res.status(201).send({ status: 'ok' })
  } catch (err) {
    console.log(err)
    res.status(500).send({ status: `Error ${err}` })
  }
}
module.exports = { addProductInCart, deleteProductInCart, getCartProducts, makePayment }
