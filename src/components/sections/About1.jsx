import Image from 'next/image';

export default function About1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'About Us',
    subtitle = 'Our Story',
    description = 'We\'re a team of passionate developers and designers committed to creating exceptional digital experiences for businesses of all sizes.',
    image_url = '/placeholder-about.jpg',
  } = content || {};

  // Fallback team members if items are not provided
  const team = items?.length > 0
    ? items
    : [
        {
          id: '1',
          title: 'Jane Smith',
          subtitle: 'CEO & Founder',
          description: 'Jane has over 15 years of experience in web development and digital marketing.',
          image_url: '/placeholder-avatar.jpg',
        },
        {
          id: '2',
          title: 'John Davis',
          subtitle: 'Lead Developer',
          description: 'John specializes in front-end development and creating beautiful user interfaces.',
          image_url: '/placeholder-avatar.jpg',
        },
        {
          id: '3',
          title: 'Sarah Johnson',
          subtitle: 'Design Director',
          description: 'Sarah is an award-winning designer with a passion for creating memorable brands.',
          image_url: '/placeholder-avatar.jpg',
        },
        {
          id: '4',
          title: 'Michael Wilson',
          subtitle: 'Marketing Specialist',
          description: 'Michael has helped numerous businesses grow their online presence and reach new customers.',
          image_url: '/placeholder-avatar.jpg',
        },
      ];

  return (
    <div className="py-12 sm:py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* About section */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center mb-16">
          <div className="flex flex-col space-y-6 order-2 lg:order-1">
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
              <div className="prose max-w-none text-muted-foreground">
                <p>{description}</p>
              </div>
            )}
          </div>
          {image_url && (
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg lg:order-2">
              <Image
                src={image_url}
                alt={title || 'About us'}
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Team section */}
        {team.length > 0 && (
          <div className="mt-16">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Our Team
              </h3>
              <p className="mt-4 text-lg text-muted-foreground">
                Meet the talented individuals who make our company great.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div
                  key={member.id}
                  className="flex flex-col items-center text-center"
                >
                  {member.image_url && (
                    <div className="relative h-40 w-40 overflow-hidden rounded-full mb-4">
                      <Image
                        src={member.image_url}
                        alt={member.title || 'Team member'}
                        width={160}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  {member.title && (
                    <h4 className="text-xl font-semibold">{member.title}</h4>
                  )}
                  {member.subtitle && (
                    <p className="text-sm text-primary">{member.subtitle}</p>
                  )}
                  {member.description && (
                    <p className="mt-2 text-muted-foreground">
                      {member.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 