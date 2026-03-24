-- SQL Setup for DepEd Imus City Website

-- 1. Banners Table (Homepage Carousel)
CREATE TABLE banners (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  active BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 2. News Table
CREATE TABLE news (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url TEXT,
  category TEXT DEFAULT 'Announcements',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 3. Documents Table
CREATE TABLE documents (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  file_url TEXT NOT NULL,
  category TEXT NOT NULL,
  file_size TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- 4. Employee of the Month Table
CREATE TABLE employees (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name TEXT NOT NULL,
  month TEXT NOT NULL,
  year INTEGER NOT NULL,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- RLS (Row Level Security) - Basic Setup
-- Enable RLS on all tables
ALTER TABLE banners ENABLE ROW LEVEL SECURITY;
ALTER TABLE news ENABLE ROW LEVEL SECURITY;
ALTER TABLE documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE employees ENABLE ROW LEVEL SECURITY;

-- Allow public read access
CREATE POLICY "Public Read Banners" ON banners FOR SELECT USING (true);
CREATE POLICY "Public Read News" ON news FOR SELECT USING (true);
CREATE POLICY "Public Read Documents" ON documents FOR SELECT USING (true);
CREATE POLICY "Public Read Employees" ON employees FOR SELECT USING (true);

-- Admin Write Access (Needs Auth setup in Supabase)
-- (Example policy: only authenticated users can insert/update)
CREATE POLICY "Admin All Banners" ON banners FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All News" ON news FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Documents" ON documents FOR ALL USING (auth.role() = 'authenticated');
CREATE POLICY "Admin All Employees" ON employees FOR ALL USING (auth.role() = 'authenticated');
