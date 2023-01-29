let express = require('express')

let authController = require('../controllers/authController')
let merchantController = require('../controllers/merchantController')
let productController = require('../controllers/productController')

let authMiddlewares = require('../middlewares/authMiddlewares')

let router = express.Router()

// Front Page
router.get('/', (req, res) => {
    res.send('Hello, this is a merchant service!')
  })

// Login
router.post('/login', authController.login)

// Merchant
// Get List of Merchant
router.get('/merchant', authMiddlewares.isAuthenticate, merchantController.getMerchant)
//Get Merchant by id
router.get('/merchant/:id', authMiddlewares.isAuthenticate, merchantController.getMerchantById)
// Create Merchant
router.post('/merchant/', authMiddlewares.isAuthenticate, merchantController.createMerchant)
// Delete Merchant
router.delete('/merchant/:id', authMiddlewares.isAuthenticate, merchantController.deleteMerchant)


// Product
// Get List of Product
router.get('/product', authMiddlewares.isAuthenticate, productController.getAllProduct)
// Get Product by Id
router.get('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.getProductById)
// Create Product
router.post('/product', authMiddlewares.isAuthenticate, productController.createProduct)
// Update Product
router.put('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.updateProduct)
// Delete Product
router.delete('/merchant/:merchant_id/product/:id', authMiddlewares.isAuthenticate, productController.deleteProduct)

module.exports = router