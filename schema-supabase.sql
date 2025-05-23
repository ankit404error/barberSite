-- ====================================
-- SCHEMA: Modular Website Builder (No JSONB)
-- ====================================

-- 1. Sites
CREATE TABLE IF NOT EXISTS sites (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    subdomain TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_by UUID REFERENCES employees(id) ON DELETE SET NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. Site Meta
CREATE TABLE IF NOT EXISTS site_meta (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    title TEXT,
    description TEXT,
    og_image TEXT,
    favicon TEXT,
    keywords TEXT,
    twitter_handle TEXT
);

-- 3. Site Config
CREATE TABLE IF NOT EXISTS site_config (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    font_body TEXT,
    font_heading TEXT,
    font_body_weights TEXT[],
    font_heading_weights TEXT[],
    max_width TEXT,
    radius_lg TEXT,
    radius_md TEXT,
    radius_sm TEXT,
    radius_full TEXT
);

-- 4. Themes
CREATE TABLE IF NOT EXISTS themes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    primary_color TEXT,
    primary_hover TEXT,
    secondary TEXT,
    secondary_hover TEXT,
    accent TEXT,
    accent_hover TEXT,
    background TEXT,
    foreground TEXT,
    muted TEXT,
    border TEXT,
    card TEXT,
    card_foreground TEXT,
    error TEXT,
    success TEXT,
    footer TEXT,
    footer_text TEXT,
    overlay_dark TEXT,
    overlay_light TEXT,
    overlay_medium TEXT
);

-- 5. Pages
CREATE TABLE IF NOT EXISTS pages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    site_id UUID REFERENCES sites(id) ON DELETE CASCADE,
    slug TEXT NOT NULL,
    title TEXT
);

-- 6. Sections
CREATE TABLE IF NOT EXISTS sections (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    page_id UUID REFERENCES pages(id) ON DELETE CASCADE,
    type TEXT NOT NULL,
    variant TEXT NOT NULL,
    position INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE
);

-- 7. Section Content (1-to-1)
CREATE TABLE IF NOT EXISTS section_content (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
    title TEXT,
    subtitle TEXT,
    description TEXT,
    image_url TEXT,
    background_url TEXT,
    cta_text TEXT,
    cta_link TEXT
);

-- 8. Section Items (1-to-many)
CREATE TABLE IF NOT EXISTS section_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    section_id UUID REFERENCES sections(id) ON DELETE CASCADE,
    title TEXT,
    subtitle TEXT,
    description TEXT,
    icon TEXT,
    image_url TEXT,
    rating INTEGER,
    price TEXT,
    duration TEXT,
    tag TEXT,
    position INTEGER
);
