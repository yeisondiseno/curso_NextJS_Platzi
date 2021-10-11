import React from 'react'
import style from './Product.module.css'
// next
import Image from 'next/image'
import Link from 'next/link'

type ProductListProps = {
  products: TProduct[]
}

const mapProductsToCards = (products: TProduct[]) =>
  products.map(({ name, id, price, image }) => (
    <Link key={id} href={`/product/${id}`} passHref>
      <div className={style.product_card}>
        <Image alt={name} src={image} width={333} height={333} />
        <hr />
        <h3>
          {name}
        </h3>
        <p>
          ${price}
        </p>
      </div>
    </Link>
  ))

const ProductList = ({ products }: ProductListProps) => (
  <div className={style.product}>
    {mapProductsToCards(products)}
  </div>
)

export default ProductList
