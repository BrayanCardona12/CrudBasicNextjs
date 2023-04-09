import { pool } from "config/db";



export default async function handler(req, res) {

  switch (req.method) {
    case 'GET':
      return await getProduct(req, res)

    case 'POST':
      return await saveProduct(req, res)

  }

}

const saveProduct = async (req, res) => {
  const { name, price, description } = req.body

try {
  const [result] = await pool.query('INSERT INTO products SET ?', {
    name,
    description,
    price

  })
} catch (error) {
  return res.status(500).json({error : e.message})
}

  
  return res.status(200).json({ name, description, price })
}

const getProduct = async (req, res) => {
  try {
    const [result] = await pool.query('SELECT * FROM products')
    return res.status(200).json(result)
  }catch(e) {
    return res.status(500).json({e})
  }
}


