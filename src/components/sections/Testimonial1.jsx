"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonial1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const { title = "What Our Clients Say", subtitle = "Testimonials" } =
    content || {};

  // Fallback testimonials if items are not provided
  const testimonials =
    items?.length > 0
      ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [
          {
            id: "1",
            title: "Jane Smith",
            subtitle: "CEO at TechCorp",
            description:
              "Working with this team was a game-changer for our business. They delivered exceptional quality and exceeded our expectations in every way.",
            image_url: "/placeholder-avatar.jpg",
            rating: "5",
          },
          {
            id: "2",
            title: "John Davis",
            subtitle: "Marketing Director",
            description:
              "The level of creativity and attention to detail was impressive. Our new website has received countless compliments and has significantly increased our conversions.",
            image_url: "/placeholder-avatar.jpg",
            rating: "5",
          },
          {
            id: "3",
            title: "Sarah Williams",
            subtitle: "Small Business Owner",
            description:
              "As a small business owner, I needed an affordable but professional website. They delivered exactly what I needed, on time and within budget.",
            image_url: "/placeholder-avatar.jpg",
            rating: "4",
          },
        ];

  // State for active testimonial
  const [activeIndex, setActiveIndex] = useState(0);

  // Helper function to render stars based on rating
  const renderStars = (rating) => {
    const stars = [];
    const numStars = parseInt(rating) || 5;

    for (let i = 0; i < 5; i++) {
      stars.push(
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill={i < numStars ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={i < numStars ? "text-amber-500" : "text-gray-300"}
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      );
    }

    return stars;
  };

  // Navigation functions
  const goToPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-12">
          {subtitle && (
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
        </div>

        <div className="mx-auto max-w-4xl">
          {testimonials.length > 0 && (
            <div className="relative overflow-hidden rounded-xl bg-card p-8 shadow-sm">
              <div className="mb-6 flex justify-center">
                <div className="flex gap-1">
                  {renderStars(testimonials[activeIndex].rating)}
                </div>
              </div>

              <blockquote className="text-center text-lg font-medium italic text-muted-foreground md:text-xl">
                "{testimonials[activeIndex].description}"
              </blockquote>

              <div className="mt-6 flex flex-col items-center">
                {testimonials[activeIndex].image_url && (
                  <div className="mb-4 h-16 w-16 overflow-hidden rounded-full">
                    <Image
                      src={testimonials[activeIndex].image_url}
                      alt={
                        testimonials[activeIndex].title || "Testimonial author"
                      }
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                <div className="text-center">
                  <div className="font-semibold">
                    {testimonials[activeIndex].title}
                  </div>
                  {testimonials[activeIndex].subtitle && (
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIndex].subtitle}
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation arrows */}
              {testimonials.length > 1 && (
                <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2 pt-4">
                  <button
                    onClick={goToPrev}
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground hover:bg-muted"
                    aria-label="Previous testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                  </button>
                  <button
                    onClick={goToNext}
                    className="flex h-8 w-8 items-center justify-center rounded-full border bg-background text-foreground hover:bg-muted"
                    aria-label="Next testimonial"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Indicator dots */}
          {testimonials.length > 1 && (
            <div className="mt-6 flex justify-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2.5 w-2.5 rounded-full ${
                    index === activeIndex ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
