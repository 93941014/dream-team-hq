-- NailGlam App 数据库 Schema
-- Supabase PostgreSQL

-- 1. 用户表 (Supabase Auth 自动创建 auth.users，这里扩展)
CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  username TEXT UNIQUE,
  display_name TEXT,
  avatar_url TEXT,
  bio TEXT DEFAULT '',
  membership_type TEXT DEFAULT 'free' CHECK (membership_type IN ('free', 'premium', 'vip')),
  membership_expires_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. 美甲设计库
CREATE TABLE public.nail_designs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  image_url TEXT NOT NULL,
  style TEXT NOT NULL,
  color TEXT[],
  difficulty TEXT DEFAULT 'beginner',
  tags TEXT[],
  tools_used UUID[] REFERENCES public.products(id),
  likes INTEGER DEFAULT 0,
  views INTEGER DEFAULT 0,
  is_premium BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. 教程
CREATE TABLE public.tutorials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  video_url TEXT,
  thumbnail_url TEXT,
  steps JSONB, -- [{step:1, title:"...", description:"...", image:""}]
  difficulty TEXT DEFAULT 'beginner',
  duration_minutes INTEGER,
  category TEXT,
  is_premium BOOLEAN DEFAULT false,
  price DECIMAL(10,2) DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. 商品（电商导购）
CREATE TABLE public.products (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  description TEXT,
  image_url TEXT,
  price DECIMAL(10,2),
  original_price DECIMAL(10,2),
  platform TEXT CHECK (platform IN ('taobao', 'amazon', 'jd', 'pinduoduo')),
  affiliate_url TEXT NOT NULL,
  category TEXT,
  subcategory TEXT,
  rating DECIMAL(2,1) DEFAULT 0,
  sales_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. 社区帖子
CREATE TABLE public.community_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) NOT NULL,
  image_url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  style TEXT,
  tags TEXT[],
  likes INTEGER DEFAULT 0,
  comments_count INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. 帖子评论
CREATE TABLE public.comments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
  user_id UUID REFERENCES public.profiles(id),
  content TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. 用户收藏
CREATE TABLE public.user_collections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  design_id UUID REFERENCES public.nail_designs(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, design_id)
);

-- 8. 用户购买记录
CREATE TABLE public.user_purchases (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  tutorial_id UUID REFERENCES public.tutorials(id),
  amount DECIMAL(10,2) NOT NULL,
  status TEXT DEFAULT 'completed',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. 用户点赞记录
CREATE TABLE public.user_likes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  post_id UUID REFERENCES public.community_posts(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(user_id, post_id)
);

-- 10. 搜索历史
CREATE TABLE public.search_history (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
  query TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============ 索引 ============
CREATE INDEX idx_nail_designs_style ON public.nail_designs(style);
CREATE INDEX idx_nail_designs_difficulty ON public.nail_designs(difficulty);
CREATE INDEX idx_nail_designs_likes ON public.nail_designs(likes DESC);
CREATE INDEX idx_products_category ON public.products(category);
CREATE INDEX idx_community_posts_user ON public.community_posts(user_id);
CREATE INDEX idx_community_posts_created ON public.community_posts(created_at DESC);
CREATE INDEX idx_user_collections_user ON public.user_collections(user_id);
CREATE INDEX idx_comments_post ON public.comments(post_id);

-- ============ RLS 安全策略 ============
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.nail_designs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tutorials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.comments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_purchases ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_likes ENABLE ROW LEVEL SECURITY;

-- 公开可读
CREATE POLICY "Public read nail_designs" ON public.nail_designs FOR SELECT USING (true);
CREATE POLICY "Public read tutorials" ON public.tutorials FOR SELECT USING (true);
CREATE POLICY "Public read products" ON public.products FOR SELECT USING (true);
CREATE POLICY "Public read community_posts" ON public.community_posts FOR SELECT USING (true);

-- 用户可读写自己的数据
CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT USING (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE USING (auth.uid() = id);
CREATE POLICY "Users manage own collections" ON public.user_collections FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own likes" ON public.user_likes FOR ALL USING (auth.uid() = user_id);
CREATE POLICY "Users manage own purchases" ON public.user_purchases FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "Users create posts" ON public.community_posts FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "Users create comments" ON public.comments FOR INSERT WITH CHECK (auth.uid() = user_id);

-- ============ 种子数据 ============
-- 插入示例美甲设计
INSERT INTO public.nail_designs (title, description, image_url, style, color, difficulty, likes) VALUES
('经典法式白边', '永恒优雅的法式白边美甲，适合任何场合', 'https://picsum.photos/seed/nail1/400/500', 'french-elegance', ARRAY['White', 'Nude'], 'beginner', 234),
('樱花渐变', '日系甜美樱花粉渐变，少女感满分', 'https://picsum.photos/seed/nail2/400/500', 'japanese-sweet', ARRAY['Pink', 'White'], 'intermediate', 567),
('水晶钻饰', '奢华水晶钻饰美甲，闪到耀眼', 'https://picsum.photos/seed/nail3/400/500', 'western-glam', ARRAY['Silver', 'Clear'], 'advanced', 892),
('大理石纹', '高级大理石纹理，现代艺术感', 'https://picsum.photos/seed/nail4/400/500', 'artistic-creative', ARRAY['White', 'Gray'], 'intermediate', 445),
('裸色极简', '清新裸色，日常百搭', 'https://picsum.photos/seed/nail5/400/500', 'natural-fresh', ARRAY['Nude'], 'beginner', 321),
('圣诞雪花', '节日限定雪花美甲，冬日氛围', 'https://picsum.photos/seed/nail6/400/500', 'holiday-special', ARRAY['White', 'Red'], 'intermediate', 678),
('猫眼磁石', '当季爆款猫眼磁石美甲', 'https://picsum.photos/seed/nail7/400/500', 'trending-now', ARRAY['Green', 'Gold'], 'advanced', 1023);

-- 插入种子商品
INSERT INTO public.products (name, description, image_url, price, platform, affiliate_url, category) VALUES
('美甲光疗灯 48W', '专业级LED美甲灯，快速固化', 'https://picsum.photos/seed/prod1/400/400', 39.90, 'taobao', 'https://s.click.taobao.com/xxx', 'tools'),
('甲油胶套装 12色', '12色流行甲油胶套装，环保无毒', 'https://picsum.photos/seed/prod2/400/400', 59.90, 'taobao', 'https://s.click.taobao.com/xxx', 'polish'),
('美甲贴纸 100片', '100种图案美甲贴纸，DIY必备', 'https://picsum.photos/seed/prod3/400/400', 9.90, 'pinduoduo', 'https://s.click.taobao.com/xxx', 'sticker'),
('施华洛世奇水钻', '高亮水晶钻，专业美甲用', 'https://picsum.photos/seed/prod4/400/400', 19.90, 'taobao', 'https://s.click.taobao.com/xxx', 'diamond'),
('美甲工具套装', '全套基础美甲工具12件套', 'https://picsum.photos/seed/prod5/400/400', 29.90, 'jd', 'https://s.click.taobao.com/xxx', 'tools');

-- ============ 触发器：更新 updated_at ============
CREATE OR REPLACE FUNCTION update_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.profiles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
CREATE TRIGGER set_updated_at BEFORE UPDATE ON public.nail_designs
  FOR EACH ROW EXECUTE FUNCTION update_updated_at();
