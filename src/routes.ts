import { Router } from "express";
import { createProduct, deleteProduct, patchProduct, putProduct } from "./handlers/product";

const router = Router()

// Routing
router.get('/', (req, res) => {
    const aut = true

    res.json('Desde GET')
})

router.post('/', createProduct )

router.put('/', putProduct )

router.delete('/', deleteProduct)

router.patch('/', patchProduct)

export default router