'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  HiArrowRight,
  HiSparkles,
  HiHeart,
  HiAcademicCap,
} from 'react-icons/hi';
import NailCard from '@/components/NailCard';
import {
  nailsData,
  type StyleCategory,
  styleLabels,
} from '@/data/nails';

const styleCategories: { key: StyleCategory; emoji: string; desc: string }[] = [
  {
    key: 'french-elegance',
    emoji: '🥂',
    desc: 'Timeless sophistication',
  },
  {
    key: 'japanese-sweet',
    emoji: '🌸',
    desc: 'Kawaii & dreamy',
  },
  {
    key: 'western-glam',
    emoji: '💎',
    desc: 'Bold & luxurious',
  },
  {
    key: 'artistic-creative',
    emoji: '🎨',
    desc: 'Express your art',
  },
  {
    key: 'natural-fresh',
    emoji: '🌿',
    desc: 'Clean & elegant',
  },
  {
    key: 'holiday-special',
    emoji: '🎄',
    desc: 'Seasonal magic',
  },
  {
    key: 'trending-now',
    emoji: '🔥',
    desc: 'What\'s hot now',
  },
];

// Fade-in animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: 'easeOut',
    },
  }),
};

export default function HomePage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Pick 12 "hot" designs for the masonry preview
  const trendingDesigns = nailsData
    .sort((a, b) => b.likes - a.likes)
    .slice(0, 12);

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-primary-400 text-lg">Loading...</div>
      </div>
    );
  }

  return (
    <div>
      {/* ──────────────── Hero Section ──────────────── */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden animate-gradient">
        {/* Decorative blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blush/40 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 backdrop-blur-sm text-xs font-medium text-primary-600 mb-8 border border-primary-100">
              <HiSparkles className="text-accent-400" size={14} />
              Your Daily Dose of Nail Art
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-800 leading-tight text-balance"
          >
            Discover Your Next{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent">
              Nail Inspiration
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            Explore thousands of stunning nail designs, learn DIY techniques,
            and join a community of nail art enthusiasts from around the world.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/gallery"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary-500 text-white font-semibold shadow-lg shadow-primary-300/40 hover:bg-primary-600 hover:shadow-xl hover:shadow-primary-300/50 transition-all duration-300 hover:-translate-y-0.5"
            >
              Explore Gallery
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="/tutorials"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-gray-700 font-semibold border border-primary-100 hover:border-primary-300 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              Start DIY
              <HiAcademicCap size={18} />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-16 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-gray-400">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              className="w-5 h-8 rounded-full border-2 border-primary-300 flex items-start justify-center p-1"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ──────────── Style Categories Grid ──────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-14"
          >
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              Explore by <span className="text-primary-500">Style</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              Find the perfect vibe for every mood and occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {styleCategories.map((cat, idx) => (
              <motion.div
                key={cat.key}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                custom={idx + 1}
              >
                <Link
                  href={`/gallery?style=${cat.key}`}
                  className="group flex flex-col items-center justify-center p-6 rounded-2xl bg-warm hover:bg-primary-50 border border-transparent hover:border-primary-200 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                >
                  <span className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {cat.emoji}
                  </span>
                  <span className="text-sm font-semibold text-gray-700 group-hover:text-primary-600 transition-colors text-center">
                    {styleLabels[cat.key]}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-1 text-center">
                    {cat.desc}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────── Trending Inspiration Masonry ──────── */}
      <section className="py-20 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
            className="text-center mb-14"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 text-xs font-medium text-primary-600 mb-4">
              <HiHeart className="text-red-400" size={14} />
              Most Loved
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-gray-800">
              Trending <span className="text-primary-500">Inspirations</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-xl mx-auto">
              The designs everyone is falling in love with right now
            </p>
          </motion.div>

          {/* CSS Columns Masonry */}
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {trendingDesigns.map((design, idx) => (
              <div key={design.id} className="break-inside-avoid">
                <NailCard design={design} index={idx} />
              </div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={5}
            className="text-center mt-12"
          >
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-semibold border-2 border-primary-200 hover:border-primary-400 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              View All Designs
              <HiArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ──────────── DIY CTA Section ──────────── */}
      <section className="relative py-24 overflow-hidden bg-white">
        <div className="absolute inset-0 bg-hero-gradient opacity-50" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent-200/20 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            custom={0}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent-100/50 text-xs font-medium text-accent-700 mb-6">
              <HiAcademicCap size={14} />
              NailGlam Academy
            </span>
          </motion.div>

          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 text-balance"
          >
            Start Your{' '}
            <span className="bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent">
              DIY Journey
            </span>
          </motion.h2>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          >
            From beginner basics to advanced techniques — our step-by-step
            tutorials will guide you to salon-quality nails at home.
          </motion.p>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/tutorials"
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-accent-400 text-white font-semibold shadow-lg shadow-accent-300/40 hover:bg-accent-500 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
            >
              Browse Tutorials
              <HiArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white/70 backdrop-blur-sm text-gray-700 font-semibold border border-accent-200 hover:border-accent-400 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              Share Your Creation
              <HiSparkles size={18} />
            </Link>
          </motion.div>

          {/* Feature pills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={4}
            className="mt-14 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              'Step-by-step videos',
              'Beginner friendly',
              'Expert tips',
              'Product recommendations',
              'Printable guides',
            ].map((feature) => (
              <span
                key={feature}
                className="px-4 py-2 rounded-full bg-warm text-sm text-gray-600 border border-primary-100"
              >
                {feature}
              </span>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
