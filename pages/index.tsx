// components 
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
// libraries
import fetch from 'isomorphic-unfetch'

export const getServerSideProps = async () => {
  const response = await fetch('https://curso-next-js-platzi.vercel.app/api/avo')
  const { data } : TAPIAvoResponse = await response.json()
  return {
    props: {
      productList: data
    }
  }
}

const HomePage = ({productList}: { productList: TProduct[] }) => {
  return (
    <Layout>
      <KawaiiHeader />
      <ProductList products={productList} />
    </Layout>
  )
}

export default HomePage
