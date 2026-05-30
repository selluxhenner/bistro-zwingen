"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function Gallery() {
  const images = [
    {
      src: "/outdoor-bistro-wooden-terrace-with-tables-and-chai.jpg",
      alt: "Outdoor Terrasse",
    },
    {
      src: "/silver-airstream-trailer-food-truck-bistro-outdoor.jpg",
      alt: "Airstream Bistro",
    },
    {
      src: "/cozy-outdoor-terrace-dining-wooden-deck-evening-at.jpg",
      alt: "Abend Atmosphare",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section id="galerie" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm uppercase tracking-wider text-primary font-medium"
          >
            Impressionen
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
          >
            Erleben Sie die Atmosphare
          </motion.h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={imageVariants}
              whileHover={{ scale: 1.03, y: -8 }}
              className="relative h-80 rounded-lg overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-foreground/20 flex items-end p-4"
              >
                <span className="text-background font-medium">{image.alt}</span>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
