import React from 'react'
import { Header } from '../../components/header'
import { ForceUpdateProps } from '../../interfaces/forceUpdate'
import './styles.css'


export default function Product(props:ForceUpdateProps) {
  return (
    <div className='Container-Product'>
      <Header forceUpdateCartList />
        Product
    </div>
  )
}
