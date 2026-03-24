'use client';

import { motion, useScroll, useTransform, cubicBezier, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Plus, MoveRight, X } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { translations, Language } from './translations';

// Custom easing for premium feel
const customEase = cubicBezier(0.16, 1, 0.3, 1);

const RevealText = ({ text, delay = 0, className = "" }: { text: string, delay?: number, className?: string }) => {
  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: customEase, delay }}
      >
        {text}
      </motion.div>
    </div>
  );
};

export default function Page() {
  const [lang, setLang] = useState<Language>('pt');
  const t = translations[lang];
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.heroSlides.length]);

  // Hero Parallax
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "30%"]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  // Manifesto Parallax
  const manifestoRef = useRef(null);
  const { scrollYProgress: manifestoProgress } = useScroll({
    target: manifestoRef,
    offset: ["start end", "end start"]
  });
  const manifestoY = useTransform(manifestoProgress, [0, 1], ["20%", "-20%"]);

  return (
    <main ref={containerRef} className="min-h-screen selection:bg-accent selection:text-ink">
      
      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 backdrop-blur-md"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-6 right-6 md:top-10 md:right-10 w-12 h-12 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-accent hover:text-ink transition-colors z-10"
            >
              <X size={24} />
            </button>
            <div className="w-full max-w-7xl aspect-video px-4 md:px-10">
              <iframe 
                className="w-full h-full rounded-2xl shadow-2xl"
                src="https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1&mute=1" 
                title="Proauto Presentation" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 1. Hero - Massive Typography & Cinematic Image */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0 w-full h-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: customEase }}
              className="absolute inset-0 w-full h-full"
            >
              <Image 
                src={t.heroSlides[currentSlide].image} 
                alt={t.heroSlides[currentSlide].alt} 
                fill 
                className="object-cover opacity-60"
                priority
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </AnimatePresence>
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent pointer-events-none" />
        </motion.div>

        {/* Vertical Social Links */}
        <div className="absolute left-6 top-1/2 -translate-y-1/2 flex flex-col gap-8 z-20 hidden md:flex">
          {['FACEBOOK', 'INSTAGRAM', 'YOUTUBE'].map((social, idx) => (
            <a 
              key={social} 
              href="#" 
              className="text-[10px] font-bold tracking-widest uppercase text-white/50 hover:text-white transition-colors"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              {social}
            </a>
          ))}
        </div>

        <div className="container mx-auto px-6 md:px-24 relative z-10 w-full flex flex-col justify-center h-full pt-20">
          <motion.div style={{ opacity: heroOpacity }} className="w-full relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 1, ease: customEase }}
                className="relative max-w-4xl"
              >
                <h1 className="font-display text-[12vw] md:text-[8vw] leading-[0.9] tracking-tighter uppercase text-white">
                  PRO<br/>AUTO
                </h1>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Bottom Elements */}
        <div className="absolute bottom-10 left-6 md:left-24 right-6 md:right-10 z-20 flex flex-col md:flex-row items-end justify-between gap-8">
          
          {/* Custom Pagination */}
          <div className="flex items-center gap-4 w-full md:w-1/3">
            <span className="text-sm font-mono text-white">01</span>
            <div className="flex-1 h-[2px] bg-white/20 relative">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                initial={{ width: "0%" }}
                animate={{ width: `${((currentSlide + 1) / t.heroSlides.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex gap-3">
              {t.heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`text-xs font-mono tracking-widest transition-all duration-300 ${
                    currentSlide === index ? 'text-white' : 'text-white/40 hover:text-white/70'
                  }`}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="hidden md:flex flex-col items-center gap-2 absolute left-1/2 -translate-x-1/2 bottom-0">
            <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
              <motion.div 
                animate={{ y: [0, 12, 0] }} 
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-2 bg-white rounded-full"
              />
            </div>
          </div>

          {/* Right Text & Arrows */}
          <div className="flex flex-col items-end gap-6 max-w-md text-right">
            <AnimatePresence mode="wait">
              <motion.p 
                key={currentSlide}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: customEase }}
                className="text-xs md:text-sm text-gray-300 font-light leading-relaxed"
              >
                {t.heroSlides[currentSlide].description}
              </motion.p>
            </AnimatePresence>
            
            <div className="flex gap-4">
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + t.heroSlides.length) % t.heroSlides.length)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
              >
                <ArrowRight className="rotate-180" size={16} />
              </button>
              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % t.heroSlides.length)}
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-ink transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. The Manifesto - Sticky & Layered */}
      <section ref={manifestoRef} className="relative py-32 md:py-48 overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-5xl">
            <h2 className="font-display text-5xl md:text-[8vw] leading-[0.85] uppercase tracking-tight">
              <RevealText text={t.manifesto.line1} />
              <RevealText text={t.manifesto.line2} delay={0.1} />
              <RevealText text={t.manifesto.line3} delay={0.2} className="text-gray-600" />
              <RevealText text={t.manifesto.line4} delay={0.3} className="text-accent" />
              <RevealText text={t.manifesto.line5} delay={0.4} />
            </h2>
          </div>
        </div>
        
        {/* Floating abstract element */}
        <motion.div style={{ y: manifestoY }} className="absolute right-0 top-1/4 w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] opacity-30 pointer-events-none">
          <Image 
            src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=800&auto=format&fit=crop" 
            alt="Water beads" 
            fill 
            className="object-cover rounded-full blur-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </section>

      {/* 3. Unconventional Grid - Needs */}
      <section className="py-24 bg-surface relative">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-24 border-b border-white/10 pb-10">
            <h2 className="font-display text-4xl md:text-6xl uppercase">{t.solutions.title}</h2>
            <p className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 hidden md:block">{t.solutions.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
            {[
              { img: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1000&auto=format&fit=crop", alt: "Lataria" },
              { img: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=800&auto=format&fit=crop", alt: "Pneus" },
              { img: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=800&auto=format&fit=crop", alt: "Lar" },
              { img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=800&auto=format&fit=crop", alt: "Aroma" }
            ].map((item, index) => (
              <div key={index} className="relative group cursor-pointer">
                <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden rounded-2xl border border-white/10">
                  <Image src={item.img} alt={item.alt} fill className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" referrerPolicy="no-referrer" />
                </div>
                <div className="mt-8 flex justify-between items-start">
                  <div>
                    <h3 className="font-display text-3xl md:text-4xl uppercase mb-2">{t.solutions.items[index].title}</h3>
                    <p className="text-gray-400 max-w-sm">{t.solutions.items[index].desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Showcase - Premium Collection */}
      <section className="py-32 relative bg-ink">
        <div className="container mx-auto px-6 mb-20">
          <h2 className="font-display text-5xl md:text-[6vw] leading-[0.85] uppercase tracking-tight text-center">
            {t.showcase.title1} <br/><span className="text-outline-white text-transparent">{t.showcase.title2}</span>
          </h2>
        </div>

        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[70vh] md:h-[80vh]">
            {t.showcase.items.map((category, i) => (
              <Link 
                href={`/category/${category.id}?lang=${lang}`} 
                key={i}
                className="relative group overflow-hidden rounded-2xl flex items-center justify-center border border-white/10"
              >
                <Image 
                  src={category.img} 
                  alt={category.name} 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" 
                  referrerPolicy="no-referrer" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
                
                <h3 
                  className="absolute right-4 md:right-8 z-10 font-display text-4xl md:text-5xl uppercase text-white tracking-widest drop-shadow-2xl"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  {category.name}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-24 bg-ink border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-tight mb-4">{t.instagram.title}</h2>
              <a href="https://instagram.com/proauto_oficial" target="_blank" rel="noopener noreferrer" className="text-accent font-mono tracking-widest hover:text-white transition-colors">
                {t.instagram.handle}
              </a>
            </div>
            <div className="flex gap-8 text-sm font-mono tracking-widest text-white/60">
              <div className="flex flex-col">
                <span className="text-white text-xl mb-1">{t.instagram.posts}</span>
                <span>POSTS</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white text-xl mb-1">{t.instagram.followers}</span>
                <span>SEGUIDORES</span>
              </div>
              <a href="https://instagram.com/proauto_oficial" target="_blank" rel="noopener noreferrer" className="h-12 px-8 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-ink transition-colors uppercase font-bold tracking-widest">
                {t.instagram.follow}
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?auto=format&fit=crop&q=80",
              "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&q=80"
            ].map((img, i) => (
              <a key={i} href="https://instagram.com/proauto_oficial" target="_blank" rel="noopener noreferrer" className="relative aspect-square group overflow-hidden bg-surface">
                <Image 
                  src={img} 
                  alt="Instagram post" 
                  fill 
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/20 transition-colors duration-500" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Split CTA - Brutalist & High Contrast */}
      <section className="grid grid-cols-1 md:grid-cols-2 border-y border-white/10">
        <Link href={`/contact?lang=${lang}`} className="group relative h-[50vh] md:h-[70vh] flex flex-col justify-between p-10 md:p-16 overflow-hidden border-b md:border-b-0 md:border-r border-white/10">
          <div className="absolute inset-0 bg-accent translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-ink/60 transition-colors">Parcerias</span>
            <ArrowRight size={32} className="text-white group-hover:text-ink -rotate-45 group-hover:rotate-0 transition-all duration-500" />
          </div>
          <h3 className="relative z-10 font-display text-5xl md:text-7xl uppercase group-hover:text-ink transition-colors whitespace-pre-line">
            {t.cta.b2bTitle}
          </h3>
        </Link>
        
        <Link href={`/buy-online?lang=${lang}`} className="group relative h-[50vh] md:h-[70vh] bg-surface flex flex-col justify-between p-10 md:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0" />
          <div className="relative z-10 flex justify-between items-start">
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500 group-hover:text-ink/60 transition-colors">Para Você</span>
            <ArrowRight size={32} className="text-white group-hover:text-ink -rotate-45 group-hover:rotate-0 transition-all duration-500" />
          </div>
          <h3 className="relative z-10 font-display text-5xl md:text-7xl uppercase group-hover:text-ink transition-colors whitespace-pre-line">
            {t.cta.b2cTitle}
          </h3>
        </Link>
      </section>
    </main>
  );
}
