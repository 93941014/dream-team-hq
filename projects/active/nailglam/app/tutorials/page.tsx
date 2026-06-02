'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { HiPlay, HiClock, HiStar, HiArrowRight } from 'react-icons/hi';

interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: string;
  steps: string[];
  image: string;
  category: string;
}

const tutorialsData: Tutorial[] = [
  {
    id: 't1',
    title: 'Perfect French Tips at Home',
    description:
      'Master the classic French manicure with simple guides and painter\'s tape.',
    difficulty: 'beginner',
    duration: '15 min',
    steps: [
      'Prep nails: file, buff, and apply base coat',
      'Place tape guides just below your natural tip line',
      'Paint tips with white polish, peel tape while wet',
    ],
    image: 'https://picsum.photos/seed/tutorial1/600/400',
    category: 'Classic',
  },
  {
    id: 't2',
    title: 'Gradient Ombré Nails',
    description:
      'Create a soft gradient effect with just a makeup sponge and two colors.',
    difficulty: 'intermediate',
    duration: '25 min',
    steps: [
      'Apply base color and let dry completely',
      'Paint both colors side by side on a makeup sponge',
      'Dab sponge onto nail repeatedly to build the gradient',
    ],
    image: 'https://picsum.photos/seed/tutorial2/600/400',
    category: 'Trends',
  },
  {
    id: 't3',
    title: 'Floral Nail Art Stamping',
    description:
      'Use stamping plates to create intricate floral patterns in minutes.',
    difficulty: 'intermediate',
    duration: '20 min',
    steps: [
      'Apply your base color and let it fully dry',
      'Apply stamping polish to plate, scrape, and pick up with stamper',
      'Roll stamper onto nail, then seal with top coat',
    ],
    image: 'https://picsum.photos/seed/tutorial3/600/400',
    category: 'Artistic',
  },
  {
    id: 't4',
    title: 'Cat Eye Magnetic Polish',
    description:
      'Work with magnetic gel polish to create stunning cat eye effects.',
    difficulty: 'advanced',
    duration: '30 min',
    steps: [
      'Apply black base gel and cure under LED lamp',
      'Apply magnetic gel polish, hold magnet close for 10 seconds',
      'Cure immediately after magnetizing, then top coat',
    ],
    image: 'https://picsum.photos/seed/tutorial4/600/400',
    category: 'Trends',
  },
  {
    id: 't5',
    title: 'Matte Minimalist Lines',
    description:
      'Clean, modern line art on a matte base — perfect for everyday.',
    difficulty: 'beginner',
    duration: '20 min',
    steps: [
      'Apply your base color and let it fully dry',
      'Use striping tape or a fine brush with contrast color',
      'Finish with matte top coat for that velvety look',
    ],
    image: 'https://picsum.photos/seed/tutorial5/600/400',
    category: 'Minimalist',
  },
  {
    id: 't6',
    title: '3D Gemstone Accents',
    description:
      'Add dimension with rhinestones, pearls and 3D gel embellishments.',
    difficulty: 'advanced',
    duration: '40 min',
    steps: [
      'Complete your base design and apply top coat',
      'Place rhinestones with a wax pencil onto wet gel',
      'Encapsulate with builder gel and cure for lasting hold',
    ],
    image: 'https://picsum.photos/seed/tutorial6/600/400',
    category: 'Glam',
  },
];

const difficultyStyles: Record<
  Tutorial['difficulty'],
  { bg: string; text: string; icon: string }
> = {
  beginner: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    icon: '⭐',
  },
  intermediate: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    icon: '⭐⭐',
  },
  advanced: {
    bg: 'bg-rose-50',
    text: 'text-rose-700',
    icon: '⭐⭐⭐',
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

export default function TutorialsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
            DIY <span className="text-primary-500">Tutorials</span>
          </h1>
          <p className="mt-3 text-gray-500 max-w-xl mx-auto">
            Step-by-step guides to create salon-quality nails at home
          </p>
        </motion.div>

        {/* Tutorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tutorialsData.map((tutorial, idx) => {
            const diffStyle = difficultyStyles[tutorial.difficulty];
            return (
              <motion.div
                key={tutorial.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeInUp}
                custom={idx}
                whileHover={{ y: -4 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-primary-100/50"
              >
                {/* Video Placeholder */}
                <div className="relative w-full aspect-video bg-gradient-to-br from-primary-100 to-accent-100 overflow-hidden">
                  {/* Decorative pulse ring */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <HiPlay className="text-primary-500 ml-0.5" size={28} />
                    </div>
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-2">
                    <span className="px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] font-medium text-gray-700">
                      {tutorial.category}
                    </span>
                    <span
                      className={`px-2.5 py-1 rounded-full text-[10px] font-medium ${diffStyle.bg} ${diffStyle.text} bg-white/80 backdrop-blur-sm`}
                    >
                      {diffStyle.icon}
                    </span>
                  </div>
                  <div className="absolute bottom-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/80 backdrop-blur-sm text-[10px] text-gray-600">
                    <HiClock size={12} />
                    {tutorial.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-semibold text-gray-800 group-hover:text-primary-600 transition-colors">
                    {tutorial.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-gray-500 line-clamp-2">
                    {tutorial.description}
                  </p>

                  {/* Steps */}
                  <div className="mt-5 space-y-3">
                    {tutorial.steps.map((step, si) => (
                      <div
                        key={si}
                        className="flex items-start gap-3 group/step"
                      >
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 text-primary-600 flex items-center justify-center text-xs font-bold group-hover/step:bg-primary-200 transition-colors">
                          {si + 1}
                        </span>
                        <span className="text-sm text-gray-600 leading-relaxed pt-0.5">
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button className="mt-5 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-warm text-primary-600 font-medium text-sm hover:bg-primary-50 transition-colors group/btn">
                    View Full Tutorial
                    <HiArrowRight
                      size={14}
                      className="group-hover/btn:translate-x-1 transition-transform"
                    />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
