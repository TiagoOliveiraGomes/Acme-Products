import React from 'react'
import { LoginButton } from '../loginButton'
import "./styles.css"

import { ShoppingCartSimple } from 'phosphor-react'
import { ShoppingCart } from '../shoppingCart'

export function Header() {
  return (
    <div className='Container-Header'>
        <h1>ACME</h1>
        <div className='OptionsHeader'>
          <ShoppingCart />
          <LoginButton />
        </div>
    </div>
  )
}
