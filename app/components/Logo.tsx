export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 1024 1024" 
      role="img" 
      aria-label="StrengthLens SL badge"
      className={className}
    >
      <defs>
        {/* Background */}
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0D142B"/>
          <stop offset="1" stopColor="#070A16"/>
        </linearGradient>

        {/* Subtle diagonal sheen (modern, not glossy) */}
        <linearGradient id="sheen" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#FFFFFF" stopOpacity="0.12"/>
          <stop offset="0.45" stopColor="#FFFFFF" stopOpacity="0.03"/>
          <stop offset="1" stopColor="#FFFFFF" stopOpacity="0"/>
        </linearGradient>

        {/* Brand gradient */}
        <linearGradient id="brand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3862E3"/>
          <stop offset="0.55" stopColor="#2F51C6"/>
          <stop offset="1" stopColor="#1E3279"/>
        </linearGradient>

        <filter id="softShadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="22" stdDeviation="22" floodColor="#000000" floodOpacity="0.45"/>
        </filter>

        {/* Mask that defines the SL glyph */}
        <mask id="slMask">
          <rect x="0" y="0" width="1024" height="1024" fill="black"/>
          <g fill="none" stroke="white" strokeWidth="112" strokeLinecap="round" strokeLinejoin="round">
            {/* S (smooth + scientific curve) */}
            <path d="M620 330
                     C586 270 514 244 444 258
                     C374 272 334 326 350 374
                     C370 434 466 434 536 452
                     C640 478 686 536 672 604
                     C650 716 502 756 392 708
                     C344 688 308 656 284 620"/>
            {/* L (clean axis/pillar) */}
            <path d="M694 344 V680 H820"/>
          </g>
        </mask>

        {/* Small glow for crisp readability at tiny sizes */}
        <filter id="glyphGlow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="10" result="b"/>
          <feColorMatrix in="b" type="matrix"
            values="1 0 0 0 0
                    0 1 0 0 0
                    0 0 1 0 0
                    0 0 0 0.35 0" result="g"/>
          <feMerge>
            <feMergeNode in="g"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Badge */}
      <rect x="64" y="64" width="896" height="896" rx="210" fill="url(#bg)" filter="url(#softShadow)"/>
      <rect x="64" y="64" width="896" height="896" rx="210" fill="url(#sheen)"/>

      {/* Brand-gradient SL (masked = one iconic glyph) */}
      <g filter="url(#glyphGlow)">
        <rect x="0" y="0" width="1024" height="1024" fill="url(#brand)" mask="url(#slMask)"/>
      </g>
    </svg>
  );
}
