// Import data directly instead of using fs
import d2dData from '@/data/d2d.json';

// Helper function to access site data
const readSiteData = () => {
  try {
    return d2dData;
  } catch (error) {
    console.error("Error reading site data from JSON:", error);
    throw error;
  }
};

// Fetch site by subdomain
export const fetchSiteBySubdomain = async (subdomain) => {
  try {
    const data = readSiteData();
    if (data.site.subdomain === subdomain && data.site.is_active) {
      return data.site;
    }
    throw new Error(`Site with subdomain ${subdomain} not found`);
  } catch (error) {
    throw new Error(`Failed to fetch site: ${error.message}`);
  }
};

// Fetch site metadata
export const fetchSiteMeta = async (siteId) => {
  try {
    const data = readSiteData();
    if (data.siteMeta.site_id === siteId) {
      return data.siteMeta;
    }
    throw new Error(`Site metadata for site ${siteId} not found`);
  } catch (error) {
    throw new Error(`Failed to fetch site metadata: ${error.message}`);
  }
};

// Fetch site config
export const fetchSiteConfig = async (siteId) => {
  try {
    const data = readSiteData();
    if (data.config.site_id === siteId) {
      return data.config;
    }
    throw new Error(`Site config for site ${siteId} not found`);
  } catch (error) {
    throw new Error(`Failed to fetch site config: ${error.message}`);
  }
};

// Fetch site theme
export const fetchSiteTheme = async (siteId) => {
  try {
    const data = readSiteData();
    if (data.theme.site_id === siteId) {
      return data.theme;
    }
    throw new Error(`Site theme for site ${siteId} not found`);
  } catch (error) {
    throw new Error(`Failed to fetch site theme: ${error.message}`);
  }
};

// Fetch pages for a site
export const fetchSitePages = async (siteId) => {
  try {
    const data = readSiteData();
    const pages = Object.values(data.pages).map(page => {
      // Extract page data without the sections
      const { sections, ...pageData } = page;
      return pageData;
    });
    return pages;
  } catch (error) {
    throw new Error(`Failed to fetch site pages: ${error.message}`);
  }
};

// Fetch page by slug
export const fetchPageBySlug = async (siteId, slug) => {
  try {
    const data = readSiteData();
    const page = data.pages[slug];
    if (page) {
      // Extract page data without the sections
      const { sections, ...pageData } = page;
      return pageData;
    }
    return null;
  } catch (error) {
    throw new Error(`Failed to fetch page: ${error.message}`);
  }
};

// Fetch sections for a page
export const fetchPageSections = async (pageId) => {
  try {
    const data = readSiteData();
    // Find the page that has the given ID
    const page = Object.values(data.pages).find(p => p.id === pageId);
    if (page && page.sections) {
      return page.sections.map(section => {
        // Extract section data without content and items
        const { content, items, ...sectionData } = section;
        return sectionData;
      });
    }
    return [];
  } catch (error) {
    throw new Error(`Failed to fetch page sections: ${error.message}`);
  }
};

// Fetch section content
export const fetchSectionContent = async (sectionId) => {
  try {
    const data = readSiteData();
    // Traverse through pages and sections to find matching section
    for (const slug in data.pages) {
      const page = data.pages[slug];
      if (page.sections) {
        const section = page.sections.find(s => s.id === sectionId);
        if (section && section.content) {
          return section.content;
        }
      }
    }
    return {};
  } catch (error) {
    throw new Error(`Failed to fetch section content: ${error.message}`);
  }
};

// Fetch section items
export const fetchSectionItems = async (sectionId) => {
  try {
    const data = readSiteData();
    // Traverse through pages and sections to find matching section
    for (const slug in data.pages) {
      const page = data.pages[slug];
      if (page.sections) {
        const section = page.sections.find(s => s.id === sectionId);
        if (section && section.items) {
          return section.items;
        }
      }
    }
    return [];
  } catch (error) {
    throw new Error(`Failed to fetch section items: ${error.message}`);
  }
};

// Fetch complete site data (all in one function)
export const fetchCompleteSiteData = async (subdomain) => {
  try {
    const data = readSiteData();
    
    // For localhost, always use d2d data without checking subdomain
    if (subdomain === "localhost:3000" || subdomain === "localhost:3001") {
      // Just check if the site is active
      if (!data.site.is_active) {
        throw new Error("Site is not active");
      }
    } else if (data.site.subdomain !== subdomain || !data.site.is_active) {
      // For other environments, check both subdomain and active status
      throw new Error("Site not found");
    }
    return data;
  } catch (error) {
    console.error("Error fetching complete site data:", error);
    throw error;
  }
};

/**
 * Fetch page data for a specific subdomain and slug
 * @param {string} subdomain - The site subdomain
 * @param {string} slug - The page slug
 * @returns {Object} Page data with sections
 */
export async function fetchPageData(subdomain, slug = "home") {
  try {
    const data = readSiteData();
    
    // For localhost, always use d2d data without checking subdomain
    if (subdomain === "localhost:3000" || subdomain === "localhost:3001") {
      // Just check if the site is active
      if (!data.site.is_active) {
        throw new Error("Site is not active");
      }
    } else if (data.site.subdomain !== subdomain || !data.site.is_active) {
      // For other environments, check both subdomain and active status
      throw new Error("Site not found");
    }

    // Verify page exists
    const page = data.pages[slug];
    if (!page) {
      throw new Error("Page not found");
    }

    // Extract the data we need
    const { sections, ...pageData } = page;
    
    return {
      site: data.site,
      siteMeta: data.siteMeta,
      config: data.config,
      theme: data.theme,
      page: pageData,
      sections: sections || [],
    };
  } catch (error) {
    console.error("Error fetching page data:", error);
    throw error;
  }
}

/**
 * Fetch site configuration and themes
 * @param {string} subdomain - The site subdomain
 * @returns {Object} Site configuration and themes
 */
export async function fetchSiteConfigAndThemes(subdomain) {
  try {
    const data = readSiteData();
    
    // For localhost, always use d2d data without checking subdomain
    if (subdomain === "localhost:3000" || subdomain === "localhost:3001") {
      // Just check if the site is active
      if (!data.site.is_active) {
        throw new Error("Site is not active");
      }
    } else if (data.site.subdomain !== subdomain || !data.site.is_active) {
      // For other environments, check both subdomain and active status
      throw new Error("Site not found");
    }

    // Create a themes array with just the single theme
    const themes = [data.theme].map(inner => ({
      ...inner,
      primary: inner.primary_color,
    }));

    return {
      site: data.site,
      themes,
      config: data.config,
    };
  } catch (error) {
    console.error("Error fetching site config:", error);
    throw error;
  }
}
