const express = require('express')
const {
  addProductInCart,
  deleteProductInCart,
  getCartProducts,
  makePayment
} = require('../controller/cart.controller')
const router = express.Router()

router
  .route('/')
  .get([], getCartProducts)
  .post([], addProductInCart)
router.post('/makePayment', makePayment)

router.route('/:id').delete([], deleteProductInCart)

module.exports = router
