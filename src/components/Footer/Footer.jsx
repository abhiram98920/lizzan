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
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#why-us">Why Choose Us</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Tours</h4>
            <ul>
              <li><a href="#packages">International</a></li>
              <li><a href="#packages">Domestic</a></li>
              <li><a href="#destinations">Popular Destinations</a></li>
              <li><a href="#packages">Customised Packages</a></li>
            </ul>
          </div>
          <div className={s.col}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Cancellation Policy</a></li>
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
