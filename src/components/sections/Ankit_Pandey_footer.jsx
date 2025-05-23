// components/FooterSection.js
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Twitter, Youtube, MapPin, Phone, Mail } from 'lucide-react';

const FooterSection = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { href: '/', text: 'Home' },
        { href: '/services', text: 'Services' },
        { href: '/about', text: 'About Us' },
        { href: '/team', text: 'Our Team' },
        { href: '/booking', text: 'Book Now' },
        { href: '/contact', text: 'Contact' },
    ];

    const socialLinks = [
        { href: '#', icon: <Facebook size={20} />, name: 'Facebook' },
        { href: '#', icon: <Instagram size={20} />, name: 'Instagram' },
        { href: '#', icon: <Twitter size={20} />, name: 'Twitter' },
        { href: '#', icon: <Youtube size={20} />, name: 'YouTube' },
    ];

    return (
        <footer className="bg-black text-gray-400 font-sans pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-12">
                    {/* Column 1: Brand and About */}
                    <div>
                        <Link href="/" className="inline-block mb-4">
                             <h1 className="text-3xl font-serif italic text-white" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                                THE <span className="text-amber-400">Barber</span> SHOP
                            </h1>
                        </Link>
                        <p className="text-sm leading-relaxed mb-4" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Dedicated to the art of traditional barbering with a modern touch. Experience precision, style, and unparalleled service.
                        </p>
                        <div className="flex space-x-3">
                            {socialLinks.map(social => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    aria-label={social.name}
                                    className="text-gray-500 hover:text-amber-400 transition-colors duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-5 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Explore
                        </h5>
                        <ul className="space-y-2.5">
                            {quickLinks.map(link => (
                                <li key={link.text}>
                                    <Link
                                        href={link.href}
                                        className="text-sm hover:text-amber-400 hover:underline transition-colors duration-300"
                                        style={{ fontFamily: "'Inter', sans-serif" }}
                                    >
                                        {link.text}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-5 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Get in Touch
                        </h5>
                        <ul className="space-y-3 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <li className="flex items-start">
                                <MapPin size={18} className="text-amber-400 mr-3 mt-0.5 flex-shrink-0" />
                                <span>6000 Pennsylvania Road, Suite 101, New York, NY 10001</span>
                            </li>
                            <li className="flex items-center">
                                <Phone size={18} className="text-amber-400 mr-3 flex-shrink-0" />
                                <a href="tel:+13003537650" className="hover:text-amber-400 transition-colors">1-300-353-7650</a>
                            </li>
                            <li className="flex items-center">
                                <Mail size={18} className="text-amber-400 mr-3 flex-shrink-0" />
                                <a href="mailto:contact@thebarbershop.com" className="hover:text-amber-400 transition-colors">contact@thebarbershop.com</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Opening Hours (Optional) */}
                    <div>
                        <h5 className="text-lg font-semibold text-white mb-5 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Opening Hours
                        </h5>
                        <ul className="space-y-1.5 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>
                            <li>Mon - Fri: <span className="text-gray-300">9:00 AM - 7:00 PM</span></li>
                            <li>Saturday: <span className="text-gray-300">10:00 AM - 6:00 PM</span></li>
                            <li>Sunday: <span className="text-gray-300">11:00 AM - 5:00 PM</span></li>
                            <li className="pt-1 text-xs text-gray-500">Appointments Recommended</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-neutral-800 pt-8 text-center">
                    <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>
                        &copy; {currentYear} THE Barber SHOP. All Rights Reserved. Designed with Precision.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default FooterSection;
