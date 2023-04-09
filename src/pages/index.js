import axios from "axios";

import Layout from "components/Layout";
import { ProductCard } from "components/productCard";

const HomePage = ({ products }) => {
const renderProducts = () => {

if (products.length === 0) return <h1 className="text-center text-2xl font-bold">No hay productos en el momento.</h1>

 return products.map(x => <ProductCard key={x.id} x={x} />)
}

  return (
    <Layout>

     <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
      {renderProducts()}
     </div>
    </Layout>


  )

}

export const getServerSideProps = async (context) => {

  const res = await axios.get('https://crud-basic-nextjs2.vercel.app/api/products')

  return {
    props: {
      products: res.data
    }
  }
}



export default HomePage
