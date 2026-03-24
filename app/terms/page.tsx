'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

export default function TermsPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          {t.product.back}
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">
            {t.terms.title} <span className="text-accent">{t.terms.titleAccent}</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            <p>{t.terms.lastUpdated} {new Date().toLocaleDateString(t.terms.dateLocale)}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s1Title}</h2>
            <p>{t.terms.s1Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s2Title}</h2>
            <p>{t.terms.s2Intro}</p>
            <ul>
              {t.terms.s2Items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s3Title}</h2>
            <p>{t.terms.s3Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s4Title}</h2>
            <p>{t.terms.s4Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s5Title}</h2>
            <p>{t.terms.s5Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s6Title}</h2>
            <p>{t.terms.s6Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s7Title}</h2>
            <p>{t.terms.s7Text}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">{t.terms.s8Title}</h2>
            <p>{t.terms.s8Text}</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
