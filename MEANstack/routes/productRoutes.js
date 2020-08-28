const express = require('express');
const router = express.Router();
const productController = require('../controller/productControler');
const joiSchemaValidation = require('../middleware/joiSchemaValidation');
const productSchema = require('../apiSchema/productSchema');
const tokenValidation = require('../middleware/tokenValidation');


router.post('/',
 joiSchemaValidation.validateBody(productSchema.createProductSchema),
 tokenValidation.validateToken,
 productController.createProduct
 );

router.get('/:id',
tokenValidation.validateToken,
productController.getProductByID
);
router.put('/:id',
tokenValidation.validateToken,
joiSchemaValidation.validateBody(productSchema.updateProductSchema),
productController.updateProduct
);
router.get('/',
tokenValidation.validateToken,
joiSchemaValidation.validateQueryParams(productSchema.getAllProductSchema),
productController.getAllProducts
);
router.delete('/:id',
tokenValidation.validateToken,
productController.deleteProductById
);
module.exports = router;