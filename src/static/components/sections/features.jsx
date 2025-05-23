"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Award, 
  Clock, 
  Smile 
} from "lucide-react";

const features = [
  {
    title: "Expert Barbers",
    description: "Our team of skilled professionals delivers consistent quality with years of experience.",
    icon: Award,
  },
  {
    title: "Convenient Hours",
    description: "Open late and on weekends to accommodate your busy schedule.",
    icon: Clock,
  },
  {
    title: "Satisfied Clients",
    description: "Join our community of happy customers who trust us with their style.",
    icon: Smile,
  },
];

export function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="features" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            At North Texas Cutz, we pride ourselves on excellence in every aspect of our service
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
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { duration: 0.5 }
                },
              }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-accent/20 hover:bg-accent/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group cursor-default"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6 transition-all duration-300 group-hover:bg-primary/20 group-hover:shadow-md">
                <feature.icon className="h-8 w-8 text-primary transition-all duration-300 group-hover:scale-110" />
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-all duration-300">{feature.title}</h3>
              <p className="text-muted-foreground transition-all duration-300 group-hover:text-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 