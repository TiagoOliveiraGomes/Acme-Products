import React, { useContext } from 'react'
import './styles.css'

import imgBolsa from '../../assets/images/bolsa.png'
import {ButtonAddProduct} from '../buttonAddProduct'
import { Heart } from 'phosphor-react'
import { FavContext } from '../../contexts/FavouritesContext'

export function CardProduct() {
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
            <img src={imgBolsa} alt="" />
        </header>
        <main>
            <h1>Nome do produto</h1>
            <h6>Descrição do produto</h6> 
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
