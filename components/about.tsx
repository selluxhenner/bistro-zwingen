"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function About() {
  return (
    <section id="uber-uns" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-wider text-primary font-medium"
            >
              Unsere Geschichte
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance"
            >
              Kulinarik trifft auf einzigartiges Ambiente
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-4 text-muted-foreground leading-relaxed"
            >
              <p>
                Dieses Terrassen Bistro ist mehr als nur ein Restaurant - es ist ein Erlebnis. Inmitten einer
                malerischen Umgebung haben wir einen Ort geschaffen, der Gemutlichkeit und Genuss vereint.
              </p>
              <p>
                Der charakteristische Airstream-Wagen dient als Herzstuck der Kuche, wahrend die grosszugige Holzterrasse
                mit naturlicher Bepflanzung den perfekten Rahmen fur unvergessliche kulinarische Momente bietet.
              </p>
              <p>
                Es wird grosser Wert auf regionale Produkte und nachhaltige Zubereitung gelegt. Jedes Gericht wird mit
                Liebe zum Detail kreiert und spiegelt die Vielfalt der lokalen Kuche wider.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            className="relative h-[500px] rounded-lg overflow-hidden"
          >
            <Image src="/cozy-outdoor-bistro-atmosphere-with-wooden-furnitu.jpg" alt="Bistro Atmosphare" fill className="object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
