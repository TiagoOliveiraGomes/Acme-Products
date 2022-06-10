import React from 'react'
import './styles.css'

import imgBolsa from '../../assets/images/bolsa.png'
import {ButtonAddProduct} from '../buttonAddProduct'
import { Heart } from 'phosphor-react'

export function CardProduct() {
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
            <button>
                <Heart size={24} />
            </button>
        </footer>
    </div>
  )
}
