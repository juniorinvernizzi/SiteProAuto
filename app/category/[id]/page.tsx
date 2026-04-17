'export const runtime = 'edge';
'use client';

import { products } from '@/app/data/products';
import { translations } from '@/app/translations';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, MoveRight } from 'lucide-react';
import { motion, useMotionValue, animate as animateValue } from 'motion/react';
import { use, useRef, useState, useEffect } from 'react';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const { lang: currentLang } = useLanguage();
  const t = translations[currentLang];

  // Find category info from translations
  const categoryItem = t.showcase.items.find(item => item.id === id);
  const categoryProducts = products.filter(p => p.categoryId === id);

  const carouselRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const xMotion = useMotionValue(0);

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth);
    }
  }, [categoryProducts]);

  const animateXPosition = (index: number) => {
    if (!carouselRef.current) return;
    const draggable = carouselRef.current.firstElementChild as HTMLElement;
    if (!draggable) return;
    const children = draggable.children;
    let offset = 0;
    for (let i = 0; i < index; i++) {
      offset += (children[i] as HTMLElement).offsetWidth + 32; // 2rem gap-8
    }
    animateValue(xMotion, -offset, { type: 'spring', stiffness: 300, damping: 30 });
  };

  const handleNext = () => {
    if (currentIndex < categoryProducts.length - 1) {
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

  if (!categoryItem) {
    return <div className="min-h-screen bg-ink text-white flex items-center justify-center">Category not found</div>;
  }

  return (
    <main className="min-h-screen text-white font-sans selection:bg-accent selection:text-ink pt-32 overflow-hidden">
      <div className="container mx-auto px-6">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          {t.product.back}
        </Link>
        
        <header className="mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-5xl md:text-8xl uppercase tracking-tighter mb-6"
          >
            {categoryItem.name}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl"
          >
            {categoryItem.desc}
          </motion.p>
        </header>

        {/* Controls */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-4 text-xs font-bold uppercase tracking-widest text-white/40">
            <span>{t.category.dragHint}</span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="flex gap-2">
              {categoryProducts.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${i === currentIndex ? 'bg-accent' : 'bg-white/20 hover:bg-white/40'}`} 
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ArrowLeft size={16} />
              </button>
              <button 
                onClick={handleNext}
                disabled={currentIndex === categoryProducts.length - 1}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-white"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative w-full pb-32">
        {/* Gradient masks for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-8 md:w-24 bg-gradient-to-r from-ink to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 md:w-24 bg-gradient-to-l from-ink to-transparent z-10 pointer-events-none" />
        
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
              if (info.offset.x < -50 && currentIndex < categoryProducts.length - 1) {
                next = currentIndex + 1;
              } else if (info.offset.x > 50 && currentIndex > 0) {
                next = currentIndex - 1;
              }
              setCurrentIndex(next);
              animateXPosition(next);
            }}
            style={{ x: xMotion }}
            className="flex gap-8 px-6 md:px-24"
          >
            {categoryProducts.map((product, idx) => {
              const pt = product.translations[currentLang];
              return (
                <motion.div 
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="min-w-[85vw] md:min-w-[400px] flex-shrink-0"
                >
                  <Link 
                    href={`/product/${product.id}`} 
                    className="group flex flex-col h-full relative"
                    onClick={(e) => {
                      if (isDragging) e.preventDefault();
                    }}
                  >
                    <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden mb-8 bg-surface border border-white/5 pointer-events-none">
                      <Image 
                        src={product.image} 
                        alt={pt.name} 
                        fill 
                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        referrerPolicy="no-referrer"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" />
                    </div>
                    
                    <h3 className="font-display text-3xl uppercase mb-3 group-hover:text-accent transition-colors">{pt.name}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{pt.shortDesc}</p>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className="flex gap-2">
                        {product.versions.map((_, i) => (
                          <div key={i} className={`w-2 h-2 rounded-full ${i === 0 ? 'bg-accent' : 'bg-white/20'}`} />
                        ))}
                      </div>
                      <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-ink transition-colors">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
