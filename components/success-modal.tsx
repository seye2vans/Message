"use client"
import { useEffect, useState } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal wrapper */}
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Modal */}
        <div className="relative w-full max-w-md overflow-hidden rounded-3xl bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 shadow-[0_30px_80px_rgba(168,85,247,0.45)]">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-20 text-gray-500 hover:text-gray-700 text-2xl transition"
          >
            ✕
          </button>

          {/* Decorative blobs */}
          <div className="absolute -top-16 -left-16 w-40 h-40 bg-purple-400/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-40 h-40 bg-pink-300/40 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 p-10 text-center">
            {/* Heart */}
            <div className="text-6xl mb-6 animate-heartBeat">💜</div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-purple-700 mb-4">Happy Valentine 💘</h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              You make my world brighter just by being in it.
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-8">
              <span className="h-[2px] w-10 bg-gradient-to-r from-transparent to-purple-400" />
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="h-[2px] w-10 bg-gradient-to-l from-transparent to-purple-400" />
            </div>

            {/* CTA */}
            <button
              onClick={onClose}
              className="px-10 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Close 💞
            </button>
          </div>

          {/* Floating hearts */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute bottom-[-30px] text-xl opacity-60 animate-floatUp"
              style={{
                left: `${15 + i * 12}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            >
              💜
            </span>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes floatUp {
          0% {
            transform: translateY(0) scale(0.8);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: translateY(-420px) scale(1.2);
            opacity: 0;
          }
        }

        .animate-floatUp {
          animation: floatUp 3.5s ease-in infinite;
        }

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        .animate-heartBeat {
          animation: heartBeat 1.6s ease-in-out infinite;
        }
      `}</style>
    </>
  )
}
