// Import all section components
import Header1 from './Header1';
import Header2 from './Header2';
import Header3 from './Header3';
import Hero1 from './Hero1';
import Hero2 from './Hero2';
import Hero3 from './Ankit_Pandey_Hero';
import About1 from './About1';
import About2 from './Ankit_Pandey_about';
import Services1 from './Services1';
import Services2 from './Ankit_Pandey_services';
import Testimonial1 from './Testimonial1';
import Testimonial2 from './Ankit_Pandey_Testimonials';
import FAQ1 from './FAQ1';
import Contact1 from './Contact1';
import Footer1 from './Footer1';
import Footer3 from './Ankit_Pandey_footer';
import Footer2 from './Footer2';
import Gallery1 from './Gallery1';
import Gallery2 from './Gallery2';
import Features1 from './Features1';
import Features2 from './Features2';
import Pricing1 from './Pricing1';
import Pricing2 from './Pricing2';
import CTA1 from './CTA1';
import CTA2 from './CTA2';
import Team1 from './Team1';
import Team2 from './Team2';
import Header4 from './Header4';
import Header5 from './Ankit_Pandey_Header';
// Map component keys to their respective React components
export const componentMap = {
  // Headers
  header_1: Header1,
  header_2: Header2,
  header_3: Header3,
  header_4: Header4,
  header_5: Header5,
  // Heroes
  hero_1: Hero1,
  hero_2: Hero2,
  hero_2: Hero3,
  // About
  about_1: About1,
  about_2: About2,
  // Services
  services_1: Services1,
  services_2: Services2,
  // Testimonials
  testimonial_1: Testimonial1,
  testimonial_2: Testimonial2,
  // FAQ
  faq_1: FAQ1,
  // Contact
  contact_1: Contact1,
  // Footers
  footer_1: Footer1,
  footer_2: Footer2,
  footer_3: Footer3,
  // Gallery
  gallery_1: Gallery1,
  gallery_2: Gallery2,
  // Features
  features_1: Features1, 
  features_2: Features2,
  // Pricing
  pricing_1: Pricing1,
  pricing_2: Pricing2,
  // CTA
  cta_1: CTA1,
  cta_2: CTA2,
  // Team
  team_1: Team1,
  team_2: Team2
};

// Helper function to get component by type and variant
export const getComponent = (type, variant) => {
  const key = `${type}_${variant}`;
  return componentMap[key] || null;
}; 