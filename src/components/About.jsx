import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Familiebedrijf
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-6 text-lg leading-8 text-slate-700 bg-amber-50/60 border border-amber-100 rounded-2xl p-6 shadow-sm"
        >
          Visser Groente en Fruit is een écht familiebedrijf, gerund door Ives Visser en Jeffry Visser. De hele familie werkt mee — van opa tot zoon — waardoor de kraam al generaties lang een vertrouwd gezicht is op de markt.
          Elke week staat het team met passie, energie en gezelligheid klaar voor de klanten. De dagen beginnen al om half vijf ’s ochtends, wanneer de kraam wordt opgebouwd, en eindigen om half vijf in de middag, altijd met dezelfde liefde en toewijding.
          De familie Visser staat bekend om hun verse producten, hun eerlijkheid en hun typische ‘Visser-gezelligheid’: altijd een praatje, altijd een glimlach, en altijd de beste kwaliteit.
        </motion.p>
      </div>
    </section>
  )
}
