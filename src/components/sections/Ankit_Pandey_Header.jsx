// components/Ankit_Pandey_Header.js
import React, { useState } from 'react';
import { MapPin, Phone, ShoppingBag, Menu, X, ChevronDown } from 'lucide-react'; // Added ChevronDown for dropdown indicator
import Link from 'next/link';

const Ankit_Pandey_Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    // To manage active dropdown for touch devices or if we want click-to-open on desktop later
    // For now, CSS hover will handle desktop. This state is more for potential future enhancements.
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        setOpenDropdown(null); // Close any open dropdowns when mobile menu toggles
    };

    const navLinks = [
        { href: '/', text: 'THE HOME' }, // Changed to Link to root for better practice
        {
            text: 'SERVICES AND PRICES',
            href: '/services', // It's good practice for parent links to also navigate somewhere
            dropdown: [
                { href: '/services/haircuts', text: 'Haircuts' },
                { href: '/services/shaves', text: 'Shaves' },
                { href: '/services/coloring', text: 'Coloring' },
                { href: '/services/beard-trim', text: 'Beard Trim' },
            ]
        },
        { href: '/academy', text: 'ACADEMY' },
        { href: '/franchise', text: 'FRANCHISE' },
        { href: '/team', text: 'OUR TEAM' },
        { href: '/contact', text: 'CONTACT' },
        {
            text: 'PORTFOLIO',
            href: '/portfolio',
            dropdown: [
                { href: '/portfolio/gallery', text: 'Gallery' },
                { href: '/portfolio/styles', text: 'Styles Showcase' },
                { href: '/portfolio/transformations', text: 'Transformations' },
            ]
        },
        { href: '/shop', text: 'SHOP' },
    ];

    return (
        <header className="bg-neutral-950 text-gray-300 sticky top-0 z-50 shadow-lg">
            {/* Top Bar */}
            <div className="bg-black py-2 text-xs sm:text-sm">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
                    <div className="mb-1 sm:mb-0">
                        <p className="tracking-wider">WE ARE OPEN 7 DAYS A WEEK</p>
                    </div>
                    <div className="flex items-center space-x-3 sm:space-x-5">
                        <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                            <MapPin size={14} />
                            <span>6000 PENNSYLVANIA ROAD</span>
                        </div>
                        <div className="flex items-center space-x-1 hover:text-amber-400 transition-colors">
                            <Phone size={14} />
                            <span>1-300-353-7650</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Navigation Bar */}
            <div className="border-t border-neutral-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-24">
                    {/* Logo */}
                    <Link href="/" className="flex flex-col items-center text-center -ml-2 sm:-ml-0">
                        <h1 className="text-3xl sm:text-4xl font-serif italic text-white" style={{ fontFamily: "'Times New Roman', Times, serif" }}>
                            THE <span className="text-amber-400">Barber</span> SHOP
                        </h1>
                        <p className="text-xs text-amber-200 tracking-tighter -mt-1" style={{ fontSize: '0.6rem'}}>AUTHENTIC BARBER TRADITION</p>
                        <p className="text-sm text-amber-300 font-semibold" style={{letterSpacing: '0.1em'}}>SALON</p>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6">
                        {navLinks.map((link) => (
                            <div key={link.text} className="relative group"> {/* 'group' for CSS hover */}
                                <Link
                                    href={link.href}
                                    className="text-gray-300 hover:text-amber-400 transition-colors duration-200 font-medium uppercase text-xs tracking-wider py-2 flex items-center"
                                >
                                    {link.text}
                                    {link.dropdown && <ChevronDown size={16} className="ml-1 group-hover:rotate-180 transition-transform duration-200" />}
                                </Link>
                                {link.dropdown && (
                                    <div className="absolute left-0 mt-0 w-56 bg-neutral-900 border border-neutral-800 shadow-lg rounded-md py-2 z-20 opacity-0 group-hover:opacity-100 invisible group-hover:visible transition-all duration-300 ease-in-out transform group-hover:translate-y-0 translate-y-2">
                                        {link.dropdown.map((item) => (
                                            <Link
                                                key={item.text}
                                                href={item.href}
                                                className="block px-4 py-2 text-xs text-gray-300 hover:bg-neutral-800 hover:text-amber-400 transition-colors duration-200"
                                            >
                                                {item.text}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Right Icons & Mobile Menu Button */}
                    <div className="flex items-center space-x-4">
                        <Link href="/cart" className="flex items-center text-gray-300 hover:text-amber-400 transition-colors duration-200">
                            <ShoppingBag size={24} />
                            <span className="ml-1 text-sm bg-amber-500 text-neutral-900 rounded-full px-1.5 py-0.5 text-xs font-bold">0</span>
                        </Link>
                        <button
                            onClick={toggleMobileMenu}
                            aria-label="Toggle menu"
                            className="lg:hidden text-gray-300 hover:text-amber-400 transition-colors duration-200"
                        >
                            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-neutral-900 border-t border-neutral-800 absolute w-full left-0 z-40">
                    <nav className="flex flex-col p-4">
                        {navLinks.map((link, index) => (
                            <div key={link.text} className="py-1">
                                {link.dropdown ? (
                                    <>
                                        <button
                                            onClick={() => setOpenDropdown(openDropdown === index ? null : index)}
                                            className="w-full flex justify-between items-center text-gray-300 hover:text-amber-400 hover:bg-neutral-800 rounded-md p-3 transition-colors duration-200 font-medium uppercase text-sm tracking-wider text-left"
                                        >
                                            {link.text}
                                            <ChevronDown size={20} className={`transition-transform duration-200 ${openDropdown === index ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openDropdown === index && (
                                            <div className="pl-4 mt-1 space-y-1">
                                                {link.dropdown.map(item => (
                                                    <Link
                                                        key={`mobile-sub-${item.text}`}
                                                        href={item.href}
                                                        className="block text-gray-400 hover:text-amber-400 hover:bg-neutral-700 rounded-md p-2 transition-colors duration-200 font-medium uppercase text-xs tracking-wider"
                                                        onClick={() => {
                                                            setIsMobileMenuOpen(false); // Close full menu on sub-item click
                                                            setOpenDropdown(null);
                                                        }}
                                                    >
                                                        {item.text}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                    <Link
                                        href={link.href}
                                        className="block text-gray-300 hover:text-amber-400 hover:bg-neutral-800 rounded-md p-3 transition-colors duration-200 font-medium uppercase text-sm tracking-wider text-center"
                                        onClick={() => {
                                            setIsMobileMenuOpen(false);
                                            setOpenDropdown(null);
                                        }}
                                    >
                                        {link.text}
                                    </Link>
                                )}
                            </div>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Ankit_Pandey_Header;