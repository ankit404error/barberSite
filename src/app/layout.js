// In src/app/layout.js (and src/app/page.js if you have the function there too)
import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";
import { fetchSiteConfigAndThemes } from "@/lib/api/siteservice";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("[Vercel Debug] Host received by getSubdomain:", host);
  if (!host) {
      console.warn("[Vercel Debug] Host is undefined/null. Defaulting to 'd2d' as a fallback.");
      return "d2d";
  }

  // Handle localhost for development
  if (host.includes("localhost")) {
    console.log("[Vercel Debug] Localhost detected, returning 'd2d'.");
    return "d2d";
  }

  // Handle your specific Vercel production URL to map to "d2d"
  // Strip "https://" or "http://" if present, though headers().get('host') usually doesn't include it.
  const cleanHost = host.replace(/^(https?:\/\/)?/, '');

  if (cleanHost === "barber-site-pi.vercel.app") {
    console.log("[Vercel Debug] Main production URL barber-site-pi.vercel.app detected, mapping to 'd2d'.");
    return "d2d";
  }

  // Handle custom domains like "d2d.yourcustomdomain.com"
  const parts = cleanHost.split(".");
  if (parts.length > 2) { // e.g., d2d.yourcustomdomain.com or d2d.vercel.app (if you set up a d2d subdomain for the project)
    if (parts[0] !== "www") {
      const subdomain = parts[0];
      console.log("[Vercel Debug] Derived subdomain from custom/multi-part host:", subdomain);
      return subdomain;
    } else if (parts.length > 3 && parts[1] !== '') { // www.sub.domain.com
      const subdomain = parts[1];
      console.log("[Vercel Debug] Derived subdomain from www.sub.domain.com host:", subdomain);
      return subdomain;
    }
  }
  
  // Fallback for other custom domains (e.g., yourcustomdomain.com) or unhandled cases
  // If yourcustomdomain.com should also map to "d2d", you'd add another specific check:
  // if (cleanHost === "yourcustomdomain.com") return "d2d";
  
  console.log(`[Vercel Debug] No specific subdomain rule matched for "${cleanHost}". Defaulting to parts[0] or "default".`);
  return parts[0] || "default"; // Default to the first part if not 'www' or a more specific case
}

export const dynamic = "force-dynamic";
export const runtime = "edge";

export default async function RootLayout({ children }) {
  try {
    const headersList = await headers();
    // Vercel provides 'x-forwarded-host' which is usually more reliable for the original host.
    const host = headersList.get("x-forwarded-host") || headersList.get("host") || "localhost:3000";
    console.log("[Vercel Debug] Host in RootLayout (using x-forwarded-host or host):", host);
    
    const subdomain = getSubdomain(host);
    console.log(`[Vercel Debug] RootLayout: Subdomain determined as: "${subdomain}"`);

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
    console.error("[Vercel Debug] Critical Error in RootLayout:", error.message, error.stack);
    return (
      <html lang="en">
        <body className={inter.className}>
          <div>
            <h1>Application Error</h1>
            <p>There was an issue loading the site configuration: {error.message}</p>
          </div>
        </body>
      </html>
    );
  }
}