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
    description: string,
    value: string
    id: number
}

export function CardProduct(props:CardProductProps) {
    const favList = useContext(FavContext)
    const [fillButton, setFillButton] = useState<boolean>(false)
    
    function clickToFavItem () {
        let list:any  = favList?.favouriteList
        if(list.includes(props.id)){
            let filtredList = list.filter((item: number) => {
                if(item !== props.id){
                    return item
                }
            })
            favList?.setFavouriteList(filtredList)
            return
        }else {
            list?.push(props.id)
            favList?.setFavouriteList(list)
        }
        

        console.log("Add to Fav List: ", favList?.favouriteList)
    }

    useEffect(()=> {
        function fillButton () {
            let list:any  = favList?.favouriteList
            if(list.includes(props.id)){
                setFillButton(true)
            }else {
                setFillButton(false)
            }
        }
        fillButton()
    },[favList?.favouriteList])
    
  return (
    <div className='Container-CardProduct'>
        <header>
            <img src={props.src} alt="" />
        </header>
        <main>
            <h1>{props.name}</h1>
            <h6>{props.description}</h6> 
            <h6>R$ {props.value}</h6>
        </main>
        <footer>
            <ButtonAddProduct />
            <button onClick={clickToFavItem}>
                <Heart size={24} weight={fillButton ? "fill" : "light"} />
            </button>
        </footer>
    </div>
  )
}
