import axios from "axios";
import {FormProducts} from "../../components/formProducts"

const HomePage = ({products}) => {


  return(
    <div>
       <FormProducts/>
       {products.map(x => (

        <div key={x.id}>
          <h1>{x.name}</h1>
          <p>{x.description}</p>
          <p>{x.price}</p>
        </div>

       ))}
    </div>
  )
  
}

export const getServerSideProps = async (context) => {

  const res = await axios.get('http://localhost:3000/api/products')

  
  return {
    props: {
      products: res.data
    }
  }
}



export default HomePage
