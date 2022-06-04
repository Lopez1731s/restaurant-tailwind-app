import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Categories from './components/Categories'
import CategoryProducts from './components/CategoryProducts'
import Favorites from './components/Favorites'
import Home from './components/Home'
import Navbar from './components/Navbar'
import NotFound from './components/NotFound'
import ProductDetail from './components/ProductDetail'
import Products from './components/Products'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:category" element={<CategoryProducts />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:meal" element={<ProductDetail />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App