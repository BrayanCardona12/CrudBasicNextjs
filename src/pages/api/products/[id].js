import { pool } from "config/db"

export default async function handler(req, res) {

    switch (req.method) {
        case 'GET':
            return await getProduct(req, res)
        case 'DELETE':
            return await deleteProduct(req, res)
            
        case 'PUT':
            updateProduct(req, res)
        default:
            break;


    }



}


const getProduct = async (req, res) => {
    const { id } = req.query
    const [resul] = await pool.query("SELECT * FROM products WHERE id = ?", [id])
    return res.status(200).json(resul[0])
}

const deleteProduct = async (req, res) => {
    const { id } = req.query
    const [resul] = await pool.query("DELETE FROM products WHERE id = ?", [id])
    return res.status(204).json()
}

const updateProduct = async (req, res) => {
    const { id } = req.query
    try {
        const {name, price, description} = req.body
        await pool.query("UPDATE products SET name = ?, price = ?, description = ? WHERE id = ?", [name, price,description, id])
        return res.status(204).json()
    } catch (e) {
        return res.status(500).json({e})
    }
}
