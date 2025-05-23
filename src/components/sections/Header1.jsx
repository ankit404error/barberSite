import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Header1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Your Brand',
    image_url,
    cta_text,
    cta_link,
  } = content || {};

  // Sort navigation items by position if available
  const navigationItems = items && items.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [];

  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo/Brand */}
        <div className="flex items-center">
          {image_url ? (
            <Link href="/" className="block">
              <div className="relative h-10 w-auto">
                <Image
                  src={image_url}
                  alt={title || 'Logo'}
                  width={120}
                  height={40}
                  className="h-full w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          ) : (
            <Link href="/" className="text-xl font-bold">
              {title}
            </Link>
          )}
        </div>

        {/* Navigation */}
        {navigationItems.length > 0 && (
          <nav className="hidden md:flex items-center gap-6">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                href={item.cta_link || '#'}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        )}

        {/* CTA Button */}
        {cta_text && cta_link && (
          <div className="hidden md:block">
            <Button asChild size="sm">
              <Link href={cta_link}>{cta_text}</Link>
            </Button>
          </div>
        )}

        {/* Mobile Menu Button - for real implementation, add a proper mobile menu */}
        <div className="block md:hidden">
          <Button variant="ghost" size="sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
} 