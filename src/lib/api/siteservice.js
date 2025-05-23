// src/lib/api/siteservice.js
import d2dData from '@/data/d2d.json';

const readSiteData = () => {
  return d2dData;
};

export const fetchCompleteSiteData = async (subdomain) => {
  console.log(`[Vercel Debug] fetchCompleteSiteData: Called for subdomain = "${subdomain}"`);
  const data = readSiteData(); // This is d2dData
  console.log(`[Vercel Debug] fetchCompleteSiteData: d2d.json internal site.subdomain = "${data.site.subdomain}"`);

  if (data.site.subdomain === subdomain && data.site.is_active) {
    console.log(`[Vercel Debug] fetchCompleteSiteData: Subdomain "${subdomain}" MATCHES d2d.json and is active. Returning d2dData.`);
    return data;
  } else {
    const reason = data.site.subdomain !== subdomain ? "subdomain mismatch" : "site not active";
    console.warn(`[Vercel Debug] fetchCompleteSiteData: Failed for subdomain "${subdomain}". Reason: ${reason}. d2d.json is for "${data.site.subdomain}".`);
    throw new Error(`Site with subdomain "${subdomain}" not found or is inactive.`);
  }
};

export async function fetchPageData(subdomain, slug = "home") {
  console.log(`[Vercel Debug] fetchPageData: Called for subdomain = "${subdomain}", slug = "${slug}"`);
  try {
    const siteData = await fetchCompleteSiteData(subdomain); // Relies on the logic above

    const page = siteData.pages[slug];
    if (!page) {
      console.error(`[Vercel Debug] fetchPageData: Page with slug "${slug}" NOT FOUND for subdomain "${subdomain}" in resolved site data.`);
      throw new Error(`Page with slug "${slug}" not found for subdomain "${subdomain}".`);
    }
    console.log(`[Vercel Debug] fetchPageData: Page "${slug}" found for subdomain "${subdomain}".`);

    const { sections, ...pageDataWithoutSections } = page;
    return {
      site: siteData.site,
      siteMeta: siteData.siteMeta,
      config: siteData.config,
      theme: siteData.theme,
      page: pageDataWithoutSections,
      sections: sections || [],
    };
  } catch (error) {
    console.error(`[Vercel Debug] fetchPageData: Error for subdomain "${subdomain}", slug "${slug}": ${error.message}`);
    throw error; // Re-throw for page.js to handle (e.g., fallback to MOCK_DATA)
  }
}

export async function fetchSiteConfigAndThemes(subdomain) {
  console.log(`[Vercel Debug] fetchSiteConfigAndThemes: Called for subdomain = "${subdomain}"`);
  try {
    const siteData = await fetchCompleteSiteData(subdomain); // Relies on the logic above

    const themes = [siteData.theme].map(inner => ({
      ...inner,
      primary: inner.primary_color,
    }));
    console.log(`[Vercel Debug] fetchSiteConfigAndThemes: Successfully fetched config and themes for "${subdomain}".`);
    return {
      site: siteData.site,
      themes,
      config: siteData.config,
    };
  } catch (error) {
    console.error(`[Vercel Debug] fetchSiteConfigAndThemes: Error for subdomain "${subdomain}": ${error.message}`);
    throw error;
  }
}

// --- Other functions like fetchSiteBySubdomain, fetchSiteMeta etc. ---
// Ensure they correctly reference `data.site.subdomain` if they are meant to be specific to "d2d"
// For example:
export const fetchSiteBySubdomain = async (requestedSubdomain) => {
  console.log(`[Vercel Debug] fetchSiteBySubdomain: Called for requestedSubdomain = "${requestedSubdomain}"`);
  const data = readSiteData();
  if (data.site.subdomain === requestedSubdomain && data.site.is_active) {
    console.log(`[Vercel Debug] fetchSiteBySubdomain: Match found for "${requestedSubdomain}".`);
    return data.site;
  }
  console.warn(`[Vercel Debug] fetchSiteBySubdomain: No match for "${requestedSubdomain}". d2d.json is for "${data.site.subdomain}".`);
  throw new Error(`Site data for subdomain ${requestedSubdomain} is not available via d2d.json or site is inactive.`);
};

// ... (ensure similar robust checks and logging for fetchSiteMeta, fetchSiteConfig, fetchSiteTheme if they are intended to only work if the siteId corresponds to the "d2d" site from d2d.json)
// For instance, fetchSiteMeta should ideally check if the passed siteId matches d2dData.site.id before returning d2dData.siteMeta.

export const fetchSiteMeta = async (siteId) => {
  console.log(`[Vercel Debug] fetchSiteMeta: Called for siteId = "${siteId}"`);
  const data = readSiteData();
  if (data.site.id === siteId && data.siteMeta.site_id === siteId) { // Check against the main site ID in d2d.json
    return data.siteMeta;
  }
  throw new Error(`Site metadata for site_id "${siteId}" not found or does not match d2d.json.`);
};

export const fetchSiteConfig = async (siteId) => {
  console.log(`[Vercel Debug] fetchSiteConfig: Called for siteId = "${siteId}"`);
  const data = readSiteData();
  if (data.site.id === siteId && data.config.site_id === siteId) {
    return data.config;
  }
  throw new Error(`Site config for site_id "${siteId}" not found or does not match d2d.json.`);
};

export const fetchSiteTheme = async (siteId) => {
  console.log(`[Vercel Debug] fetchSiteTheme: Called for siteId = "${siteId}"`);
  const data = readSiteData();
  if (data.site.id === siteId && data.theme.site_id === siteId) {
    return data.theme;
  }
  throw new Error(`Site theme for site_id "${siteId}" not found or does not match d2d.json.`);
};
