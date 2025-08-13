import React from 'react'
import Navbar from './pages/Navbar'
import Homepage from './pages/Home'
import Categories from './pages/Categories'
import Popular from './pages/Popluar'
import Trending from './pages/Trending'
import Brands from './pages/Brand'
import Products from './pages/Product'
import Footer from './pages/Footer'

export default  function Home() {
  return (
    <div>
      <Navbar/>
      <Homepage/>
      <Categories/>
      <Popular/>
      <Trending/>
      <Brands/>
      <Products/>
      <Footer/>
    </div>
  )
}
















