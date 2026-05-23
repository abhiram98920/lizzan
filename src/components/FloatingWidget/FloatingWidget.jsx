import s from './FloatingWidget.module.css'

export default function FloatingWidget() {
  return (
    <div className={s.widget}>
      <a href="https://wa.me/910000000000" className={`${s.item} ${s.wa}`} aria-label="WhatsApp">
        <span className={s.tooltip}>WhatsApp</span>
        <span className={s.icon}>💬</span>
      </a>
      <a href="tel:+910000000000" className={`${s.item} ${s.call}`} aria-label="Call Us">
        <span className={s.tooltip}>Call Us</span>
        <span className={s.icon}>📞</span>
      </a>
      <a href="mailto:info@lizzanholidays.com" className={`${s.item} ${s.mail}`} aria-label="Email Us">
        <span className={s.tooltip}>Email Us</span>
        <span className={s.icon}>✉️</span>
      </a>
    </div>
  )
}
