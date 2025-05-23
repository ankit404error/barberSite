import { notFound } from "next/navigation";
import { headers } from "next/headers";
import dynamicImport from "next/dynamic";
import { fetchPageData } from "@/lib/api/siteservice";
import { MOCK_DATA } from "@/lib/mock/mockdata";

// Force dynamic rendering since we're using headers()
export const dynamic = "force-dynamic";
export const runtime = "edge";

// Helper function to get subdomain from host
function getSubdomain(host) {
  console.log("Getting subdomain from host:", host);

  // Always return d2d for localhost for development
  if (host.includes("localhost")) {
    console.log("Localhost detected, returning 'd2d'");
    return "d2d";
  }

  // Extract subdomain from host (e.g., 'mysite.example.com' -> 'mysite')
  const parts = host.split(".");
  // Check if we have a subdomain
  if (parts.length > 2) {
    console.log("Subdomain detected:", parts[0]);
    return parts[0];
  }

  // Default subdomain or handle www
  const subdomain = parts[0] === "www" ? "default" : parts[0];
  console.log("Using subdomain:", subdomain);
  return subdomain;
}

export async function generateMetadata({ params, searchParams }) {
  try {
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in generateMetadata:", host);

    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);
    // Try to fetch real site data
    const { siteMeta } = await fetchPageData(subdomain, params.slug || "home");

    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  } catch (error) {
    console.error("siteMeta", error);
    // Fallback to mock data
    const siteMeta = MOCK_DATA.siteMeta;
    return {
      title: siteMeta.title,
      description: siteMeta.description,
      openGraph: {
        images: siteMeta.og_image ? [siteMeta.og_image] : [],
      },
      keywords: siteMeta.keywords,
      twitter: {
        card: "summary_large_image",
        handle: siteMeta.twitter_handle,
      },
      icons: {
        icon: siteMeta.favicon,
      },
    };
  }
}

// Create a client component to apply themes
const PageContent = dynamicImport(() => import("@/components/PageContent"), {
  ssr: true,
});

export default async function SubdomainPage({ params }) {
  try {
    const { slug = "home" } = params; // Default to home if no slug provided

    // Get the host from headers to determine subdomain
    const headersList = await headers();
    const host = headersList.get("host") || "localhost:3000";
    console.log("Host in SubdomainPage:", host);

    // Get subdomain through our helper function
    const subdomain = getSubdomain(host);

    // Fetch the real data from Supabase
    const {
      site,
      siteMeta,
      config,
      theme,
      page,
      sections: sectionsWithData,
    } = await fetchPageData(subdomain, slug);

    if (!page) {
      return notFound();
    }

    // Pass all data to client component which can use the theme context
    return (
      <PageContent
        page={page}
        sections={sectionsWithData}
        theme={theme}
        config={config}
      />
    );
  } catch (error) {
    console.error("Error rendering page:", error);

    // Fallback to mock data
    const { slug = "home" } = params;
    const page =
      Object.values(MOCK_DATA.pages).find((p) => p.slug === slug) ||
      MOCK_DATA.pages.home;

    if (!page) {
      return notFound();
    }

    // Prepare the sections with the right types and variants for component mapping
    const sectionsWithData = MOCK_DATA.sections.map((section) => {
      return {
        ...section,
        type: section.type,
        variant: section.variant,
      };
    });

    // Use mock data in client component
    return (
      <PageContent
        page={page}
        sections={sectionsWithData}
        theme={MOCK_DATA.theme}
        config={MOCK_DATA.config}
      />
    );
  }
}
