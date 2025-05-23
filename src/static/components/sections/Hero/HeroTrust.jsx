"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, Quote, Calendar, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  AnimatedElement,
  AnimatedGroup,
  AnimatedChild,
} from "@/components/ui/animated-element";
import { IconShiftButton } from "@/components/ui/animated-button";
import { textVariant, fadeIn } from "@/lib/animation";

function HeroTrust() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-24 overflow-hidden bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Floating Top Rated badge */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="absolute top-6 left-6 z-30 bg-yellow-400 text-black px-4 py-1.5 text-xs font-bold uppercase rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all"
      >
        ✨ Top Rated in Denton
      </motion.div>

      <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-8 lg:gap-12 items-center relative z-20">
        {/* Left: Content */}
        <div className="space-y-6">
          {/* Logo Marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.4 }}
            className="mb-6 flex overflow-x-auto gap-6 items-center"
          >
            {["local1", "local2", "local3"].map((logo, idx) => (
              <motion.img
                key={idx}
                src={`/logos/${logo}.svg`}
                alt={`Logo ${idx + 1}`}
                className="h-8 w-auto flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            ))}
          </motion.div>

          <motion.h1
            variants={textVariant(0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white leading-tight"
          >
            <motion.span
              className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"
              animate={{ 
                backgroundPosition: ["0% center", "100% center", "0% center"],
                opacity: [0.8, 1, 0.8] 
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              Trusted by 2,000+ Locals
            </motion.span>
          </motion.h1>

          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex items-center text-yellow-400 gap-1.5 text-xl font-semibold"
          >
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star, idx) => (
                <motion.span 
                  key={idx}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + (idx * 0.1) }}
                >⭐️</motion.span>
              ))}
            </div>
            <span>4.9 average rating</span>
          </motion.div>

          {/* Testimonial Card */}
          <AnimatedElement direction="up" delay={0.4}>
            <motion.div 
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border dark:border-gray-700 relative group"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ duration: 0.2 }}
            >
              <Quote className="absolute top-4 left-4 h-6 w-6 text-blue-500 transition-transform group-hover:scale-110 group-hover:text-blue-600" />
              <div className="flex gap-4 items-start pl-10">
                <Image
                  src="/avatars/jordan.jpg"
                  alt="Jordan M."
                  width={48}
                  height={48}
                  className="rounded-full border-2 border-blue-100"
                />
                <div>
                  <p className="text-gray-800 dark:text-gray-200 text-lg italic">
                    "Best fade I've ever had. Clean, professional, and fast. I
                    won't go anywhere else now."
                  </p>
                  <p className="text-sm text-blue-600 dark:text-blue-300 font-semibold mt-2">
                    — Jordan M., Denton local
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedElement>

          {/* CTAs */}
          <AnimatedGroup className="mt-8 flex flex-wrap gap-4" staggerDelay={0.1}>
            <AnimatedChild>
              <Link href="https://booksy.com" target="_blank">
                <IconShiftButton
                  icon={<Calendar className="h-4 w-4" />}
                  iconPosition="left"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3.5 font-medium shadow-lg shadow-blue-500/20"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 20px rgba(59,130,246,0.5)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Book Now
                </IconShiftButton>
              </Link>
            </AnimatedChild>

            <AnimatedChild>
              <Link href="tel:+19403203202">
                <IconShiftButton
                  icon={<Phone className="h-4 w-4" />}
                  iconPosition="left"
                  className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-600 px-6 py-3.5 font-medium hover:border-gray-300 dark:hover:border-gray-500"
                  whileTap={{ scale: 0.95 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 15px rgba(148,163,184,0.3)",
                  }}
                  transition={{ duration: 0.2 }}
                >
                  Call (940) 320-3202
                </IconShiftButton>
              </Link>
            </AnimatedChild>
          </AnimatedGroup>

          {/* Offer */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.4 }}
            className="mt-6 text-sm text-blue-500 bg-blue-50 dark:bg-blue-900/30 p-3 rounded-lg inline-block"
          >
            💈 First visit? Get $5 off your first cut – use code{" "}
            <strong className="bg-white dark:bg-gray-800 px-2 py-0.5 rounded text-blue-600 dark:text-blue-300">WELCOME5</strong>
          </motion.div>
        </div>

        {/* Image */}
        <AnimatedElement direction="right" delay={0.5}>
          <motion.div
            className="relative overflow-hidden rounded-xl shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src="/barber-shop.jpg"
              alt="Happy client after haircut"
              width={600}
              height={500}
              className="rounded-xl object-cover w-full h-full"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            />
          </motion.div>
        </AnimatedElement>
      </div>
      
      {/* WhatsApp Floating Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        <Link
          href="https://wa.me/19403203202"
          className="flex items-center justify-center bg-green-500 text-white p-3.5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          target="_blank"
        >
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.52 3.48a11.85 11.85 0 0 0-16.76 0 11.85 11.85 0 0 0-2.44 13.11l-1.3 4.73a1.25 1.25 0 0 0 1.53 1.53l4.73-1.3a11.85 11.85 0 0 0 13.11-2.44 11.85 11.85 0 0 0 0-16.76zM12 21a9.01 9.01 0 0 1-4.78-1.33l-.34-.2-2.82.78.78-2.82-.2-.34A9 9 0 1 1 12 21zm4.46-6.54l-.64.64c-.31.3-.68.3-1.04.13a8.86 8.86 0 0 1-2.36-1.5 8.91 8.91 0 0 1-1.5-2.36c-.17-.36-.17-.73.13-1.04l.64-.64c.3-.3.68-.3.99 0l.82.82c.28.28.28.73 0 1.01l-.41.41a7.49 7.49 0 0 0 2.15 2.15l.41-.41c.28-.28.73-.28 1.01 0l.82.82c.3.3.3.68 0 .99z" />
            </svg>
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
}
export default HeroTrust;
