"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50"
      style={{background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.1), rgba(168, 85, 247, 0.1), rgba(236, 72, 153, 0.1), rgba(251, 146, 60, 0.1))', backdropFilter: 'blur(20px)'}}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Link href="/" className="flex items-center space-x-3">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 5 }}
                >
                  <Image
                    src="/logo.png"
                    alt="Seniorenbetreuung Alltagshelfer Nicole Hinrich Logo"
                    width={60}
                    height={60}
                    className="w-12 h-12 sm:w-14 sm:h-14"
                  />
                </motion.div>
                <div className="hidden sm:block">
                  <h2 className="text-foreground font-semibold text-lg drop-shadow-sm">Seniorenbetreuung</h2>
                  <p className="text-warm-orange text-sm drop-shadow-sm font-medium">Alltagshelfer Nicole Hinrich</p>
                </div>
              </Link>
            </motion.div>
            <nav className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                { href: "/", label: "Startseite" },
                { href: "/leistungen", label: "Leistungen" },
                { href: "/ueber-mich", label: "Über mich" },
                { href: "/kontakt", label: "Kontakt" },
              ].map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="relative text-foreground/90 hover:text-primary-blue transition-colors font-semibold drop-shadow-sm group"
                  >
                    {link.label}
                    <motion.span
                      className="absolute left-0 -bottom-1 w-0 h-0.5 bg-warm-orange"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href="/kontakt"
                className="bg-warm-orange hover:bg-warm-orange/90 text-white px-4 sm:px-6 py-2 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
              >
                Jetzt anfragen
              </Link>
            </motion.div>
          </div>
      </div>
    </motion.header>
  );
}
