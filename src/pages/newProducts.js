import { FormProducts } from 'components/formProducts'
import Layout from 'components/Layout'


function newProducts() {
  return (
    <Layout>
      <div className='grid place-items-center h-5/6'>
      <FormProducts/>
      </div>
    </Layout>

  )
}

export default newProducts