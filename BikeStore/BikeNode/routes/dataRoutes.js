const express = require('express');
const router = express.Router();
const dataController = require('../controllers/dataControllers');


router.get('/Products', dataController.getProducts);
router.get('/usuarios', dataController.usuarios);
router.post('/registerUser', dataController.registerUser);


router.post('/login', dataController.loginUser);

router.post('/registerProdutcs', dataController.registerProdutcs);


module.exports = router;
