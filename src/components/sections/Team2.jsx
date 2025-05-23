import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Team2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Team Leadership',
    subtitle = 'Meet Our Leader',
    description = 'Get to know the visionary behind our company and their journey to success.',
  } = content || {};

  // Get the featured team member (first in order or default)
  const featuredMember = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))[0]
    : {
        id: '1',
        title: 'Jane Smith',
        subtitle: 'CEO & Founder',
        description: `Jane Smith is the visionary founder and CEO of our company. With over 15 years of industry experience, she has led our team to unprecedented success.
        
        Prior to founding this company, Jane held leadership positions at several Fortune 500 companies where she developed her expertise in strategic growth and innovation.
        
        Jane holds an MBA from Harvard Business School and is a frequent speaker at industry conferences around the world. Her leadership philosophy centers on empowering teams and fostering a culture of continuous learning and improvement.`,
        image_url: '/placeholder-avatar.jpg',
        cta_text: 'Connect on LinkedIn',
        cta_link: '#',
      };

  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mx-auto max-w-3xl text-center mb-12">
          {subtitle && (
            <span className="inline-block text-sm font-medium uppercase tracking-wider text-primary">
              {subtitle}
            </span>
          )}
          {title && (
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-4 text-lg text-muted-foreground">
              {description}
            </p>
          )}
        </div>

        {/* Featured member */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Image */}
          {featuredMember.image_url && (
            <div className="mx-auto max-w-md">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
                <Image
                  src={featuredMember.image_url}
                  alt={featuredMember.title || 'Team member'}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}
          
          {/* Content */}
          <div className="flex flex-col space-y-6">
            {featuredMember.title && (
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                {featuredMember.title}
              </h3>
            )}
            {featuredMember.subtitle && (
              <p className="text-lg font-medium text-primary">
                {featuredMember.subtitle}
              </p>
            )}
            {featuredMember.description && (
              <div className="prose max-w-none text-muted-foreground">
                {featuredMember.description.split('\n').map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            )}
            {featuredMember.cta_text && featuredMember.cta_link && (
              <div className="mt-6">
                <Button 
                  asChild 
                  variant="outline"
                  size="lg"
                >
                  <Link href={featuredMember.cta_link}>{featuredMember.cta_text}</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
} 