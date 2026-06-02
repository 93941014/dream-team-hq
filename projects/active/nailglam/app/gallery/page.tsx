'use client';

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiSearch, HiFilter } from 'react-icons/hi';
import NailCard from '@/components/NailCard';
import StyleBadge from '@/components/StyleBadge';
import {
  nailsData,
  type StyleCategory,
  type NailDesign,
  styleLabels,
  styleColors,
  difficultyLabels,
} from '@/data/nails';

type FilterTab = 'all' | StyleCategory;

const colorFilters = [
  'All Colors',
  'Nude',
  'Pink',
  'Red',
  'Blue',
  'Green',
  'White',
  'Black',
  'Gold',
];

const difficultyFilters: Array<{ label: string; value: NailDesign['difficulty'] | 'all' }> = [
  { label: 'All Levels', value: 'all' },
  { label: 'Beginner ⭐', value: 'beginner' },
  { label: 'Intermediate ⭐⭐', value: 'intermediate' },
  { label: 'Advanced ⭐⭐⭐', value: 'advanced' },
];

export default function GalleryPage() {
  const [activeStyle, setActiveStyle] = useState<FilterTab>('all');
  const [activeColor, setActiveColor] = useState('All Colors');
  const [activeDifficulty, setActiveDifficulty] = useState<NailDesign['difficulty'] | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);

  const filteredDesigns = useMemo(() => {
    let results = nailsData;

    if (activeStyle !== 'all') {
      results = results.filter((n) => n.style === activeStyle);
    }

    if (activeColor !== 'All Colors') {
      results = results.filter((n) =>
        n.color.toLowerCase().includes(activeColor.toLowerCase())
      );
    }

    if (activeDifficulty !== 'all') {
      results = results.filter((n) => n.difficulty === activeDifficulty);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      results = results.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.description.toLowerCase().includes(q) ||
          n.color.toLowerCase().includes(q)
      );
    }

    return results;
  }, [activeStyle, activeColor, activeDifficulty, searchQuery]);

  const styleTabs: Array<{ key: FilterTab; label: string }> = [
    { key: 'all', label: 'All Styles' },
    ...(Object.entries(styleLabels) as [StyleCategory, string][]).map(
      ([key, label]) => ({ key, label })
    ),
  ];

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
            Nail <span className="text-primary-500">Inspiration</span> Gallery
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Browse our curated collection of stunning nail art designs
          </p>
        </motion.div>

        {/* Search & Filter Toggle */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
          <div className="relative flex-1 w-full">
            <HiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input
              type="text"
              placeholder="Search designs, colors, styles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-white border border-primary-100 focus:border-primary-300 focus:ring-2 focus:ring-primary-100 outline-none text-sm transition-all"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium text-sm transition-all ${
              showFilters
                ? 'bg-primary-500 text-white shadow-md'
                : 'bg-white text-gray-600 border border-primary-100 hover:border-primary-300'
            }`}
          >
            <HiFilter size={16} />
            Filters
          </button>
        </div>

        {/* Style Tabs — horizontal scrollable */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-6 scrollbar-hide">
          {styleTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveStyle(tab.key)}
              className={`whitespace-nowrap px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeStyle === tab.key
                  ? 'bg-primary-500 text-white shadow-md shadow-primary-300/30'
                  : 'bg-white text-gray-600 border border-primary-100 hover:border-primary-300 hover:bg-primary-50'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Expandable Filters */}
        <AnimatePresence>
          {showFilters && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mb-8"
            >
              <div className="bg-white rounded-2xl p-6 border border-primary-100 space-y-5">
                {/* Color filters */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Color
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {colorFilters.map((color) => (
                      <button
                        key={color}
                        onClick={() => setActiveColor(color)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                          activeColor === color
                            ? 'bg-primary-500 text-white shadow-sm'
                            : 'bg-warm text-gray-600 hover:bg-primary-50'
                        }`}
                      >
                        {color}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Difficulty filters */}
                <div>
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">
                    Difficulty
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {difficultyFilters.map((d) => (
                      <button
                        key={d.value}
                        onClick={() => setActiveDifficulty(d.value)}
                        className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                          activeDifficulty === d.value
                            ? 'bg-primary-500 text-white shadow-sm'
                            : 'bg-warm text-gray-600 hover:bg-primary-50'
                        }`}
                      >
                        {d.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Results count */}
        <p className="text-sm text-gray-400 mb-6">
          Showing {filteredDesigns.length} design
          {filteredDesigns.length !== 1 ? 's' : ''}
        </p>

        {/* Masonry Grid */}
        {filteredDesigns.length > 0 ? (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
            {filteredDesigns.map((design, idx) => (
              <div key={design.id} className="break-inside-avoid">
                <NailCard design={design} index={idx} />
              </div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-gray-400 text-lg">
              No designs found matching your filters.
            </p>
            <button
              onClick={() => {
                setActiveStyle('all');
                setActiveColor('All Colors');
                setActiveDifficulty('all');
                setSearchQuery('');
              }}
              className="mt-4 px-6 py-2.5 rounded-full bg-primary-50 text-primary-600 font-medium text-sm hover:bg-primary-100 transition-colors"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
