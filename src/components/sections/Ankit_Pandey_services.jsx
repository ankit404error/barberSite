// components/ServicesSection.js
import React from 'react';
import { Scissors, Zap, Droplet, Wind } from 'lucide-react'; // Example icons

// Sample Data for Services - Replace with your actual service details and images
const servicesData = [
    {
        id: 1,
        name: "The Signature Cut",
        description: "A meticulous cut, tailored to your style, complete with a invigorating shampoo, conditioning, and precision styling.",
        price: "$65",
        duration: "60 min",
        imageUrl: "https://images.pexels.com/photos/3998419/pexels-photo-3998419.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1", // Updated: More realistic image
        icon: <Scissors size={32} className="text-amber-400" />
    },
    {
        id: 2,
        name: "Executive Beard Grooming",
        description: "Refine your look with expert beard shaping, trimming, and conditioning using premium oils and balms.",
        price: "$40",
        duration: "30 min",
        imageUrl: "https://images.unsplash.com/photo-1621607512022-6aecc4fed814?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        icon: <Zap size={32} className="text-amber-400" />
    },
    {
        id: 3,
        name: "Classic Hot Towel Shave",
        description: "Indulge in a traditional straight-razor shave, complemented by hot towels and soothing aftershave.",
        price: "$55",
        duration: "45 min",
        imageUrl: "https://images.pexels.com/photos/897262/pexels-photo-897262.jpeg?auto=compress&cs=tinysrgb&w=800&h=800&dpr=1", // Updated: More realistic image
        icon: <Droplet size={32} className="text-amber-400" />
    },
    {
        id: 4,
        name: "Revitalizing Scalp Treatment",
        description: "A therapeutic treatment to invigorate the scalp, promote healthy hair growth, and relieve tension.",
        price: "$50",
        duration: "30 min",
        imageUrl: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
        icon: <Wind size={32} className="text-amber-400" />
    },
];

const ServicesSection = () => {
    return (
        <section className="py-16 md:py-24 bg-neutral-950 text-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm text-amber-400 uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Our Offerings
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-serif text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        Signature Grooming Services
                    </h3>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Indulge in our meticulously crafted services, designed for the modern gentleman who appreciates quality and precision.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-neutral-900 rounded-lg shadow-xl overflow-hidden group flex flex-col transition-all duration-300 hover:shadow-amber-400/30 hover:-translate-y-1"
                        >
                            <div className="relative h-56 sm:h-64 w-full">
                                <img
                                    src={service.imageUrl}
                                    alt={service.name}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    // Add an onerror handler for better fallback
                                    onError={(e) => {
                                        e.target.onerror = null; // Prevents infinite loop if fallback also fails
                                        e.target.src = `https://placehold.co/800x800/555555/FFFFFF?text=Image+Not+Found`;
                                    }}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                                <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-semibold px-2 py-1 rounded">
                                    {service.duration}
                                
                                </div>
                            </div>

                            <div className="p-6 flex-grow flex flex-col">
                                <h4 className="text-xl md:text-2xl font-semibold text-amber-400 mb-2 font-serif" style={{ fontFamily: "'Playfair Display', serif" }}>
                                    {service.name}
                                </h4>
                                <p className="text-gray-400 text-sm mb-4 leading-relaxed flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                                    {service.description}
                                </p>
                                <div className="mt-auto flex justify-between items-center">
                                    <p className="text-2xl font-bold text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
                                        {service.price}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16">
                    <a
                        href="/booking" // Link to your main booking page
                        className="inline-block bg-amber-500 hover:bg-amber-600 text-black font-semibold py-3.5 px-10 rounded-sm text-center uppercase text-sm tracking-wider shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
                        style={{ fontFamily: "'Inter', sans-serif" }}
                    >
                        Book Your Experience
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;
