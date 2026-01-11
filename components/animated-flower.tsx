"use client"

interface AnimatedFlowerProps {
  delay?: number
  size?: string
  color?: string
}

export default function AnimatedFlower({ delay = 0, size = "w-24 h-24", color = "text-red-500" }: AnimatedFlowerProps) {
  return (
    <div className={`${size} relative`}>
      <style>{`
        @keyframes bloom {
          0% {
            opacity: 0;
            transform: scale(0) rotate(0deg);
          }
          50% {
            opacity: 1;
          }
          100% {
            opacity: 0.8;
            transform: scale(1) rotate(360deg);
          }
        }

        @keyframes sway {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(2deg);
          }
          50% {
            transform: translateY(-4px) rotate(-2deg);
          }
          75% {
            transform: translateY(-6px) rotate(1deg);
          }
        }

        @keyframes petal-float {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(40px) translateX(20px) scale(0.5);
            opacity: 0;
          }
        }

        .flower {
          animation: bloom 3s ease-in-out infinite, sway 4s ease-in-out infinite;
        }

        .petal {
          animation: petal-float 3s ease-in infinite;
          transform-origin: center;
        }
      `}</style>

      <svg
        className={`${size} ${color} flower`}
        style={{ animationDelay: `${delay}s` }}
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Stem */}
        <line x1="50" y1="60" x2="50" y2="100" stroke="currentColor" strokeWidth="2" opacity="0.6" />

        {/* Leaves */}
        <ellipse cx="35" cy="80" rx="8" ry="15" fill="currentColor" opacity="0.4" transform="rotate(-45 35 80)" />
        <ellipse cx="65" cy="80" rx="8" ry="15" fill="currentColor" opacity="0.4" transform="rotate(45 65 80)" />

        {/* Outer petals (5 petals) */}
        {[0, 72, 144, 216, 288].map((angle) => (
          <ellipse
            key={`outer-${angle}`}
            cx="50"
            cy="25"
            rx="12"
            ry="20"
            fill="currentColor"
            opacity="0.9"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* Middle petals (5 petals - offset) */}
        {[36, 108, 180, 252, 324].map((angle) => (
          <ellipse
            key={`middle-${angle}`}
            cx="50"
            cy="30"
            rx="10"
            ry="18"
            fill="currentColor"
            opacity="0.75"
            transform={`rotate(${angle} 50 50)`}
          />
        ))}

        {/* Center circle */}
        <circle cx="50" cy="50" r="12" fill="currentColor" opacity="0.95" />
        <circle cx="50" cy="50" r="10" fill="white" opacity="0.3" />

        {/* Inner center details */}
        <circle cx="50" cy="50" r="6" fill="currentColor" opacity="0.6" />
      </svg>

      {/* Falling petals effect */}
      {[...Array(3)].map((_, i) => (
        <svg
          key={`petal-${i}`}
          className={`absolute w-2 h-2 ${color} petal`}
          style={{
            animationDelay: `${delay + i * 1}s`,
            left: `${30 + i * 15}%`,
            top: "30%",
          }}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse cx="10" cy="10" rx="6" ry="8" fill="currentColor" />
        </svg>
      ))}
    </div>
  )
}
