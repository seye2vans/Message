"use client"
import { useEffect, useState } from "react"
import AnimatedFlower from "@/components/animated-flower"
import HeartAnimation from "@/components/heart-animation"
import ProposalMessage from "@/components/proposal-message"
import SuccessModal from "@/components/success-modal"

type Particle = {
  left: string
  top: string
  animation: string
  delay: string
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
    <main className="min-h-screen w-full bg-gradient-to-b from-purple-100 via-purple-50 to-pink-100 flex flex-col items-center justify-center overflow-hidden relative p-4">
      <div className="absolute inset-0 backdrop-blur-md bg-white/20 pointer-events-none" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-8 left-4 md:top-12 md:left-8 opacity-60">
          <AnimatedFlower delay={0} size="w-16 h-16 md:w-24 md:h-24" color="text-purple-500" />
        </div>

        <div className="absolute top-12 right-4 md:top-16 md:right-8 opacity-60 -scale-x-100">
          <AnimatedFlower delay={0.5} size="w-20 h-20 md:w-32 md:h-32" color="text-purple-600" />
        </div>

        <div className="absolute bottom-4 left-2 md:bottom-12 md:left-6 opacity-50 -scale-x-100">
          <AnimatedFlower delay={1} size="w-14 h-14 md:w-20 md:h-20" color="text-purple-400" />
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

        <div className="flex justify-center gap-3 md:gap-6 flex-wrap mb-10">
          <HeartAnimation delay={0.2} size="md" />
          <HeartAnimation delay={0.5} size="lg" />
          <HeartAnimation delay={0.8} size="md" />
        </div>

        <ProposalMessage onYes={() => setShowModal(true)} />
        <SuccessModal isOpen={showModal} onClose={() => setShowModal(false)} />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full opacity-40"
            style={{
              left: p.left,
              top: p.top,
              animation: p.animation,
              animationDelay: p.delay,
            }}
          />
        ))}
      </div>
    </main>
  )
}
