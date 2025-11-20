import { motion } from 'framer-motion'

const tags = [
  'Seizoensfruit', 'Verse groenten', 'Sappen', 'Noten', 'Aardbeien', 'Citrus', 'Koolsoorten', 'Tomaten', 'Exoten', 'Kruiden'
]

export default function Assortiment() {
  return (
    <section id="assortiment" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Assortiment
        </motion.h2>
        <p className="mt-4 text-slate-700 max-w-2xl">
          Een greep uit wat je bij ons vindt. Vraag vooral naar het dagverse aanbod aan de kraam!
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {tags.map((t) => (
            <span key={t} className="px-4 py-2 rounded-full bg-amber-50 text-emerald-900 border border-amber-100 shadow-sm">
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
