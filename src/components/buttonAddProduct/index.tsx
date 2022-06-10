import React from 'react'
import './styles.css'
import { ShoppingCartSimple } from 'phosphor-react'

export function ButtonAddProduct() {
  return (
    <button className='Container-ButtonAddProduct'>
        <ShoppingCartSimple size={24} />
        <div className='plusSphere'>+</div>
    </button>
  )
}
