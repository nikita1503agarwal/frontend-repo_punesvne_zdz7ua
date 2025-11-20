import { motion } from 'framer-motion'

const blocks = [
  { day: 'Donderdag', place: 'Zeist' },
  { day: 'Vrijdag', place: 'Bilthoven' },
  { day: 'Zaterdag', place: 'Zeist' },
]

export default function Markets() {
  return (
    <section id="locaties" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Weekmarkt Locaties & Tijden
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {blocks.map((b, i) => (
            <motion.div
              key={b.day}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white"
            >
              <div className="text-sm font-semibold text-emerald-700">{b.day}</div>
              <div className="mt-1 text-2xl font-bold text-slate-900">{b.place}</div>
            </motion.div>
          ))}
        </div>

        <p className="mt-6 text-slate-700 text-lg">
          Kom langs voor de heerlijkste verse groente, fruit en seizoenproducten.
        </p>
      </div>
    </section>
  )
}
