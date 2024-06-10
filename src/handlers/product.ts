import { Request, Response } from "express"
import Products from "../models/Product.mode"

export const createProduct = async (req: Request, res: Response) => {
    
    const product = await Products.create(req.body)
    res.json({data: product})
}

export const putProduct = (req: Request, res: Response) => {
    res.json('Desde el put')
}

export const deleteProduct = (req: Request, res: Response) => {
    res.json('Desde DELETE')
}

export const patchProduct = (req: Request, res: Response) => {

    res.json('Desde path')
}