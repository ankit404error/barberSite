import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Pricing1({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Pricing Plans',
    subtitle = 'Simple, Transparent Pricing',
    description = 'Choose the perfect plan for your needs. All plans include a 14-day free trial.',
  } = content || {};

  // Fallback pricing items if not provided
  const pricingPlans = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Starter',
          subtitle: 'For individuals and small projects',
          price: '$19',
          duration: '/month',
          description: 'Perfect for individuals and small projects. Get started with all the basics you need.',
          cta_text: 'Get Started',
          cta_link: '#',
          tag: '',
        },
        {
          id: '2',
          title: 'Professional',
          subtitle: 'For growing businesses',
          price: '$49',
          duration: '/month',
          description: 'Everything in Starter, plus advanced features to help your business grow.',
          cta_text: 'Get Started',
          cta_link: '#',
          tag: 'Popular',
        },
        {
          id: '3',
          title: 'Enterprise',
          subtitle: 'For large organizations',
          price: '$99',
          duration: '/month',
          description: 'Advanced features and priority support for large-scale organizational needs.',
          cta_text: 'Contact Sales',
          cta_link: '#',
          tag: '',
        },
      ];

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

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id || plan.title}
              className={`flex flex-col rounded-lg border ${
                plan.tag === 'Popular' ? 'border-primary shadow-lg' : 'border-border'
              } bg-card p-6 shadow-sm`}
            >
              {plan.tag && (
                <div className="mb-4">
                  <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                    {plan.tag}
                  </span>
                </div>
              )}

              <div className="mb-5">
                {plan.title && (
                  <h3 className="text-xl font-bold">{plan.title}</h3>
                )}
                {plan.subtitle && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {plan.subtitle}
                  </p>
                )}
              </div>

              <div className="mb-5">
                <div className="flex items-baseline">
                  {plan.price && (
                    <span className="text-3xl font-bold">{plan.price}</span>
                  )}
                  {plan.duration && (
                    <span className="ml-1 text-sm text-muted-foreground">
                      {plan.duration}
                    </span>
                  )}
                </div>
              </div>

              {plan.description && (
                <p className="mb-6 text-muted-foreground">{plan.description}</p>
              )}

              <div className="mt-auto">
                {plan.cta_text && plan.cta_link && (
                  <Button
                    asChild
                    variant={plan.tag === 'Popular' ? 'default' : 'outline'}
                    className="w-full"
                  >
                    <Link href={plan.cta_link}>{plan.cta_text}</Link>
                  </Button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 