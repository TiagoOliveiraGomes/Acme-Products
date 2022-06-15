import React, { useContext, useState } from 'react'
import { LoginButton } from '../loginButton'
import "./styles.css"

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
        <h1 onClick={()=> window.location.href = "/"}>ACME</h1>
        <div className='OptionsHeader'>
          <ShoppingCart forceUpdate={props.forceUpdateCartList} length={lenght} />
          <LoginButton />
        </div>
    </div>
  )
}
