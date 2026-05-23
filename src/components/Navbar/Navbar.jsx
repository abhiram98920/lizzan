import { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import Logo from '../Logo'
import s from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    if (isOpen) {
      gsap.to(menuRef.current, { y: '0%', duration: 0.8, ease: 'expo.inOut' })
      gsap.fromTo(linksRef.current, 
        { y: 120, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', stagger: 0.1, delay: 0.4 }
      )
    } else {
      gsap.to(menuRef.current, { y: '-100%', duration: 0.8, ease: 'expo.inOut' })
    }
  }, [isOpen])

  return (
    <>
      <nav className={`${s.nav} ${isOpen ? s.navOpen : ''}`}>
        <div className={s.inner}>
          <a href="#" className={s.logoWrap} onClick={() => setIsOpen(false)}>
            <Logo className={s.logo} textFill="#ffffff" />
          </a>
          
          <button className={`${s.hamburger} ${isOpen ? s.hamActive : ''}`} onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
            <span className={s.line} />
            <span className={s.line} />
          </button>
        </div>
      </nav>

      <div ref={menuRef} className={s.menuOverlay}>
        <div className={s.menuInner}>
          <ul className={s.menuList}>
            {['Packages', 'Destinations', 'About', 'Services', 'Contact'].map((item, i) => (
              <li key={item} className={s.menuItem}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  ref={el => linksRef.current[i] = el}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
          
          <div className={s.menuFooter}>
            <div className={s.contactBlock}>
              <span>Get in touch</span>
              <a href="mailto:info@lizzanholidays.com">info@lizzanholidays.com</a>
            </div>
            <div className={s.socials}>
              <a href="#">Instagram</a>
              <a href="#">Facebook</a>
              <a href="#">WhatsApp</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
