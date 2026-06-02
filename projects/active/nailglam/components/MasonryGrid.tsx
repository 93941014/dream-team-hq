'use client';

import React from 'react';
import NailCard from './NailCard';
import type { NailDesign } from '@/data/nails';

interface MasonryGridProps {
  designs: NailDesign[];
}

/**
 * MasonryGrid — waterfall / Pinterest-style grid layout.
 * On desktop: 4 columns, on tablet: 2 columns, on mobile: 1 column.
 * Items get randomized aspect-ratio "heights" to simulate true masonry.
 */
export default function MasonryGrid({ designs }: MasonryGridProps) {
  // Pre-defined aspect ratio variations per column index to approximate masonry
  const getAspectClass = (idx: number): string => {
    const patterns = [
      'aspect-[3/4]',
      'aspect-[3/5]',
      'aspect-[3/3.5]',
      'aspect-[3/4.5]',
      'aspect-[3/3.8]',
      'aspect-[3/4.2]',
    ];
    return patterns[idx % patterns.length];
  };

  return (
    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 space-y-5">
      {designs.map((design, idx) => (
        <div key={design.id} className="break-inside-avoid">
          <NailCard design={design} index={idx} />
        </div>
      ))}
    </div>
  );
}
