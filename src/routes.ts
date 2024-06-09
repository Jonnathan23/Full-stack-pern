import { Router } from "express";

const router = Router()

// Routing
router.get('/', (req, res) => {
    const aut = true

    res.send('Desde GET')
})

router.post('/', (req, res) => {

    res.send('Desde post')
})

router.put('/', (req, res) => {

    res.send('Desde PUT')
})

router.delete('/', (req, res) => {

    res.send('Desde DELETE')
})

router.patch('/', (req, res) => {

    res.send('Desde path')
})

export default router