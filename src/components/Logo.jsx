export default function Logo({ className, fill = '#D4AF37', textFill = '#082B36' }) {
  return (
    <svg 
      className={className}
      viewBox="0 0 400 120" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      style={{ overflow: 'visible' }}
    >
      <defs>
        <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#D4AF37" />
          <stop offset="50%" stopColor="#F0D682" />
          <stop offset="100%" stopColor="#D4AF37" />
        </linearGradient>
      </defs>
      
      {/* Flight Arc */}
      <path 
        d="M 60 70 C 100 100, 260 100, 330 35" 
        stroke="url(#goldGradient)" 
        strokeWidth="3.5" 
        strokeLinecap="round" 
        fill="none"
      />
      
      {/* Little Plane Icon at the end of the arc */}
      <g transform="translate(330, 35) rotate(-45)">
        <path d="M -4,-8 L 12,0 L -4,8 L -1,0 Z" fill={fill}/>
      </g>
      
      {/* Main Title LIZZAN */}
      <text 
        x="50%" y="70" 
        fontFamily="'Outfit', sans-serif" 
        fontWeight="900" 
        fontSize="64" 
        fill={textFill} 
        textAnchor="middle" 
        letterSpacing="8"
      >
        LIZZAN
      </text>
      
      {/* Subtitles */}
      <text 
        x="50%" y="95" 
        fontFamily="'Outfit', sans-serif" 
        fontWeight="600" 
        fontSize="14" 
        fill={textFill} 
        textAnchor="middle" 
        letterSpacing="10"
      >
        - HOLIDAYS -
      </text>
      <text 
        x="50%" y="115" 
        fontFamily="'Outfit', sans-serif" 
        fontWeight="400" 
        fontSize="9" 
        fill={textFill} 
        textAnchor="middle" 
        letterSpacing="5"
        opacity="0.6"
      >
        - TRAVEL BEYOND HORIZONS -
      </text>
    </svg>
  )
}
