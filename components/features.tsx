"use client"

import { Leaf, Users, Sparkles } from "lucide-react"
import { motion } from "framer-motion"

export default function Features() {
  const features = [
    {
      icon: Leaf,
      title: "Regional & Frisch",
      description: "Wir setzen auf saisonale Zutaten aus der Region und bereiten alles frisch fur Sie zu.",
    },
    {
      icon: Users,
      title: "Gemutliche Atmosphare",
      description: "Unsere einzigartige Terrasse bietet den perfekten Rahmen fur entspannte Stunden.",
    },
    {
      icon: Sparkles,
      title: "Besonderes Erlebnis",
      description: "Der charakteristische Airstream-Wagen macht jeden Besuch zu etwas Besonderem.",
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="flex flex-col items-center text-center space-y-4"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center"
              >
                <feature.icon className="w-8 h-8 text-primary" />
              </motion.div>
              <h3 className="text-xl font-serif font-semibold text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed max-w-sm">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
