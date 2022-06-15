import React, { useContext, useState } from 'react'
import { LoginButton } from '../loginButton'
import "./styles.css"

import { ShoppingCartSimple } from 'phosphor-react'
import { ShoppingCart } from '../shoppingCart'
import { CartContext } from '../../contexts/ShoppingCartContext'

interface HeaderProps {
  forceUpdateCartList: boolean

}
export function Header(props:HeaderProps) {
  const CartsList = useContext(CartContext)
  
  const lenght:any = CartsList?.cartList.length
  return (
    <div className='Container-Header'>
        <h1>ACME</h1>
        <div className='OptionsHeader'>
          <ShoppingCart forceUpdate={props.forceUpdateCartList} length={lenght} />
          <LoginButton />
        </div>
    </div>
  )
}
