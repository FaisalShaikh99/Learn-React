import React from 'react'
import {Provider} from 'react-redux'
import ProductList from './components/productlist'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import ProductDetail from './components/productDetail'
import Cart from './components/cart'
import CartButton from './components/cartButton'
import CheckOut from './components/checkOut'
import { store } from './app/store'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <CartButton/>
        <Routes>
            <Route path='/' element={<ProductList/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/product/:id' element={<ProductDetail/>}/>
            <Route path='/chekout' element={<CheckOut/>}/>
        </Routes>
      </Router>
    </Provider>
  )
}

export default App
