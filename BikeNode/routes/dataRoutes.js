const express = require('express')
const router = express.Router();
const dataController = require ('../controllers/dataControllers')

router.get('/', dataController.getProducts);

router.post('/registerUser', dataController.registerUser);


module.exports = router;