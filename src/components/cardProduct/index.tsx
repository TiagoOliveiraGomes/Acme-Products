import React, { useContext, useEffect, useState } from 'react'
import './styles.css'

import imgBolsa from '../../assets/images/bolsa.png'
import {ButtonAddProduct} from '../buttonAddProduct'
import { Heart } from 'phosphor-react'
import { FavContext } from '../../contexts/FavouritesContext'

import axios from 'axios'

export function CardProduct() {
    const favList = useContext(FavContext)
    const [data, setData] = useState<any>(null)
    
    
    function clickToFavItem () {
        let list:any  = favList?.favouriteList
        list?.push(1)
        favList?.setFavouriteList(list)
        console.log("Add to Fav List: ", favList?.favouriteList)
    }

    useEffect(()=> {
        async function getData () {
            try {
                let response = await axios.get('./json/api.json')
                let getData = await response.data
                setData(getData)
                console.log(getData.data[0].verbs[1])
            } catch (error) {
                console.log(error)
            }
        }
        
        if(!data){
            getData()
        }

    },[])
    
  return (
    <div className='Container-CardProduct'>
        <header>
            <img src={imgBolsa} alt="" />
        </header>
        <main>
            <h1>{data? data.data[0].verbs[1] : "Nome do produto"}</h1>
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
