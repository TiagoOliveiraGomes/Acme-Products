import React, { useContext } from 'react'
import './styles.css'
import { ShoppingCartSimple } from 'phosphor-react'
import { CartContext } from '../../contexts/ShoppingCartContext'

type ButtonAddProductType = {
  id: number,
}
export function ButtonAddProduct(props:ButtonAddProductType) {
  const CartList = useContext(CartContext)

  function clickToAddToCart () {
    let list:any  = CartList?.cartList
    list?.push(props.id)
    CartList?.setCartList(list)
    console.log("Add in CartList: ", CartList?.cartList)
}
  return (
    <button onClick={clickToAddToCart} className='Container-ButtonAddProduct'>
        <ShoppingCartSimple size={24} />
        <div className='plusSphere'>+</div>
    </button>
  )
}
