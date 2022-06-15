import React, { useContext, useEffect, useState } from 'react'
import './styles.css'

import {ButtonAddProduct} from '../buttonAddProduct'
import { Heart } from 'phosphor-react'
import { FavContext } from '../../contexts/FavouritesContext'


interface CardProductProps {
    name: string,
    src: string,
    description: string,
    value: string
    id: number,
    setForceUpdateCartList: React.Dispatch<React.SetStateAction<boolean>>,
    
}

export function CardProduct(props:CardProductProps) {
    const favList = useContext(FavContext)
    const [fillButton, setFillButton] = useState<boolean>(false)
    const [isChange, setIsChange] = useState<boolean>(false)
    const {setForceUpdateCartList} = props
    
    function clickToFavItem () {
        let list:any  = favList?.favouriteList
        if(list.includes(props.id)){
            let filtredList = list.filter((item: number) => {
                if(item !== props.id){
                    return item
                }
            })
            favList?.setFavouriteList(filtredList)
            setIsChange(!isChange)
        }else {
            list?.push(props.id)
            favList?.setFavouriteList(list)   
            setIsChange(!isChange)
        }
    }

    const handleClick = () => {
        // props.history.push('/product');
        // window.location.href = "/product"
      };

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
    },[isChange])
    
  return (
    <button onClick={handleClick} className='Container-CardProduct'>
        
        <header>
            <img src={props.src} alt="" />
        </header>
        <main>
            <h1>{props.name}</h1>
            <h6>{props.description}</h6> 
            <h5>R$ {props.value}</h5>
        </main>
        <footer>
            <ButtonAddProduct setForceUpdateCartList={setForceUpdateCartList} id={props.id} />
            <button onClick={clickToFavItem}>
                <Heart color={fillButton? "#c4483d" : "black"} size={24} weight={fillButton ? "fill" : "light"} />
            </button>
        </footer>
    </button>
  )
}
