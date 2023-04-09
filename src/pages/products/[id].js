import axios from "axios"
import Layout from "components/Layout"
import { ProductCard } from "components/productCard"
import { useRouter } from 'next/router'
import { toast } from "react-toastify"


function ProductView({ product }) {
    const router = useRouter()
    async function handlerDelete(id) {
        await axios.delete(`/api/products/${id}`)
        toast.success('Producto Eliminado correctamente')
        setTimeout(() => {
            router.push('/')
        }, 1500)

    }

    return (
        <Layout>
            <ProductCard x={product}/>


            <button onClick={() => handlerDelete(product.id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            <button onClick={() => router.push(`/products/update/${product.id}`)} className="bg-yellow-500 ml-2 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded">Update</button>

        </Layout>

    )
}


export const getServerSideProps = async (context) => {

    const { data: product } = await axios.get(`https://nextjscrud-brayancardona12.vercel.app/api/products/${context.query.id}`)


    return {
        props: { product }
    }
}
export default ProductView