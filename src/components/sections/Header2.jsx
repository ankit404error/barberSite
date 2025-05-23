import Image from 'next/image';
import Link from 'next/link';

export default function Header2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Your Brand',
    image_url,
  } = content || {};

  return (
    <header className="w-full bg-background border-b">
      <div className="container mx-auto px-4 py-4">
        {/* Logo/Brand */}
        <div className="flex items-center justify-center">
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
      </div>
    </header>
  );
} 