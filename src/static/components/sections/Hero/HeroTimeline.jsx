// FINAL CLEANED-UP HERO TIMELINE COMPONENT
"use client";

import { useState, useRef, useMemo } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { User, Scissors, Sparkles, Star, ChevronRight, CheckCircle } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const stepsData = [
  {
    icon: <User className="h-6 w-6 text-white" />,
    title: "Book Your Experience",
    desc: "Book online or walk in — we accommodate your schedule.",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    benefits: ["No waiting fees", "Online scheduling", "24/7 booking"],
    cta: "Book Now"
  },
  {
    icon: <Scissors className="h-6 w-6 text-white" />,
    title: "Premium Cut & Service",
    desc: "Precision cutting from expert barbers who get your style.",
    bgColor: "bg-gradient-to-br from-indigo-500 to-indigo-700",
    benefits: ["Expert barbers", "Hot towel service", "Style consultation"],
    cta: "View Services"
  },
  {
    icon: <Sparkles className="h-6 w-6 text-white" />,
    title: "Look & Feel Confident",
    desc: "Leave feeling confident with a cut that suits you.",
    bgColor: "bg-gradient-to-br from-blue-400 to-blue-600",
    benefits: ["Finishing products", "Style guidance", "Satisfaction guarantee"],
    cta: "See Gallery"
  },
];

export default function HeroTimeline() {
  const steps = useMemo(() => stepsData, []);
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacityProgress = useTransform(scrollYProgress, [0, 0.3], [0.2, 1]);

  return (
    <section
      ref={containerRef}
      className="relative py-28 px-6 lg:px-8 bg-gradient-to-b from-white via-blue-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 min-h-screen"
    >
      {/* Background Decoration */}
      <motion.div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ y: backgroundY, opacity: opacityProgress }}
      >
        <div className="absolute right-[10%] top-[15%] h-96 w-96 bg-blue-300 dark:bg-blue-700 rounded-full blur-3xl opacity-30" />
        <div className="absolute left-[5%] bottom-[10%] h-80 w-80 bg-indigo-300 dark:bg-indigo-700 rounded-full blur-3xl opacity-30" />
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-sm font-medium">
            The North Texas Cutz Experience
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-300 dark:to-blue-400 bg-clip-text text-transparent">
            Your Journey to Looking Exceptional
          </h1>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            We don't just cut hair—we craft confidence. Experience our premium grooming journey.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-blue-400 rounded-full transform -translate-x-1/2" />
          
          <div className="relative space-y-16">
            {steps.map((step, i) => {
              const isLastStep = i === steps.length - 1;
              const isActive = i === activeStep;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setActiveStep(i)}
                  className="relative"
                >
                  {/* Timeline connector */}
                  {!isLastStep && (
                    <div className="absolute left-8 md:left-1/2 top-[40px] h-[calc(100%+4rem)] w-0.5 bg-gradient-to-b from-blue-300 to-indigo-300 dark:from-blue-600 dark:to-indigo-600 transform -translate-x-1/2 z-0" />
                  )}
                  
                  {/* Timeline node */}
                  <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 z-10">
                    <div className={clsx(
                      "w-10 h-10 rounded-full flex items-center justify-center border-4 border-white dark:border-gray-800 transition-all duration-300",
                      isActive 
                        ? step.bgColor 
                        : "bg-gray-200 dark:bg-gray-700"
                    )}>
                      <span className="text-white font-bold">{i + 1}</span>
                    </div>
                  </div>
                  
                  <div className={clsx(
                    "grid md:grid-cols-2 gap-8 md:gap-16 pl-20 md:pl-0",
                    i % 2 === 0 
                      ? "md:grid-template-areas: 'empty content'" 
                      : "md:grid-template-areas: 'content empty'"
                  )}>
                    {/* Empty space for alternate positioning */}
                    {i % 2 === 0 ? (
                      <>
                        <div className="hidden md:block"></div>
                        <div className="md:ml-16">
                          <TimelineCard step={step} isActive={isActive} />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="md:mr-16 md:text-right">
                          <TimelineCard step={step} isActive={isActive} isRight />
                        </div>
                        <div className="hidden md:block"></div>
                      </>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Timeline card component
function TimelineCard({ step, isActive, isRight }) {
  return (
    <div className={clsx(
      "bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl border transition-all duration-300",
      isActive 
        ? "border-blue-300 dark:border-blue-700 shadow-blue-100 dark:shadow-blue-900/20" 
        : "border-gray-100 dark:border-gray-700"
    )}>
      <div className="flex items-center gap-4 mb-6">
        <div className={clsx("w-14 h-14 rounded-xl flex items-center justify-center", step.bgColor)}>
          {step.icon}
        </div>
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{step.title}</h3>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{step.desc}</p>
      <ul className="space-y-2 mb-6">
        {step.benefits.map((b, j) => (
          <li key={j} className="flex items-center text-gray-700 dark:text-gray-300">
            <CheckCircle className="h-4 w-4 text-blue-500 mr-2" /> {b}
          </li>
        ))}
      </ul>
      <Link 
        href="#" 
        className={clsx(
          "text-blue-600 dark:text-blue-400 font-medium flex items-center",
          isRight ? "justify-end" : ""
        )}
      >
        {isRight && <ChevronRight className="mr-1 rotate-180" size={16} />}
        {step.cta}
        {!isRight && <ChevronRight className="ml-1" size={16} />}
      </Link>
    </div>
  );
}
