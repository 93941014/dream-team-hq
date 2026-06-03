'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  HiHeart,
  HiMail,
  HiLocationMarker,
  HiSparkles,
  HiEye,
  HiLightBulb,
  HiUserGroup,
} from 'react-icons/hi';
import { FaInstagram, FaPinterest, FaTiktok, FaYoutube, FaWeixin } from 'react-icons/fa';
import { SiXiaohongshu } from 'react-icons/si';

const values = [
  {
    icon: HiSparkles,
    title: '激发灵感',
    desc: '我们相信每个人都可以通过美甲表达自我，指尖的艺术是每天都能携带的美丽。',
  },
  {
    icon: HiUserGroup,
    title: '社群力量',
    desc: '我们连接全球美甲爱好者，让大家在分享和交流中共同成长。',
  },
  {
    icon: HiLightBulb,
    title: '创意无限',
    desc: '从经典到前卫，我们鼓励每一种风格被看见、被欣赏、被尝试。',
  },
  {
    icon: HiEye,
    title: '审美的力量',
    desc: '我们坚信好品味值得被传播，每一幅美甲作品都是一件微型艺术品。',
  },
];

const designers = [
  {
    name: '蝶之舞美甲馆',
    style: '日系甜美 & 法式优雅',
    desc: '十年美甲经验，擅长精致手绘和渐变晕染，让每个女孩都拥有公主梦般的指尖。',
    emoji: '🌸',
  },
  {
    name: 'Diamond Nails Studio',
    style: '欧美浮夸 & 奢华定制',
    desc: '纽约时装周合作美甲师，将钻石镶嵌艺术融入美甲，打造红毯级别的极致闪耀。',
    emoji: '💎',
  },
  {
    name: '几木艺术美甲',
    style: '艺术创意 & 水墨风',
    desc: '前画廊艺术家转型美甲，将中国水墨画与当代美甲艺术完美融合。',
    emoji: '🎨',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-warm">
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden bg-white rounded-3xl mx-4 sm:mx-6 lg:mx-8 mb-16">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 text-xs font-medium text-primary-600 mb-6">
              <HiSparkles className="text-accent-400" size={14} />
              Our Story
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800"
          >
            关于 <span className="text-primary-500">NailGlam</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            NailGlam 诞生于一群热爱美甲的女孩聚在一起分享作品的午后时光。我们发现，
            美甲不仅是时尚的点缀，更是每一天可以随身携带的微型艺术品、心情的表达和自信的来源。
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            从那一刻起，我们立志打造一个温暖、专业、充满灵感的美甲平台——让每一位
            指尖艺术家都能找到属于自己的风格，让每一次美甲体验都成为一次愉悦的自我表达。
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ─── 品牌理念 ─── */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              我们的<span className="text-primary-500">理念</span>
            </h2>
            <p className="mt-3 text-gray-500">
              What we believe in
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                custom={idx + 1}
                className="bg-white rounded-2xl p-8 border border-primary-100/50 hover:shadow-lg transition-shadow duration-300 text-center"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary-50 flex items-center justify-center mb-5">
                  <value.icon className="text-primary-500" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── 风格设计师卡片 ─── */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              合作<span className="text-primary-500">设计师</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Meet our featured nail artists
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {designers.map((d, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                custom={idx + 1}
                className="bg-white rounded-2xl p-8 border border-primary-100/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-5xl mb-5">{d.emoji}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">
                  {d.name}
                </h3>
                <span className="inline-block px-3 py-1 rounded-full bg-primary-50 text-primary-600 text-xs font-medium mb-4">
                  {d.style}
                </span>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── 联系方式 & 社交媒体 ─── */}
        <section className="mb-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              联系<span className="text-primary-500">我们</span>
            </h2>
            <p className="mt-3 text-gray-500">
              Get in touch & follow us
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              custom={1}
              className="bg-white rounded-2xl p-8 border border-primary-100/50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                联系方式
              </h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <HiMail className="text-primary-500" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Email</p>
                    <a
                      href="mailto:hello@nailglam.com"
                      className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      hello@nailglam.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <HiLocationMarker className="text-primary-500" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">Location</p>
                    <p className="text-sm text-gray-500">
                      New York · Shanghai · Tokyo · Global
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <HiHeart className="text-primary-500" size={22} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-700">
                      Collaboration
                    </p>
                    <a
                      href="mailto:collab@nailglam.com"
                      className="text-sm text-primary-500 hover:text-primary-600 transition-colors"
                    >
                      collab@nailglam.com
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              custom={2}
              className="bg-white rounded-2xl p-8 border border-primary-100/50"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-6">
                关注我们
              </h3>
              <p className="text-sm text-gray-500 mb-8 leading-relaxed">
                在各大平台找到 NailGlam，第一时间获取最新美甲灵感、教程和社区动态 ✨
              </p>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { icon: FaInstagram, label: 'Instagram', color: 'hover:bg-pink-50 hover:text-pink-500', href: '#' },
                  { icon: FaPinterest, label: 'Pinterest', color: 'hover:bg-red-50 hover:text-red-500', href: '#' },
                  { icon: FaTiktok, label: 'TikTok', color: 'hover:bg-gray-50 hover:text-gray-800', href: '#' },
                  { icon: SiXiaohongshu, label: '小红书', color: 'hover:bg-rose-50 hover:text-rose-500', href: '#' },
                  { icon: FaWeixin, label: '微信公众号', color: 'hover:bg-green-50 hover:text-green-500', href: '#' },
                  { icon: FaYoutube, label: 'YouTube', color: 'hover:bg-red-50 hover:text-red-600', href: '#' },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className={`flex flex-col items-center gap-2 p-4 rounded-xl bg-warm transition-all duration-300 ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="text-[10px] font-medium text-gray-500">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
