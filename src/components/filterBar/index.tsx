import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import './styles.css'

export function FilterBar() {
  return (
    <form className='Container-FilterBar'>
        <input placeholder='O que você procura?' type="search" id="product-search" name="product-search" />
        <button>
            <MagnifyingGlass size={25}/>
        </button>
    </form>
  )
}
