import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Features2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Product Features',
    subtitle = 'Why Choose Us',
    description = 'Our platform is designed with the latest technology to provide you with the tools you need to succeed.',
    image_url = '/placeholder-features.jpg',
    cta_text = 'Get Started',
    cta_link = '#',
  } = content || {};

  // Fallback features if items are not provided
  const features = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Easy Integration',
          description: 'Our software seamlessly integrates with your existing tech stack.',
          icon: 'puzzle',
        },
        {
          id: '2',
          title: 'Scalable Solution',
          description: 'Grow your business without worrying about system limitations.',
          icon: 'trending-up',
        },
        {
          id: '3',
          title: 'Real-time Analytics',
          description: 'Make data-driven decisions with comprehensive analytics tools.',
          icon: 'chart',
        },
        {
          id: '4',
          title: 'Secure by Design',
          description: 'Enterprise-grade security to protect your sensitive data.',
          icon: 'shield',
        },
      ];

  // Simple icon map for feature icons
  const iconMap = {
    puzzle: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.743-.95l.235-1.873a1.95 1.95 0 0 0-1.954-2.123h-2.93a2.163 2.163 0 0 1-2.241-1.628 2.171 2.171 0 0 1 .833-2.36l1.827-1.318A2 2 0 0 0 14.439 4h2a2 2 0 0 1 2 2v.5" />
        <path d="M8.439 17.85c.049-.322-.059-.648-.289-.878l-1.568-1.568c-.47-.47-.706-1.087-.706-1.704s.235-1.233.706-1.704l1.611-1.611a.98.98 0 0 1 .837-.276c.47.07.802.48.743.95l-.235 1.873a1.95 1.95 0 0 0 1.954 2.123h2.93c1.214 0 2.165.997 2.241 1.628a2.171 2.171 0 0 1-.833 2.36l-1.827 1.318A2 2 0 0 0 13.439 22h-2a2 2 0 0 1-2-2v-.5" />
      </svg>
    ),
    'trending-up': (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  };

  return (
    <div className="bg-background py-12 sm:py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="order-2 lg:order-1">
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
                <p className="text-lg text-muted-foreground">
                  {description}
                </p>
              )}

              <div className="mt-4 space-y-6">
                {features.map((feature) => (
                  <div key={feature.id || feature.title} className="flex">
                    {feature.icon && (
                      <div className="mr-4 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {iconMap[feature.icon] || (
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="16" />
                            <line x1="8" y1="12" x2="16" y2="12" />
                          </svg>
                        )}
                      </div>
                    )}
                    <div>
                      {feature.title && (
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                      )}
                      {feature.description && (
                        <p className="mt-1 text-muted-foreground">
                          {feature.description}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {cta_text && cta_link && (
                <div className="mt-8 flex flex-wrap">
                  <Button asChild size="lg">
                    <Link href={cta_link}>{cta_text}</Link>
                  </Button>
                </div>
              )}
            </div>
          </div>

          {image_url && (
            <div className="order-1 lg:order-2">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src={image_url}
                  alt={title || 'Feature image'}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 