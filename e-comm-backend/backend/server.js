require('dotenv').config()
const express = require('express')
const productRoutes = require('./routes/productRoutes')
const cartRoutes = require('./routes/cartRoutes')
const {connectDB} = require('./config/db')
const cors = require('cors')

connectDB()

const app = express()

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message: 'API running...'})
})

app.use('/api/products', productRoutes)
app.use('/api/cart', cartRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))