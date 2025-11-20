import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const CANDIDATE_GALLERY = [
  'hero','team','kraam','image1','image2','image3','image4','image5','image6','image7','image8','image9'
]

function discoverImages() {
  const exts = ['jpg','jpeg','png','webp']
  const paths = []
  for (const base of CANDIDATE_GALLERY) {
    for (const ext of exts) paths.push(`/${base}.${ext}`)
  }
  return paths
}

function useExistingImages() {
  const [images, setImages] = useState([])
  useEffect(() => {
    let cancelled = false
    ;(async () => {
      const candidates = discoverImages()
      const found = []
      for (const p of candidates) {
        try {
          await new Promise((resolve, reject) => {
            const img = new Image()
            img.onload = () => resolve()
            img.onerror = () => reject()
            img.src = p
          })
          if (!cancelled) found.push(p)
        } catch {}
      }
      if (!cancelled) setImages(found)
    })()
    return () => { cancelled = true }
  }, [])
  return images
}

export default function Gallery() {
  const images = useExistingImages()
  if (!images.length) return null

  return (
    <section id="galerij" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Fotogalerij
        </motion.h2>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className="overflow-hidden rounded-xl shadow-sm ring-1 ring-slate-200"
            >
              <img src={src} alt="Galerij" className="w-full h-40 sm:h-48 md:h-52 object-cover" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
