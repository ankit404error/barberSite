"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Phone, MapPin } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { IconShiftButton } from "@/components/ui/animated-button";
import { AnimatedElement } from "@/components/ui/animated-element";
import { fadeIn, slideIn } from "@/lib/animation";

const carouselImages = ["/barber-bg.jpg", "/barber-shop.jpg", "/barber-bg.jpg"];

function HeroCarousel() {
  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Carousel */}
      <div className="absolute inset-0 z-0">
        <Carousel />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80 transition-opacity duration-700" />
        <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-5 pointer-events-none" />
      </div>

      {/* Centered Content on Carousel */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-28 md:py-36">
        <motion.span
          variants={fadeIn("up", 0.2)}
          className="inline-block py-2 px-5 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800 mb-4"
        >
          Your Neighborhood Barbershop
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02 }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white"
        >
          Fresh Cuts. Clean Style.
        </motion.h1>

        <p className="text-sm uppercase tracking-wide text-blue-300 mt-2">
          #BarberLife · Since 2013
        </p>

        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-lg md:text-xl text-gray-200 max-w-2xl mt-6"
        >
          Sit back and relax at North Texas Cutz. From fades to beard trims, our
          expert barbers ensure you leave looking sharp and confident.
        </motion.p>

        <motion.div
          className="mt-6 bg-white/10 px-4 py-2 rounded-full text-sm text-white flex items-center gap-2 backdrop-blur-sm"
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
          variants={fadeIn("up", 0.5)}
          className="flex flex-col sm:flex-row gap-4 mt-10"
        >
          <Link href="https://booksy.com/" target="_blank">
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
              className="bg-white/90 dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:bg-white hover:shadow px-6 py-3 text-lg font-medium"
            >
              Call (940) 320-3202
            </IconShiftButton>
          </Link>
        </motion.div>

        <motion.div
          variants={fadeIn("up", 0.6)}
          className="flex items-center gap-2 mt-8 text-white"
        >
          <MapPin className="h-5 w-5 text-blue-300" />
          <span>1100 Dallas Dr Suite 120, Denton, TX 76205</span>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
export default HeroCarousel;
function Carousel() {
  const [current, setCurrent] = React.useState(0);
  const [previous, setPrevious] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setPrevious(current);
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full h-full">
      {carouselImages.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Slide ${index + 1}`}
          fill
          className={`object-cover absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
            index === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        />
      ))}
    </div>
  );
}
