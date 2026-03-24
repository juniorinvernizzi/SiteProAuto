'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import { translations, Language } from '@/app/translations';

const customEase = [0.16, 1, 0.3, 1] as const;

const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'pt', label: 'PT' },
  { code: 'en', label: 'EN' },
  { code: 'es', label: 'ES' },
];

function LanguageSelector({ onSelect }: { onSelect?: () => void }) {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center gap-1 text-xs font-bold tracking-[0.2em]">
      {LANGUAGES.map((l, i) => (
        <span key={l.code} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-30">|</span>}
          <button
            onClick={() => { setLang(l.code); onSelect?.(); }}
            className={`transition-colors px-0.5 ${lang === l.code ? 'text-accent' : 'text-white/50 hover:text-white'}`}
          >
            {l.label}
          </button>
        </span>
      ))}
    </div>
  );
}

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const t = translations[lang];

  const menuLinks = [
    { name: t.nav.brand, href: '/brand' },
    { name: t.nav.products, href: '/products' },
    { name: t.menu.buyOnline, href: '/buy-online' },
    { name: t.nav.contact, href: '/contact' },
    { name: t.revendedor.navBtn, href: '/seja-um-revendedor', highlight: true },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-40 p-4 md:p-6 flex justify-between items-center bg-black/20 backdrop-blur-md border-b border-white/10 text-white">
        <Link href="/" className="cursor-pointer flex items-center">
          <Image src="/logo.svg" alt="Proauto Logo" width={120} height={38} className="object-contain" />
        </Link>
        <div className="hidden md:flex gap-12 text-xs font-bold tracking-[0.2em] uppercase items-center">
          <Link href="/brand" className="hover:text-accent transition-colors">{t.nav.brand}</Link>
          <Link href="/products" className="hover:text-accent transition-colors">{t.nav.products}</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">{t.nav.contact}</Link>
          <div className="w-px h-4 bg-white/20" />
          <LanguageSelector />
        </div>
        <Link
          href="/seja-um-revendedor"
          className="mr-[30px] bg-accent text-white px-4 py-2.5 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-ink transition-colors whitespace-nowrap"
        >
          {t.revendedor.navBtn}
        </Link>
        <button 
          onClick={() => setIsMenuOpen(true)}
          className="flex items-center justify-center group p-2"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-accent transition-colors">
            <line x1="4" y1="10" x2="20" y2="10"></line>
            <line x1="4" y1="14" x2="20" y2="14"></line>
          </svg>
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: customEase }}
            className="fixed inset-0 z-50 flex"
          >
            {/* Left Side - Image */}
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.7, ease: customEase }}
              className="hidden md:block w-1/3 relative bg-ink"
            >
              <Image 
                src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop" 
                alt="Proauto Menu" 
                fill 
                className="object-cover grayscale opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-10 left-10">
                <Image src="/logo.svg" alt="Proauto Logo" width={160} height={50} className="object-contain" />
              </div>
            </motion.div>

            {/* Right Side - Links */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.7, ease: customEase }}
              className="w-full md:w-2/3 bg-[#f5f5f5] text-ink flex flex-col justify-center p-12 md:p-32 relative"
            >
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-10 right-10 md:top-10 md:right-10 w-16 h-16 flex items-center justify-center text-ink hover:text-accent transition-colors"
              >
                <motion.div
                  whileHover={{ rotate: 90, scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 10 }}
                >
                  <X size={40} strokeWidth={1} />
                </motion.div>
              </button>

              <div className="flex flex-col gap-6 md:gap-8 relative z-10">
                {menuLinks.map((item, i) => (
                  <div key={item.name} className="overflow-hidden">
                    <motion.div
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "100%" }}
                      transition={{ delay: 0.3 + (i * 0.1), duration: 0.5, ease: customEase }}
                    >
                      <Link 
                        href={item.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={`font-display text-5xl md:text-7xl uppercase transition-colors w-fit block relative group ${
                          item.highlight ? 'text-accent hover:text-ink' : 'hover:text-accent'
                        }`}
                      >
                        {item.name}
                        <motion.div 
                          className="absolute inset-0 bg-accent origin-left z-[-1]"
                          initial={{ scaleX: 0 }}
                          whileTap={{ scaleX: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  </div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="mt-16 flex flex-col md:flex-row gap-8 items-start md:items-end justify-between"
              >
                {/* Language Selector in Menu */}
                <div className="flex flex-col gap-2">
                  <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-gray-400">Idioma / Language</p>
                  <div className="flex items-center gap-3">
                    {LANGUAGES.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => setLang(l.code)}
                        className={`text-sm font-bold tracking-[0.2em] uppercase transition-all px-3 py-1.5 border ${lang === l.code ? 'border-ink bg-ink text-white' : 'border-ink/20 text-ink/40 hover:border-ink/60 hover:text-ink'}`}
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col gap-2 md:text-right text-xs leading-relaxed text-gray-500">
                  <p>Proauto Premium Brasil</p>
                  <p>Av. das Nações Unidas, 14401</p>
                  <p>São Paulo, SP</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
