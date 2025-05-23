/**
 * Component Registry for Website Builder
 *
 * This registry defines all available section types, their variants,
 * and the schema for each variant. It serves both:
 * 1. The admin interface: for generating dynamic forms
 * 2. The customer-facing app: for rendering the appropriate components
 */

export const componentRegistry = {
  header: {
    name: "Header Section",
    description: "Navigation header for your site",
    variants: {
      1: {
        name: "Standard Header",
        description: "Header with logo, navigation links and optional button",
        thumbnail: "/thumbnails/header-1.png",
        schema: {
          title: { type: "text", label: "Brand/Logo Text" },
          image_url: { type: "image", label: "Logo Image" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Link Text" },
          cta_link: { type: "text", required: true, label: "Link URL" },
          position: { type: "number", label: "Display Order" },
        },
      },
      2: {
        name: "Simple Header",
        description: "Minimalist header with logo only",
        thumbnail: "/thumbnails/header-2.png",
        schema: {
          title: { type: "text", label: "Brand/Logo Text" },
          image_url: { type: "image", label: "Logo Image" },
        },
      },
      3: {
        name: "Responsive Header",
        description: "Mobile-friendly header with dynamic links and actions",
        thumbnail: "/thumbnails/header-3.png",
        schema: {
          title: { type: "text", label: "Logo / Brand Text" },
          cta_text: { type: "text", label: "CTA Button Text" },
          cta_link: { type: "text", label: "CTA Button Link (e.g., tel:)" },
          image_url: { type: "image", label: "Logo Image (optional)" },
        },
        itemSchema: {
          title: {
            type: "text",
            required: true,
            label: "Navigation Link Text",
          },
          cta_link: { type: "text", required: true, label: "Navigation URL" },
          position: { type: "number", label: "Display Order" },
        },
      },
      4: {
        name: "Responsive Header",
        description: "Mobile-friendly header with dynamic links and actions",
        thumbnail: "/thumbnails/header-3.png",
        schema: {
          title: { type: "text", label: "Logo / Brand Text" },
          cta_text: { type: "text", label: "CTA Button Text" },
          cta_link: { type: "text", label: "CTA Button Link (e.g., tel:)" },
          image_url: { type: "image", label: "Logo Image (optional)" },
        },
        itemSchema: {
          title: {
            type: "text",
            required: true,
            label: "Navigation Link Text",
          },
          cta_link: { type: "text", required: true, label: "Navigation URL" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  hero: {
    name: "Hero Section",
    description: "Landing section for your page",
    variants: {
      1: {
        name: "Standard Hero",
        description: "Hero with image, title, description and CTA",
        thumbnail: "/thumbnails/hero-1.png",
        schema: {
          title: { type: "text", required: true, label: "Heading" },
          subtitle: { type: "text", label: "Subheading" },
          description: { type: "textarea", label: "Description" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
          image_url: { type: "image", label: "Background Image" },
        },
      },
      2: {
        name: "Split Hero",
        description: "Hero with content and image side by side",
        thumbnail: "/thumbnails/hero-2.png",
        schema: {
          title: { type: "text", required: true, label: "Heading" },
          subtitle: { type: "text", label: "Subheading" },
          description: { type: "textarea", label: "Description" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
          image_url: { type: "image", label: "Main Image" },
        },
      },
    },
  },
  services: {
    name: "Services Section",
    description: "Showcase your services or products",
    variants: {
      1: {
        name: "Services Grid",
        description: "Grid layout of service cards with icons",
        thumbnail: "/thumbnails/services-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
          columns: {
            type: "select",
            label: "Columns",
            options: [
              { label: "2 Columns", value: "2" },
              { label: "3 Columns", value: "3" },
              { label: "4 Columns", value: "4" },
            ],
            default: "3",
          },
        },
        // Schema for each repeatable item
        itemSchema: {
          title: { type: "text", required: true, label: "Service Title" },
          description: { type: "textarea", label: "Service Description" },
          icon: { type: "icon", label: "Service Icon" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  testimonial: {
    name: "Testimonials Section",
    description: "Display client testimonials and reviews",
    variants: {
      1: {
        name: "Testimonial Carousel",
        description: "Scrollable carousel of client testimonials",
        thumbnail: "/thumbnails/testimonial-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
        },
        // Schema for each testimonial item
        itemSchema: {
          title: { type: "text", required: true, label: "Client Name" },
          subtitle: { type: "text", label: "Client Position/Company" },
          description: {
            type: "textarea",
            required: true,
            label: "Testimonial Text",
          },
          image_url: { type: "image", label: "Client Photo" },
          rating: {
            type: "select",
            label: "Rating (Stars)",
            options: [
              { label: "5 Stars", value: "5" },
              { label: "4 Stars", value: "4" },
              { label: "3 Stars", value: "3" },
              { label: "2 Stars", value: "2" },
              { label: "1 Star", value: "1" },
            ],
            default: "5",
          },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  about: {
    name: "About Section",
    description: "Share information about your business or organization",
    variants: {
      1: {
        name: "Standard About",
        description: "About section with image and text",
        thumbnail: "/thumbnails/about-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: {
            type: "textarea",
            required: true,
            label: "About Text",
          },
          image_url: { type: "image", label: "About Image" },
        },
      },
    },
  },
  faq: {
    name: "FAQ Section",
    description: "Frequently asked questions accordion",
    variants: {
      1: {
        name: "Accordion FAQ",
        description: "Expandable FAQ items in accordion style",
        thumbnail: "/thumbnails/faq-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
        },
        // Schema for each FAQ item
        itemSchema: {
          title: { type: "text", required: true, label: "Question" },
          description: { type: "textarea", required: true, label: "Answer" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  contact: {
    name: "Contact Section",
    description: "Contact form and information",
    variants: {
      1: {
        name: "Contact Form",
        description: "Contact form with contact information",
        thumbnail: "/thumbnails/contact-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Contact Description" },
          email: { type: "text", label: "Contact Email" },
          phone: { type: "text", label: "Contact Phone" },
          address: { type: "textarea", label: "Address" },
          map_embed: { type: "textarea", label: "Google Maps Embed Code" },
          form_title: { type: "text", label: "Form Title" },
          form_subtitle: { type: "text", label: "Form Subtitle" },
          submit_text: {
            type: "text",
            label: "Submit Button Text",
            default: "Send Message",
          },
        },
      },
    },
  },
  footer: {
    name: "Footer Section",
    description: "Website footer with links and information",
    variants: {
      1: {
        name: "Standard Footer",
        description: "Footer with multiple columns of links and copyright",
        thumbnail: "/thumbnails/footer-1.png",
        schema: {
          title: { type: "text", label: "Company Name" },
          description: { type: "textarea", label: "Company Description" },
          image_url: { type: "image", label: "Logo" },
          copyright: { type: "text", label: "Copyright Text" },
          columns: {
            type: "select",
            label: "Number of Link Columns",
            options: [
              { label: "2 Columns", value: "2" },
              { label: "3 Columns", value: "3" },
              { label: "4 Columns", value: "4" },
            ],
            default: "3",
          },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Link Text" },
          subtitle: { type: "text", label: "Column Heading" },
          cta_link: { type: "text", required: true, label: "Link URL" },
          position: { type: "number", label: "Display Order" },
          tag: { type: "text", label: "Column Group" },
        },
      },
      2: {
        name: "Simple Footer",
        description: "Minimal footer with copyright and social links",
        thumbnail: "/thumbnails/footer-2.png",
        schema: {
          title: { type: "text", label: "Company Name" },
          copyright: { type: "text", label: "Copyright Text" },
          image_url: { type: "image", label: "Logo" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Social Media Name" },
          icon: { type: "icon", label: "Social Media Icon" },
          cta_link: { type: "text", required: true, label: "Social Media URL" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  gallery: {
    name: "Gallery Section",
    description: "Image gallery or portfolio showcase",
    variants: {
      1: {
        name: "Image Grid",
        description: "Responsive grid of images",
        thumbnail: "/thumbnails/gallery-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
          columns: {
            type: "select",
            label: "Columns",
            options: [
              { label: "2 Columns", value: "2" },
              { label: "3 Columns", value: "3" },
              { label: "4 Columns", value: "4" },
            ],
            default: "3",
          },
        },
        itemSchema: {
          title: { type: "text", label: "Image Title" },
          subtitle: { type: "text", label: "Image Subtitle" },
          description: { type: "textarea", label: "Image Description" },
          image_url: { type: "image", required: true, label: "Gallery Image" },
          cta_link: { type: "text", label: "Link URL" },
          position: { type: "number", label: "Display Order" },
          tag: { type: "text", label: "Category Tag" },
        },
      },
      2: {
        name: "Masonry Gallery",
        description: "Pinterest-style masonry layout for images",
        thumbnail: "/thumbnails/gallery-2.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
        },
        itemSchema: {
          title: { type: "text", label: "Image Title" },
          subtitle: { type: "text", label: "Image Subtitle" },
          image_url: { type: "image", required: true, label: "Gallery Image" },
          cta_link: { type: "text", label: "Link URL" },
          position: { type: "number", label: "Display Order" },
          tag: { type: "text", label: "Category Tag" },
        },
      },
    },
  },
  features: {
    name: "Features Section",
    description: "Highlight product or service features",
    variants: {
      1: {
        name: "Features Grid",
        description: "Grid layout of feature cards with icons",
        thumbnail: "/thumbnails/features-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
          columns: {
            type: "select",
            label: "Columns",
            options: [
              { label: "2 Columns", value: "2" },
              { label: "3 Columns", value: "3" },
              { label: "4 Columns", value: "4" },
            ],
            default: "3",
          },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Feature Title" },
          description: { type: "textarea", label: "Feature Description" },
          icon: { type: "icon", label: "Feature Icon" },
          image_url: { type: "image", label: "Feature Image" },
          position: { type: "number", label: "Display Order" },
        },
      },
      2: {
        name: "Features with Image",
        description: "Features list with accompanying image",
        thumbnail: "/thumbnails/features-2.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
          image_url: { type: "image", label: "Main Feature Image" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Feature Title" },
          description: { type: "textarea", label: "Feature Description" },
          icon: { type: "icon", label: "Feature Icon" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  pricing: {
    name: "Pricing Section",
    description: "Display pricing plans or packages",
    variants: {
      1: {
        name: "Pricing Cards",
        description: "Side-by-side pricing cards",
        thumbnail: "/thumbnails/pricing-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Plan Name" },
          subtitle: { type: "text", label: "Plan Subtitle" },
          price: { type: "text", required: true, label: "Price" },
          duration: { type: "text", label: "Billing Period (e.g. /month)" },
          description: { type: "textarea", label: "Plan Description" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
          tag: { type: "text", label: "Featured Tag (e.g. 'Popular')" },
          position: { type: "number", label: "Display Order" },
        },
      },
      2: {
        name: "Pricing Table",
        description: "Comparison table for pricing plans",
        thumbnail: "/thumbnails/pricing-2.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Plan Name" },
          price: { type: "text", required: true, label: "Price" },
          duration: { type: "text", label: "Billing Period (e.g. /month)" },
          description: {
            type: "textarea",
            label: "Features List (one per line)",
          },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
          tag: { type: "text", label: "Featured Tag (e.g. 'Popular')" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
  cta: {
    name: "Call to Action Section",
    description: "Prompt visitors to take a specific action",
    variants: {
      1: {
        name: "Banner CTA",
        description: "Full-width banner with call to action",
        thumbnail: "/thumbnails/cta-1.png",
        schema: {
          title: { type: "text", required: true, label: "Heading" },
          subtitle: { type: "text", label: "Subheading" },
          description: { type: "textarea", label: "Description" },
          cta_text: { type: "text", label: "Primary Button Text" },
          cta_link: { type: "text", label: "Primary Button Link" },
          background_url: { type: "image", label: "Background Image" },
        },
      },
      2: {
        name: "Split CTA",
        description: "Two-column layout with image and CTA",
        thumbnail: "/thumbnails/cta-2.png",
        schema: {
          title: { type: "text", required: true, label: "Heading" },
          subtitle: { type: "text", label: "Subheading" },
          description: { type: "textarea", label: "Description" },
          cta_text: { type: "text", label: "Primary Button Text" },
          cta_link: { type: "text", label: "Primary Button Link" },
          image_url: { type: "image", label: "CTA Image" },
        },
      },
    },
  },
  team: {
    name: "Team Section",
    description: "Showcase team members or staff",
    variants: {
      1: {
        name: "Team Grid",
        description: "Grid layout of team members",
        thumbnail: "/thumbnails/team-1.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
          columns: {
            type: "select",
            label: "Columns",
            options: [
              { label: "2 Columns", value: "2" },
              { label: "3 Columns", value: "3" },
              { label: "4 Columns", value: "4" },
            ],
            default: "3",
          },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Member Name" },
          subtitle: { type: "text", label: "Job Title/Position" },
          description: { type: "textarea", label: "Member Bio" },
          image_url: { type: "image", label: "Member Photo" },
          cta_link: { type: "text", label: "Profile Link" },
          position: { type: "number", label: "Display Order" },
          tag: { type: "text", label: "Department/Team" },
        },
      },
      2: {
        name: "Featured Team Member",
        description: "Highlight a specific team member",
        thumbnail: "/thumbnails/team-2.png",
        schema: {
          title: { type: "text", label: "Section Title" },
          subtitle: { type: "text", label: "Section Subtitle" },
          description: { type: "textarea", label: "Section Description" },
        },
        itemSchema: {
          title: { type: "text", required: true, label: "Member Name" },
          subtitle: { type: "text", label: "Job Title/Position" },
          description: {
            type: "textarea",
            required: true,
            label: "Member Bio",
          },
          image_url: { type: "image", required: true, label: "Member Photo" },
          cta_text: { type: "text", label: "Button Text" },
          cta_link: { type: "text", label: "Button Link" },
          position: { type: "number", label: "Display Order" },
        },
      },
    },
  },
};

/**
 * Utility function to get the component key from type and variant
 * @param {string} type - The section type (e.g., 'hero', 'services')
 * @param {string} variant - The variant number (e.g., '1', '2')
 * @returns {string} - The component key (e.g., 'hero_1')
 */
export const getComponentKey = (type, variant) => {
  return `${type}_${variant}`;
};

/**
 * Get schema for a specific component type and variant
 * @param {string} type - The section type
 * @param {string} variant - The variant number
 * @returns {Object|null} - The schema object or null if not found
 */
export const getComponentSchema = (type, variant) => {
  if (!componentRegistry[type] || !componentRegistry[type].variants[variant]) {
    return null;
  }

  return componentRegistry[type].variants[variant].schema;
};

/**
 * Get item schema for repeatable items in a component
 * @param {string} type - The section type
 * @param {string} variant - The variant number
 * @returns {Object|null} - The item schema object or null if not found
 */
export const getItemSchema = (type, variant) => {
  if (
    !componentRegistry[type] ||
    !componentRegistry[type].variants[variant] ||
    !componentRegistry[type].variants[variant].itemSchema
  ) {
    return null;
  }

  return componentRegistry[type].variants[variant].itemSchema;
};

/**
 * Get all available component types
 * @returns {Array} - Array of component type objects with name, description, and key
 */
export const getAllComponentTypes = () => {
  return Object.entries(componentRegistry).map(([key, config]) => ({
    key,
    name: config.name,
    description: config.description,
  }));
};

/**
 * Get all variants for a specific component type
 * @param {string} type - The component type
 * @returns {Array} - Array of variant objects or empty array if type not found
 */
export const getComponentVariants = (type) => {
  if (!componentRegistry[type]) {
    return [];
  }

  return Object.entries(componentRegistry[type].variants).map(
    ([key, config]) => ({
      key,
      name: config.name,
      description: config.description,
      thumbnail: config.thumbnail,
    })
  );
};
