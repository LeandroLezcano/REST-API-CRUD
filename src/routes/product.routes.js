import {Router} from 'express';
import {getProducts} from '../controllers/product.controllers.js';
import {getProduct} from '../controllers/product.controllers.js';
import {createProduct} from '../controllers/product.controllers.js';
import {updateProduct} from '../controllers/product.controllers.js';
import {deleteProduct} from '../controllers/product.controllers.js';


const router = Router();

router.get('/productos', getProducts)

router.get('/productos/:id', getProduct);

router.post('/productos', createProduct);

router.put('/productos/:id', (updateProduct) );

router.delete('/productos/:id', (deleteProduct) );

export default router;