"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { motion } from "framer-motion"

export default function Contact() {
  const contactItems = [
    {
      icon: MapPin,
      title: "Adresse",
      content: (
        <>
          Musterstrasse 123
          <br />
          1234 Musterstadt
          <br />
          Schweiz
        </>
      ),
    },
    {
      icon: Phone,
      title: "Telefon",
      content: "+41 12 345 67 89",
    },
    {
      icon: Mail,
      title: "E-Mail",
      content: "info@terrassen-bistro.ch",
    },
    {
      icon: Clock,
      title: "Offnungszeiten",
      content: (
        <>
          {"Dienstag-Sonntag: 11:00-22:00"}
          <br />
          Montag: Ruhetag
        </>
      ),
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

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="kontakt" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-sm uppercase tracking-wider text-primary font-medium"
              >
                Kontakt
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-serif text-4xl md:text-5xl font-bold text-foreground text-balance"
              >
                Besuchen Sie uns
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-muted-foreground leading-relaxed"
              >
                Wir freuen uns auf Ihren Besuch! Reservieren Sie einen Tisch oder kontaktieren Sie uns fur weitere
                Informationen.
              </motion.p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {contactItems.map((item, index) => (
                <motion.div key={index} variants={itemVariants} whileHover={{ x: 8 }} className="flex items-start gap-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0"
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div>
                    <p className="font-medium text-foreground mb-1">{item.title}</p>
                    <p className="text-muted-foreground">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ y: -4 }}
            className="bg-card rounded-lg p-8 border border-border"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="space-y-2"
              >
                <label htmlFor="name" className="text-sm font-medium text-foreground">
                  Name
                </label>
                <Input id="name" placeholder="Ihr Name" className="bg-background" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="space-y-2"
              >
                <label htmlFor="email" className="text-sm font-medium text-foreground">
                  E-Mail
                </label>
                <Input id="email" type="email" placeholder="ihre@email.ch" className="bg-background" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="space-y-2"
              >
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Telefon
                </label>
                <Input id="phone" type="tel" placeholder="+41 ..." className="bg-background" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="space-y-2"
              >
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Nachricht
                </label>
                <Textarea id="message" placeholder="Ihre Nachricht..." rows={5} className="bg-background resize-none" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12">
                  Nachricht senden
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
