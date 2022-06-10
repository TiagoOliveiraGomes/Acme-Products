import React from 'react'
import {CardProduct} from '../cardProduct'
import {FilterBar} from '../filterBar'
import {ProductsGrid} from '../productsGrid'
import "./styles.css"

export function Main() {
  return (
    <div className='Container-Main'>
      <section>
        <FilterBar />
        <ProductsGrid/>
      </section>
    </div>
  )
}
