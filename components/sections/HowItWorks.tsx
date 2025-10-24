"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, FileText, Heart, CheckCircle } from "lucide-react";
import Stagger from "@/components/animations/Stagger";
import StaggerItem from "@/components/animations/StaggerItem";
import FadeIn from "@/components/animations/FadeIn";

const steps = [
  {
    icon: Phone,
    title: "Erstkontakt",
    description: "Rufen Sie mich an oder schreiben Sie mir eine E-Mail. Ich melde mich zeitnah bei Ihnen zurück."
  },
  {
    icon: Calendar,
    title: "Kostenloses Kennenlerngespräch",
    description: "Wir lernen uns persönlich kennen und besprechen Ihre Wünsche und Bedürfnisse."
  },
  {
    icon: FileText,
    title: "Individuelles Betreuungskonzept",
    description: "Gemeinsam erstellen wir einen auf Sie zugeschnittenen Betreuungsplan."
  },
  {
    icon: Heart,
    title: "Start der Betreuung",
    description: "Ich beginne mit der Betreuung zu den vereinbarten Zeiten – verlässlich und herzlich."
  },
  {
    icon: CheckCircle,
    title: "Abrechnung",
    description: "Als LAGuS-anerkannte Alltagshelferin rechne ich direkt mit Ihrer Pflegekasse ab."
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <FadeIn direction="up" className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            So einfach geht's
          </h2>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            In nur 5 Schritten zur professionellen Betreuung
          </p>
        </FadeIn>

        <Stagger staggerDelay={0.15} className="space-y-6 max-w-4xl mx-auto">
          {steps.map((step, idx) => (
            <StaggerItem key={idx}>
              <motion.div
                className="flex gap-6 items-start bg-soft-gray rounded-2xl p-6 border-2 border-primary-blue/20"
                whileHover={{
                  x: 5,
                  borderColor: "rgba(59, 130, 246, 0.4)",
                  transition: { duration: 0.2 }
                }}
              >
                <motion.div
                  className="bg-gradient-to-br from-primary-blue to-warm-orange rounded-full p-4 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon className="w-6 h-6 text-white" strokeWidth={2} />
                </motion.div>
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl font-bold text-primary-blue">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-xl font-semibold text-foreground">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-foreground/70">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </Stagger>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-foreground/70 mb-4">
            Noch Fragen? Ich berate Sie gerne persönlich!
          </p>
          <motion.a
            href="tel:015259229075"
            className="inline-block bg-warm-orange hover:bg-warm-orange/90 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Jetzt anrufen: 0152 / 59229075
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
