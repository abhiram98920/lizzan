import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Logo from '../Logo'
import s from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeStr, setTimeStr] = useState('')
  const menuRef = useRef(null)
  const linksRef = useRef([])

  useEffect(() => {
    const updateTime = () => {
      setTimeStr(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }
    updateTime()
    const intv = setInterval(updateTime, 60000)
    return () => clearInterval(intv)
  }, [])

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
          <Link to="/" className={s.logoWrap} onClick={() => setIsOpen(false)}>
            <Logo className={s.logo} textFill="#ffffff" />
          </Link>
          
          <div className={s.searchWrap}>
            <svg className={s.searchIcon} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input id="search-dest" type="text" placeholder="Search destinations..." />
          </div>

          <div className={s.infoBar}>
            <span>🌤️ 28°C Cochin</span>
            <span className={s.sep}>|</span>
            <span>🕒 {timeStr}</span>
          </div>
          
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
                <Link 
                  to={item === 'Home' ? '/' : `/#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  ref={el => linksRef.current[i] = el}
                >
                  {item}
                </Link>
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
