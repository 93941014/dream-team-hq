'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface StyleBadgeProps {
  label: string;
  color?: { bg: string; text: string };
  active?: boolean;
  onClick?: () => void;
}

export default function StyleBadge({
  label,
  color,
  active = false,
  onClick,
}: StyleBadgeProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 cursor-pointer
        ${
          active
            ? 'bg-primary-500 text-white shadow-md shadow-primary-300/30 scale-105'
            : color
              ? `${color.bg} ${color.text} hover:scale-105 hover:shadow-sm`
              : 'bg-primary-50 text-primary-700 hover:bg-primary-100 hover:scale-105'
        }
      `}
    >
      {label}
    </button>
  );
}
