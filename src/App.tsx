import { useState } from 'react'
import { FavContextProvider } from './contexts/FavouritesContext'
import { CartContextProvider } from './contexts/ShoppingCartContext'
import { ApiDataProvider } from './contexts/data'
import Home from './pages/home'
import {Routes, Route} from 'react-router-dom'
import Product from './pages/product'

function App() {
  const [forceUpdateCartList, setForceUpdateCartList] = useState<boolean>(false)

  return (
    <ApiDataProvider>
      <CartContextProvider>
        <FavContextProvider>
            <div className="App">
              <Routes>
                <Route path="/" element={<Home forceUpdateCartList={forceUpdateCartList} setForceUpdateCartList={setForceUpdateCartList} />} />
                <Route path="/product" element={<Product forceUpdateCartList={forceUpdateCartList} setForceUpdateCartList={setForceUpdateCartList}/>} />
              </Routes>
            </div>
        </FavContextProvider>
      </CartContextProvider>
    </ApiDataProvider>
  )
}

export default App
