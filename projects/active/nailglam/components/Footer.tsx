import React from 'react';
import Link from 'next/link';
import {
  HiHeart,
  HiMail,
  HiLocationMarker,
} from 'react-icons/hi';
import {
  FaInstagram,
  FaPinterest,
  FaTiktok,
  FaYoutube,
} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-warm to-primary-50/50 border-t border-primary-100/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link
              href="/"
              className="font-serif text-2xl font-bold bg-gradient-to-r from-primary-500 to-accent-400 bg-clip-text text-transparent"
            >
              NailGlam
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              Discover your next nail inspiration. The ultimate destination for
              nail art lovers worldwide.
            </p>
            <div className="flex gap-3 mt-5">
              <a
                href="#"
                className="p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                aria-label="Pinterest"
              >
                <FaPinterest size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                aria-label="TikTok"
              >
                <FaTiktok size={18} />
              </a>
              <a
                href="#"
                className="p-2 rounded-full text-gray-400 hover:text-primary-500 hover:bg-primary-50 transition-colors"
                aria-label="YouTube"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Explore</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Gallery', href: '/gallery' },
                { label: 'Tutorials', href: '/tutorials' },
                { label: 'Community', href: '/community' },
                { label: 'Trending', href: '/gallery?style=trending-now' },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Styles */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">
              Popular Styles
            </h4>
            <ul className="space-y-2.5">
              {[
                'French Elegance',
                'Japanese Sweet',
                'Western Glam',
                'Artistic Creative',
                'Natural Fresh',
              ].map((s) => (
                <li key={s}>
                  <Link
                    href={`/gallery?style=${s.toLowerCase().replace(/ /g, '-')}`}
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Stay In Touch</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <HiMail className="text-primary-400 flex-shrink-0" size={16} />
                <span>hello@nailglam.com</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500">
                <HiLocationMarker
                  className="text-primary-400 flex-shrink-0"
                  size={16}
                />
                <span>Based in NYC · Worldwide</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-primary-100/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            © {new Date().getFullYear()} NailGlam. Made with{' '}
            <HiHeart className="inline text-primary-400" size={14} /> for nail
            art lovers.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-gray-600 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
