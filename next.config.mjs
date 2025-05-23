// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true, // Good to have
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'i.ibb.co' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'i.postimg.cc' },
      { protocol: 'https', hostname: 'placehold.co' },
      // For images from Google User Content (like some map tiles or profile pics)
      { protocol: 'http', hostname: 'googleusercontent.com' }, // if any are http
      { protocol: 'https', hostname: 'googleusercontent.com' },
      { protocol: 'https', hostname: 'lh3.googleusercontent.com' }, // Common for Google profile pics
      // Add more specific patterns if possible, or broaden carefully
      // { protocol: 'https', hostname: '**.googleusercontent.com' }, // Wider match
    ],
  },
};
export default nextConfig;