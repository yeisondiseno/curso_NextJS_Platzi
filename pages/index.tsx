import { useEffect, useState } from "react"
// components


const Home = () => {
  // data
  const [ productList, setProductList ] = useState<TProduct>([])
  
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