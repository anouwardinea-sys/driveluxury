import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'

// importations des composants globaux
import Navbar from './components/Navbar'
import Footer from './components/Footer'


// importations des composants pages
import Home from './pages/Home'
import About from './pages/About'
import Fleet from './pages/Fleet'
import Services from './pages/Services'
import CarDetails from './pages/CarDetails'
import Booking from './pages/Booking'
import Contact from './pages/Contact'
import Locations from './pages/Locations'
import Deals from './pages/Deals'
import NotFound from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex bg-white flex-col">
        <Navbar />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/fleet" element={<Fleet />} />
            <Route path="/services" element={<Services />} />
            <Route path="/cars/:id" element={<CarDetails />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/locations" element={<Locations />} />
            <Route path="/deals" element={<Deals />} />
            {/* Toute route inconnue → page 404, plutôt qu'un écran vide */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
