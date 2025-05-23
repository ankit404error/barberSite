"use client";

import { useState } from "react";

export default function FAQ1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const { title = "Frequently Asked Questions", subtitle = "FAQs" } =
    content || {};

  // Fallback FAQs if items are not provided
  const faqs =
    items?.length > 0
      ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
      : [
          {
            id: "1",
            title: "What services do you offer?",
            description:
              "We offer a comprehensive range of digital services including web design, development, SEO, content creation, and digital marketing.",
          },
          {
            id: "2",
            title: "How much do your services cost?",
            description:
              "Our pricing varies based on the scope and requirements of each project. We offer custom quotes after an initial consultation to understand your specific needs.",
          },
          {
            id: "3",
            title: "How long does it take to complete a project?",
            description:
              "Project timelines depend on complexity and scope. A simple website might take 2-4 weeks, while more complex projects can take several months. We provide detailed timelines during the proposal phase.",
          },
          {
            id: "4",
            title: "Do you offer ongoing support after project completion?",
            description:
              "Yes, we offer various maintenance and support packages to ensure your digital assets continue to perform optimally after launch.",
          },
          {
            id: "5",
            title: "What is your design process?",
            description:
              "Our design process includes discovery, wireframing, design concepts, revisions, and finalization. We collaborate closely with clients throughout each stage to ensure satisfaction.",
          },
        ];

  // State to track which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
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

        <div className="mx-auto max-w-3xl divide-y rounded-lg border">
          {faqs.map((faq, index) => (
            <div key={faq.id || index} className="px-4 py-6 sm:px-6">
              <button
                onClick={() => toggleFAQ(index)}
                className="flex w-full items-start justify-between text-left"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-medium">{faq.title}</span>
                <span className="ml-6 flex h-7 items-center">
                  <svg
                    className={`h-6 w-6 transform transition-transform ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    }`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </button>
              <div
                className={`mt-2 overflow-hidden transition-all ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <p className="text-muted-foreground">{faq.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
