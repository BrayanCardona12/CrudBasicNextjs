import axios from 'axios'
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export function FormProducts() {

  const [prod, setProd] = useState({
    name: "",
    description: "",
    price: 0
  })

  const router = useRouter()

  const handlerChange = ({ target: { name, value } }) => {
    setProd({ ...prod, [name]: value })
  }


  useEffect(() => {

    const getProduct = async () => {
      const { data } = await axios.get('/api/products/' + router.query.id)

      setProd(data)
    }

    if (router.query.id) {
      getProduct()
    }
  }, [])




  const HandlerSubmit = async (e) => {
    e.preventDefault()

    if(!parseInt(prod.price)) {
      toast.error("Error, el precio debe ser un numero")
    }else {
      try {
        if (router.query.id) {
          await axios.put('/api/products/' + router.query.id, prod)
          toast.success("Producto actualizado correctamente")
          
        } else {
          await axios.post('/api/products', prod)
          toast.success("Producto creado correctamente")
        }

        setTimeout(()=> {
          router.push('/')
        }, 3000)
        
  
       
      } catch (error) {
          toast.error(error.response.data.message);
      }
    }

    
  };

  return (
    <div className="w-full max-w-xs">
      <h1>{router.query.id ? 'Actulizar Producto' : 'Insertar Producto'}</h1>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={HandlerSubmit} method="POST">



        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="text">Name:</label>
        <input className='shadow appearence-none w-full leading-tight focus:outline-none focus:shadow-outline border rounded text-gray-700' type="text" onChange={handlerChange} name="name" value={prod.name} />

        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="price">Price:</label>
        <input className='shadow appearence-none w-full leading-tight focus:outline-none focus:shadow-outline border rounded text-gray-700' onChange={handlerChange} type="text" value={prod.price} name="price" id="price" />

        <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="description">Description:</label>
        <textarea className='shadow appearence-none w-full leading-tight focus:outline-none focus:shadow-outline border rounded text-gray-700' value={prod.description} onChange={handlerChange} name="description" rows="2" />

        <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">Save Product</button>

      </form>
    </div>
  )
}
