"use client";

import React from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
  IconShiftButton,
  UnderlineButton,
} from "@/components/ui/animated-button";
import {
  AnimatedElement,
  AnimatedGroup,
  AnimatedChild,
} from "@/components/ui/animated-element";
import { ParallaxElement } from "@/components/ui/scroll-animations";
import { textVariant, fadeIn } from "@/lib/animation";

function HeroClasicWithBg() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-10 px-4 overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background z-10" />
        <Image
          src="/barber-bg.jpg"
          alt="Barbershop background"
          fill
          priority
          className="object-cover opacity-70 dark:opacity-50"
          sizes="100vw"
          onError={(e) => {
            e.target.style.display = "none";
          }}
        />
      </div>

      <div className="container mx-auto relative z-20">
        {" "}
        <motion.h1
          variants={textVariant(0.2)}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-foreground dark:text-white"
        >
          Sharp. Clean.
          <br />
          <span className="text-blue-600 dark:text-blue-400 relative inline-block">
            Legendary Cutz
            <motion.span
              className="absolute -bottom-2 left-0 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 1.2, duration: 1 }}
            />
          </span>{" "}
          in Denton.
        </motion.h1>
        <motion.p
          variants={fadeIn("up", 0.4)}
          className="text-lg md:text-xl mb-8 text-foreground dark:text-gray-200"
        >
          Over 10 years of grooming excellence at North Texas Cutz.
        </motion.p>
        <AnimatedGroup className="max-w-3xl" staggerDelay={0.15}>
          <AnimatedChild>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://booksy.com/en-us/861034_north-texas-cutz_barber-shop_36535_denton?do=open-widget&rwg_token=..."
                target="_blank"
              >
                <IconShiftButton
                  icon={<ArrowRight className="h-4 w-4" />}
                  className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300"
                >
                  Book Now
                </IconShiftButton>
              </Link>

              <Link href="tel:+19403203202">
                <IconShiftButton
                  icon={<Phone className="h-4 w-4" />}
                  iconPosition="left"
                  className="w-full sm:w-auto border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Call Us
                </IconShiftButton>
              </Link>

              <Link
                href="https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KWECawBYyk2GMU_BPjxvEsYe&daddr=1100+Dallas+Dr+Suite+120,+Denton,+TX+76205,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegQIABBt"
                target="_blank"
              >
                <UnderlineButton className="w-full sm:w-auto flex items-center gap-2 px-5 py-2.5 text-gray-900 dark:text-gray-100">
                  <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                  Find Us
                </UnderlineButton>
              </Link>
            </div>
          </AnimatedChild>
        </AnimatedGroup>
      </div>

      <AnimatedElement
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex justify-center"
        delay={1}
        direction="up"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 group"
          aria-label="Scroll down to about section"
        >
          <span>Scroll</span>
          <motion.svg
            width="16"
            height="24"
            viewBox="0 0 16 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mt-2 transition-transform duration-300 group-hover:scale-110"
            animate={{
              y: [0, 5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          >
            <path
              d="M8 2L8 22M8 22L14 16M8 22L2 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </motion.svg>
        </a>
      </AnimatedElement>
    </section>
  );
}
export default HeroClasicWithBg;
