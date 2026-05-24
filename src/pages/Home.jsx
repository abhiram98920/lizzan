import { useEffect, useRef } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Helmet } from 'react-helmet-async'
import ScrollScene   from '../components/ScrollScene/ScrollScene'
import Packages      from '../components/Packages/Packages'
import Destinations  from '../components/Destinations/Destinations'
import WhyUs         from '../components/WhyUs/WhyUs'
import Testimonials  from '../components/Testimonials/Testimonials'
import FAQ           from '../components/FAQ/FAQ'
import planeImg from '../assets/layer2.png'

export default function Home() {
  const planeWrapRef = useRef(null)
  const planeRef = useRef(null)

  useEffect(() => {
    // Scroll to top when Home loads
    window.scrollTo(0, 0)

    const lenis = new Lenis({
      duration: 1.4,
      easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 0.85,
      touchMultiplier: 1.5,
    })
    lenis.on('scroll', ScrollTrigger.update)
    const raf = t => lenis.raf(t * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // 1) Ambient floating animation
    const ambient = gsap.to(planeRef.current, {
      y: '+=12',
      rotation: '+=2',
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut'
    })

    // 2) Global Timeline (after ScrollScene ends at 3.5vh)
    const tlGlobal = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: () => `${window.innerHeight * 3.5}px top`,
        end: 'bottom bottom',
        scrub: 1,
      }
    })

    const vw = (coef) => window.innerWidth * (coef / 100)
    const vh = (coef) => window.innerHeight * (coef / 100)

    tlGlobal.to(planeWrapRef.current, { x: vw(35), y: vh(20), rotation: 15, scale: 0.8, duration: 2, ease: 'power1.inOut' })
    tlGlobal.to(planeWrapRef.current, { x: -vw(20), y: vh(30), rotation: -10, scale: 0.7, duration: 2, ease: 'power1.inOut' })
    tlGlobal.to(planeWrapRef.current, { x: vw(10), y: vh(40), rotation: 5, scale: 0.9, duration: 2, ease: 'power1.inOut' })
    tlGlobal.to(planeWrapRef.current, { x: -vw(15), y: vh(20), rotation: -15, scale: 0.6, duration: 2, ease: 'power1.inOut' })
    tlGlobal.to(planeWrapRef.current, { x: vw(25), y: vh(40), rotation: 10, scale: 0.85, duration: 2, ease: 'power1.inOut' })
    tlGlobal.to(planeWrapRef.current, { x: 0, y: vh(40), rotation: 0, scale: 1, duration: 2, ease: 'power2.out' })

    return () => { 
      ambient.kill()
      lenis.destroy()
      gsap.ticker.remove(raf) 
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>Lizzan Holidays | Journey Beyond The Ordinary</title>
        <meta name="description" content="Premium travel agency in Kerala offering domestic, international, corporate and family tour packages." />
      </Helmet>
      
      <div style={{ position: 'fixed', inset: 0, zIndex: 9999, pointerEvents: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div ref={planeWrapRef} style={{ position: 'absolute', width: 'clamp(140px, 16vw, 260px)', height: 'auto', willChange: 'transform', transformOrigin: 'center center', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.5)) drop-shadow(0 4px 12px rgba(0,0,0,0.4))' }}>
          <img ref={planeRef} src={planeImg} style={{ width: '100%', height: 'auto', display: 'block' }} alt="Global Plane" />
        </div>
      </div>

      <ScrollScene planeWrapRef={planeWrapRef} planeRef={planeRef} />
      <Packages />
      <Destinations />
      <WhyUs />
      <Testimonials />
      <FAQ />
    </>
  )
}
