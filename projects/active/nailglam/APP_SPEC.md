# NailGlam App — 产品架构设计 v2.0

> 目标：一个能赚钱的女性美甲灵感 App

## 🎯 商业模型

### 变现路径
| 方式 | 说明 | 优先级 |
|------|------|:--:|
| 🛍️ **电商导购** | 美甲工具/甲油胶商品链接（淘宝客/亚马逊联盟） | 🔴 核心 |
| 👩‍🏫 **付费课程** | 进阶DIY教程（9.9元/套） | 🟡 中期 |
| 💎 **会员订阅** | 去广告 + 独家设计 + AI推荐（19.9元/月） | 🟢 远期 |
| 🎨 **AI试色** | 上传手部照片，AI模拟不同美甲效果（3元/次） | 🟡 中期 |
| 📍 **附近美甲店** | 本地美甲店展示 + 预约抽佣 | 🟡 中期 |

### 第一阶段MVP：电商导购为核心
每张美甲灵感图下方关联「同款工具」，点击跳转淘宝/亚马逊购买。
类似小红书种草→电商成交的闭环。

## 📱 页面结构

```
📱 NailGlam App
├── 🏠 首页（发现）
│   ├── 顶部轮播 Banner（当季热门/活动）
│   ├── 个性化推荐瀑布流
│   ├── 风格分类快捷入口
│   └── 今日灵感卡片
│
├── 🔍 探索
│   ├── 搜索框（按风格/颜色/难度/季节）
│   ├── 风格标签横向滚动
│   ├── 颜色筛选（色盘）
│   ├── 瀑布流结果
│   └── "试色"按钮（AI功能入口）
│
├── 📹 教程
│   ├── 免费教程（引流）
│   ├── 付费课程（变现）
│   ├── 步骤播放器
│   └── 关联工具购买
│
├── 🛒 商城（工具推荐）
│   ├── 按品类分类（甲油胶/灯/贴纸/钻饰/工具套装）
│   ├── 商品卡片（价格/评分/购买链接）
│   ├── 套装推荐（新手套装/进阶套装）
│   └── 我的收藏
│
├── 👤 我的
│   ├── 登录/注册
│   ├── 我的收藏
│   ├── 浏览历史
│   ├── 已购课程
│   ├── 会员中心
│   └── 设置
│
└── 📤 发布（底部中间突出按钮）
    ├── 拍照/选图
    ├── AI自动识别风格
    ├── 添加描述/标签
    └── 发布到社区
```

## 🏗️ 技术架构

### 前端：Expo (React Native)
- 一套代码，iOS + Android
- Expo Router（文件路由，跟 Next.js 类似）
- NativeWind（Tailwind CSS for RN）
- React Native Reanimated（动画）
- Expo Camera（拍照）

### 后端：Supabase（免费额度够用）
- 用户认证（邮箱/手机/Google/Apple 登录）
- PostgreSQL 数据库
- 文件存储（用户上传的美甲照片）
- 实时订阅
- Edge Functions（API）

### 第三方：
- 淘宝客/亚马逊联盟 API（电商导购）
- OpenAI API（AI试色/AI风格识别）
- 支付宝/微信支付 SDK

## 📊 数据库设计（核心表）

```
users — 用户表
  ├── id, email, name, avatar,会员类型, 注册时间

nail_designs — 美甲设计库
  ├── id, title, image_url, style, color, difficulty
  ├── tools_used[] (关联商品), likes, views

tutorials — 教程
  ├── id, title, description, video_url, steps[]
  ├── is_premium (免费/付费), price, category

products — 商品
  ├── id, name, image, price, platform (淘宝/亚马逊)
  ├── affiliate_url, category, rating, sales

user_collections — 用户收藏
user_purchases — 购买记录
community_posts — 社区帖子
```

## 🎨 设计系统（复用 Web 端）
- 色彩：玫瑰粉 #E8A0BF / 金色 #D4A574 / 暖白 #FDF8F7
- 深色模式支持
- 底部 Tab Bar 设计

## 🚀 开发路线图

### Phase 1：MVP（3-5天）
- Expo 项目骨架 + 底部Tab导航
- 首页（轮播+瀑布流+风格入口）
- 探索页（搜索+筛选+瀑布流）
- 教程页（免费教程卡片）
- 商城页（商品列表+详情）
- 我的页面（基础功能）
- Supabase 集成（数据库+认证）

### Phase 2：变现（2-3天）
- 淘宝客链接集成
- 付费课程页面
- 支付宝/微信支付

### Phase 3：社区+AI（3-5天）
- 用户发布帖子
- AI风格识别
- AI试色功能
- 社区互动（点赞/评论）

### Phase 4：上线（1-2天）
- App Store 审核准备
- Google Play 上架
- 隐私政策/用户协议
