"use client"

interface HeartAnimationProps {
  delay?: number
  size?: "sm" | "md" | "lg"
}

export default function HeartAnimation({ delay = 0, size = "md" }: HeartAnimationProps) {
  const sizeClasses = {
    sm: "w-6 h-6",
    md: "w-8 h-8",
    lg: "w-12 h-12",
  }

  return (
    <div className={`${sizeClasses[size]} relative`}>
      <style>{`
        @keyframes heartbeat {
          0% {
            transform: scale(1);
          }
          15% {
            transform: scale(1.2);
          }
          30% {
            transform: scale(1);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes float-up {
          0% {
            opacity: 1;
            transform: translateY(0) rotate(0deg);
          }
          100% {
            opacity: 0;
            transform: translateY(-80px) rotate(10deg);
          }
        }

        .heart-beat {
          animation: heartbeat 1.5s ease-in-out infinite;
        }

        .heart-float {
          animation: float-up 2s ease-out infinite;
          animation-delay: calc(${delay}s + 1.5s);
        }
      `}</style>

      <svg
        className="w-full h-full text-purple-500 heart-beat"
        style={{ animationDelay: `${delay}s` }}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>

      <svg
        className="absolute inset-0 w-full h-full text-pink-400 heart-float"
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    </div>
  )
}
