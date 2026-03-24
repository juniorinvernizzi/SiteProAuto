'use client';

import { translations } from '@/app/translations';
import { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';
import Image from 'next/image';
import { motion, useMotionValue, animate as animateValue } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?auto=format&fit=crop&q=80"
];

export default function BrandPage() {
  const { lang: currentLang } = useLanguage();
  const t = translations[currentLang];

  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const xMotion = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, []);

  const animateXPosition = (index: number) => {
    if (!carouselRef.current) return;
    const draggable = carouselRef.current.firstElementChild as HTMLElement;
    if (!draggable) return;
    const children = draggable.children;
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += (children[i] as HTMLElement).offsetWidth + 32; // 2rem gap
    }
    animateValue(xMotion, -offset, { type: 'spring', stiffness: 300, damping: 30 });
  };

  const handleNext = () => {
    if (currentIndex < GALLERY_IMAGES.length - 1) {
      const next = currentIndex + 1;
      setCurrentIndex(next);
      animateXPosition(next);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      const prev = currentIndex - 1;
      setCurrentIndex(prev);
      animateXPosition(prev);
    }
  };

  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Hero Section */}
        <section className="mb-32 relative">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <h1 className="font-display text-6xl md:text-8xl lg:text-[120px] leading-[0.85] uppercase tracking-tighter mb-8">
              {t.brand.title}<br/><span className="text-accent">{t.brand.titleAccent}</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              {t.brand.heroText}
            </p>
          </motion.div>
        </section>

        {/* History / Image Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-[60vh] w-full rounded-2xl overflow-hidden"
          >
            <Image 
              src="https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=1000&auto=format&fit=crop" 
              alt="Proauto Factory" 
              fill 
              className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <h2 className="font-display text-4xl md:text-5xl uppercase">{t.brand.historyTitle}</h2>
            <div className="flex flex-col gap-6 text-gray-400 leading-relaxed">
              <p>{t.brand.historyP1}</p>
              <p>{t.brand.historyP2}</p>
              <p>{t.brand.historyP3}</p>
            </div>
          </motion.div>
        </section>

        {/* Values */}
        <section className="mb-32">
          <h2 className="font-display text-4xl md:text-5xl uppercase mb-16 text-center">{t.brand.valuesTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.brand.values.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-surface p-10 rounded-2xl border border-white/5 hover:border-accent/50 transition-colors"
              >
                <span className="font-display text-6xl text-white/10 mb-6 block">0{i + 1}</span>
                <h3 className="font-display text-2xl uppercase mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

      </div>

      {/* Photo Gallery Carousel */}
      <section className="py-24 bg-surface border-y border-white/10 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 flex justify-between items-end">
          <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight">{t.brand.galleryTitle}</h2>
          
          <div className="flex gap-4">
            <button 
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={currentIndex === GALLERY_IMAGES.length - 1}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        <div className="relative w-full pb-12">
          {/* Gradient masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-32 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-32 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none" />
          
          <motion.div 
            ref={carouselRef} 
            className="cursor-grab active:cursor-grabbing overflow-hidden"
          >
            <motion.div 
              drag="x" 
              dragConstraints={{ right: 0, left: -width }} 
              onDragStart={() => setIsDragging(true)}
              onDragEnd={(e, info) => {
                setTimeout(() => setIsDragging(false), 100);
                let next = currentIndex;
                if (info.offset.x < -50 && currentIndex < GALLERY_IMAGES.length - 1) {
                  next = currentIndex + 1;
                } else if (info.offset.x > 50 && currentIndex > 0) {
                  next = currentIndex - 1;
                }
                setCurrentIndex(next);
                animateXPosition(next);
              }}
              style={{ x: xMotion }}
              className="flex gap-8 px-6 md:px-8"
            >
              {GALLERY_IMAGES.map((img, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ 
                    opacity: currentIndex === idx ? 1 : 0.4, 
                    scale: currentIndex === idx ? 1 : 0.9 
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-[80vw] md:w-[60vw] flex-shrink-0 relative aspect-video rounded-2xl overflow-hidden border border-white/10"
                >
                  <Image 
                    src={img} 
                    alt={`Gallery Image ${idx + 1}`} 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                    draggable={false}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
