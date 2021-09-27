import { useEffect, useState } from "react"
// components
import Navbar from "../components/Navbar/Navbar"

const Home = () => {
  // data
  const [ productList, setProductList ] = useState<TProduct>([])
  
  console.log('productList', productList)
  useEffect(() => {
    fetch('api/avo')
      .then(res => res.json())
      .then( ({data, length }) => {
        setProductList(data) 
      })
      .catch( error => console.error('Este es error', error) )
  }, [])

  return(
    <div >
      <Navbar />
      <h1>
        Hola Mundo adwdawd ad 
      </h1>
      {
        productList.length > 0 && productList.map( product => 
          <div key={product.id} >{product.name}</div>
        )
      }
    </div>
  )
}

export default Home