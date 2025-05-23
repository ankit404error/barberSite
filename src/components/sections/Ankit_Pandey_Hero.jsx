// components/PremiumHeroSection.js
import React from 'react';
import { Youtube, Instagram, Facebook } from 'lucide-react'; // Added Facebook as an example
import Link from 'next/link';

const PremiumHeroSection = ({
    backgroundImageUrl = "https://i.postimg.cc/9FGmr2Gq/barbersectionimage.png" // User-provided image
}) => {
    return (
        <section
            className="relative min-h-screen bg-cover bg-center flex items-center text-white font-sans" // Using a default sans-serif, can be customized in tailwind.config.js
            style={{ backgroundImage: `url(${backgroundImageUrl})` }}
            aria-labelledby="hero-heading"
        >
            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
                <div className="max-w-xl lg:max-w-2xl py-20 md:py-24">
                    <h1 id="hero-heading" className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white shadow-sm" style={{ fontFamily: "'Playfair Display', serif" }}>
                        THE <span className="text-amber-400">BARBERSHOP</span>
                    </h1>
                    <h2 className="mt-4 text-lg sm:text-xl md:text-2xl text-gray-200 uppercase tracking-wider font-light">
                        Expert Haircuts & Premium Grooming
                    </h2>
                    <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed max-w-lg">
                        Experience unparalleled craftsmanship in a refined atmosphere. Our master barbers provide bespoke services, from classic cuts to modern styling, ensuring you leave looking and feeling your best.
                    </p>
                    <div className="mt-10 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                        <Link
                            href="/booking" // Replace with your actual booking page link
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 px-10 rounded-sm text-center uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            Book Appointment
                        </Link>
                        <Link
                            href="/services" // Replace with your actual services page link
                            className="inline-block border-2 border-amber-500 hover:bg-amber-500 hover:text-black text-amber-500 font-semibold py-3.5 px-10 rounded-sm text-center uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                        >
                            View Services
                        </Link>
                    </div>
                    <div className="mt-12 flex space-x-5">
                        <a
                            href="#" // Replace with your Facebook link
                            aria-label="Facebook"
                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                        >
                            <Facebook size={22} />
                        </a>
                        <a
                            href="#" // Replace with your Instagram link
                            aria-label="Instagram"
                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                        >
                            <Instagram size={22} />
                        </a>
                        <a
                            href="#" // Replace with your YouTube link
                            aria-label="YouTube"
                            className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
                        >
                            <Youtube size={22} />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PremiumHeroSection;
