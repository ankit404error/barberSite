"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import { IconShiftButton } from "@/components/ui/animated-button";
import { fadeIn } from "@/lib/animation";

const HeroVideo = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 py-28 overflow-hidden">
      {/* 🎥 Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/barber-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl">
        <motion.span
          variants={fadeIn("up", 0.2)}
          className="inline-block py-2 px-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800 mb-4"
        >
          Your Neighborhood Barbershop
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-5xl md:text-6xl font-extrabold text-white"
        >
          More Than Just a Cut
        </motion.h1>
        <p className="text-sm uppercase tracking-wide text-blue-300 mt-2">
          #BarberLife · Since 2013
        </p>
        <motion.p
          variants={fadeIn("up", 0.3)}
          className="text-lg md:text-xl text-gray-200 mt-4"
        >
          Step into North Texas Cutz and feel the vibe — real barbers, real
          craft.
        </motion.p>
        <motion.div
          className="flex items-center justify-center gap-2 text-gray-300 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <svg
            className="h-4 w-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.567-.955L10 0l2.944 5.955 6.567.955-4.756 4.635 1.123 6.545z" />
          </svg>
          4.9 Rating · 2,000+ happy customers
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          className="flex flex-col sm:flex-row justify-center gap-4 mt-8"
        >
          <Link href="https://booksy.com" target="_blank">
            <IconShiftButton
              icon={<Calendar className="h-5 w-5" />}
              iconPosition="left"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
            >
              Book Now
            </IconShiftButton>
          </Link>

          <Link href="tel:+19403203202">
            <IconShiftButton
              icon={<Phone className="h-5 w-5" />}
              iconPosition="left"
              className="bg-white/90 text-gray-900 px-6 py-3 border border-gray-300"
            >
              (940) 320-3202
            </IconShiftButton>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.5)}
          className="flex items-center justify-center gap-2 text-gray-300 mt-6"
        >
          <MapPin className="h-5 w-5 text-blue-300" />
          <span>1100 Dallas Dr Suite 120, Denton, TX</span>
        </motion.div>
      </div>
    </section>
  );
};
export default HeroVideo;
