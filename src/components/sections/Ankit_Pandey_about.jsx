// components/AboutUsSection.js
import React from 'react';
import Link from 'next/link';
import { Award, Users, Coffee } from 'lucide-react'; // Example icons for values

const AboutUsSection = ({
    imageUrl = "https://i.postimg.cc/KjCN1Vg0/about.png" 
}) => {
    const establishmentYear = 2010; // Change this to your client's establishment year
    const experienceYears = new Date().getFullYear() - establishmentYear;

    return (
        <section className="bg-neutral-900 py-16 md:py-24 text-gray-300 font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
                    {/* Image Column */}
                    <div className="lg:w-1/2 w-full">
                        <div className="relative aspect-square lg:aspect-[4/3.5] rounded-lg shadow-2xl overflow-hidden">
                            <img
                                src={imageUrl}
                                alt="The Barbershop Interior or Team"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.onerror = null;
                                    e.target.src = `https://placehold.co/600x525/333333/EAB308?text=Our+Story`;
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-1/2 w-full">
                        <h2 className="text-sm text-amber-400 uppercase tracking-widest font-semibold mb-3" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Rooted in Tradition
                        </h2>
                        <h3 className="text-4xl md:text-5xl font-bold font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                            Crafting Excellence Since {establishmentYear}
                        </h3>
                        <p className="text-lg text-gray-400 mb-6 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            For over {experienceYears} years, The Barber Shop has been more than just a place for a haircut; it's a cornerstone of style and community. Founded on the principles of timeless craftsmanship and personalized service, we've dedicated ourselves to perfecting the art of men's grooming.
                        </p>
                        <p className="text-lg text-gray-400 mb-8 leading-relaxed" style={{ fontFamily: "'Inter', sans-serif" }}>
                            Our barbers are not just stylists, but artisans who understand the nuances of classic techniques and contemporary trends. We believe every client deserves an experience that is both relaxing and rejuvenating, leaving them looking sharp and feeling confident.
                        </p>

                        {/* Values/Key Points */}
                        <div className="space-y-5 mb-10">
                            <div className="flex items-start">
                                <Award size={28} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Master Craftsmanship</h4>
                                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Precision cuts and shaves delivered by experienced professionals.</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <Users size={28} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Client-Centric Experience</h4>
                                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Personalized consultations and a welcoming atmosphere for every visit.</p>
                                </div>
                            </div>
                             <div className="flex items-start">
                                <Coffee size={28} className="text-amber-400 mr-4 mt-1 flex-shrink-0" />
                                <div>
                                    <h4 className="text-xl font-semibold text-white mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Premium Products</h4>
                                    <p className="text-gray-400 text-sm" style={{ fontFamily: "'Inter', sans-serif" }}>Utilizing only the finest grooming products for optimal results and care.</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="/team" // Link to your team page or booking
                            className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 px-10 rounded-sm text-center uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                            style={{ fontFamily: "'Inter', sans-serif" }}
                        >
                            Meet Our Artisans
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;

