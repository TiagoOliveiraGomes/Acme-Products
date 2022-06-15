import React, { useContext, useEffect, useState } from 'react'
import './styles.css'

import { ShoppingCartSimple } from 'phosphor-react'
import { CartContext } from '../../contexts/ShoppingCartContext'

interface ShoppingCartProps{
  length: number
  forceUpdate: boolean
}
export function ShoppingCart(props:ShoppingCartProps) {
  const CartsList = useContext(CartContext)
  const [numberOfProductsInCart, setNumberOfProductsInCart] = useState<any>(0)
  var productQuantity:any = CartsList?.cartList.length

  useEffect(()=> {
    setNumberOfProductsInCart(CartsList?.cartList.length)
    productQuantity = CartsList?.cartList.length
    console.log("chamou o useEffect do shoppingCart")
  }, [CartsList?.cartList.length, CartsList?.cartList, CartsList, CartContext, props.forceUpdate])

  return (
    <div className='Container-ShoppingCart'>
        <ShoppingCartSimple size={30} color={"#fff"} />
        <span>Shopping Cart</span>
        <div className='sphereCounter'>{CartsList?.cartList.length}</div>
    </div>
  )
}
