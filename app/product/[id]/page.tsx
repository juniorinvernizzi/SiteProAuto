'use client';
export const runtime = 'edge';
'use client';

import { products } from '@/app/data/products';
import { translations } from '@/app/translations';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Play, Info, Layers, FileText, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { use, useState } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang: currentLang } = useLanguage();
  const t = translations[currentLang];

  const product = products.find(p => p.id === id);
  
  const [mainImage, setMainImage] = useState(product?.image || '');
  const [selectedVersion, setSelectedVersion] = useState(product?.versions[0] || '');

  if (!product) {
    return <div className="min-h-screen bg-ink text-white flex items-center justify-center">Product not found</div>;
  }

  const pt = product.translations[currentLang];

  return (
    <main className="min-h-screen text-white font-sans selection:bg-accent selection:text-ink pt-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <Link href={`/category/${product.categoryId}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          {t.product.back}
        </Link>

        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
          {/* Image Gallery */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6"
          >
            <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-surface border border-white/5 shadow-2xl">
              <Image 
                src={mainImage} 
                alt={pt.name} 
                fill 
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-all duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              {product.gallery.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`relative aspect-square rounded-xl overflow-hidden bg-surface border cursor-pointer transition-all duration-300 ${mainImage === img ? 'border-accent scale-95' : 'border-white/5 hover:border-white/30'}`}
                >
                  <Image 
                    src={img} 
                    alt={`${pt.name} gallery ${idx}`} 
                    fill 
                    loading="lazy"
                    sizes="(max-width: 768px) 33vw, 15vw"
                    className={`object-cover transition-opacity duration-300 ${mainImage === img ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-4 mb-8">
              <span className="text-accent font-mono text-sm tracking-[0.2em] uppercase">PROAUTO</span>
              <div className="h-[1px] w-12 bg-white/20"></div>
              <span className="text-white/60 font-bold text-xs tracking-[0.2em] uppercase">Premium</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl uppercase mb-6 leading-[0.9]">{pt.name}</h1>
            <p className="text-xl text-gray-300 font-light leading-relaxed mb-12">{pt.description}</p>

            {/* Versions */}
            <div className="mb-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4 flex items-center gap-2">
                <Layers size={16} /> {t.product.versions}
              </h3>
              <div className="flex flex-wrap gap-4">
                {product.versions.map((version, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setSelectedVersion(version)}
                    className={`px-6 py-3 rounded-full border text-sm font-bold tracking-widest transition-colors ${selectedVersion === version ? 'bg-white text-ink border-white' : 'border-white/20 hover:bg-white/10 text-white'}`}
                  >
                    {version}
                  </button>
                ))}
              </div>
            </div>

            {/* Tech Sheet */}
            <div className="bg-surface p-8 rounded-2xl border border-white/5 shadow-xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center gap-2">
                <FileText size={16} /> {t.product.techSheet}
              </h3>
              <div className="flex flex-col gap-4 mb-8">
                {pt.techSheet.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/10 pb-4 last:border-0 last:pb-0">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    <span className="text-white font-mono text-sm">{item.value}</span>
                  </div>
                ))}
              </div>
              
              <button className="w-full py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group">
                <FileText size={18} className="text-accent group-hover:scale-110 transition-transform" /> 
                {t.product.downloadTechSheet}
              </button>

              <Link href="/buy-online" className="mt-4 w-full py-4 rounded-xl bg-white text-ink hover:bg-accent border border-white text-sm font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 group">
                {t.menu.buyOnline}
              </Link>
            </div>
          </motion.div>
        </section>

        {/* How to Use & Video Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32 items-start">
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-4xl md:text-6xl uppercase mb-10">{t.product.howToUse}</h2>
            <div className="flex flex-col gap-6">
              {pt.howToUse.split('\n').map((step, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="mt-1 text-accent">
                    <CheckCircle2 size={24} />
                  </div>
                  <p className="text-lg text-gray-300 leading-relaxed font-light">{step.replace(/^\d+\.\s*/, '')}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative aspect-video w-full rounded-3xl overflow-hidden bg-surface border border-white/5 shadow-2xl group cursor-pointer flex items-center justify-center">
              <Image 
                src={product.image} 
                alt="Video thumbnail" 
                fill 
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover opacity-40 group-hover:opacity-30 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="relative z-10 w-20 h-20 rounded-full bg-accent text-ink flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={32} className="ml-2" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center z-10">
                <span className="text-sm font-bold uppercase tracking-widest text-white">{t.product.videoTutorial}</span>
                <span className="text-xs font-mono text-white/60">02:45</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
