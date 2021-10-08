// next
import { useRouter } from 'next/router'
import { GetStaticProps } from 'next'
// libraries
import fetch from 'isomorphic-unfetch'
// components 
import Layout from '@components/Layout/Layout'
import ProductSummary from '@components/ProductSummary/ProductSummary'

// como esta página tiene llamados dinámicos se necesita lo siguiente 
export const getStaticPaths = async () => {
  const response = await fetch('https://curso-next-js-platzi.vercel.app/api/avo')
  const { data } : TAPIAvoResponse = await response.json()
  const paths = data.map(({ id }) => ({
    params: {
      id
    }
  }))

  return {
    paths,
    // incremental static generation
    // 404 for everything else 
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id as string
  const response = await fetch(`https://curso-next-js-platzi.vercel.app/api/avo/${id}`)
  const product: TProduct = await response.json()
  return {
    props: {
      product: product
    }
  }
}

const ProductPage = ({product}: { product: TProduct }) => {
  return (
    <Layout>
      {product == null ? null : <ProductSummary product={product} />}
    </Layout>
  )
}

export default ProductPage
