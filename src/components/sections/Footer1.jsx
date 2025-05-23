import Image from 'next/image';
import Link from 'next/link';

export default function Footer1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Your Company',
    description = 'Building amazing digital experiences that make a difference.',
    image_url,
    copyright = `© ${new Date().getFullYear()} Your Company. All rights reserved.`,
    columns = '3',
  } = content || {};

  // Group items by column tag
  const getFooterGroups = () => {
    if (!items || items.length === 0) {
      // Fallback footer items
      return {
        'Company': [
          { title: 'About', cta_link: '/about' },
          { title: 'Our Team', cta_link: '/team' },
          { title: 'Careers', cta_link: '/careers' },
          { title: 'Contact', cta_link: '/contact' },
        ],
        'Resources': [
          { title: 'Blog', cta_link: '/blog' },
          { title: 'Newsletter', cta_link: '/newsletter' },
          { title: 'Events', cta_link: '/events' },
          { title: 'Help Center', cta_link: '/help' },
        ],
        'Legal': [
          { title: 'Terms', cta_link: '/terms' },
          { title: 'Privacy', cta_link: '/privacy' },
          { title: 'Cookies', cta_link: '/cookies' },
          { title: 'Licenses', cta_link: '/licenses' },
        ],
      };
    }

    // Group items by their tag (column group)
    const groups = {};
    const sortedItems = [...items].sort((a, b) => (a.position || 0) - (b.position || 0));

    sortedItems.forEach(item => {
      const group = item.tag || 'Links';
      if (!groups[group]) {
        groups[group] = [];
      }
      groups[group].push(item);
    });

    return groups;
  };

  const footerGroups = getFooterGroups();
  const footerGroupKeys = Object.keys(footerGroups);

  // Determine grid columns based on the columns setting or number of groups
  const gridCols = {
    '2': 'md:grid-cols-2',
    '3': 'md:grid-cols-3',
    '4': 'md:grid-cols-4',
  }[columns] || 'md:grid-cols-3';

  return (
    <footer className="bg-muted/30 border-t">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-4">
          {/* Company info column */}
          <div className="lg:col-span-1">
            <div className="flex flex-col space-y-4">
              {image_url ? (
                <Link href="/" className="block w-40">
                  <Image
                    src={image_url}
                    alt={title}
                    width={160}
                    height={60}
                    className="h-auto w-full"
                  />
                </Link>
              ) : (
                <Link href="/" className="text-xl font-bold">
                  {title}
                </Link>
              )}
              {description && (
                <p className="text-muted-foreground">
                  {description}
                </p>
              )}
            </div>
          </div>

          {/* Links columns */}
          <div className={`lg:col-span-3 grid gap-8 ${gridCols}`}>
            {footerGroupKeys.map((group) => (
              <div key={group}>
                <h3 className="font-semibold">{group}</h3>
                <ul className="mt-4 space-y-3">
                  {footerGroups[group].map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.cta_link || '#'}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          {copyright}
        </div>
      </div>
    </footer>
  );
} 