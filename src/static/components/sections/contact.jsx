"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "(940) 320-3202",
      link: "tel:+19403203202",
      linkText: "Call Now",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "1100 Dallas Dr Suite 120, Denton, TX 76205",
      link: "https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KWECawBYyk2GMU_BPjxvEsYe&daddr=1100+Dallas+Dr+Suite+120,+Denton,+TX+76205,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegQIABBt",
      linkText: "Get Directions",
    },
    {
      icon: Clock,
      title: "Hours",
      content: "Monday-Saturday: 9AM-8:30PM, Sunday: 10AM-6PM",
      link: "https://booksy.com/en-us/861034_north-texas-cutz_barber-shop_36535_denton?do=open-widget&rwg_token=...",
      linkText: "Book Now",
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-muted-foreground"
          >
            Visit us or book your appointment today
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start" ref={ref}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="flex gap-4 p-4 rounded-lg bg-background/80 backdrop-blur-sm group hover:bg-background/90 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <item.icon className="h-6 w-6 text-primary group-hover:rotate-12 transform transition-all duration-300" />
                </div>
                <div>
                  <h3 className="font-bold text-lg group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                  <p className="text-muted-foreground mb-2 group-hover:text-muted-foreground/80 transition-colors duration-300">{item.content}</p>
                  <Link href={item.link} target={item.title === "Address" ? "_blank" : undefined}>
                    <Button variant="link" className="p-0 h-auto text-primary hover:text-primary/80 transition-all duration-300 hover:underline">
                      {item.linkText}
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="aspect-video w-full h-full min-h-[300px] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.02] transform"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.9033909664447!2d-97.13347902427296!3d33.09988677352222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c4c0b5e8a7f59%3A0x5a7c21b1149f7c0c!2s1100%20Dallas%20Dr%20Suite%20120%2C%20Denton%2C%20TX%2076205%2C%20USA!5e0!3m2!1sen!2sin!4v1698954884307!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="North Texas Cutz location on Google Maps"
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 