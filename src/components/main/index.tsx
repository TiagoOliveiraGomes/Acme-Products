import React, { useState } from 'react'
import {FilterBar} from '../filterBar'
import {ProductsGrid} from '../productsGrid'
import "./styles.css"

interface MainProps {
  setForceUpdateCartList: React.Dispatch<React.SetStateAction<boolean>>
}
export function Main(props:MainProps) {
  const [searchText, setSearchText] = useState<string>('')
  return (
    <div className='Container-Main'>
      <section>
        <FilterBar searchText={searchText} setSearchText={setSearchText} />
        <ProductsGrid setForceUpdateCartList={props.setForceUpdateCartList} searchText={searchText}/>
      </section>
    </div>
  )
}
