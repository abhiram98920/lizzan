import { useState, useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import s from './FAQ.module.css'
import GlobeViewer from './GlobeViewer'

const FAQS = [
  { q: 'Do you provide visa assistance?', a: 'Yes, we provide comprehensive visa assistance for all our international tour packages, guiding you through the documentation and application process.' },
  { q: 'Can I customize my tour package?', a: 'Absolutely! While we have expertly crafted pre-set itineraries, our team can tailor any package to suit your specific interests, dates, and budget.' },
  { q: 'Are flights included in the packages?', a: 'It depends on the package. We offer both land-only packages and all-inclusive packages that cover international and domestic flights.' },
  { q: 'What is your cancellation policy?', a: 'Cancellation policies vary depending on the destination and the suppliers involved. We will provide a detailed cancellation policy specific to your booking before confirmation.' },
]

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)
  const secRef = useRef(null)
  const innerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(innerRef.current,
      { opacity: 0, y: 40, filter: 'blur(10px)' },
      {
        opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.2, ease: 'power4.out',
        scrollTrigger: { trigger: secRef.current, start: 'top 85%', toggleActions: 'play none none reverse' },
      }
    )
  }, [])

  return (
    <section ref={secRef} className={s.section}>
      <div ref={innerRef} className={s.inner}>
        <div className={s.leftCol}>
          <div className={s.header}>
            <span className={s.eyebrow}>FAQ</span>
            <h2 className={s.title}>Frequently Asked Questions</h2>
          </div>
          <div className={s.list}>
            {FAQS.map((faq, i) => {
              const isOpen = i === openIdx
              return (
                <div key={i} className={`${s.item} ${isOpen ? s.open : ''}`}>
                  <button className={s.question} onClick={() => setOpenIdx(isOpen ? -1 : i)}>
                    <span>{faq.q}</span>
                    <span className={s.icon}>{isOpen ? '−' : '+'}</span>
                  </button>
                  <div className={s.answerWrap} style={{ height: isOpen ? 'auto' : 0 }}>
                    <p className={s.answer}>{faq.a}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={s.rightCol}>
          <div className={s.globeWrap}>
            <GlobeViewer />
          </div>
          <div className={s.supportBox}>
            <div className={s.supportIcon}>👋</div>
            <div>
              <h4 className={s.supportTitle}>Still have questions?</h4>
              <p className={s.supportText}>Our travel experts are here to help you plan the perfect trip.</p>
              <a href="#contact" className={s.supportLink}>Talk to us &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
