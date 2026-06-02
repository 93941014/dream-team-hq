'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { HiHeart, HiOutlineHeart } from 'react-icons/hi';
import StyleBadge from './StyleBadge';
import {
  type NailDesign,
  styleLabels,
  styleColors,
  difficultyLabels,
} from '@/data/nails';

interface NailCardProps {
  design: NailDesign;
  index?: number;
}

export default function NailCard({ design, index = 0 }: NailCardProps) {
  const [liked, setLiked] = useState(false);
  const styleColor = styleColors[design.style];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer"
    >
      {/* Image */}
      <div className="relative w-full overflow-hidden aspect-[3/4]">
        <Image
          src={design.image}
          alt={design.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Difficulty badge */}
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-xs font-medium text-gray-700">
          {difficultyLabels[design.difficulty]}
        </div>

        {/* Like button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-md"
          aria-label={liked ? 'Unlike' : 'Like'}
        >
          {liked ? (
            <HiHeart className="text-red-400" size={18} />
          ) : (
            <HiOutlineHeart className="text-gray-600" size={18} />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <span
            className={`inline-block px-2.5 py-0.5 rounded-full text-[10px] font-medium ${styleColor.bg} ${styleColor.text}`}
          >
            {styleLabels[design.style]}
          </span>
        </div>
        <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 group-hover:text-primary-600 transition-colors">
          {design.title}
        </h3>
        <p className="mt-1 text-xs text-gray-400 line-clamp-2">
          {design.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <span className="text-[10px] text-gray-400">{design.color}</span>
          <span className="text-[10px] text-gray-400 flex items-center gap-1">
            <HiHeart className="text-gray-300" size={12} />
            {design.likes.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
