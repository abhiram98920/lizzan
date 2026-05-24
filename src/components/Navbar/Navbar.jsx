import { useState, useEffect, useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { DESTINATIONS } from '../../data'
import Logo from '../Logo'
import s from './Navbar.module.css'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [timeStr, setTimeStr] = useState('')
  const menuRef = useRef(null)
  const linksRef = useRef([])
  const navigate = useNavigate()

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const term = e.target.value.toLowerCase().trim()
      if (!term) return
      
      const dest = DESTINATIONS.find(d => d.name.toLowerCase().includes(term))
      if (dest) {
        navigate('/destination/' + dest.id)
        e.target.value = ''
        setIsOpen(false)
      } else {
        alert('Destination not found. Try Kerala, Dubai, Bali, etc.')
      }
    }
  }

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
            <input id="search-dest" type="text" placeholder="Search destinations..." onKeyDown={handleSearch} />
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
            {['Home', 'Packages', 'Destinations', 'About', 'Services', 'Contact'].map((item, i) => {
              let linkPath = '/'
              if (item === 'About') linkPath = '/about'
              else if (item === 'Services') linkPath = '/services'
              else if (item === 'Contact') linkPath = '/contact'
              else if (item !== 'Home') linkPath = `/#${item.toLowerCase()}`
              
              return (
                <li key={item} className={s.menuItem}>
                  <Link 
                    to={linkPath} 
                    onClick={() => setIsOpen(false)}
                    ref={el => linksRef.current[i] = el}
                  >
                    {item}
                  </Link>
                </li>
              )
            })}
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
