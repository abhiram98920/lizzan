import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import FloatingWidget from './components/FloatingWidget/FloatingWidget'
import Preloader from './components/Preloader/Preloader'
import Home from './pages/Home'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import DestinationDetails from './pages/DestinationDetails/DestinationDetails'
import './index.css'

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
        </Routes>
        <FloatingWidget />
        <Footer />
      </HashRouter>
    </HelmetProvider>
  )
}
