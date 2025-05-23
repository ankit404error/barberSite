import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function CTA2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Ready to Get Started?',
    subtitle = 'Call to Action',
    description = 'Join thousands of satisfied customers who have taken their business to the next level with our services.',
    cta_text = 'Get Started',
    cta_link = '#',
    image_url = '/placeholder-cta.jpg',
  } = content || {};

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Image */}
          {image_url && (
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg">
              <Image
                src={image_url}
                alt={title || 'Call to action image'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          )}
          
          {/* Content */}
          <div className="flex flex-col space-y-6">
            {subtitle && (
              <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
                {subtitle}
              </span>
            )}
            {title && (
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                {title}
              </h2>
            )}
            {description && (
              <div className="prose max-w-none text-muted-foreground">
                <p>{description}</p>
              </div>
            )}
            {cta_text && cta_link && (
              <div className="mt-2">
                <Button 
                  asChild 
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  <Link href={cta_link}>{cta_text}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 