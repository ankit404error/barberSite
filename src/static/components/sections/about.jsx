"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [barbersRef, barbersInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Sample barber data - replace with your actual barber information
  const barbers = [
    {
      name: "Jason Miller",
      role: "Master Barber",
      experience: "15 years",
      specialties: "Classic cuts, Fades",
      image: "/barber-1.jpg",
    },
    {
      name: "Michael Robinson",
      role: "Senior Barber",
      experience: "12 years",
      specialties: "Beard styling, Hot towel shaves",
      image: "/barber-2.jpg",
    },
    {
      name: "Robert Davis",
      role: "Style Specialist",
      experience: "8 years",
      specialties: "Modern styles, Hair designs",
      image: "/barber-3.jpg",
    },
    {
      name: "Daniel Johnson",
      role: "Junior Barber",
      experience: "5 years",
      specialties: "Fades, Line-ups",
      image: "/barber-4.jpg",
    },
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl"
          >
            <Image
              src="/barber-shop.jpg"
              alt="North Texas Cutz Barbershop"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          </motion.div>

          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Neighborhood Barber, 10+ Years Strong
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded over a decade ago, North Texas Cutz has been Denton's go-to destination for premium haircuts, beard trims, and classic shaves. We're more than just a barbershop – we're part of the community.
              </p>
              <p>
                Our experienced barbers combine traditional techniques with modern styles to give you exactly the look you want. Whether you're a regular or first-timer, we're committed to providing a comfortable, friendly atmosphere and consistent quality service.
              </p>
              <p>
                We've built our reputation on precision cuts, attention to detail, and creating a place where everyone feels welcome. It's not just about looking good – it's about feeling good too.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Meet the Barbers Section */}
        <motion.div
          ref={barbersRef}
          initial={{ opacity: 0 }}
          animate={barbersInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
            Meet the Barbers
          </h2>
          
          <div className="relative overflow-hidden">
            <div className="flex overflow-x-auto pb-8 snap-x scrollbar-thin scrollbar-thumb-primary scrollbar-track-secondary">
              {barbers.map((barber, index) => (
                <motion.div
                  key={index}
                  className="min-w-[280px] md:min-w-[350px] snap-center px-4 first:pl-4 last:pr-4"
                  initial={{ x: 100, opacity: 0 }}
                  animate={barbersInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                  whileHover={{ y: -5, transition: { duration: 0.2 } }}
                >
                  <div className="bg-card h-full rounded-xl shadow-lg overflow-hidden border border-border hover:border-primary transition-all duration-300">
                    <div className="relative h-80 w-full">
                      <Image
                        src={barber.image}
                        alt={barber.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 280px, 350px"
                        onError={(e) => {
                          e.target.src = "/placeholder-barber.jpg";
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1">{barber.name}</h3>
                      <p className="text-primary font-medium mb-3">{barber.role}</p>
                      <div className="space-y-2 text-muted-foreground">
                        <p><span className="font-medium">Experience:</span> {barber.experience}</p>
                        <p><span className="font-medium">Specialties:</span> {barber.specialties}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
} 