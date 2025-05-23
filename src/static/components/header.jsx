"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Phone, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="font-bold text-xl md:text-2xl hover:text-primary transition-colors duration-300">
          North Texas Cutz
        </Link>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="hover:bg-primary/10 transition-colors duration-300"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#about" className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">About</Link>
          <Link href="#services" className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">Services</Link>
          <Link href="#testimonials" className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">Testimonials</Link>
          <Link href="#pricing" className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">Pricing</Link>
          <Link href="#contact" className="hover:text-primary transition-colors duration-300 relative after:absolute after:left-0 after:bottom-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all after:duration-300">Contact</Link>
          <div className="flex items-center gap-4">
            <Link href="tel:+19403203202" aria-label="Call us">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <Phone className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              </Button>
            </Link>
            <Link href="https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KWECawBYyk2GMU_BPjxvEsYe&daddr=1100+Dallas+Dr+Suite+120,+Denton,+TX+76205,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegQIABBt" target="_blank" aria-label="Find us">
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 transition-all duration-300 hover:scale-110">
                <MapPin className="h-5 w-5 transition-transform duration-300 hover:rotate-12" />
              </Button>
            </Link>
            <ThemeToggle />
          </div>
        </nav>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[57px] bg-background z-40 p-4 flex flex-col md:hidden">
          <nav className="flex flex-col space-y-4 text-lg">
            <Link href="#about" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform">About</Link>
            <Link href="#services" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform">Services</Link>
            <Link href="#testimonials" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform">Testimonials</Link>
            <Link href="#pricing" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform">Pricing</Link>
            <Link href="#contact" onClick={() => setIsMenuOpen(false)} className="py-2 px-4 hover:bg-accent rounded-md transition-all duration-300 hover:text-primary hover:translate-x-1 transform">Contact</Link>
          </nav>
          <div className="mt-auto flex items-center gap-4 justify-center py-4">
            <Link href="tel:+19403203202">
              <Button className="flex items-center gap-2 hover:shadow-md transition-all duration-300 hover:bg-primary/90">
                <Phone className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>(940) 320-3202</span>
              </Button>
            </Link>
            <Link href="https://maps.google.com/maps?um=1&fb=1&gl=in&sa=X&geocode=KWECawBYyk2GMU_BPjxvEsYe&daddr=1100+Dallas+Dr+Suite+120,+Denton,+TX+76205,+United+States&ved=2ahUKEwjN076ZsoCNAxVX0oQAHdHkIAMQ48ADegQIABBt" target="_blank">
              <Button variant="outline" className="flex items-center gap-2 hover:bg-primary/10 hover:border-primary transition-all duration-300">
                <MapPin className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Find Us</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
} 