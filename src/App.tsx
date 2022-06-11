import { useState } from 'react'
import { FavContextProvider } from './contexts/FavouritesContext'
import { CartContextProvider } from './contexts/ShoppingCartContext'
import Home from './pages/home'

function App() {

  return (
    <CartContextProvider>
      <FavContextProvider>
        <div className="App">
          <Home />
        </div>
      </FavContextProvider>
    </CartContextProvider>
  )
}

export default App
