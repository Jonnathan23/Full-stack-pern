import { Router } from "express";
import { body } from 'express-validator'
import { createProduct, deleteProduct, getProducts, patchProduct, putProduct } from "./handlers/product";
import { handleInputErrors } from "./middleware";

const router = Router()

// Routing
router.get('/', getProducts)

router.post('/',

    //Validation
    body('name').notEmpty().withMessage('El nombre del producto no puede ir vacio'),
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio del producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no válido'),      
    handleInputErrors,
    createProduct)

router.put('/', putProduct)

router.delete('/', deleteProduct)

router.patch('/', patchProduct)

export default router