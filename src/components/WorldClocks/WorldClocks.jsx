import { useEffect, useState } from 'react'
import './WorldClocks.css'

const Clock = ({ city, timeZone }) => {
  const [timeState, setTimeState] = useState({ h: 0, m: 0, s: 0, ready: false })

  useEffect(() => {
    // Get current time in specified timezone
    const getTzTime = () => {
      try {
        const now = new Date()
        // Chrome uses narrow no-break space (U+202F) which breaks new Date() parsing
        const str = now.toLocaleString('en-US', { timeZone }).replace(/\u202F/g, ' ')
        const tzDate = new Date(str)
        if (isNaN(tzDate.getTime())) return { h: 0, m: 0, s: 0 }
        return {
          h: tzDate.getHours(),
          m: tzDate.getMinutes(),
          s: tzDate.getSeconds()
        }
      } catch(e) {
        return { h: 0, m: 0, s: 0 }
      }
    }

    const t = getTzTime()
    setTimeState({ ...t, ready: true })
  }, [timeZone])

  if (!timeState.ready) return null

  // Calculate animation delays to set initial hands correctly
  const { h, m, s } = timeState
  
  const secDelay = -s
  const minDelay = -(m * 60 + s)
  const hourDelay = -((h % 12) * 3600 + m * 60 + s)

  return (
    <div className="wc-clockContainer">
      <span className="wc-cityName">{city}</span>
      <div className="wc-face">
        <p className="wc-vIndex">II</p>
        <p className="wc-hIndex">II</p>
        <div className="hand">
          <div className="hand">
            <div className="wc-hour" style={{ animationDelay: `${hourDelay}s` }}></div>
            <div className="wc-minute" style={{ animationDelay: `${minDelay}s` }}></div>
            <div className="wc-second" style={{ animationDelay: `${secDelay}s` }}></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function WorldClocks() {
  const clocks = [
    { city: 'London', timeZone: 'Europe/London' },
    { city: 'New York', timeZone: 'America/New_York' },
    { city: 'Tokyo', timeZone: 'Asia/Tokyo' }
  ]

  return (
    <div className="wc-clocksWrapper">
      {clocks.map(c => (
        <Clock key={c.city} city={c.city} timeZone={c.timeZone} />
      ))}
    </div>
  )
}
