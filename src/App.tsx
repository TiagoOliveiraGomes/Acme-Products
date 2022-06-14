import { useState } from 'react'
import { FavContextProvider } from './contexts/FavouritesContext'
import { CartContextProvider } from './contexts/ShoppingCartContext'
import { ApiDataProvider } from './contexts/data'
import Home from './pages/home'

function App() {

  return (
    <ApiDataProvider>
      <CartContextProvider>
        <FavContextProvider>
          <div className="App">
            <Home />
          </div>
        </FavContextProvider>
      </CartContextProvider>
    </ApiDataProvider>
  )
}

export default App
