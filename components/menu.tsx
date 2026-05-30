"use client"

import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"

export default function Menu() {
  const menuCategories = [
    {
      title: "Vorspeisen",
      items: [
        {
          name: "Bruschetta Classico",
          description: "Gerostetes Brot mit Tomaten, Basilikum und Olivenol",
          price: "8,50 CHF",
        },
        { name: "Caprese Salat", description: "Mozzarella, Tomaten, frisches Basilikum", price: "9,90 CHF" },
        { name: "Antipasti Teller", description: "Auswahl italienischer Vorspeisen", price: "12,90 CHF" },
      ],
    },
    {
      title: "Hauptgerichte",
      items: [
        { name: "Gegrilltes Steak", description: "Mit Krauterbutter und Gemuse der Saison", price: "24,90 CHF" },
        { name: "Pasta Carbonara", description: "Hausgemacht mit Speck, Ei und Parmesan", price: "14,90 CHF" },
        { name: "Risotto ai Funghi", description: "Cremiger Risotto mit Pilzen", price: "16,50 CHF" },
        { name: "Gegrillter Lachs", description: "Mit Zitronenbutter und Salzkartoffeln", price: "22,90 CHF" },
      ],
    },
    {
      title: "Desserts",
      items: [
        { name: "Tiramisu", description: "Klassisches italienisches Dessert", price: "6,90 CHF" },
        { name: "Panna Cotta", description: "Mit Beerenkompott", price: "6,50 CHF" },
        { name: "Gelato", description: "Hausgemachtes Eis, 3 Kugeln", price: "5,90 CHF" },
      ],
    },
    {
      title: "Getranke",
      items: [
        { name: "Hauswein Rot/Weiss", description: "0,2l", price: "4,90 CHF" },
        { name: "Aperol Spritz", description: "Der Klassiker", price: "7,50 CHF" },
        { name: "Espresso", description: "Italienischer Espresso", price: "2,50 CHF" },
        { name: "Limonade", description: "Hausgemacht, 0,3l", price: "4,50 CHF" },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4 },
    },
  }

  return (
    <section id="speisekarte" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">Unsere Speisekarte</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Geniessen Sie unsere Auswahl an frisch zubereiteten Gerichten
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto"
        >
          {menuCategories.map((category, idx) => (
            <motion.div key={idx} variants={cardVariants} whileHover={{ y: -4 }}>
              <Card className="p-6 bg-background border-border hover:shadow-lg transition-shadow h-full">
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-2xl font-serif font-semibold text-foreground mb-6 border-b border-border pb-2"
                >
                  {category.title}
                </motion.h3>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-5"
                >
                  {category.items.map((item, itemIdx) => (
                    <motion.div
                      key={itemIdx}
                      variants={itemVariants}
                      whileHover={{ x: 4 }}
                      className="flex justify-between items-start gap-4"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground mb-1">{item.name}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="font-semibold text-primary whitespace-nowrap">{item.price}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-sm text-muted-foreground">
            Alle Preise verstehen sich inkl. MwSt. - Anderungen vorbehalten
          </p>
        </motion.div>
      </div>
    </section>
  )
}
