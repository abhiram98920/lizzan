import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import s from './Preloader.module.css'

const CloudSvg = () => (
  <svg viewBox="0 0 24 24" fill="rgba(255,255,255,0.03)" style={{ width: 'clamp(150px, 20vw, 400px)', height: 'auto' }}>
    <path d="M17.5 19c2.485 0 4.5-2.015 4.5-4.5 0-2.313-1.745-4.22-4.004-4.475C17.65 6.67 14.82 4 11.5 4c-3.136 0-5.748 2.22-6.386 5.15C2.26 9.617 0 12.025 0 15c0 3.314 2.686 6 6 6h11.5z"/>
  </svg>
)

export default function Preloader() {
  const wrapRef = useRef(null)

  useEffect(() => {
    // Lock scrolling while preloader is active
    document.body.style.overflow = 'hidden'

    // Let the preloader run for exactly 2 seconds, then fade out
    gsap.to(wrapRef.current, {
      opacity: 0,
      duration: 1.2,
      delay: 2.0,
      ease: 'power2.inOut',
      onComplete: () => {
        wrapRef.current.style.display = 'none'
        document.body.style.overflow = '' // Restore scrolling
      }
    })
  }, [])

  return (
    <div ref={wrapRef} className={s.preloader}>
      {/* Speed lines passing by */}
      <div className={s.lines}>
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className={s.line} style={{
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 1}s`,
            animationDuration: `${0.3 + Math.random() * 0.4}s`,
            height: `${1 + Math.random() * 3}px`,
            opacity: 0.1 + Math.random() * 0.3
          }} />
        ))}
      </div>
      
      {/* Fast scrolling clouds */}
      <div className={s.clouds}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={`c-${i}`} className={s.cloud} style={{
            top: `${5 + Math.random() * 80}%`,
            animationDelay: `${Math.random() * 1.5}s`,
            animationDuration: `${1.2 + Math.random() * 1.5}s`,
            transform: `scale(${0.6 + Math.random() * 1.4})`
          }}>
            <CloudSvg />
          </div>
        ))}
      </div>
      
      <h2 className={s.loadingText}>Preparing for Takeoff...</h2>
    </div>
  )
}
