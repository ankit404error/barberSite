import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Welcome to our website',
    subtitle = 'Your subtitle here',
    description = 'This is a brief description of what you do. Add a few sentences to introduce your business to new visitors.',
    image_url = '/placeholder-hero.jpg',
    background_url,
    cta_text = 'Get Started',
    cta_link = '#',
  } = content || {};

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background image or color */}
      {background_url ? (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_url}
            alt="Background"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-primary/10" />
      )}

      <div className="container relative z-10 mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="flex flex-col space-y-6">
            {subtitle && (
              <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
                {subtitle}
              </span>
            )}
            {title && (
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                {title}
              </h1>
            )}
            {description && (
              <p className="max-w-prose text-lg text-muted-foreground">
                {description}
              </p>
            )}
            {cta_text && cta_link && (
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link href={cta_link}>{cta_text}</Link>
                </Button>
              </div>
            )}
          </div>
          {image_url && (
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg lg:max-w-none">
              <Image
                src={image_url}
                alt={title || 'Hero image'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 