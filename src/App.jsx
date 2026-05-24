import { HashRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Preloader from './components/Preloader/Preloader'
import Home from './pages/Home'
import ServiceDetails from './pages/ServiceDetails/ServiceDetails'
import DestinationDetails from './pages/DestinationDetails/DestinationDetails'
import About from './pages/About'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Cancellation from './pages/Cancellation'
import NotFound from './pages/NotFound'
import './index.css'

export default function App() {
  return (
    <HelmetProvider>
      <HashRouter>
        <Preloader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/cancellation" element={<Cancellation />} />
          <Route path="/service/:id" element={<ServiceDetails />} />
          <Route path="/destination/:id" element={<DestinationDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </HashRouter>
    </HelmetProvider>
  )
}
