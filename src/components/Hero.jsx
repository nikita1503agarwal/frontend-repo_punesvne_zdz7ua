import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const CANDIDATE_HERO_IMAGES = [
  '/hero.jpg',
  '/team.jpg',
  '/kraam.jpg',
  '/hero.jpeg',
  '/team.jpeg',
  '/kraam.jpeg',
  '/hero.png',
  '/team.png',
  '/kraam.png',
]

function useFirstAvailableImage(paths) {
  const [src, setSrc] = useState(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      for (const p of paths) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => reject()
            img.src = p
          })
          if (!cancelled) {
            setSrc(p)
            break
          }
        } catch (e) {
          // try next
        }
      }
    })()
    return () => {
      cancelled = true
    }
  }, [paths])

  return src
}

export default function Hero() {
  const heroSrc = useFirstAvailableImage(CANDIDATE_HERO_IMAGES)

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        {heroSrc ? (
          <img
            src={heroSrc}
            alt="Visser Groente en Fruit"
            className="h-[70vh] w-full object-cover"
          />
        ) : (
          <div className="h-[70vh] w-full bg-gradient-to-br from-emerald-600 via-amber-400 to-orange-400" />
        )}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      <div className="container mx-auto px-6 pt-24 pb-16 sm:pt-28 sm:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.35)]"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Visser Groente en Fruit
          </h1>
          <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-2xl text-white/90">
            Dagverse kwaliteit, een familiebedrijf met een lach — te vinden in Zeist en Bilthoven.
          </p>
          <div className="mt-8">
            <a
              href="#assortiment"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-700 hover:bg-emerald-600 text-white px-6 py-3 text-base sm:text-lg shadow-lg shadow-emerald-900/30 transition-colors"
            >
              Bekijk ons assortiment
            </a>
          </div>
        </motion.div>
      </div>

      {/* subtle bottom curve */}
      <svg className="-mb-1 block w-full text-white" viewBox="0 0 1440 80" preserveAspectRatio="none" aria-hidden>
        <path fill="currentColor" d="M0,64L60,64C120,64,240,64,360,53.3C480,43,600,21,720,21.3C840,21,960,43,1080,58.7C1200,75,1320,85,1380,90.7L1440,96L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z" />
      </svg>
    </section>
  )
}
