import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";
import { fetchSiteConfigAndThemes } from "@/lib/api/siteservice";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// Helper function to get subdomain from host
// In src/app/page.js and src/app/layout.js
function getSubdomain(host) {
  console.log("[Vercel Debug] Host received by getSubdomain:", host);
  if (!host) { // Safety check for host
      console.warn("[Vercel Debug] Host is undefined or null in getSubdomain. Defaulting to 'default'.");
      return "default"; // Or handle as an error
  }
  if (host.includes("localhost")) {
    console.log("[Vercel Debug] Localhost detected, returning 'd2d'");
    return "d2d";
  }
  const parts = host.split(".");
  // Vercel preview URLs can be long like project-name-git-branch-org.vercel.app
  // Or simple project-name.vercel.app
  // Custom domains: yoursubdomain.yourdomain.com or yourdomain.com
  if (parts.length > 2 && parts[0] !== "www") { // A basic check for subdomain
    const subdomain = parts[0];
    // Add more checks if your vercel.app URL itself is being parsed as a subdomain you don't want
    if (subdomain.endsWith("-git") || subdomain.endsWith(process.env.VERCEL_GIT_REPO_SLUG?.toLowerCase())) { // Example, adjust as needed
        const mainDomain = parts.slice(parts.length -2).join('.'); // e.g. vercel.app or yourcustomdomain.com
        console.log(`[Vercel Debug] Vercel preview URL or similar detected, treating as main domain: ${mainDomain}, returning "default" or main part`);
        return "default"; // Or determine your main site's identifier
    }
    console.log("[Vercel Debug] Derived subdomain:", subdomain);
    return subdomain;
  }
  // Handle cases like 'yourdomain.com' or 'www.yourdomain.com' or 'project.vercel.app'
  // This part might need to be smarter based on your actual domain setup on Vercel
  const mainSiteIdentifier = parts[0] === "www" ? parts[1] : parts[0]; // crude, adjust as needed
  console.log("[Vercel Debug] No distinct subdomain found, using main site identifier:", mainSiteIdentifier);
  return mainSiteIdentifier; // Or a fixed "default" if that's your main site
}

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function RootLayout({ children }) {
  try {
    // Get the host from headers to determine subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in RootLayout:", host);
    
    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);

    // Fetch site configuration and themes
    const { site, themes } = await fetchSiteConfigAndThemes(subdomain);

    return (
      <html lang="en">
        <body className={inter.className}>
          <AppProvider initialSite={site} initialThemes={themes}>
            <ThemeProvider>{children}</ThemeProvider>
          </AppProvider>
        </body>
      </html>
    );
  } catch (error) {
    console.error("Error in RootLayout:", error);

    // Fallback to basic layout
    return (
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    );
  }
}
