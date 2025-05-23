import Image from 'next/image';

export default function Features1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Features',
    subtitle = 'What We Offer',
    description = 'Discover the powerful features that set our product apart and help your business succeed.',
    columns = '3',
  } = content || {};

  // Fallback features if items are not provided
  const features = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'User-Friendly Interface',
          description: 'Intuitive design that makes navigation and usage simple for everyone, regardless of technical expertise.',
          icon: 'layout',
        },
        {
          id: '2',
          title: 'Advanced Analytics',
          description: 'Powerful data analysis tools to help you make informed decisions based on real-time insights.',
          icon: 'chart',
        },
        {
          id: '3',
          title: 'Cloud Integration',
          description: 'Seamless integration with popular cloud services for easy data sharing and backup.',
          icon: 'cloud',
        },
        {
          id: '4',
          title: 'Top Security',
          description: 'Enterprise-grade security measures protecting your data with encryption and regular updates.',
          icon: 'shield',
        },
        {
          id: '5',
          title: 'Mobile Compatibility',
          description: 'Fully responsive design that works perfectly on all devices, from desktop to smartphone.',
          icon: 'smartphone',
        },
        {
          id: '6',
          title: '24/7 Support',
          description: 'Round-the-clock customer support to assist you whenever you need help or have questions.',
          icon: 'headset',
        },
      ];

  // Determine grid columns based on the columns setting
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  // Simple icon map for fallback icons
  const iconMap = {
    layout: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    chart: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    cloud: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    shield: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    smartphone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
      </svg>
    ),
    headset: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
  };

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

        <div className={`grid gap-8 ${gridCols}`}>
          {features.map((feature) => (
            <div
              key={feature.id || feature.title}
              className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow"
            >
              {/* Icon */}
              {feature.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {iconMap[feature.icon] || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                  )}
                </div>
              )}

              {/* Image (if available) */}
              {feature.image_url && (
                <div className="mb-4 overflow-hidden rounded-md">
                  <Image
                    src={feature.image_url}
                    alt={feature.title || 'Feature image'}
                    width={300}
                    height={200}
                    className="h-40 w-full object-cover"
                  />
                </div>
              )}

              {/* Content */}
              {feature.title && (
                <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
              )}
              {feature.description && (
                <p className="text-muted-foreground">{feature.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 