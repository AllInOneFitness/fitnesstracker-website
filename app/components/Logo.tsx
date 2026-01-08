export default function Logo({ className = "w-8 h-8" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer Ring (Orbit) */}
      <circle 
        cx="50" 
        cy="50" 
        r="37" 
        stroke="url(#gradient)" 
        strokeWidth="5.5" 
        fill="none"
      />
      
      {/* Pulse Cut (Negative Space) - Simple peak */}
      <path 
        d="M 34 50 L 42 50 L 46 41 L 54 59 L 58 50 L 66 50" 
        stroke="#060A16" 
        strokeWidth="3.1" 
        fill="none" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      
      {/* SL Monogram */}
      <g stroke="url(#gradient)" strokeWidth="6.8" strokeLinecap="round" strokeLinejoin="round" fill="none">
        {/* S */}
        <path d="M 32 36 Q 32 32 36 32 L 42 32 Q 46 32 46 36 Q 46 40 42 40 L 38 40 Q 34 40 34 44 Q 34 48 38 48 L 44 48 Q 48 48 48 44" />
        
        {/* L */}
        <path d="M 56 32 L 56 48 L 68 48" />
      </g>
      
      {/* Gradient Definition */}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
    </svg>
  );
}
