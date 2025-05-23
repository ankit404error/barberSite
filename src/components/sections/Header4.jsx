"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

export default function Header4({ content, items = [], theme, config }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    title = "Your Brand",
    cta_text = "Call Now",
    cta_link = "tel:+1234567890",
    image_url,
  } = content || {};

  const navLinks = items
    .sort((a, b) => (a.position || 0) - (b.position || 0))
    .map((item, index) => (
      <Link
        key={index}
        href={item.cta_link || "#"}
        className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300"
      >
        {item.title || "Link"}
      </Link>
    ));

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          href="/"
          className="font-bold text-xl md:text-2xl hover:text-primary transition-colors duration-300"
        >
          {title}
        </Link>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hover:bg-primary/10 transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          {navLinks}
          <div className="flex items-center gap-4">
            {cta_link && (
              <Link href={cta_link} aria-label="Call us">
                <Button variant="ghost" size="icon">
                  <Phone className="h-5 w-5" />
                </Button>
              </Link>
            )}
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-background z-40 p-4 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-4 text-lg">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.cta_link || "#"}
                onClick={() => setIsMenuOpen(false)}
                className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform"
              >
                {item.title || "Link"}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex items-center gap-4 justify-center py-4">
            {cta_link && (
              <Link href={cta_link}>
                <Button>
                  <Phone className="h-4 w-4" />
                  <span className="ml-2">{cta_text}</span>
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
