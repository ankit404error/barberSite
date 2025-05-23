// Fallback mock data in case of errors or for development
export const MOCK_DATA = {
  site: {
    id: "site-123",
    name: "D2D Business Solutions",
  },
  siteMeta: {
    title: "D2D Business Solutions",
    description:
      "Professional web development and social media marketing services",
    og_image: "/images/og-image.jpg",
    favicon: "/favicon.ico",
    keywords: "web development, marketing, business, social media",
    twitter_handle: "@d2dbusiness",
  },
  pages: {
    home: {
      id: "page-home",
      title: "Home Page",
      slug: "home",
    },
    about: {
      id: "page-about",
      title: "About Us",
      slug: "about",
    },
    services: {
      id: "page-services",
      title: "Our Services",
      slug: "services",
    },
    contact: {
      id: "page-contact",
      title: "Contact Us",
      slug: "contact",
    },
  },
  sections: [
    {
      id: "section-hero",
      type: "hero",
      variant: "1",
      position: 1,
      is_active: true,
      content: {
        title: "Grow Your Business Online1 ",
        subtitle: "Professional Web Solutions",
        description:
          "We help small businesses establish a strong online presence with beautiful websites and effective social media marketing.",
        image_url: "/images/hero-image.jpg",
        cta_text: "Get Started",
        cta_link: "/contact",
      },
      items: [],
    },
    {
      id: "section-services",
      type: "services",
      variant: "1",
      position: 2,
      is_active: true,
      content: {
        title: "Our Services",
        subtitle: "What We Offer",
        description:
          "Comprehensive digital solutions to help your business thrive online.",
      },
      items: [
        {
          id: "service-1",
          title: "Web Design",
          description:
            "Custom websites designed to attract and convert customers.",
          icon: "desktop",
          position: 1,
        },
        {
          id: "service-2",
          title: "Social Media Marketing",
          description:
            "Strategic social media campaigns that build your brand.",
          icon: "share",
          position: 2,
        },
        {
          id: "service-3",
          title: "SEO Optimization",
          description:
            "Improve your search rankings and get found by customers.",
          icon: "search",
          position: 3,
        },
      ],
    },
    {
      id: "section-testimonial",
      type: "testimonial",
      variant: "1",
      position: 3,
      is_active: true,
      content: {
        title: "What Our Clients Say",
        subtitle: "Testimonials",
      },
      items: [
        {
          id: "testimonial-1",
          title: "John Smith",
          subtitle: "CEO, Smith Enterprises",
          description:
            "D2D transformed our online presence. Our website looks amazing and our social media engagement has doubled!",
          image_url: "/images/testimonial1.jpg",
          rating: 5,
          position: 1,
        },
        {
          id: "testimonial-2",
          title: "Sarah Johnson",
          subtitle: "Owner, Johnson Bakery",
          description:
            "I was amazed at how quickly they delivered our new website. The design perfectly matches our brand and our customers love it!",
          image_url: "/images/testimonial2.jpg",
          rating: 5,
          position: 2,
        },
      ],
    },
    {
      id: "section-about",
      type: "about",
      variant: "1",
      position: 4,
      is_active: true,
      content: {
        title: "About Us",
        subtitle: "Our Story",
        description:
          "D2D was founded with a passion for helping small businesses succeed online. With years of experience in web development and digital marketing, we provide the tools and strategies necessary for businesses to thrive in the digital landscape.",
        image_url: "/images/about-image.jpg",
      },
      items: [],
    },
    {
      id: "section-faq",
      type: "faq",
      variant: "1",
      position: 5,
      is_active: true,
      content: {
        title: "Frequently Asked Questions",
        subtitle: "Common Questions",
      },
      items: [
        {
          id: "faq-1",
          title: "How long does it take to build a website?",
          description:
            "Most websites can be completed within 2-4 weeks, depending on complexity and content requirements.",
          position: 1,
        },
        {
          id: "faq-2",
          title: "Do you provide ongoing support?",
          description:
            "Yes, we offer various maintenance packages to keep your website updated and secure.",
          position: 2,
        },
        {
          id: "faq-3",
          title: "How much does a website cost?",
          description:
            "Our pricing varies based on your specific needs. Contact us for a personalized quote.",
          position: 3,
        },
      ],
    },
    {
      id: "section-contact",
      type: "contact",
      variant: "1",
      position: 6,
      is_active: true,
      content: {
        title: "Contact Us",
        subtitle: "Get in Touch",
        description:
          "Ready to take your business to the next level? Contact us today to discuss your project.",
      },
      items: [],
    },
  ],
  theme: {
    primarysite: "#4F46E5",
    primary_hover: "#4338CA",
    secondary: "#10B981",
    secondary_hover: "#059669",
    accent: "#F59E0B",
    accent_hover: "#D97706",
    background: "#FFFFFF",
    foreground: "#1F2937",
    muted: "#F3F4F6",
    border: "#E5E7EB",
    card: "#FFFFFF",
    card_foreground: "#1F2937",
    error: "#EF4444",
    success: "#10B981",
    footer: "#1F2937",
    footer_text: "#F9FAFB",
    overlay_dark: "rgba(0, 0, 0, 0.7)",
    overlay_light: "rgba(255, 255, 255, 0.7)",
    overlay_medium: "rgba(0, 0, 0, 0.5)",
  },
  config: {
    font_body: "Inter",
    font_heading: "Poppins",
    font_body_weights: ["400", "500", "600"],
    font_heading_weights: ["600", "700"],
    max_width: "1200px",
    radius_lg: "0.5rem",
    radius_md: "0.375rem",
    radius_sm: "0.25rem",
    radius_full: "9999px",
  },
};
