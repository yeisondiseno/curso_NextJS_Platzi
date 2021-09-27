import { useRouter } from 'next/router'

const ProductItem = () => {

  const { query: { id } } = useRouter()

  return(
    <div>
      Hola  soy un producto: {id}
    </div>
  )
} 

export default ProductItem