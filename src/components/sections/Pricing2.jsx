import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Pricing2({ content, items, theme, config }) {
  // Fallback values if content is not provided
  const {
    title = 'Compare Plans',
    subtitle = 'Pricing Options',
    description = 'Find the perfect plan that suits your needs. Compare features across all plans.',
  } = content || {};

  // Fallback pricing items if not provided
  const pricingPlans = items?.length > 0
    ? [...items].sort((a, b) => (a.position || 0) - (b.position || 0))
    : [
        {
          id: '1',
          title: 'Basic',
          price: '$29',
          duration: '/month',
          description: '5 users\nBasic support\n50GB storage\nBasic analytics\nLimited integrations',
          cta_text: 'Get Started',
          cta_link: '#',
          tag: '',
        },
        {
          id: '2',
          title: 'Pro',
          price: '$79',
          duration: '/month',
          description: '10 users\nPriority support\n100GB storage\nAdvanced analytics\nUnlimited integrations\nCustom branding',
          cta_text: 'Get Started',
          cta_link: '#',
          tag: 'Popular',
        },
        {
          id: '3',
          title: 'Enterprise',
          price: '$149',
          duration: '/month',
          description: 'Unlimited users\nDedicated support\nUnlimited storage\nReal-time analytics\nAdvanced security\nCustom development\nSLA guarantee',
          cta_text: 'Contact Sales',
          cta_link: '#',
          tag: '',
        },
      ];

  // Helper function to parse feature list from description
  const getFeatures = (description) => {
    if (!description) return [];
    return description.split('\n').filter(Boolean);
  };

  // Get all unique features across all plans for the comparison table
  const allFeatures = new Set();
  pricingPlans.forEach((plan) => {
    getFeatures(plan.description).forEach((feature) => {
      allFeatures.add(feature.toLowerCase().trim());
    });
  });

  // Check if a plan has a specific feature
  const hasFeature = (plan, feature) => {
    const planFeatures = getFeatures(plan.description).map(f => f.toLowerCase().trim());
    return planFeatures.includes(feature.toLowerCase().trim());
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

        <div className="mt-12 overflow-x-auto">
          <div className="min-w-full">
            <table className="min-w-full divide-y divide-border">
              <thead>
                <tr>
                  <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold sm:pl-6">
                    Features
                  </th>
                  {pricingPlans.map((plan) => (
                    <th 
                      key={plan.id || plan.title} 
                      scope="col" 
                      className={`px-3 py-3.5 text-center text-sm font-semibold ${
                        plan.tag === 'Popular' ? 'bg-primary/5' : ''
                      }`}
                    >
                      {plan.title}
                      {plan.tag && (
                        <div className="mt-1">
                          <span className="inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs text-primary">
                            {plan.tag}
                          </span>
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-border bg-card">
                {/* Price row */}
                <tr>
                  <th scope="row" className="py-5 pl-4 pr-3 text-left text-sm font-medium sm:pl-6">
                    Price
                  </th>
                  {pricingPlans.map((plan) => (
                    <td 
                      key={plan.id || plan.title} 
                      className={`px-3 py-5 text-center ${
                        plan.tag === 'Popular' ? 'bg-primary/5' : ''
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <span className="text-2xl font-bold">{plan.price}</span>
                        {plan.duration && (
                          <span className="text-sm text-muted-foreground">{plan.duration}</span>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Feature rows */}
                {Array.from(allFeatures).map((feature, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                    <th scope="row" className="py-4 pl-4 pr-3 text-left text-sm font-medium sm:pl-6">
                      {feature}
                    </th>
                    {pricingPlans.map((plan) => (
                      <td 
                        key={plan.id || plan.title} 
                        className={`px-3 py-4 text-center ${
                          plan.tag === 'Popular' ? 'bg-primary/5' : ''
                        }`}
                      >
                        {hasFeature(plan, feature) ? (
                          <svg className="mx-auto h-5 w-5 text-primary" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        ) : (
                          <svg className="mx-auto h-5 w-5 text-muted-foreground/50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* CTA row */}
                <tr>
                  <th scope="row" className="py-5 pl-4 pr-3 text-left text-sm font-medium sm:pl-6">
                    
                  </th>
                  {pricingPlans.map((plan) => (
                    <td 
                      key={plan.id || plan.title} 
                      className={`px-3 py-5 text-center ${
                        plan.tag === 'Popular' ? 'bg-primary/5' : ''
                      }`}
                    >
                      {plan.cta_text && plan.cta_link && (
                        <Button
                          asChild
                          variant={plan.tag === 'Popular' ? 'default' : 'outline'}
                          className="mx-auto"
                        >
                          <Link href={plan.cta_link}>{plan.cta_text}</Link>
                        </Button>
                      )}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
} 