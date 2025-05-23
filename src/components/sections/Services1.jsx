import Image from 'next/image';

export default function Services1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Services',
    subtitle = 'What We Offer',
    description = 'We provide a range of services to help your business succeed.',
    columns = '3',
  } = content || {};

  // Fallback services if items are not provided
  const services = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Web Development',
          description: 'Create beautiful, responsive websites that convert visitors into customers.',
          icon: 'code',
        },
        {
          id: '2',
          title: 'Mobile Apps',
          description: 'Build engaging mobile applications for iOS and Android platforms.',
          icon: 'smartphone',
        },
        {
          id: '3',
          title: 'UI/UX Design',
          description: 'Design intuitive user interfaces that deliver exceptional user experiences.',
          icon: 'palette',
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
    code: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"></polyline>
        <polyline points="8 6 2 12 8 18"></polyline>
      </svg>
    ),
    smartphone: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
        <line x1="12" y1="18" x2="12.01" y2="18"></line>
      </svg>
    ),
    palette: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="13.5" cy="6.5" r=".5"></circle>
        <circle cx="17.5" cy="10.5" r=".5"></circle>
        <circle cx="8.5" cy="7.5" r=".5"></circle>
        <circle cx="6.5" cy="12.5" r=".5"></circle>
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
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
          {services.map((service) => (
            <div
              key={service.id || service.title}
              className="flex flex-col rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow"
            >
              {service.icon && (
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  {iconMap[service.icon] || (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="8" x2="12" y2="16"></line>
                      <line x1="8" y1="12" x2="16" y2="12"></line>
                    </svg>
                  )}
                </div>
              )}
              {service.title && (
                <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              )}
              {service.description && (
                <p className="text-muted-foreground">{service.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 