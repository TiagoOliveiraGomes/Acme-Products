import { MagnifyingGlass } from 'phosphor-react'
import React, { useEffect, useState } from 'react'
import './styles.css'

interface FilterBarProps {
  searchText: string,
  setSearchText: ( arg0: string )=> void
}

export function FilterBar(props: FilterBarProps) {
  useEffect(()=> {
    let cards = document.getElementsByClassName("Container-CardProduct")
  })
  // Container-CardProduct
  return (
    <form className='Container-FilterBar'>
        <input onChange={e => props.setSearchText(e.target.value)} placeholder='O que você procura?' type="search" id="product-search" name="product-search" value={props.searchText} />
        <button>
            <MagnifyingGlass size={25}/>
        </button>
    </form>
  )
}
