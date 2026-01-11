"use client"
import { useState, useRef, useEffect } from "react"

interface ProposalMessageProps {
  onYes: () => void
}

export default function ProposalMessage({ onYes }: ProposalMessageProps) {
  const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number } | null>(null)
  const noButtonRef = useRef<HTMLButtonElement>(null)

  // fixed button size
  const BUTTON_WIDTH = 120
  const BUTTON_HEIGHT = 48
  const PADDING = 16

  const moveNoButton = () => {
    const maxX = window.innerWidth - BUTTON_WIDTH - PADDING
    const maxY = window.innerHeight - BUTTON_HEIGHT - PADDING

    const x = Math.random() * maxX + PADDING
    const y = Math.random() * maxY + PADDING

    setNoButtonPos({ x, y })
  }

  // optional: place NO button initially somewhere visible
  useEffect(() => {
    moveNoButton()
  }, [])

  return (
    <div className="relative z-20 w-full max-w-md mx-auto">
      <div className="bg-gradient-to-br from-purple-400/90 to-pink-400/90 rounded-3xl shadow-2xl p-8 relative backdrop-blur-sm">
        {/* Header */}
        <div className="flex items-center justify-between bg-white/20 -mx-8 -mt-8 px-8 py-3 rounded-t-3xl">
          <p className="text-white text-sm font-semibold">💌 A message for you</p>
          <button className="text-white text-lg font-bold">✕</button>
        </div>

        {/* Content */}
        <div className="text-center py-10">
          <h2 className="text-3xl md:text-4xl font-bold text-white handwriting-font mb-10">
            Will you be my Val? 💕
          </h2>

          {/* Buttons */}
          <div className="flex gap-6 justify-center min-h-[70px] relative">
            {/* YES */}
            <button
              onClick={onYes}
              className="px-12 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition z-30"
            >
              Yes 💖
            </button>

            {/* NO */}
            <button
              ref={noButtonRef}
              onMouseEnter={moveNoButton}
              onTouchStart={moveNoButton}
              style={
                noButtonPos
                  ? {
                      position: "fixed",
                      left: `${noButtonPos.x}px`,
                      top: `${noButtonPos.y}px`,
                      width: `${BUTTON_WIDTH}px`,
                      height: `${BUTTON_HEIGHT}px`,
                      transition: "transform 0.25s ease-out",
                      zIndex: 20,
                    }
                  : undefined
              }
              className="bg-purple-300 text-white font-semibold rounded-full shadow-lg cursor-default select-none flex items-center justify-center"
            >
              No 🙈
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        .handwriting-font {
          font-family: "Comic Sans MS", "Brush Script MT", cursive;
        }
      `}</style>
    </div>
  )
}
