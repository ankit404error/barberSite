"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconShiftButton } from "@/components/ui/animated-button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { fadeIn } from "@/lib/animation";

function HeroSplit() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.15] dark:opacity-[0.05] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%234a90e2' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto grid md:grid-cols-2 min-h-[90vh] relative z-10">
        {/* Left Content */}
        <div className="flex flex-col justify-center py-16 px-4 md:px-8 space-y-8">
          <motion.span
            variants={fadeIn("up", 0.2)}
            className="inline-block py-1.5 px-4 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800"
          >
            Premium Barber Services
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight"
          >
            <motion.span
              whileHover={{ scale: 1.02, color: "#3B82F6" }}
              className="block text-gray-900 dark:text-white"
            >
              Master Your
            </motion.span>
            <motion.span
              whileHover={{ scale: 1.02, color: "#ffffff" }}
              className="block text-blue-600 dark:text-blue-400 mt-2 underline decoration-2 underline-offset-4"
            >
              Style
            </motion.span>
          </motion.h1>

          <p className="text-sm text-gray-500 dark:text-gray-400">
            #BarberLife · Serving Denton Since 2013
          </p>

          <motion.p
            variants={fadeIn("up", 0.3)}
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-lg leading-relaxed"
          >
            Experience the art of precision grooming at North Texas Cutz. Where
            traditional craftsmanship meets modern style, creating your perfect
            look every time.
          </motion.p>

          {/* Trust Badge */}
          <motion.div
            className="mt-2 bg-white/10 px-4 py-2 rounded-full text-sm text-white dark:text-white flex items-center gap-2 backdrop-blur-sm w-fit"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <svg
              className="h-4 w-4 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.567-.955L10 0l2.944 5.955 6.567.955-4.756 4.635 1.123 6.545z" />
            </svg>
            4.9 Rated · 2,000+ Happy Clients
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="https://booksy.com/en-us/861034_north-texas-cutz_barber-shop_36535_denton?do=open-widget"
              target="_blank"
            >
              <IconShiftButton
                icon={<Calendar className="h-5 w-5" />}
                iconPosition="left"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 text-lg font-medium"
              >
                Book Now
              </IconShiftButton>
            </Link>

            <Link href="tel:+19403203202">
              <IconShiftButton
                icon={<Phone className="h-5 w-5" />}
                iconPosition="left"
                className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 px-6 py-3 text-lg font-medium"
              >
                (940) 320-3202
              </IconShiftButton>
            </Link>
          </motion.div>

          {/* Location */}
          <motion.div
            variants={fadeIn("up", 0.5)}
            className="flex items-center gap-3 pt-6 text-gray-600 dark:text-gray-400"
          >
            <MapPin className="h-5 w-5 text-blue-600 dark:text-blue-400 flex-shrink-0" />
            <span className="text-base">
              1100 Dallas Dr Suite 120, Denton, TX 76205
            </span>
          </motion.div>
        </div>

        {/* Right Image */}
        <div className="relative hidden md:flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10"
          >
            <Image
              src="/barber-bg.jpg"
              alt="Professional barbershop interior"
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />

            {/* Floating Badge */}
            <AnimatedElement
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-xl shadow-xl p-5 backdrop-blur-md bg-opacity-90 dark:bg-opacity-90 ring-1 ring-black/10"
              direction="up"
              delay={0.8}
            >
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 rounded-full p-2.5">
                  <svg
                    className="h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">
                    Trusted Choice
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    2,000+ satisfied clients
                  </p>
                </div>
              </div>
            </AnimatedElement>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
export default HeroSplit;
