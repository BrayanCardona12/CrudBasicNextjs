import {pool} from '../../../config/db'


export default async function handler(req, res) {

 // const [algo] = await pool.query('hola')

   res.status(200).json({ info: "algo"})
}

