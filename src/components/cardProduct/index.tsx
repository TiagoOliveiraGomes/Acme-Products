import React, { useContext, useEffect, useState } from 'react'
import './styles.css'

import imgBolsa from '../../assets/images/bolsa.png'
import {ButtonAddProduct} from '../buttonAddProduct'
import { Heart } from 'phosphor-react'
import { FavContext } from '../../contexts/FavouritesContext'

import axios from 'axios'

interface CardProductProps {
    name: string,
    src: string,
    description: string
}

export function CardProduct(props:CardProductProps) {
    const favList = useContext(FavContext)
    
    function clickToFavItem () {
        let list:any  = favList?.favouriteList
        list?.push(1)
        favList?.setFavouriteList(list)
        console.log("Add to Fav List: ", favList?.favouriteList)
    }
    
  return (
    <div className='Container-CardProduct'>
        <header>
            <img src={props.src} alt="" />
        </header>
        <main>
            <h1>{props.name}</h1>
            <h6>{props.description}</h6> 
            <h6>R$ 15,00</h6>
        </main>
        <footer>
            <ButtonAddProduct />
            <button onClick={clickToFavItem}>
                <Heart size={24} />
            </button>
        </footer>
    </div>
  )
}
