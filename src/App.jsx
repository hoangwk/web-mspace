import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import DishDetailPage from './pages/DishDetailPage'
import DishListPage from './pages/DishListPage'

const HomePage = () => (
  <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Features />
    <Contact />
    <Footer />
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mon-an" element={
          <>
            <Navbar />
            <DishListPage />
            <Footer />
          </>
        } />
        <Route path="/mon-an/:id" element={
          <>
            <Navbar />
            <DishDetailPage />
            <Footer />
          </>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
