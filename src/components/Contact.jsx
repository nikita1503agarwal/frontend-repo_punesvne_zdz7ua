import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm bg-white">
            <div className="flex items-center gap-3 text-slate-800">
              <Mail className="w-5 h-5 text-emerald-700" />
              <a href="mailto:jeffryvisser14@icloud.com" className="hover:underline">
                jeffryvisser14@icloud.com
              </a>
            </div>
            <div className="mt-4 flex items-center gap-3 text-slate-800">
              <Phone className="w-5 h-5 text-emerald-700" />
              <a href="tel:+31654371703" className="hover:underline">06 5437 1703</a>
            </div>
            <div className="mt-4 flex items-center gap-3 text-slate-800">
              <MapPin className="w-5 h-5 text-emerald-700" />
              <span>Markt Zeist & Markt Bilthoven</span>
            </div>
            <div className="mt-4 flex items-center gap-3 text-slate-800">
              <Clock className="w-5 h-5 text-emerald-700" />
              <span>Elke donderdag, vrijdag en zaterdag</span>
            </div>
          </div>

          <div className="rounded-2xl bg-gradient-to-br from-emerald-600 via-amber-400 to-orange-400 p-[1px] shadow-sm">
            <div className="rounded-2xl bg-white p-6">
              <h3 className="text-xl font-semibold text-slate-900">We helpen je graag</h3>
              <p className="mt-2 text-slate-700">
                Vragen over het assortiment of een bestelling plaatsen? Stuur ons een berichtje of bel even.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="mailto:jeffryvisser14@icloud.com" className="rounded-full bg-emerald-700 hover:bg-emerald-600 text-white px-5 py-2 shadow">
                  Mail ons
                </a>
                <a href="tel:+31654371703" className="rounded-full bg-orange-500 hover:bg-orange-500/90 text-white px-5 py-2 shadow">
                  Bel direct
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
