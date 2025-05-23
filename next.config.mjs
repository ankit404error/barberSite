/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "i.ibb.co",
      "images.pexels.com", // Add Pexels
      "images.unsplash.com", // Add Unsplash
      "i.postimg.cc", // Add i.postimg.cc (used in Ankit_Pandey_Hero.jsx and Ankit_Pandey_about.jsx)
      // Add any other domains you use for images
    ],
  },
};

export default nextConfig;