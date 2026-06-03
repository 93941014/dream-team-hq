// ===== Banner Data =====
export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  ctaText: string;
}

export const banners: Banner[] = [
  {
    id: "b1",
    title: "Summer Vibes Collection",
    subtitle: "Bright colors for sunny days ☀️",
    image: "https://picsum.photos/seed/nailbanner1/800/400",
    ctaText: "Explore Now",
  },
  {
    id: "b2",
    title: "French Tip Masterclass",
    subtitle: "Master the elegant classic 💅",
    image: "https://picsum.photos/seed/nailbanner2/800/400",
    ctaText: "Start Learning",
  },
  {
    id: "b3",
    title: "Gel Polish Sale",
    subtitle: "Up to 50% off premium gels ✨",
    image: "https://picsum.photos/seed/nailbanner3/800/400",
    ctaText: "Shop Now",
  },
];

// ===== Style Categories =====
export interface StyleCategory {
  id: string;
  name: string;
  emoji: string;
}

export const styleCategories: StyleCategory[] = [
  { id: "french", name: "法式", emoji: "🥖" },
  { id: "japanese", name: "日系", emoji: "🍡" },
  { id: "western", name: "欧美", emoji: "💋" },
  { id: "artistic", name: "艺术", emoji: "🎨" },
  { id: "natural", name: "自然", emoji: "🌿" },
  { id: "festival", name: "节日", emoji: "🎉" },
  { id: "seasonal", name: "当季", emoji: "🌸" },
];

// ===== Nail Art Data =====
export interface NailDesign {
  id: string;
  title: string;
  image: string;
  style: string;
  styleEmoji: string;
  likes: number;
  difficulty: "beginner" | "intermediate" | "advanced";
  colors: string[];
}

export const nailDesigns: NailDesign[] = [
  {
    id: "1",
    title: "经典白色法式",
    image: "https://picsum.photos/seed/nail1/400/500",
    style: "法式",
    styleEmoji: "🥖",
    likes: 2341,
    difficulty: "beginner",
    colors: ["#FFFFFF", "#FFD1DC"],
  },
  {
    id: "2",
    title: "樱花渐变日系",
    image: "https://picsum.photos/seed/nail2/400/500",
    style: "日系",
    styleEmoji: "🍡",
    likes: 1856,
    difficulty: "intermediate",
    colors: ["#FFB7C5", "#FFE4E1"],
  },
  {
    id: "3",
    title: "金色几何欧美风",
    image: "https://picsum.photos/seed/nail3/400/500",
    style: "欧美",
    styleEmoji: "💋",
    likes: 3102,
    difficulty: "advanced",
    colors: ["#D4A574", "#2D2D2D"],
  },
  {
    id: "4",
    title: "梵高星空艺术甲",
    image: "https://picsum.photos/seed/nail4/400/500",
    style: "艺术",
    styleEmoji: "🎨",
    likes: 4521,
    difficulty: "advanced",
    colors: ["#1B3A5C", "#F5C26B"],
  },
  {
    id: "5",
    title: "裸色清新自然风",
    image: "https://picsum.photos/seed/nail5/400/500",
    style: "自然",
    styleEmoji: "🌿",
    likes: 1678,
    difficulty: "beginner",
    colors: ["#F5D5CB", "#FDF8F7"],
  },
  {
    id: "6",
    title: "圣诞雪花节日款",
    image: "https://picsum.photos/seed/nail6/400/500",
    style: "节日",
    styleEmoji: "🎉",
    likes: 2890,
    difficulty: "intermediate",
    colors: ["#C41E3A", "#FFFFFF"],
  },
  {
    id: "7",
    title: "春日樱花当季款",
    image: "https://picsum.photos/seed/nail7/400/500",
    style: "当季",
    styleEmoji: "🌸",
    likes: 2156,
    difficulty: "beginner",
    colors: ["#FFC0CB", "#FFF0F5"],
  },
  {
    id: "8",
    title: "银色闪粉法式",
    image: "https://picsum.photos/seed/nail8/400/500",
    style: "法式",
    styleEmoji: "🥖",
    likes: 1890,
    difficulty: "beginner",
    colors: ["#C0C0C0", "#FFD1DC"],
  },
  {
    id: "9",
    title: "浮世绘海浪日系",
    image: "https://picsum.photos/seed/nail9/400/500",
    style: "日系",
    styleEmoji: "🍡",
    likes: 3245,
    difficulty: "advanced",
    colors: ["#1B4F72", "#F5D5CB"],
  },
  {
    id: "10",
    title: "磨砂暗黑欧美风",
    image: "https://picsum.photos/seed/nail10/400/500",
    style: "欧美",
    styleEmoji: "💋",
    likes: 2789,
    difficulty: "intermediate",
    colors: ["#1A1A1A", "#8B0000"],
  },
  {
    id: "11",
    title: "水彩花卉艺术甲",
    image: "https://picsum.photos/seed/nail11/400/500",
    style: "艺术",
    styleEmoji: "🎨",
    likes: 5123,
    difficulty: "advanced",
    colors: ["#E8A0BF", "#7BC67E"],
  },
  {
    id: "12",
    title: "透明果冻自然款",
    image: "https://picsum.photos/seed/nail12/400/500",
    style: "自然",
    styleEmoji: "🌿",
    likes: 1432,
    difficulty: "beginner",
    colors: ["#FFE4E1", "#FFFFFF"],
  },
  {
    id: "13",
    title: "万圣节南瓜节日款",
    image: "https://picsum.photos/seed/nail13/400/500",
    style: "节日",
    styleEmoji: "🎉",
    likes: 3567,
    difficulty: "intermediate",
    colors: ["#FF6600", "#2D2D2D"],
  },
  {
    id: "14",
    title: "秋叶当季款",
    image: "https://picsum.photos/seed/nail14/400/500",
    style: "当季",
    styleEmoji: "🌸",
    likes: 1987,
    difficulty: "beginner",
    colors: ["#D4A574", "#8B4513"],
  },
  {
    id: "15",
    title: "彩色法式渐变",
    image: "https://picsum.photos/seed/nail15/400/500",
    style: "法式",
    styleEmoji: "🥖",
    likes: 2654,
    difficulty: "intermediate",
    colors: ["#FF69B4", "#00CED1"],
  },
  {
    id: "16",
    title: "和风金箔日系",
    image: "https://picsum.photos/seed/nail16/400/500",
    style: "日系",
    styleEmoji: "🍡",
    likes: 4321,
    difficulty: "intermediate",
    colors: ["#C41E3A", "#D4A574"],
  },
  {
    id: "17",
    title: "金属镜面欧美风",
    image: "https://picsum.photos/seed/nail17/400/500",
    style: "欧美",
    styleEmoji: "💋",
    likes: 2210,
    difficulty: "advanced",
    colors: ["#E8E8E8", "#D4AF37"],
  },
  {
    id: "18",
    title: "波普艺术甲",
    image: "https://picsum.photos/seed/nail18/400/500",
    style: "艺术",
    styleEmoji: "🎨",
    likes: 3890,
    difficulty: "advanced",
    colors: ["#FF007F", "#00FF00"],
  },
  {
    id: "19",
    title: "晨露自然款",
    image: "https://picsum.photos/seed/nail19/400/500",
    style: "自然",
    styleEmoji: "🌿",
    likes: 1098,
    difficulty: "beginner",
    colors: ["#F0F8FF", "#B0E0E6"],
  },
  {
    id: "20",
    title: "新年红金节日款",
    image: "https://picsum.photos/seed/nail20/400/500",
    style: "节日",
    styleEmoji: "🎉",
    likes: 5200,
    difficulty: "intermediate",
    colors: ["#C41E3A", "#D4A574"],
  },
];

// ===== Tutorial Data =====
export interface Tutorial {
  id: string;
  title: string;
  instructor: string;
  thumbnail: string;
  duration: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  isFree: boolean;
  price?: number;
  steps: string[];
  category: string;
}

export const tutorials: Tutorial[] = [
  {
    id: "t1",
    title: "完美法式美甲入门",
    instructor: "Nana老师",
    thumbnail: "https://picsum.photos/seed/tutorial1/400/300",
    duration: "15分钟",
    difficulty: "beginner",
    isFree: true,
    steps: ["指甲修型", "底胶涂抹", "法式边勾勒"],
    category: "法式",
  },
  {
    id: "t2",
    title: "日式樱花渐变技法",
    instructor: "Yuki老师",
    thumbnail: "https://picsum.photos/seed/tutorial2/400/300",
    duration: "25分钟",
    difficulty: "intermediate",
    isFree: false,
    price: 29.9,
    steps: ["底色打底", "渐变晕染", "樱花点缀"],
    category: "日系",
  },
  {
    id: "t3",
    title: "3D立体花雕艺术",
    instructor: "Luna老师",
    thumbnail: "https://picsum.photos/seed/tutorial3/400/300",
    duration: "45分钟",
    difficulty: "advanced",
    isFree: false,
    price: 49.9,
    steps: ["建模基础", "花瓣塑形", "上色定型"],
    category: "艺术",
  },
  {
    id: "t4",
    title: "日常通勤裸色美甲",
    instructor: "Mia老师",
    thumbnail: "https://picsum.photos/seed/tutorial4/400/300",
    duration: "12分钟",
    difficulty: "beginner",
    isFree: true,
    steps: ["修甲基础", "裸色选色", "封层技巧"],
    category: "自然",
  },
  {
    id: "t5",
    title: "节日闪粉亮片美甲",
    instructor: "Nana老师",
    thumbnail: "https://picsum.photos/seed/tutorial5/400/300",
    duration: "20分钟",
    difficulty: "intermediate",
    isFree: false,
    price: 19.9,
    steps: ["底色选择", "亮片布局", "封层加固"],
    category: "节日",
  },
  {
    id: "t6",
    title: "猫眼磁石高级技法",
    instructor: "Luna老师",
    thumbnail: "https://picsum.photos/seed/tutorial6/400/300",
    duration: "35分钟",
    difficulty: "advanced",
    isFree: false,
    price: 59.9,
    steps: ["磁石准备", "猫眼底胶", "吸磁定形"],
    category: "欧美",
  },
];

// ===== Shop Product Data =====
export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  category: string;
  platform: string;
  sales: number;
}

export const products: Product[] = [
  {
    id: "p1",
    name: "UV/LED甲油胶套装 48色",
    image: "https://picsum.photos/seed/product1/400/400",
    price: 128,
    originalPrice: 199,
    category: "甲油胶",
    platform: "淘宝",
    sales: 12580,
  },
  {
    id: "p2",
    name: "专业美甲光疗灯 150W",
    image: "https://picsum.photos/seed/product2/400/400",
    price: 89,
    category: "美甲灯",
    platform: "拼多多",
    sales: 8930,
  },
  {
    id: "p3",
    name: "3D立体水钻贴片 200颗",
    image: "https://picsum.photos/seed/product3/400/400",
    price: 19.9,
    originalPrice: 35,
    category: "贴纸",
    platform: "1688",
    sales: 25670,
  },
  {
    id: "p4",
    name: "施华洛世奇水晶钻 50颗",
    image: "https://picsum.photos/seed/product4/400/400",
    price: 58,
    category: "钻饰",
    platform: "淘宝",
    sales: 4520,
  },
  {
    id: "p5",
    name: "新手美甲工具套装 20件",
    image: "https://picsum.photos/seed/product5/400/400",
    price: 39.9,
    originalPrice: 68,
    category: "工具套装",
    platform: "拼多多",
    sales: 34560,
  },
  {
    id: "p6",
    name: "猫眼磁石甲油胶 12色",
    image: "https://picsum.photos/seed/product6/400/400",
    price: 68,
    category: "甲油胶",
    platform: "淘宝",
    sales: 7890,
  },
  {
    id: "p7",
    name: "便携迷你美甲灯 USB充电",
    image: "https://picsum.photos/seed/product7/400/400",
    price: 35,
    originalPrice: 55,
    category: "美甲灯",
    platform: "1688",
    sales: 12340,
  },
  {
    id: "p8",
    name: "日系风格贴纸 100张",
    image: "https://picsum.photos/seed/product8/400/400",
    price: 12.9,
    category: "贴纸",
    platform: "拼多多",
    sales: 45670,
  },
  {
    id: "p9",
    name: "珍珠圆钻混装 100粒",
    image: "https://picsum.photos/seed/product9/400/400",
    price: 25,
    category: "钻饰",
    platform: "淘宝",
    sales: 6780,
  },
  {
    id: "p10",
    name: "专业美甲除尘吸尘器",
    image: "https://picsum.photos/seed/product10/400/400",
    price: 158,
    originalPrice: 229,
    category: "工具套装",
    platform: "淘宝",
    sales: 3210,
  },
  {
    id: "p11",
    name: "温变变色甲油胶 6色",
    image: "https://picsum.photos/seed/product11/400/400",
    price: 45,
    category: "甲油胶",
    platform: "1688",
    sales: 9870,
  },
  {
    id: "p12",
    name: "甲片收纳展示盒 大号",
    image: "https://picsum.photos/seed/product12/400/400",
    price: 32,
    originalPrice: 48,
    category: "工具套装",
    platform: "拼多多",
    sales: 15670,
  },
];

// ===== Shop Categories =====
export interface ShopCategory {
  id: string;
  name: string;
  emoji: string;
}

export const shopCategories: ShopCategory[] = [
  { id: "gel", name: "甲油胶", emoji: "💅" },
  { id: "lamp", name: "美甲灯", emoji: "💡" },
  { id: "sticker", name: "贴纸", emoji: "🎀" },
  { id: "diamond", name: "钻饰", emoji: "💎" },
  { id: "toolkit", name: "工具套装", emoji: "🧰" },
];

// ===== Color Options for Filter =====
export const colorOptions = [
  { id: "red", name: "红色系", hex: "#C41E3A" },
  { id: "pink", name: "粉色系", hex: "#E8A0BF" },
  { id: "nude", name: "裸色系", hex: "#F5D5CB" },
  { id: "dark", name: "深色系", hex: "#2D2D2D" },
  { id: "blue", name: "蓝色系", hex: "#1B4F72" },
  { id: "green", name: "绿色系", hex: "#7BC67E" },
  { id: "gold", name: "金色系", hex: "#D4A574" },
];

export const difficultyOptions = [
  { id: "beginner", name: "入门", emoji: "⭐" },
  { id: "intermediate", name: "进阶", emoji: "⭐⭐" },
  { id: "advanced", name: "高级", emoji: "⭐⭐⭐" },
];

// ===== Helper to get nails by style =====
export function getNailsByStyle(style: string): NailDesign[] {
  return nailDesigns.filter((n) => n.style === style);
}

// ===== Helper to get products by category =====
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}
