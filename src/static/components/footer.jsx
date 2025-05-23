import React from "react";
import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 hover:text-primary transition-colors duration-300 cursor-default">North Texas Cutz</h3>
            <p className="text-muted-foreground mb-4">
              Providing legendary cuts and grooming services in Denton for over 10 years.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-primary transition-colors duration-300 hover:scale-125 transform block" aria-label="Facebook">
                <Facebook className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300 hover:scale-125 transform block" aria-label="Instagram">
                <Instagram className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
              </Link>
              <Link href="#" className="hover:text-primary transition-colors duration-300 hover:scale-125 transform block" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:rotate-12 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 hover:text-primary transition-colors duration-300 cursor-default">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#pricing" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4 hover:text-primary transition-colors duration-300 cursor-default">Contact Info</h3>
            <address className="not-italic text-muted-foreground space-y-2">
              <p className="hover:text-foreground transition-colors duration-300">1100 Dallas Dr Suite 120</p>
              <p className="hover:text-foreground transition-colors duration-300">Denton, TX 76205</p>
              <p>
                <Link href="tel:+19403203202" className="hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
                  (940) 320-3202
                </Link>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className="hover:text-foreground transition-colors duration-300">&copy; {currentYear} North Texas Cutz. All rights reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Privacy Policy
            </Link>{" "}
            &bull;{" "}
            <Link href="#" className="hover:text-primary transition-colors duration-300 relative inline-block after:absolute after:bottom-0 after:left-0 after:bg-primary after:h-0.5 after:w-0 hover:after:w-full after:transition-all after:duration-300">
              Terms of Service
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
} 