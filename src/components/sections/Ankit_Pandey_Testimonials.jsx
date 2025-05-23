// components/TestimonialsSection.js
import React from 'react';
import { Star, UserCircle } from 'lucide-react'; // Star for ratings, UserCircle for placeholder avatar

// Sample Testimonial Data - Replace with actual client testimonials
const testimonialsData = [
    {
        id: 1,
        name: "James P.",
        location: "New York, NY",
        rating: 5,
        testimonial: "Absolutely the best barber experience I've ever had. The attention to detail is unmatched, and the atmosphere is top-notch. Highly recommend!",
        avatarUrl: null, // Replace with actual avatar URLs or leave null for placeholder
    },
    {
        id: 2,
        name: "Michael B.",
        location: "Brooklyn, NY",
        rating: 5,
        testimonial: "From the moment I walked in, I felt welcomed. The barbers are true artists. My go-to place for a perfect cut and shave every time.",
        avatarUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    },
    {
        id: 3,
        name: "David K.",
        location: "Manhattan, NY",
        rating: 4,
        testimonial: "Great service and skilled barbers. The hot towel shave is incredibly relaxing. A bit pricey, but you get what you pay for – quality.",
        avatarUrl: null,
    },
    {
        id: 4,
        name: "Robert S.",
        location: "Queens, NY",
        rating: 5,
        testimonial: "Found my new favorite barbershop! The team is friendly, the shop is clean and stylish, and my haircut was exactly what I wanted.",
        avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
    }
];

const TestimonialCard = ({ name, location, rating, testimonial, avatarUrl }) => {
    return (
        <div className="bg-neutral-900 p-6 md:p-8 rounded-lg shadow-xl flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-amber-400/20">
            <div className="flex items-center mb-4">
                {avatarUrl ? (
                    <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4 object-cover" />
                ) : (
                    <UserCircle size={48} className="text-amber-400 mr-4" />
                )}
                <div>
                    <h4 className="text-lg font-semibold text-white" style={{ fontFamily: "'Playfair Display', serif" }}>{name}</h4>
                    {location && <p className="text-xs text-gray-500" style={{ fontFamily: "'Inter', sans-serif" }}>{location}</p>}
                </div>
            </div>
            <div className="flex mb-3">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className={i < rating ? "text-amber-400 fill-amber-400" : "text-gray-600"} />
                ))}
            </div>
            <p className="text-gray-400 leading-relaxed text-sm flex-grow" style={{ fontFamily: "'Inter', sans-serif" }}>
                "{testimonial}"
            </p>
        </div>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="py-16 md:py-24 bg-neutral-950 text-white font-sans">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-sm text-amber-400 uppercase tracking-widest font-semibold mb-2" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Word on the Street
                    </h2>
                    <h3 className="text-4xl md:text-5xl font-bold font-serif text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
                        What Our Clients Say
                    </h3>
                    <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto" style={{ fontFamily: "'Inter', sans-serif" }}>
                        Hear directly from those who have experienced the artistry and dedication of our master barbers.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 xl:gap-10">
                    {testimonialsData.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            name={testimonial.name}
                            location={testimonial.location}
                            rating={testimonial.rating}
                            testimonial={testimonial.testimonial}
                            avatarUrl={testimonial.avatarUrl}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
