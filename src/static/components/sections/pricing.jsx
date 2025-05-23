"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ExternalLink } from "lucide-react";

const pricingItems = [
  {
    name: "Haircut",
    price: 25,
    description: "Precision cut, styled to perfection",
  },
  {
    name: "Beard Trim",
    price: 15,
    description: "Shape and style your beard",
  },
  {
    name: "Haircut & Beard",
    price: 35,
    description: "Complete grooming package",
  },
  {
    name: "Kid's Cut",
    price: 20,
    description: "Ages 12 and under",
  },
];

export function PricingSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Quality service at reasonable prices
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10"
        >
          {pricingItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.4 },
                },
              }}
              className="bg-accent/30 rounded-xl p-6 text-center group hover:bg-accent/40 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-primary/20 border border-transparent cursor-default"
            >
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">{item.name}</h3>
              <p className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transform transition-all duration-300 group-hover:text-primary/90">
                <span className="text-base align-top">$</span>
                {item.price}
              </p>
              <p className="text-sm text-muted-foreground mb-4 group-hover:text-muted-foreground/80 transition-colors duration-300">
                Starting at
              </p>
              <p className="group-hover:text-foreground transition-colors duration-300">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <Link href="https://booksy.com/en-us/861034_north-texas-cutz_barber-shop_36535_denton?do=open-widget&rwg_token=..." target="_blank">
            <Button className="flex items-center gap-2 transition-all duration-300 hover:scale-105 hover:shadow-md">
              See Full Menu
              <ExternalLink className="h-4 w-4 transition-transform group-hover:rotate-12" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
} 