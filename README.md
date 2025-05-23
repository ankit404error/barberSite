# Reference Document: Lead Dashboard & Customer Website with Supabase

## Application Overview

This application is a multi-tenant website builder that uses Supabase as its backend. It allows different businesses to have their own customizable websites under different subdomains. Each site can have multiple pages, and each page can have multiple sections of different types (hero, about, services, etc.) with different variants.

## Key Files and Their Functions

### 1. `src/lib/api/siteservice.js`

This file contains all the Supabase API calls for fetching site data:

- **Purpose**: Handles all database interactions related to site content.
- **Key Functions**:
  - `fetchSiteBySubdomain`: Gets site information based on subdomain
  - `fetchSiteMeta`: Gets metadata for a site (title, description, etc.)
  - `fetchSiteConfig`: Gets configuration settings for a site
  - `fetchSiteTheme`: Gets theme information for a site
  - `fetchSitePages`: Gets all pages for a site
  - `fetchPageBySlug`: Gets a specific page by its slug
  - `fetchPageSections`: Gets all sections for a page
  - `fetchSectionContent`: Gets content for a specific section
  - `fetchSectionItems`: Gets items for a section (e.g., service items, FAQ items)
  - `fetchCompleteSiteData`: Fetches all site data in one comprehensive call
  - `fetchPageData`: Fetches data for a specific page including all its sections
  - `fetchSiteConfigAndThemes`: Fetches site configuration and available themes

### 2. `src/app/page.js`

This is the main page component that handles subdomain routing and renders the appropriate content:

- **Purpose**: Entry point for the application that determines what site/page to display based on the subdomain.
- **Key Features**:
  - Uses Next.js's dynamic routing and middleware to handle subdomains
  - Fetches site data based on subdomain and page slug
  - Loads appropriate components dynamically based on section types
  - Implements fallback logic with mock data for development or error scenarios
  - Handles metadata generation for SEO
  - Uses server-side rendering for initial page load
  - Passes data to client-side components for rendering

### 3. `src/components/PageContent.jsx`

This client-side component renders the actual page content:

- **Purpose**: Renders the sections of a page with the appropriate theme.
- **Key Features**:
  - Maps section types and variants to the appropriate components
  - Applies theming from the app context
  - Dynamically loads section components

### 4. `src/lib/supabaseClient.js`

Creates and exports the Supabase client:

- **Purpose**: Provides a central Supabase client instance for database operations.
- **Features**: Initializes Supabase with environment variables for URL and API key.

### 5. `src/app/layout.js`

The root layout component that wraps all pages:

- **Purpose**: Provides global layout, themes, and context providers.
- **Key Features**:
  - Fetches site configuration and themes based on subdomain
  - Sets up the AppProvider and ThemeProvider contexts
  - Handles error fallbacks for the layout

### 6. `src/contexts/AppContext.jsx`

Manages application state across components:

- **Purpose**: Provides global state management for site configuration and themes.
- **Key Features**:
  - Stores and provides access to the current site configuration
  - Manages theme selection and persistence
  - Allows components to access and update theme settings

## Directory Structure

- **src/app**: Next.js app directory with the main page and layout components
- **src/components**: React components including sections and UI elements
  - **src/components/sections**: Different section types (Hero, About, Services, etc.)
- **src/contexts**: React context providers for state management
- **src/lib**: Utility functions and API services
  - **src/lib/api**: Services for data fetching and API calls
  - **src/lib/supabase**: Supabase related utilities

## Application Flow

1. A user visits a subdomain (e.g., `client1.example.com`)
2. The application extracts the subdomain from the request
3. `layout.js` fetches the site configuration and themes
4. `page.js` fetches the specific page data based on the subdomain and slug
5. The appropriate section components are loaded dynamically based on the page data
6. `PageContent.jsx` renders the sections with the selected theme
7. Users can interact with the site and potentially toggle between available themes

## Database Structure

The application uses a Supabase database with the following tables:
- **sites**: Stores information about each site (name, subdomain, active status)
- **site_meta**: Stores metadata for each site (title, description, SEO information)
- **site_config**: Stores configuration settings for each site
- **themes**: Stores theme information for sites
- **pages**: Stores page information for each site
- **sections**: Stores section information for each page
- **section_content**: Stores content for each section
- **section_items**: Stores items for sections that have multiple items

## Customization Capabilities

The application allows for extensive customization:
- Multiple themes per site
- Various section types with different variants
- Custom content and items for each section
- Responsive designs that adapt to different screen sizes

This architecture enables a flexible, multi-tenant website builder that can serve different businesses under different subdomains, all from a single Next.js application with Supabase as the backend.
# barberSite
