import Image from 'next/image';
import Link from 'next/link';

export default function Gallery1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Gallery',
    subtitle = 'Recent Work',
    description = 'Browse through our portfolio of recent projects and see what we can do for you.',
    columns = '3',
  } = content || {};

  // Fallback gallery items if not provided
  const galleryItems = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Project One',
          subtitle: 'Web Design',
          description: 'A modern website for a tech startup.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Web',
        },
        {
          id: '2',
          title: 'Project Two',
          subtitle: 'Mobile App',
          description: 'User-friendly mobile application for a retail business.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Mobile',
        },
        {
          id: '3',
          title: 'Project Three',
          subtitle: 'Branding',
          description: 'Brand identity design for a new restaurant chain.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Brand',
        },
        {
          id: '4',
          title: 'Project Four',
          subtitle: 'E-commerce',
          description: 'Online store development for a fashion brand.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Web',
        },
        {
          id: '5',
          title: 'Project Five',
          subtitle: 'UI/UX Design',
          description: 'Interface design for a financial services dashboard.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Design',
        },
        {
          id: '6',
          title: 'Project Six',
          subtitle: 'Marketing',
          description: 'Digital marketing campaign for a product launch.',
          image_url: '/placeholder-gallery.jpg',
          tag: 'Marketing',
        },
      ];

  // Determine grid columns based on the columns setting
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

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

        <div className={`grid gap-6 ${gridCols}`}>
          {galleryItems.map((item) => (
            <div
              key={item.id || item.title}
              className="group relative overflow-hidden rounded-lg"
            >
              {/* Image */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.image_url}
                  alt={item.title || 'Gallery image'}
                  width={600}
                  height={450}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Overlay with content */}
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {item.tag && (
                  <span className="inline-block rounded-full bg-primary/90 px-2.5 py-0.5 text-xs font-medium text-white">
                    {item.tag}
                  </span>
                )}
                {item.title && (
                  <h3 className="mt-2 text-lg font-medium text-white">
                    {item.title}
                  </h3>
                )}
                {item.subtitle && (
                  <p className="text-sm text-white/80">{item.subtitle}</p>
                )}
                {item.description && (
                  <p className="mt-1 text-sm text-white/70">
                    {item.description}
                  </p>
                )}
                {item.cta_link && (
                  <Link
                    href={item.cta_link}
                    className="mt-3 inline-flex items-center text-sm font-medium text-white hover:text-primary-foreground"
                  >
                    View Project
                    <svg
                      className="ml-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 