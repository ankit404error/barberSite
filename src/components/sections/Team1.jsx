import Image from 'next/image';
import Link from 'next/link';

export default function Team1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Our Team',
    subtitle = 'Meet Our Experts',
    description = 'We have a team of dedicated professionals who are passionate about their work and committed to helping our clients succeed.',
    columns = '3',
  } = content || {};

  // Fallback team members if items are not provided
  const team = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Jane Smith',
          subtitle: 'CEO & Founder',
          description: 'Jane has over 15 years of experience in web development and digital marketing.',
          image_url: '/placeholder-avatar.jpg',
          cta_link: '#',
          tag: 'Management',
        },
        {
          id: '2',
          title: 'John Davis',
          subtitle: 'Lead Developer',
          description: 'John specializes in front-end development and creating beautiful user interfaces.',
          image_url: '/placeholder-avatar.jpg',
          cta_link: '#',
          tag: 'Development',
        },
        {
          id: '3',
          title: 'Sarah Johnson',
          subtitle: 'Design Director',
          description: 'Sarah is an award-winning designer with a passion for creating memorable brands.',
          image_url: '/placeholder-avatar.jpg',
          cta_link: '#',
          tag: 'Design',
        },
        {
          id: '4',
          title: 'Michael Wilson',
          subtitle: 'Marketing Specialist',
          description: 'Michael has helped numerous businesses grow their online presence and reach new customers.',
          image_url: '/placeholder-avatar.jpg',
          cta_link: '#',
          tag: 'Marketing',
        },
      ];

  // Calculate grid columns based on configuration
  const getGridCols = () => {
    switch (columns) {
      case '2':
        return 'grid-cols-1 md:grid-cols-2';
      case '4':
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      case '3':
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
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

        {/* Team grid */}
        {team.length > 0 && (
          <div className={`grid gap-8 ${getGridCols()}`}>
            {team.map((member) => (
              <div
                key={member.id}
                className="flex flex-col bg-card rounded-lg shadow-sm overflow-hidden"
              >
                {member.image_url && (
                  <div className="relative h-64 w-full">
                    <Image
                      src={member.image_url}
                      alt={member.title || 'Team member'}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
                <div className="flex flex-col flex-grow p-6">
                  {member.tag && (
                    <span className="text-xs font-medium uppercase tracking-wider text-primary mb-2">
                      {member.tag}
                    </span>
                  )}
                  {member.title && (
                    <h3 className="text-xl font-semibold">
                      {member.cta_link ? (
                        <Link href={member.cta_link} className="hover:text-primary transition-colors">
                          {member.title}
                        </Link>
                      ) : (
                        member.title
                      )}
                    </h3>
                  )}
                  {member.subtitle && (
                    <p className="text-muted-foreground">
                      {member.subtitle}
                    </p>
                  )}
                  {member.description && (
                    <p className="mt-4 text-muted-foreground text-sm">
                      {member.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
} 