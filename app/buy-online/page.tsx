'use client';

import { translations } from '@/app/translations';
import { useLanguage } from '@/app/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Store, MapPin, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function BuyOnlinePage() {
  const { lang: currentLang } = useLanguage();
  const t = translations[currentLang];

  return (
    <main className="min-h-screen text-white font-sans selection:bg-accent selection:text-ink pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-6xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          {t.product.back}
        </Link>
        
        <header className="mb-24 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-6"
          >
            {t.buyOnline.title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mx-auto"
          >
            {t.buyOnline.subtitle}
          </motion.p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Loja Online */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-accent/50 transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-ink flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <ShoppingCart size={40} className="text-accent" />
            </div>
            <h2 className="font-display text-4xl uppercase mb-6">{t.buyOnline.onlineTitle}</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              {t.buyOnline.onlineDesc}
            </p>
            
            <div className="flex flex-col gap-4 w-full max-w-xs">
              <a href="#" className="w-full py-4 rounded-full bg-white text-ink font-bold uppercase tracking-widest hover:bg-accent transition-colors flex items-center justify-center gap-2">
                {t.buyOnline.buyNow} <ExternalLink size={16} />
              </a>
              <a href="#" className="w-full py-4 rounded-full border border-white/20 text-white font-bold uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
                Mercado Livre <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Loja Física */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-surface p-10 md:p-16 rounded-3xl border border-white/5 flex flex-col items-center text-center group hover:border-accent/50 transition-colors"
          >
            <div className="w-24 h-24 rounded-full bg-ink flex items-center justify-center mb-8 border border-white/10 group-hover:scale-110 transition-transform duration-500">
              <Store size={40} className="text-accent" />
            </div>
            <h2 className="font-display text-4xl uppercase mb-6">{t.buyOnline.physicalTitle}</h2>
            <p className="text-gray-400 mb-12 leading-relaxed">
              {t.buyOnline.physicalDesc}
            </p>
            
            <div className="w-full max-w-sm relative">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <MapPin size={20} className="text-gray-500" />
              </div>
              <input 
                type="text" 
                placeholder={t.buyOnline.searchPlaceholder}
                className="w-full bg-ink border border-white/20 rounded-full py-4 pl-12 pr-32 text-white focus:outline-none focus:border-accent transition-colors"
              />
              <button className="absolute inset-y-1 right-1 px-6 bg-white text-ink rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors">
                {t.buyOnline.searchBtn}
              </button>
            </div>
            
            <div className="mt-12 w-full">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6">{t.buyOnline.mainNetworks}</h3>
              <div className="flex flex-wrap justify-center gap-4 opacity-50">
                <div className="px-6 py-2 border border-white/20 rounded-full text-sm">Carrefour</div>
                <div className="px-6 py-2 border border-white/20 rounded-full text-sm">Extra</div>
                <div className="px-6 py-2 border border-white/20 rounded-full text-sm">Assaí</div>
                <div className="px-6 py-2 border border-white/20 rounded-full text-sm">Atacadão</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
