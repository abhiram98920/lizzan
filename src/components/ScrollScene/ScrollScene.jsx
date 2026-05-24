/**
 * ScrollScene.jsx
 */
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Logo from '../Logo'
import WorldClocks from '../WorldClocks/WorldClocks'
import ContactMap from '../ContactMap/ContactMap'
import mapImg   from '../../assets/layer1.png'
import s from './ScrollScene.module.css'

gsap.registerPlugin(ScrollTrigger)

const vw = p => window.innerWidth  * (p / 100)
const vh = p => window.innerHeight * (p / 100)

const SERVICES = [
  ['✈','Flight Tickets'],['🌍','International Tours'],['🇮🇳','Domestic Tours'],
  ['👥','Group Tours'],['✨','Customised Tours'],['💼','Corporate Tours'],
  ['👨‍👩‍👧','Family Tours'],['🕌','Pilgrim Tours'],['🚢','Cruise Tours'],
  ['🏨','Hotels & Houseboats'],['🛡️','Travel Insurance'],['📋','Visa Assistance'],
]

export default function ScrollScene({ planeWrapRef, planeRef }) {
  const wrapRef   = useRef(null)
  const canvasRef = useRef(null)
  const mapRef    = useRef(null)
  const heroRef   = useRef(null)
  const aboutRef  = useRef(null)
  const servicesRef  = useRef(null)
  const contRef   = useRef(null)
  const barRef    = useRef(null)

  const stat1Ref = useRef(null)
  const stat2Ref = useRef(null)
  const stat3Ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const W = window.innerWidth, H = window.innerHeight

      /* ── INITIAL STATES ─────────────────────────────────────── */
      gsap.set(mapRef.current,   { scale: 1, x: 0, y: 0, transformOrigin: '50% 50%' })
      // Plane starts in center during preloader, then moves
      gsap.set(planeWrapRef.current, { x: 0, y: 0, rotation: 0, transformOrigin: '50% 50%' })
      
      gsap.to(planeWrapRef.current, {
        x: vw(25), y: -vh(5), rotation: 5,
        duration: 2, delay: 2.0, ease: 'power2.inOut'
      })

      gsap.set(aboutRef.current, { autoAlpha: 0, x: -80 })
      gsap.set(servicesRef.current,  { autoAlpha: 0, x:  80 })
      gsap.set(contRef.current,  { autoAlpha: 0, y: 80, scale: 0.95 })
      gsap.set(barRef.current,   { scaleX: 0, transformOrigin: 'left center' })

      /* ── MASTER TIMELINE ─────────────────────────────────────── */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1, // Smooth scrubbing
          pin: canvasRef.current,
          anticipatePin: 1,
          snap: {
            snapTo: "labelsDirectional", // Snaps to the next label on a single scroll
            duration: { min: 0.2, max: 0.6 },
            delay: 0,
            ease: "power1.inOut"
          },
          onUpdate(self) {
            gsap.set(barRef.current, { scaleX: self.progress })
          },
        },
      })

      // Add start label for snap
      tl.addLabel("start")

      // Hero -> About
      tl.to(heroRef.current, { autoAlpha: 0, y: -40, duration: 0.5, ease: 'power2.inOut' })
        .to(mapRef.current,  { scale: 1.2, x: vw(5), duration: 1, ease: 'power2.inOut' }, "<")
        .fromTo(planeWrapRef.current,
          { x: vw(25), y: -vh(5), rotation: 5, scaleX: 1.0, scaleY: 1.0 },
          { x: -vw(12), y: -vh(18), rotation: -15, scaleX: -0.85, scaleY: 0.85, duration: 1, ease: 'power2.inOut' }, 
          "<"
        )
        .to(aboutRef.current,{ autoAlpha: 1, x: 0, duration: 0.5, ease: 'power2.inOut' }, "-=0.5")

      tl.addLabel("about")
      // PAUSE AT ABOUT (Plane drifts slowly on the top right of the card)
      tl.to(planeWrapRef.current, { x: -vw(15), y: -vh(15), rotation: -10, duration: 2, ease: 'none' })

      // About -> Services
      tl.to(aboutRef.current,{ autoAlpha: 0, x: -60, duration: 0.5, ease: 'power2.inOut' })
        .to(mapRef.current,  { scale: 1.7, x: vw(12), y: -vh(5), duration: 1, ease: 'power2.inOut' }, "<")
        .to(planeWrapRef.current,{ x: vw(15), y: -vh(12), rotation: 10, scaleX: 0.85, scaleY: 0.85, duration: 1, ease: 'power2.inOut' }, "<")
        .to(servicesRef.current, { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power2.inOut' }, "-=0.5")

      tl.addLabel("services")
      // PAUSE AT SERVICES (Plane drifts slowly on the left)
      tl.to(planeWrapRef.current, { x: vw(18), y: -vh(8), rotation: 5, duration: 2, ease: 'none' })

      // Services -> Contact
      tl.to(servicesRef.current, { autoAlpha: 0, x: 60, duration: 0.5, ease: 'power2.inOut' })
        .to(mapRef.current,  { scale: 2.2, x: -vw(16), y: -vh(8), duration: 1, ease: 'power2.inOut' }, "<")
        .to(planeWrapRef.current,{ x: vw(20), y: -vh(20), rotation: 5, scaleX: 0.8, scaleY: 0.8, duration: 1, ease: 'power2.inOut' }, "<")
        .to(contRef.current, { autoAlpha: 1, y: 0, scale: 1, duration: 0.5, ease: 'power2.inOut' }, "-=0.5")

      tl.addLabel("contact")
      /* ── SEG 4 (4→5): CONTACT HOLD ──────────────────────────── */
      tl.to(planeWrapRef.current, { x: vw(25), y: -vh(25), rotation: 10, duration: 3, ease: 'none' })

    }, wrapRef)

    // Stat Counters
    const stats = [
      { ref: stat1Ref, end: 500 },
      { ref: stat2Ref, end: 10 },
      { ref: stat3Ref, end: 15 }
    ]
    stats.forEach(st => {
      const obj = { val: 0 }
      gsap.to(obj, {
        val: st.end,
        duration: 2.5,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutRef.current,
          start: 'top 60%'
        },
        onUpdate: () => {
          if (st.ref.current) st.ref.current.innerText = Math.round(obj.val)
        }
      })
    })

    return () => {
      ctx.revert()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  return (
    <div ref={wrapRef} className={s.wrapper}>
      <div ref={canvasRef} className={s.canvas}>

        <div className={s.mapLayer}>
          <img ref={mapRef} src={mapImg} alt="World map" className={s.map} />
        </div>

        <div className={s.cinemaOverlay} />

        <div className={s.progressBar}>
          <div ref={barRef} className={s.progressFill} />
        </div>

        {/* ── HERO PANEL ─────────────────────────────────────── */}
        <section ref={heroRef} className={`${s.panel} ${s.heroPanel}`}>
          <div className={s.heroContent}>
            <h1 className={s.heroTitle}>
              Travel<br />
              <span className={s.heroStroke}>Beyond</span><br />
              Horizons
            </h1>
            <p className={s.heroSub}>
              Plan, explore, and experience the world — with smart, seamless
              travel solutions crafted in God's Own Country.
            </p>
            <div className={s.heroActions}>
              <a href="#packages" className={s.btnRed}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                Explore Packages
              </a>
              <a href="#contact"  className={s.btnOutline}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Talk to Us
              </a>
            </div>

            <div className={s.scrollNudge}>
              <span className={s.nudgeLine} />
              <span className={s.nudgeText}>Scroll to discover</span>
            </div>
          </div>
          <div className={s.clocksWrap}>
            <WorldClocks />
          </div>
        </section>

        {/* ── ABOUT PANEL (MODERN CARD) ──────────────────────── */}
        <section ref={aboutRef} id="about" className={`${s.panel} ${s.leftPanel}`}>
          <div className={`${s.premiumCard} ${s.aboutCard}`}>
            <div className={s.aboutOverlay}>
              <span className={s.tag}>About Us</span>
              <h2 className={s.cardTitle}>Your Journey,<br />Our Expertise</h2>
              <p className={s.cardBody}>
                Based in Kerala — India's most awarded tourism destination —
                Lizzan Holidays has been crafting unforgettable travel
                experiences for individuals, families and corporates since 2010.
              </p>
              <div className={s.statsRow}>
                <div className={s.stat}><strong><span ref={stat1Ref}>0</span><span>+</span></strong><em>Destinations</em></div>
                <div className={s.statLine}/>
                <div className={s.stat}><strong><span ref={stat2Ref}>0</span><span>K+</span></strong><em>Travellers</em></div>
                <div className={s.statLine}/>
                <div className={s.stat}><strong><span ref={stat3Ref}>0</span><span>yr</span></strong><em>Experience</em></div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SERVICES PANEL (MODERN CARD) ─────────────────────── */}
        <section ref={servicesRef} id="services" className={`${s.panel} ${s.rightPanel}`}>
          <div className={`${s.premiumCard} ${s.servicesCard}`}>
            <div className={s.servicesOverlay}>
              <span className={s.tag}>What We Do</span>
              <h2 className={s.cardTitle}>Complete Travel Solutions</h2>
              <div className={s.svcGrid}>
              {SERVICES.map(([icon, name]) => (
                <div key={name} className={s.svcItem}>
                  <span className={s.svcIcon}>{icon}</span>
                  <span className={s.svcName}>{name}</span>
                </div>
              ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CONTACT PANEL ──────────────────────────────────── */}
        <section ref={contRef} id="contact" className={`${s.panel} ${s.centerPanel}`} style={{ pointerEvents: 'none' }}>
          <div className={s.contactCard}>
            <div className={s.contactCardInner}>
              <div className={s.contactLeft}>
                <div className={s.keralaBadge}>
                  <span className={s.pulseDot}/>
                  Kerala, India — Headquarters
                </div>
                <h2 className={s.cardTitle} style={{color:'#fff', marginBottom:'12px'}}>Let's Plan<br />Your Trip</h2>
                <div className={s.contactMeta}>
                  <a href="mailto:info@lizzanholidays.com">✉ info@lizzanholidays.com</a>
                  <a href="tel:+910000000000">📞 +91 00000 00000</a>
                </div>
                <form className={s.form} onSubmit={e => e.preventDefault()}>
                  <div className={s.row2}>
                    <input id="cn" type="text"  placeholder="Your Name"  required />
                    <input id="ce" type="email" placeholder="Email Address" required />
                  </div>
                  <div className={s.row2}>
                    <input id="cp" type="tel"   placeholder="Phone Number" />
                    <div className={s.selectWrap}>
                      <select id="cd" required defaultValue="">
                        <option value="" disabled>Select Destination...</option>
                        <option value="kerala">Kerala (Domestic)</option>
                        <option value="kashmir">Kashmir (Domestic)</option>
                        <option value="dubai">Dubai (International)</option>
                        <option value="europe">Europe (International)</option>
                        <option value="maldives">Maldives (International)</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <textarea id="cm" rows="2" placeholder="Tell us about your dream trip…" />
                  <button type="submit" className={s.btnRed} style={{width:'100%',justifyContent:'center',display:'flex'}}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}><polygon points="3 11 22 2 13 21 11 13 3 11"></polygon></svg>
                    Send Enquiry
                  </button>
                </form>
              </div>
              <div className={s.contactRight}>
                <ContactMap />
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
