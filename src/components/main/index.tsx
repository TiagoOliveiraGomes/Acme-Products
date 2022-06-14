import React, { useState } from 'react'
import {FilterBar} from '../filterBar'
import {ProductsGrid} from '../productsGrid'
import "./styles.css"

export function Main() {
  const [searchText, setSearchText] = useState<string>('asad')
  return (
    <div className='Container-Main'>
      <section>
        <FilterBar searchText={searchText} setSearchText={setSearchText} />
        <ProductsGrid searchText={searchText}/>
      </section>
    </div>
  )
}
