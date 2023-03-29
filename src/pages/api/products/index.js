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

  const [result] = await pool.query('INSERT INTO products SET ?', {
    name,
    description,
    price

  })

  console.log(result)
  return res.status(200).json({ name, description, price })
}

const getProduct = async (req, res) => {

  const [result] = await pool.query('SELECT * FROM products')

  return res.status(200).json(result)
}


