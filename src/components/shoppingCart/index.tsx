import React from 'react'
import './styles.css'

import { ShoppingCartSimple } from 'phosphor-react'

export function ShoppingCart() {
  return (
    <div className='Container-ShoppingCart'>
        <ShoppingCartSimple size={30} color={"#fff"} />
        <span>Shopping Cart
            <div className='sphereCounter'>0</div>
        </span>
    </div>
  )
}
