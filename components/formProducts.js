import axios from 'axios'

export function FormProducts() {

    const HandlerSubmit = async (e) => {
        e.preventDefault(); 
        const res = await axios.post('/api/products', {
            name: 'product 1',
            description: 'Es un producto genial...',
            price: 4534
        })
        console.log(res);
    };

  return (
    <div className="bg-gray-300">
    <form className="form" onSubmit={ HandlerSubmit } method="POST" action="/api/products">

        <label htmlFor="text">Name:</label>
        <input type="text" name="text"/>

        <label htmlFor="price">Price:</label>
        <input type="text" name="price" id="price"/>

        <label htmlFor="description">Description:</label>
        <textarea name="description" rows="2"/>

        <button>Save Product</button>
    </form>
  </div>
  )
}
