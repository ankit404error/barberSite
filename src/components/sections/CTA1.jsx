import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Ready to Get Started?',
    subtitle = 'Call to Action',
    description = 'Join thousands of satisfied customers who have taken their business to the next level with our services.',
    cta_text = 'Get Started',
    cta_link = '#',
    background_url,
  } = content || {};

  return (
    <div className="relative overflow-hidden py-16 sm:py-24">
      {/* Background image or gradient */}
      {background_url ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_url}
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
      )}

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          {subtitle && (
            <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-sm font-medium uppercase tracking-wider text-white">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-white/80">
              {description}
            </p>
          )}
          {cta_text && cta_link && (
            <div className="mt-8">
              <Button 
                asChild 
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                <Link href={cta_link}>{cta_text}</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 