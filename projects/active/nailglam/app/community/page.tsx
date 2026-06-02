'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import {
  HiPhotograph,
  HiUpload,
  HiHeart,
  HiChat,
  HiShare,
  HiUserCircle,
  HiSparkles,
  HiCamera,
  HiX,
} from 'react-icons/hi';
import { FaPinterest } from 'react-icons/fa';

interface CommunityPost {
  id: string;
  author: string;
  avatar: string;
  image: string;
  title: string;
  description: string;
  style: string;
  likes: number;
  comments: number;
  timeAgo: string;
}

const communityPosts: CommunityPost[] = [
  {
    id: 'c1',
    author: 'Sarah Chen',
    avatar: 'https://picsum.photos/seed/avatar1/100/100',
    image: 'https://picsum.photos/seed/community1/600/700',
    title: 'My first time trying cat eye polish! 🧲',
    description:
      'So happy with how this turned out! Took me about 40 minutes but totally worth it. Magnetic polish is my new obsession.',
    style: 'Trending',
    likes: 342,
    comments: 28,
    timeAgo: '2 hours ago',
  },
  {
    id: 'c2',
    author: 'Mia Johnson',
    avatar: 'https://picsum.photos/seed/avatar2/100/100',
    image: 'https://picsum.photos/seed/community2/600/650',
    title: 'Spring florals for a wedding 🌸',
    description:
      'Did these for my best friend\'s wedding! Hand-painted every tiny flower myself. What do you think?',
    style: 'Artistic',
    likes: 567,
    comments: 42,
    timeAgo: '5 hours ago',
  },
  {
    id: 'c3',
    author: 'Emma Williams',
    avatar: 'https://picsum.photos/seed/avatar3/100/100',
    image: 'https://picsum.photos/seed/community3/600/720',
    title: 'Minimalist nude set for work 💼',
    description:
      'Needed something office-appropriate but still cute. Love how clean and elegant these look!',
    style: 'Natural',
    likes: 234,
    comments: 15,
    timeAgo: '1 day ago',
  },
  {
    id: 'c4',
    author: 'Olivia Davis',
    avatar: 'https://picsum.photos/seed/avatar4/100/100',
    image: 'https://picsum.photos/seed/community4/600/680',
    title: 'Holiday glam with 3D gems ✨',
    description:
      'Went all out for the holiday party! 3D rhinestones, gold foil, the works. My nail tech is a genius.',
    style: 'Glam',
    likes: 892,
    comments: 67,
    timeAgo: '2 days ago',
  },
  {
    id: 'c5',
    author: 'Lily Brown',
    avatar: 'https://picsum.photos/seed/avatar5/100/100',
    image: 'https://picsum.photos/seed/community5/600/690',
    title: 'Strawberry nails for summer 🍓',
    description:
      'Swipe to see the process! These strawberry nails are perfect for summer picnics.',
    style: 'Sweet',
    likes: 456,
    comments: 31,
    timeAgo: '3 days ago',
  },
  {
    id: 'c6',
    author: 'Sophia Taylor',
    avatar: 'https://picsum.photos/seed/avatar6/100/100',
    image: 'https://picsum.photos/seed/community6/600/640',
    title: 'French tips but make it colorful 🌈',
    description:
      'Who says French tips have to be white? Loving this rainbow variation for Pride month!',
    style: 'Creative',
    likes: 723,
    comments: 54,
    timeAgo: '4 days ago',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function CommunityPage() {
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const toggleLike = (postId: string) => {
    setLikedPosts((prev) => {
      const next = new Set(prev);
      if (next.has(postId)) {
        next.delete(postId);
      } else {
        next.add(postId);
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen pt-24 pb-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            Nail <span className="text-primary-500">Community</span>
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Share your creations, get inspired by others, and connect with nail
            art lovers worldwide
          </p>
        </motion.div>

        {/* Share Your Nails CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary-400 via-primary-500 to-accent-400 p-8 sm:p-12">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/10 rounded-full blur-2xl" />

            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  Share Your Nail Art ✨
                </h2>
                <p className="mt-2 text-white/80 max-w-md">
                  Got a gorgeous mani? Show it off! Upload your nail art and
                  inspire the community.
                </p>
              </div>
              <button
                onClick={() => setShowUploadModal(true)}
                className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-white text-primary-600 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                <HiUpload size={20} />
                Upload Your Design
              </button>
            </div>
          </div>
        </motion.div>

        {/* Community Feed */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {communityPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={fadeInUp}
              custom={idx}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 border border-primary-100/50"
            >
              {/* Post Image */}
              <div className="relative w-full aspect-[4/5] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute top-3 left-3">
                  <span className="px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700">
                    {post.style}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-5">
                {/* Author */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden bg-primary-100 flex-shrink-0">
                    <Image
                      src={post.avatar}
                      alt={post.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      {post.author}
                    </p>
                    <p className="text-xs text-gray-400">{post.timeAgo}</p>
                  </div>
                </div>

                <h3 className="font-medium text-gray-800 text-sm">
                  {post.title}
                </h3>
                <p className="mt-1.5 text-sm text-gray-500 line-clamp-3">
                  {post.description}
                </p>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-4 pt-4 border-t border-gray-50">
                  <button
                    onClick={() => toggleLike(post.id)}
                    className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 transition-colors"
                  >
                    <HiHeart
                      size={18}
                      className={
                        likedPosts.has(post.id)
                          ? 'text-red-400 fill-red-400'
                          : ''
                      }
                    />
                    <span>
                      {likedPosts.has(post.id) ? post.likes + 1 : post.likes}
                    </span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-500 transition-colors">
                    <HiChat size={18} />
                    <span>{post.comments}</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-primary-500 transition-colors ml-auto">
                    <HiShare size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty state if no posts */}
        {communityPosts.length === 0 && (
          <div className="text-center py-20">
            <HiUserCircle className="mx-auto text-gray-300" size={64} />
            <p className="mt-4 text-gray-400">
              No posts yet. Be the first to share!
            </p>
          </div>
        )}
      </div>

      {/* Upload Modal */}
      <AnimatePresence>
        {showUploadModal && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowUploadModal(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
            >
              <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-gray-800">
                    Share Your Nails
                  </h3>
                  <button
                    onClick={() => setShowUploadModal(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <HiX size={20} className="text-gray-400" />
                  </button>
                </div>

                {/* Upload Area */}
                <div className="border-2 border-dashed border-primary-200 rounded-2xl p-10 text-center hover:border-primary-400 hover:bg-primary-50/50 transition-all cursor-pointer">
                  <HiCamera className="mx-auto text-primary-300" size={48} />
                  <p className="mt-4 text-sm text-gray-600 font-medium">
                    Drop your photo here, or click to browse
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    JPG, PNG or WEBP • Max 10MB
                  </p>
                </div>

                {/* Form */}
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Title
                    </label>
                    <input
                      type="text"
                      placeholder="Give your design a name..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Description
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your nail art..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all resize-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Style
                    </label>
                    <select className="w-full px-4 py-2.5 rounded-xl border border-gray-200 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all bg-white">
                      <option value="">Select a style...</option>
                      <option>French Elegance</option>
                      <option>Japanese Sweet</option>
                      <option>Western Glam</option>
                      <option>Artistic Creative</option>
                      <option>Natural Fresh</option>
                      <option>Holiday Special</option>
                      <option>Trending Now</option>
                    </select>
                  </div>
                </div>

                <button className="mt-6 w-full py-3 rounded-xl bg-primary-500 text-white font-semibold hover:bg-primary-600 transition-colors shadow-md hover:shadow-lg">
                  <span className="flex items-center justify-center gap-2">
                    <HiSparkles size={18} />
                    Share with Community
                  </span>
                </button>

                <p className="mt-4 text-center text-xs text-gray-400">
                  By sharing, you agree to our{' '}
                  <a href="#" className="text-primary-500 underline">
                    Community Guidelines
                  </a>
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
