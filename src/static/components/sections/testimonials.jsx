"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Michael Johnson",
    quote: "Best haircut in Denton! I've been coming here for years and they always get it right. Friendly service and great atmosphere.",
    rating: 5,
  },
  {
    name: "David Rodriguez",
    quote: "Fantastic barbers who take their time and pay attention to detail. The beard trim was exactly what I wanted.",
    rating: 5,
  },
  {
    name: "James Wilson",
    quote: "Clean shop, skilled staff, and fair prices. Definitely recommend North Texas Cutz to anyone looking for quality service.",
    rating: 5,
  },
  {
    name: "Robert Taylor",
    quote: "My go-to place for haircuts in Denton. Professional service with consistently great results every time.",
    rating: 5,
  },
];

const StarRating = ({ rating }) => {
  return (
    <div className="flex items-center mb-3" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={18}
          className={`${i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} mr-0.5 transition-all duration-300 group-hover:scale-110 group-hover:${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-400"}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
};

export function TestimonialsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 3;
  
  const handlePrevious = () => {
    setCurrentIndex(prev => 
      prev === 0 ? Math.max(0, testimonials.length - visibleCount) : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex(prev => 
      prev >= Math.max(0, testimonials.length - visibleCount) ? 0 : prev + 1
    );
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + visibleCount);
  
  // If we don't have enough testimonials to fill the view, add from the beginning
  if (visibleTestimonials.length < visibleCount) {
    const needed = visibleCount - visibleTestimonials.length;
    visibleTestimonials.push(...testimonials.slice(0, needed));
  }

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Don't just take our word for it – hear from our satisfied customers
          </motion.p>
        </div>

        <div className="relative" ref={ref}>
          {/* Mobile view - single testimonial */}
          <div className="md:hidden">
            {testimonials.length > 0 && (
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full group hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                  <CardContent className="p-6">
                    <StarRating rating={testimonials[currentIndex].rating} />
                    <p className="mb-4 italic group-hover:text-foreground transition-colors duration-300">"{testimonials[currentIndex].quote}"</p>
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">— {testimonials[currentIndex].name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            )}
            <div className="flex justify-center mt-6 gap-2">
              <Button size="icon" variant="outline" onClick={handlePrevious} aria-label="Previous testimonial"
                className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="outline" onClick={handleNext} aria-label="Next testimonial"
                className="hover:bg-primary/10 hover:border-primary/50 transition-all duration-300">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Desktop view - multiple testimonials */}
          <motion.div
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
            className="hidden md:grid md:grid-cols-3 gap-6"
          >
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={currentIndex + index}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.4 },
                  },
                }}
              >
                <Card className="h-full group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/30">
                  <CardContent className="p-6">
                    <StarRating rating={testimonial.rating} />
                    <p className="mb-4 italic group-hover:text-foreground transition-colors duration-300">"{testimonial.quote}"</p>
                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">— {testimonial.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}