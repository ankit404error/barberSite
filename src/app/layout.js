import "./globals.css";
import { Inter } from "next/font/google";
import { AppProvider } from "@/contexts/AppContext";
import ThemeProvider from "@/contexts/ThemeProvider";
import { fetchSiteConfigAndThemes } from "@/lib/api/siteservice";
import { headers } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host (layout):", host);
  
  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected in layout, returning 'd2d'");
    return "d2d";
  }
  
  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected in layout:", parts[0]);
    return parts[0];
  }
  
  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain in layout:", subdomain);
  return subdomain;
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
