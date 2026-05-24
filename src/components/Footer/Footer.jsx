import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import s from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.inner}>
        <div className={s.brandCol}>
          <img src={logo} alt="Lizzan Holidays" className={s.logo} />
          <p className={s.desc}>
            Lizzan Holidays is a premium travel agency based in Kerala, India. We specialize in curating unforgettable domestic and international travel experiences.
          </p>
          <div className={s.socials}>
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
          </div>
        </div>

        <div className={s.linkGroup}>
          <div className={s.col}>
            <h4>Company</h4>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/services">Our Services</Link></li>
              <li><Link to="/#why-us">Why Choose Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Tours</h4>
            <ul>
              <li><Link to="/#packages">International</Link></li>
              <li><Link to="/#packages">Domestic</Link></li>
              <li><Link to="/#destinations">Popular Destinations</Link></li>
              <li><Link to="/#packages">Customised Packages</Link></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/cancellation">Cancellation Policy</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className={s.bottom}>
        <p>&copy; {new Date().getFullYear()} Lizzan Holidays. All rights reserved.</p>
        <p>Designed by Bten.in</p>
      </div>
    </footer>
  )
}
