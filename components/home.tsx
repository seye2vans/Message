"use client"
import { useEffect, useState } from "react"
import AnimatedFlower from "./animated-flower"
import HeartAnimation from "./heart-animation"

type Particle = {
  left: string
  top: string
  animation: string
  delay: string
}

interface SuccessModalProps {
  onClose: () => void
}

function SuccessModal({ onClose }: SuccessModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

 const carouselImages = [
    "/jef.jpeg",
     "/jef2.jpeg",
     "/jef3.jpeg",
     "/jef4.jpeg",
   ]

  const goToNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
  }

  const goToPreviousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
  }

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg my-auto overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 text-gray-400 hover:text-gray-600 text-xl sm:text-2xl transition"
        >
          ✕
        </button>

        <div className="absolute -top-16 -left-16 w-32 sm:w-40 h-32 sm:h-40 bg-red-200/40 rounded-full blur-3xl" />
        <div className="absolute -bottom-16 -right-16 w-32 sm:w-40 h-32 sm:h-40 bg-pink-200/40 rounded-full blur-3xl" />

        <div className="relative z-10 p-5 sm:p-8 lg:p-10 text-center">
          <div className="text-5xl sm:text-6xl mb-4 sm:mb-6" style={{ animation: 'heartBeat 1.6s ease-in-out infinite' }}>❤️</div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-3 sm:mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
            Happy Valentine's 💘
          </h2>

          <div className="mb-6 sm:mb-8 relative bg-red-50 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-red-100">
            <div className="aspect-square flex items-center justify-center">
              <img
                src={carouselImages[currentImageIndex]}
                alt={`Valentine image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
            </div>

            <button
              onClick={goToPreviousImage}
              className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
            >
              ←
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
            >
              →
            </button>

            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentImageIndex(idx)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${
                    idx === currentImageIndex ? "bg-red-600" : "bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
            You make my world brighter just by being in it. 💕
          </p>

          <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-transparent to-red-400" />
            <span className="w-2 h-2 bg-red-500 rounded-full" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-l from-transparent to-red-400" />
          </div>

          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition"
          >
            Close 💞
          </button>
        </div>

        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute bottom-[-30px] text-lg sm:text-xl opacity-60"
            style={{
              left: `${15 + i * 12}%`,
              animation: `floatUp 3.5s ease-in infinite`,
              animationDelay: `${i * 0.3}s`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

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

        @keyframes heartBeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.15);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.5;
          }
        }
      `}</style>
    </div>
  )
}

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = Array.from({ length: 8 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
      delay: `${i * 0.3}s`,
    }))

    setParticles(generated)
  }, [])

  return (
    <main className="min-h-screen w-full bg-gradient-to-b from-red-100 via-red-50 to-pink-100 flex flex-col items-center justify-center overflow-hidden relative p-4">
      <div className="absolute inset-0 backdrop-blur-md bg-white/20 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-4 md:top-12 md:left-8 opacity-60">
          <AnimatedFlower delay={0} size="w-16 h-16 md:w-24 md:h-24" color="text-red-500" />
        </div>

        <div className="absolute top-12 right-4 md:top-16 md:right-8 opacity-60 -scale-x-100">
          <AnimatedFlower delay={0.5} size="w-20 h-20 md:w-32 md:h-32" color="text-red-600" />
        </div>

        <div className="absolute bottom-4 left-2 md:bottom-12 md:left-6 opacity-50 -scale-x-100">
          <AnimatedFlower delay={1} size="w-14 h-14 md:w-20 md:h-20" color="text-red-400" />
        </div>

        <div className="absolute bottom-8 right-2 md:bottom-16 md:right-6 opacity-50">
          <AnimatedFlower delay={1.5} size="w-16 h-16 md:w-24 md:h-24" color="text-pink-500" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 md:px-8 max-w-2xl">
        <div className="flex justify-center gap-3 md:gap-6 mb-6 md:mb-10 flex-wrap">
          <HeartAnimation delay={0} size="md" />
          <HeartAnimation delay={0.3} size="lg" />
          <HeartAnimation delay={0.6} size="md" />
        </div>

        <div className="mb-8 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-2 sm:mb-4" style={{ fontFamily: "'Pacifico', cursive", lineHeight: '1.2' }}>
            Happy Valentine's
          </h1>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-rose-500" style={{ fontFamily: "'Pacifico', cursive" }}>
            Babe 💖
          </h2>
        </div>

        <div className="flex justify-center mb-8 sm:mb-10">
          <div className="text-6xl sm:text-7xl md:text-8xl" style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}>
            ❤️
          </div>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="w-full sm:w-auto px-10 sm:px-12 py-3 sm:py-4 bg-red-500 text-white text-lg sm:text-xl font-semibold rounded-full shadow-xl hover:bg-red-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
        >
          Read My Message 💌
        </button>

        <div className="flex justify-center gap-3 md:gap-6 flex-wrap mt-10">
          <HeartAnimation delay={0.2} size="md" />
          <HeartAnimation delay={0.5} size="lg" />
          <HeartAnimation delay={0.8} size="md" />
        </div>
      </div>

      {/* Modal */}
      {showModal && <SuccessModal onClose={() => setShowModal(false)} />}

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-red-400 rounded-full opacity-40"
            style={{
              left: p.left,
              top: p.top,
              animation: p.animation,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-80px) rotate(180deg);
          }
        }
        
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.05);
          }
        }
      `}</style>

      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
    </main>
  )
}