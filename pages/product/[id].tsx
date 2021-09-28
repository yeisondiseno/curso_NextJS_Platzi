import { useEffect, useState } from "react"
// router
import { useRouter } from 'next/router'

const ProductItem = () => {
  // route
  const { query: { id } } = useRouter()

  // data
  const [ product, setProduct ] = useState<TProduct>()

  console.log('product', product, 'id', id)

  useEffect(() => {
    if(!id) return
    fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then( data => setProduct(data))
      .catch( error => console.error('Este es error', error) )
  }, [id])

  return(
    <div>
      <h4>
        Hola  soy un producto: {id}
      </h4>
      <div>
        {product?.name}
      </div>
    </div>
  )
} 

export default ProductItem