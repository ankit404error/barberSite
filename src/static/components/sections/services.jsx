"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scissors, Axe, PocketKnife, Baby } from "lucide-react";
import { AnimatedCard } from "@/components/ui/animated-card";
import {
  AnimatedElement,
  AnimatedGroup,
  AnimatedChild,
} from "@/components/ui/animated-element";
import { ScrollRevealText } from "@/components/ui/scroll-animations";

const services = [
  {
    title: "Haircuts",
    description: "Precision cuts tailored to your style and face shape.",
    icon: Scissors,
    color: "bg-blue-500/10 text-blue-500",
    hoverColor: "rgba(59, 130, 246, 0.3)",
    hoverEffect: "border",
    hoverBorderColor: "rgba(59, 130, 246, 0.9)",
  },
  {
    title: "Beard Trims",
    description: "Expert beard shaping and grooming for a clean look.",
    icon: Axe,
    color: "bg-amber-500/10 text-amber-500",
    hoverColor: "rgba(245, 158, 11, 0.3)",
    hoverEffect: "border",
    hoverBorderColor: "rgba(245, 158, 11, 0.9)",
  },
  {
    title: "Shaves",
    description: "Classic straight razor shaves with hot towel treatment.",
    icon: PocketKnife,
    color: "bg-red-500/10 text-red-500",
    hoverColor: "rgba(239, 68, 68, 0.3)",
    hoverEffect: "border",
    hoverBorderColor: "rgba(239, 68, 68, 0.9)",
  },
  {
    title: "Kids' Cuts",
    description:
      "Friendly service for the little ones in a comfortable setting.",
    icon: Baby,
    color: "bg-green-500/10 text-green-500",
    hoverColor: "rgba(34, 197, 94, 0.3)",
    hoverEffect: "border",
    hoverBorderColor: "rgba(34, 197, 94, 0.9)",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <AnimatedElement
          className="text-center max-w-2xl mx-auto mb-12"
          delay={0.2}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            What We Offer
          </h2>

          <ScrollRevealText
            text="Quality services that keep our clients coming back year after year."
            className="text-gray-700 dark:text-gray-300"
          />
        </AnimatedElement>

        <AnimatedGroup
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          staggerDelay={0.15}
        >
          {services.map((service, index) => (
            <AnimatedChild key={index} direction="up">
              <AnimatedCard
                className="overflow-hidden h-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                hoverEffect={service.hoverEffect}
                hoverGlowColor={service.hoverColor}
                hoverBorderColor={service.hoverBorderColor}
              >
                <div className="p-6">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${service.color} transition-all duration-300`}
                  >
                    <motion.div
                      whileHover={{ rotate: 10, scale: 1.1 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="h-6 w-6" />
                    </motion.div>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-700 dark:text-gray-300">
                    {service.description}
                  </p>
                </div>
              </AnimatedCard>
            </AnimatedChild>
          ))}
        </AnimatedGroup>
      </div>
    </section>
  );
}
