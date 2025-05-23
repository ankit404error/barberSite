// src/lib/api/siteservice.js
import d2dData from '@/data/d2d.json';

// Helper function to access site data
const readSiteData = () => {
  // In a real multi-tenant app using a database, this would query the DB.
  // For this setup, it just returns the statically imported d2d.json.
  // This means this service currently ONLY knows about the "d2d" site.
  return d2dData;
};

// This function's purpose is to fetch the site object itself.
// In a multi-site setup from a DB, it would query based on subdomain.
// Here, it just checks if the requested subdomain matches the one in d2d.json.
export const fetchSiteBySubdomain = async (subdomain) => {
  try {
    const data = readSiteData(); // This is d2dData
    if (data.site.subdomain === subdomain && data.site.is_active) {
      return data.site;
    }
    // It's important to throw an error if the requested subdomain doesn't match
    // what this service currently can provide (which is only "d2d").
    throw new Error(`Site data for subdomain "${subdomain}" is not available or site is inactive. This service currently only provides data for subdomain "${data.site.subdomain}".`);
  } catch (error) {
    // Log the original error if it's different, or just rethrow
    console.error(`Failed to fetch site by subdomain "${subdomain}": ${error.message}`);
    throw error;
  }
};

// --- (fetchSiteMeta, fetchSiteConfig, fetchSiteTheme, fetchSitePages, fetchPageBySlug, fetchPageSections, fetchSectionContent, fetchSectionItems remain largely the same as they operate on IDs or the already fetched 'data' object) ---
// Ensure their error handling is robust if data for a specific ID isn't found within d2d.json

export const fetchSiteMeta = async (siteId) => {
  try {
    const data = readSiteData();
    // Assuming d2d.json's siteMeta belongs to d2d.json's site.id
    if (data.siteMeta.site_id === siteId && data.site.id === siteId) {
      return data.siteMeta;
    }
    throw new Error(`Site metadata for site_id "${siteId}" not found in d2d.json.`);
  } catch (error) {
    console.error(`Failed to fetch site metadata for site_id "${siteId}": ${error.message}`);
    throw error;
  }
};

export const fetchSiteConfig = async (siteId) => {
  try {
    const data = readSiteData();
    if (data.config.site_id === siteId && data.site.id === siteId) {
      return data.config;
    }
    throw new Error(`Site config for site_id "${siteId}" not found in d2d.json.`);
  } catch (error) {
    console.error(`Failed to fetch site config for site_id "${siteId}": ${error.message}`);
    throw error;
  }
};

export const fetchSiteTheme = async (siteId) => {
  try {
    const data = readSiteData();
    if (data.theme.site_id === siteId && data.site.id === siteId) {
      return data.theme;
    }
    throw new Error(`Site theme for site_id "${siteId}" not found in d2d.json.`);
  } catch (error) {
    console.error(`Failed to fetch site theme for site_id "${siteId}": ${error.message}`);
    throw error;
  }
};


// Updated fetchCompleteSiteData
export const fetchCompleteSiteData = async (subdomain) => {
  console.log(`WorkspaceCompleteSiteData called for subdomain: "${subdomain}"`);
  try {
    const data = readSiteData(); // This is d2dData

    // The crucial check: Does the subdomain derived from the URL/host
    // match the subdomain defined within d2d.json?
    if (data.site.subdomain === subdomain && data.site.is_active) {
      console.log(`Subdomain "${subdomain}" matches d2d.json. Returning d2dData.`);
      return data;
    } else {
      // This will be hit if the Vercel subdomain (or any other subdomain) is not "d2d"
      // or if the site is marked inactive in d2d.json.
      console.warn(`Site data in d2d.json (for subdomain "${data.site.subdomain}") does not match requested subdomain "${subdomain}" or site is inactive.`);
      throw new Error(`Site with subdomain "${subdomain}" not found or is inactive.`);
    }
  } catch (error) {
    console.error(`Error in fetchCompleteSiteData for subdomain "${subdomain}": ${error.message}`);
    // Re-throw the error so page.js can catch it and potentially fall back to MOCK_DATA
    throw error;
  }
};

/**
 * Fetch page data for a specific subdomain and slug
 * @param {string} subdomain - The site subdomain derived by getSubdomain() in page.js/layout.js
 * @param {string} slug - The page slug
 * @returns {Object} Page data with sections
 */
export async function fetchPageData(subdomain, slug = "home") {
  console.log(`WorkspacePageData called for subdomain: "${subdomain}", slug: "${slug}"`);
  try {
    const data = await fetchCompleteSiteData(subdomain); // Uses the updated logic above

    // Now that 'data' is confirmed to be for the correct subdomain (or an error was thrown)
    const page = data.pages[slug];
    if (!page) {
      throw new Error(`Page with slug "${slug}" not found for subdomain "${subdomain}" in the resolved site data.`);
    }

    const { sections, ...pageData } = page;
    return {
      site: data.site,
      siteMeta: data.siteMeta,
      config: data.config,
      theme: data.theme,
      page: pageData,
      sections: sections || [], // Ensure sections is always an array
    };
  } catch (error) {
    // Log the specific error from fetchPageData context
    console.error(`Error fetching page data for subdomain "${subdomain}", slug "${slug}": ${error.message}`);
    // Re-throw for page.js to handle (e.g., fallback to MOCK_DATA or show a 404)
    throw error;
  }
}

/**
 * Fetch site configuration and themes
 * @param {string} subdomain - The site subdomain
 * @returns {Object} Site configuration and themes
 */
export async function fetchSiteConfigAndThemes(subdomain) {
  console.log(`WorkspaceSiteConfigAndThemes called for subdomain: "${subdomain}"`);
  try {
    const data = await fetchCompleteSiteData(subdomain); // Uses the updated logic

    const themes = [data.theme].map(inner => ({
      ...inner,
      primary: inner.primary_color, // Ensure this mapping is correct if primary_color is used
    }));

    return {
      site: data.site,
      themes, // This will be an array with one theme from d2d.json
      config: data.config,
    };
  } catch (error) {
    console.error(`Error fetching site config and themes for subdomain "${subdomain}": ${error.message}`);
    throw error;
  }
}