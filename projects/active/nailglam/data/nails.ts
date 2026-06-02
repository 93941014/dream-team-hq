export interface NailDesign {
  id: string;
  title: string;
  style: StyleCategory;
  color: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  image: string;
  description: string;
  likes: number;
}

export type StyleCategory =
  | 'french-elegance'
  | 'japanese-sweet'
  | 'western-glam'
  | 'artistic-creative'
  | 'natural-fresh'
  | 'holiday-special'
  | 'trending-now';

export const styleLabels: Record<StyleCategory, string> = {
  'french-elegance': '法式优雅',
  'japanese-sweet': '日系甜美',
  'western-glam': '欧美浮夸',
  'artistic-creative': '艺术创意',
  'natural-fresh': '自然清新',
  'holiday-special': '节日限定',
  'trending-now': '当季爆款',
};

export const styleColors: Record<
  StyleCategory,
  { bg: string; text: string }
> = {
  'french-elegance': { bg: 'bg-pink-50', text: 'text-pink-700' },
  'japanese-sweet': { bg: 'bg-purple-50', text: 'text-purple-700' },
  'western-glam': { bg: 'bg-amber-50', text: 'text-amber-700' },
  'artistic-creative': { bg: 'bg-blue-50', text: 'text-blue-700' },
  'natural-fresh': { bg: 'bg-green-50', text: 'text-green-700' },
  'holiday-special': { bg: 'bg-red-50', text: 'text-red-700' },
  'trending-now': { bg: 'bg-rose-50', text: 'text-rose-700' },
};

export const difficultyLabels: Record<NailDesign['difficulty'], string> = {
  beginner: '⭐',
  intermediate: '⭐⭐',
  advanced: '⭐⭐⭐',
};

export const nailsData: NailDesign[] = [
  // 法式优雅 (4 items)
  {
    id: '1',
    title: '经典玫瑰金法式',
    style: 'french-elegance',
    color: 'Nude',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail1/400/500',
    description: '温柔的裸粉色底搭配玫瑰金法式边，优雅得恰到好处。',
    likes: 1247,
  },
  {
    id: '2',
    title: '双层法式线条',
    style: 'french-elegance',
    color: 'White',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail2/400/600',
    description: '双线条法式勾勒，极简主义与现代优雅的完美结合。',
    likes: 938,
  },
  {
    id: '3',
    title: '珍珠白渐变',
    style: 'french-elegance',
    color: 'Pearl',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail3/400/550',
    description: '从透白到裸粉的温柔渐变，指尖绽放低调奢华。',
    likes: 1563,
  },
  {
    id: '4',
    title: '蕾丝花纹法式',
    style: 'french-elegance',
    color: 'Ivory',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail4/400/480',
    description: '精致蕾丝纹理叠加经典法式，婚礼级别的美甲艺术。',
    likes: 2105,
  },

  // 日系甜美 (4 items)
  {
    id: '5',
    title: '樱花粉渐变',
    style: 'japanese-sweet',
    color: 'Sakura',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail5/400/520',
    description: '淡淡樱花粉渐变，像春天的风轻轻拂过指尖。',
    likes: 1872,
  },
  {
    id: '6',
    title: '草莓牛奶晕染',
    style: 'japanese-sweet',
    color: 'Strawberry',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail6/400/580',
    description: '草莓牛奶配色加晕染效果，甜到让人想咬一口。',
    likes: 1432,
  },
  {
    id: '7',
    title: '彩虹小马梦幻款',
    style: 'japanese-sweet',
    color: 'Pastel Rainbow',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail7/400/620',
    description: '马卡龙配色搭配立体蝴蝶结，梦幻指数爆表。',
    likes: 2678,
  },
  {
    id: '8',
    title: '猫咪肉垫可爱款',
    style: 'japanese-sweet',
    color: 'Pink',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail8/400/500',
    description: 'mini猫爪印和粉色肉垫图案，萌趣又温柔。',
    likes: 3190,
  },

  // 欧美浮夸 (3 items)
  {
    id: '9',
    title: '碎钻银河',
    style: 'western-glam',
    color: 'Silver',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail9/400/560',
    description: '满钻铺陈如同银河洒在指尖，聚会C位非你莫属。',
    likes: 4256,
  },
  {
    id: '10',
    title: '镜面金属芭比粉',
    style: 'western-glam',
    color: 'Hot Pink',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail10/400/540',
    description: '高光镜面芭比粉，气场全开的就是你。',
    likes: 2891,
  },
  {
    id: '11',
    title: '3D立体雕花',
    style: 'western-glam',
    color: 'Gold',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail11/400/600',
    description: '立体花卉与金箔点缀，高级定制级别的视觉冲击。',
    likes: 3672,
  },

  // 艺术创意 (4 items)
  {
    id: '12',
    title: '水彩泼墨抽象',
    style: 'artistic-creative',
    color: 'Multicolor',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail12/400/510',
    description: '水彩泼墨效果，每根手指都是一幅微型抽象画。',
    likes: 1543,
  },
  {
    id: '13',
    title: '极简线条几何',
    style: 'artistic-creative',
    color: 'Black & White',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail13/400/490',
    description: '建筑感线条勾勒，冷峻中带着高级艺术气息。',
    likes: 1120,
  },
  {
    id: '14',
    title: '梵高星空复刻',
    style: 'artistic-creative',
    color: 'Blue',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail14/400/570',
    description: '名画入甲，梵高的星空在指尖旋转流动。',
    likes: 2890,
  },
  {
    id: '15',
    title: '马赛克彩绘玻璃',
    style: 'artistic-creative',
    color: 'Stained Glass',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail15/400/530',
    description: '哥特式彩绘玻璃窗灵感，光影交错的美。',
    likes: 1987,
  },

  // 自然清新 (3 items)
  {
    id: '16',
    title: '淡雅花草写生',
    style: 'natural-fresh',
    color: 'Sage Green',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail16/400/480',
    description: '鼠尾草绿搭配手绘花草，呼吸感满满的田园风。',
    likes: 1345,
  },
  {
    id: '17',
    title: '裸感透蜜桃',
    style: 'natural-fresh',
    color: 'Peach',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail17/400/500',
    description: '几乎看不出涂了甲油，天然好气色从指尖透出来。',
    likes: 2310,
  },
  {
    id: '18',
    title: '莫兰迪雾感',
    style: 'natural-fresh',
    color: 'Dusty Rose',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail18/400/520',
    description: '莫兰迪调色盘，低调柔和的灰粉调永不出错。',
    likes: 1678,
  },

  // 节日限定 (3 items)
  {
    id: '19',
    title: '圣诞红丝绒',
    style: 'holiday-special',
    color: 'Crimson',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail19/400/550',
    description: '浓郁深红搭配金色雪花，圣诞树下最闪耀的手。',
    likes: 3456,
  },
  {
    id: '20',
    title: '万圣暗黑哥特',
    style: 'holiday-special',
    color: 'Black',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail20/400/510',
    description: '暗黑浪漫，蜘蛛网与血色渐变让你成为派对的暗夜女王。',
    likes: 2789,
  },
  {
    id: '21',
    title: '新春锦鲤款',
    style: 'holiday-special',
    color: 'Red & Gold',
    difficulty: 'advanced',
    image: 'https://picsum.photos/seed/nail21/400/590',
    description: '中国风锦鲤与祥云纹样，指尖承载满满好运。',
    likes: 4521,
  },

  // 当季爆款 (3 items)
  {
    id: '22',
    title: '冰透蓝渐变',
    style: 'trending-now',
    color: 'Ice Blue',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail22/400/500',
    description: '小红书爆款的冰透蓝，手白三个色号不是梦。',
    likes: 5678,
  },
  {
    id: '23',
    title: '猫眼石磁吸款',
    style: 'trending-now',
    color: 'Cat Eye Green',
    difficulty: 'intermediate',
    image: 'https://picsum.photos/seed/nail23/400/540',
    description: '磁吸猫眼效果，光影随着手部动作变幻，回头率100%。',
    likes: 4230,
  },
  {
    id: '24',
    title: '果冻透透甲',
    style: 'trending-now',
    color: 'Jelly Coral',
    difficulty: 'beginner',
    image: 'https://picsum.photos/seed/nail24/400/510',
    description: '水光感十足的果冻甲，如果冻般Q弹透亮，夏日必备。',
    likes: 3890,
  },
];

export const getNailsByStyle = (style: StyleCategory): NailDesign[] =>
  nailsData.filter((n) => n.style === style);

export const getNailsByColor = (color: string): NailDesign[] =>
  nailsData.filter((n) => n.color.toLowerCase().includes(color.toLowerCase()));

export const getNailsByDifficulty = (
  difficulty: NailDesign['difficulty']
): NailDesign[] => nailsData.filter((n) => n.difficulty === difficulty);
