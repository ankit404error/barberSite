"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Gallery2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Gallery',
    subtitle = 'Our Latest Work',
    description = 'Explore our diverse portfolio of projects showcasing our skills and creativity.',
  } = content || {};

  // Fallback gallery items if not provided
  const galleryItems = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Urban Architecture',
          subtitle: 'Photography',
          image_url: '/placeholder-tall.jpg',
          tag: 'Photography',
        },
        {
          id: '2',
          title: 'Brand Redesign',
          subtitle: 'Branding',
          image_url: '/placeholder-wide.jpg',
          tag: 'Branding',
        },
        {
          id: '3',
          title: 'Mobile App Design',
          subtitle: 'UI/UX',
          image_url: '/placeholder-square.jpg',
          tag: 'Design',
        },
        {
          id: '4',
          title: 'Product Launch',
          subtitle: 'Marketing',
          image_url: '/placeholder-tall.jpg',
          tag: 'Marketing',
        },
        {
          id: '5',
          title: 'E-commerce Website',
          subtitle: 'Web Development',
          image_url: '/placeholder-square.jpg',
          tag: 'Web',
        },
        {
          id: '6',
          title: 'Social Media Campaign',
          subtitle: 'Digital Marketing',
          image_url: '/placeholder-wide.jpg',
          tag: 'Marketing',
        },
      ];

  // State for filtered items and current filter
  const [currentFilter, setCurrentFilter] = useState('all');
  const [filteredItems, setFilteredItems] = useState(galleryItems);

  // Get unique tags for filter buttons
  const tags = ['all', ...new Set(galleryItems.map((item) => item.tag).filter(Boolean))];

  // Filter items when the filter changes
  useEffect(() => {
    if (currentFilter === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter((item) => item.tag === currentFilter));
    }
  }, [currentFilter, galleryItems]);

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
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Filter buttons */}
        {tags.length > 1 && (
          <div className="mb-8 flex flex-wrap justify-center gap-2">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setCurrentFilter(tag)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  currentFilter === tag
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted text-muted-foreground hover:bg-muted/80'
                }`}
              >
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Masonry gallery */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* This simulates a masonry layout by using CSS to create varied heights */}
          {filteredItems.map((item, index) => (
            <div
              key={item.id || index}
              className={`group relative overflow-hidden rounded-lg ${
                index % 3 === 0 ? 'sm:row-span-2' : ''
              }`}
            >
              <div className={`relative overflow-hidden ${
                index % 3 === 0 ? 'aspect-[3/4]' : 'aspect-square'
              }`}>
                <Image
                  src={item.image_url}
                  alt={item.title || 'Gallery image'}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {item.title && (
                    <h3 className="text-center text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                  )}
                  {item.subtitle && (
                    <p className="mt-2 text-center text-white/80">
                      {item.subtitle}
                    </p>
                  )}
                  {item.cta_link && (
                    <Link
                      href={item.cta_link}
                      className="mt-4 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
                    >
                      View Project
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 