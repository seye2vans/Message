"use client"
import { useEffect, useState } from "react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const carouselImages = [
    "/dara.jpg",
    "/daraTwos.jpg",
    "/daraTwo.jpg",
    "/daraFour.jpg",
    "/daraFive.jpg",
  ]

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 300)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

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
        className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 transition-all duration-300 overflow-y-auto ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        {/* Modal */}
        <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-br from-purple-200 via-purple-100 to-pink-100 shadow-lg sm:shadow-[0_30px_80px_rgba(168,85,247,0.45)] my-auto">
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 text-gray-500 hover:text-gray-700 text-xl sm:text-2xl transition"
          >
            ✕
          </button>

          {/* Decorative blobs */}
          <div className="absolute -top-16 -left-16 w-32 sm:w-40 h-32 sm:h-40 bg-purple-400/40 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-32 sm:w-40 h-32 sm:h-40 bg-pink-300/40 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative z-10 p-5 sm:p-8 lg:p-10 text-center">
            {/* Heart */}
            <div className="text-5xl sm:text-6xl mb-4 sm:mb-6 animate-heartBeat">💜</div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-purple-700 mb-3 sm:mb-4">
              Happy Valentines 💘
            </h2>

            {/* Image carousel - responsive sizing */}
            <div className="mb-6 sm:mb-8 relative bg-white/40 rounded-xl sm:rounded-2xl overflow-hidden">
              <div className="aspect-square flex items-center justify-center bg-white/30">
                <img
                  src={carouselImages[currentImageIndex] || "/placeholder.svg"}
                  alt={`Valentine image ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image carousel navigation - responsive button size */}
              <button
                onClick={goToPreviousImage}
                className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-700 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
              >
                {"<"}
              </button>
              <button
                onClick={goToNextImage}
                className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-purple-600/80 hover:bg-purple-700 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
              >
                {">"}
              </button>

              {/* Image indicator dots */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
                {carouselImages.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${
                      idx === currentImageIndex ? "bg-purple-600" : "bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              You make my world brighter just by being in it.
            </p>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
              <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-transparent to-purple-400" />
              <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-l from-transparent to-purple-400" />
            </div>

            {/* CTA - responsive padding */}
            <button
              onClick={onClose}
              className="px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition"
            >
              Close 💞
            </button>
          </div>

          {/* Floating hearts */}
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="absolute bottom-[-30px] text-lg sm:text-xl opacity-60 animate-floatUp"
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
