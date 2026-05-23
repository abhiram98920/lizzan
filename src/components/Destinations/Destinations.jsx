import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './Destinations.module.css'

const DEST = [
  { id: 'kerala', name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?q=80&w=600' },
  { id: 'dubai',  name: 'Dubai', img: 'https://images.unsplash.com/photo-1526495124232-a04e1849168c?q=80&w=600' },
  { id: 'maldives',name:'Maldives', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=600' },
  { id: 'europe', name: 'Europe', img: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=600' },
  { id: 'bali',   name: 'Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=600' },
  { id: 'singapore',name:'Singapore', img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=600' },
  { id: 'thailand',name: 'Thailand', img: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=600' },
  { id: 'malaysia',name: 'Malaysia', img: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?q=80&w=600' },
]

export default function Destinations() {
  const secRef = useRef(null)

  useEffect(() => {
    const cards = secRef.current.querySelectorAll('[data-dest]')
    gsap.fromTo(cards,
      { opacity: 0, scale: 0.9, y: 30, filter: 'blur(10px)' },
      {
        opacity: 1, scale: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out', stagger: 0.1,
        scrollTrigger: { trigger: secRef.current, start: 'top 85%', toggleActions: 'play none none reverse' }
      }
    )
  }, [])

  return (
    <section ref={secRef} id="destinations" className={s.section}>
      <div className={s.inner}>
        <div className={s.header}>
          <span className={s.eyebrow}>Popular Destinations</span>
          <h2 className={s.title}>Where to Next?</h2>
        </div>
        <div className={s.grid}>
          {DEST.map(d => (
            <div key={d.id} className={s.card} data-dest>
              <div className={s.imgBg} style={{ backgroundImage: `url(${d.img})` }} />
              <div className={s.overlay} />
              <div className={s.content}>
                <h4 className={s.name}>{d.name}</h4>
                <span className={s.explore}>Explore <span>→</span></span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
