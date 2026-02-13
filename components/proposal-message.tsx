// "use client"
// import { useState } from "react"

// interface ProposalMessageProps {
//   onYes: () => void
//   onClose: () => void
// }

// function ProposalMessage({ onYes, onClose }: ProposalMessageProps) {
//   const [noButtonPos, setNoButtonPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 })
  
//   const BUTTON_WIDTH = 100
//   const BUTTON_HEIGHT = 44
//   const PADDING = 20

//   const moveNoButton = () => {
//     const maxX = window.innerWidth - BUTTON_WIDTH - PADDING
//     const maxY = window.innerHeight - BUTTON_HEIGHT - PADDING

//     const x = Math.random() * maxX + PADDING
//     const y = Math.random() * maxY + PADDING

//     setNoButtonPos({ x, y })
//   }

//   return (
//     <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 sm:p-4">
//       <div className="relative w-full max-w-sm sm:max-w-md mx-auto">
//         <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-6 sm:p-8 relative border-4 border-red-100">
//           {/* Header */}
//           <div className="flex items-center justify-between mb-6 sm:mb-8">
//             <p className="text-red-600 text-xs sm:text-sm font-medium">💌 for you</p>
//             <button onClick={onClose} className="text-gray-400 hover:text-gray-600 text-xl transition">
//               ✕
//             </button>
//           </div>

//           {/* Content */}
          
          
//         </div>
//       </div>
//     </div>
//   )
// }

// interface SuccessModalProps {
//   onClose: () => void
// }

// function SuccessModal({ onClose }: SuccessModalProps) {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0)

//   const carouselImages = [
//     "/jef.jpeg",
//     "/jef2.jpeg",
//     "/jef3.jpeg",
//     "/jef4.jpeg",
//   ]

//   const goToNextImage = () => {
//     setCurrentImageIndex((prev) => (prev + 1) % carouselImages.length)
//   }

//   const goToPreviousImage = () => {
//     setCurrentImageIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)
//   }

//   return (
//     <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
//       <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg my-auto overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl">
//         {/* Close */}
//         <button
//           onClick={onClose}
//           className="absolute top-3 sm:top-4 right-3 sm:right-4 z-20 text-gray-400 hover:text-gray-600 text-xl sm:text-2xl transition"
//         >
//           ✕
//         </button>

//         {/* Decorative elements */}
//         <div className="absolute -top-16 -left-16 w-32 sm:w-40 h-32 sm:h-40 bg-red-200/40 rounded-full blur-3xl" />
//         <div className="absolute -bottom-16 -right-16 w-32 sm:w-40 h-32 sm:h-40 bg-pink-200/40 rounded-full blur-3xl" />

//         {/* Content */}
//         <div className="relative z-10 p-5 sm:p-8 lg:p-10 text-center">
//           {/* Heart */}
//           <div className="text-5xl sm:text-6xl mb-4 sm:mb-6" style={{ animation: 'heartBeat 1.6s ease-in-out infinite' }}>❤️</div>

//           <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-red-600 mb-3 sm:mb-4" style={{ fontFamily: "'Pacifico', cursive" }}>
//             Happy Valentine's 💘
//           </h2>

//           {/* Image carousel */}
//           <div className="mb-6 sm:mb-8 relative bg-red-50 rounded-xl sm:rounded-2xl overflow-hidden border-4 border-red-100">
//             <div className="aspect-square flex items-center justify-center">
//               <img
//                 src={carouselImages[currentImageIndex]}
//                 alt={`Valentine image ${currentImageIndex + 1}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* Navigation buttons */}
//             <button
//               onClick={goToPreviousImage}
//               className="absolute left-1 sm:left-2 top-1/2 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
//             >
//               ←
//             </button>
//             <button
//               onClick={goToNextImage}
//               className="absolute right-1 sm:right-2 top-1/2 transform -translate-y-1/2 bg-red-500/80 hover:bg-red-600 text-white p-1.5 sm:p-2 text-sm sm:text-base rounded-full transition z-10"
//             >
//               →
//             </button>

//             {/* Indicator dots */}
//             <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1.5 sm:gap-2">
//               {carouselImages.map((_, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setCurrentImageIndex(idx)}
//                   className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition ${
//                     idx === currentImageIndex ? "bg-red-600" : "bg-white/60"
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>

//           <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
//             You make my world brighter just by being in it. 💕
//           </p>

//           {/* Divider */}
//           <div className="flex items-center justify-center gap-2 sm:gap-3 mb-6 sm:mb-8">
//             <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-r from-transparent to-red-400" />
//             <span className="w-2 h-2 bg-red-500 rounded-full" style={{ animation: 'pulse 2s ease-in-out infinite' }} />
//             <span className="h-[2px] w-8 sm:w-10 bg-gradient-to-l from-transparent to-red-400" />
//           </div>

//           <button
//             onClick={onClose}
//             className="w-full sm:w-auto px-6 sm:px-10 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-red-500 text-white font-semibold shadow-lg hover:bg-red-600 hover:scale-105 transition"
//           >
//             Close 💞
//           </button>
//         </div>

//         {/* Floating hearts */}
//         {[...Array(6)].map((_, i) => (
//           <span
//             key={i}
//             className="absolute bottom-[-30px] text-lg sm:text-xl opacity-60"
//             style={{
//               left: `${15 + i * 12}%`,
//               animation: `floatUp 3.5s ease-in infinite`,
//               animationDelay: `${i * 0.3}s`,
//             }}
//           >
//             ❤️
//           </span>
//         ))}
//       </div>

//       <style jsx>{`
//         @keyframes floatUp {
//           0% {
//             transform: translateY(0) scale(0.8);
//             opacity: 0;
//           }
//           15% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(-420px) scale(1.2);
//             opacity: 0;
//           }
//         }

//         @keyframes heartBeat {
//           0%, 100% {
//             transform: scale(1);
//           }
//           50% {
//             transform: scale(1.15);
//           }
//         }

//         @keyframes pulse {
//           0%, 100% {
//             opacity: 1;
//           }
//           50% {
//             opacity: 0.5;
//           }
//         }
//       `}</style>
//     </div>
//   )
// }

// export default function ValentinesLanding() {
//   const [showProposal, setShowProposal] = useState(false)
//   const [showSuccess, setShowSuccess] = useState(false)

//   const handleReadMessage = () => {
//     setShowSuccess(true)
//   }

//   const handleYes = () => {
//     setShowProposal(false)
//     setShowSuccess(true)
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-50 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden">
//       {/* Floating Hearts Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute text-2xl sm:text-3xl md:text-4xl opacity-10"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animation: `float ${8 + Math.random() * 8}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//             }}
//           >
//             ❤️
//           </div>
//         ))}
//       </div>

//       {/* Main Content */}
//       <div className="relative z-10 text-center max-w-2xl mx-auto">
//         <div className="mb-8 sm:mb-12">
//           <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-red-600 mb-2 sm:mb-4" style={{ fontFamily: "'Pacifico', cursive", lineHeight: '1.2' }}>
//             Happy Valentine's
//           </h1>
//           <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-rose-500" style={{ fontFamily: "'Pacifico', cursive" }}>
//             Babe 💖
//           </h2>
//         </div>

//         <div className="flex justify-center mb-8 sm:mb-10">
//           <div className="text-6xl sm:text-7xl md:text-8xl" style={{ animation: 'heartbeat 1.5s ease-in-out infinite' }}>
//             ❤️
//           </div>
//         </div>

//         <button
//           onClick={handleReadMessage}
//           className="w-full sm:w-auto px-10 sm:px-12 py-3 sm:py-4 bg-red-500 text-white text-lg sm:text-xl font-semibold rounded-full shadow-xl hover:bg-red-600 hover:shadow-2xl hover:scale-105 transition-all duration-300"
//         >
//           Read My Message 💌
//         </button>
//       </div>

//       {/* Modals */}
//       {showProposal && (
//         <ProposalMessage
//           onYes={handleYes}
//           onClose={() => setShowProposal(false)}
//         />
//       )}

//       {showSuccess && (
//         <SuccessModal onClose={() => setShowSuccess(false)} />
//       )}

//       <style jsx>{`
//         @keyframes float {
//           0%, 100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-80px) rotate(180deg);
//           }
//         }
        
//         @keyframes heartbeat {
//           0%, 100% {
//             transform: scale(1);
//           }
//           25% {
//             transform: scale(1.1);
//           }
//           50% {
//             transform: scale(1);
//           }
//           75% {
//             transform: scale(1.05);
//           }
//         }
//       `}</style>
      
//       {/* Google Fonts */}
//       <link rel="preconnect" href="https://fonts.googleapis.com" />
//       <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
//       <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet" />
//     </div>
//   )
// }