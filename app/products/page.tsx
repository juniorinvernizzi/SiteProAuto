'use client';

import { translations, Language } from '@/app/translations';
import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'motion/react';
import { Filter, X, Search } from 'lucide-react';
import { products as PRODUCTS } from '@/app/data/products';

const CATEGORIES = [
  { id: 'all', name: 'Todos os Produtos' },
  { id: 'lava-autos', name: 'Lava Autos' },
  { id: 'ceras-e-polidores', name: 'Ceras e Polidores' },
  { id: 'higiene-interna', name: 'Higiene Interna' },
  { id: 'pneus-e-rodas', name: 'Pneus e Rodas' },
  { id: 'aromatizantes', name: 'Aromatizantes' },
  { id: 'casa', name: 'Para o seu Lar' }
];

export default function ProductsPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = use(searchParams);
  const currentLang = (lang as Language) || 'pt';
  const t = translations[currentLang];

  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const filteredProducts = PRODUCTS.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.categoryId === activeCategory;
    const productName = product.translations[currentLang]?.name || product.translations['pt'].name;
    const matchesSearch = productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-7xl">
        
        <header className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl uppercase tracking-tighter"
          >
            CATÁLOGO<br/><span className="text-accent">PROAUTO</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 font-light max-w-sm"
          >
            Explore nossa linha completa de produtos de alta performance para estética automotiva.
          </motion.p>
        </header>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          
          {/* Mobile Filter Button */}
          <button 
            className="lg:hidden flex items-center gap-2 bg-surface border border-white/10 px-6 py-4 rounded-xl font-bold uppercase tracking-widest text-xs w-fit"
            onClick={() => setIsMobileFilterOpen(true)}
          >
            <Filter size={16} />
            Filtros
          </button>

          {/* Sidebar / Filters */}
          <aside className={`
            fixed inset-0 z-50 bg-ink/95 backdrop-blur-xl p-6 lg:p-0 lg:static lg:bg-transparent lg:backdrop-blur-none lg:w-1/4 lg:block
            ${isMobileFilterOpen ? 'block' : 'hidden'}
          `}>
            <div className="flex justify-between items-center lg:hidden mb-12">
              <h2 className="font-display text-3xl uppercase">Filtros</h2>
              <button onClick={() => setIsMobileFilterOpen(false)} className="p-2 bg-white/10 rounded-full">
                <X size={20} />
              </button>
            </div>

            <div className="sticky top-32 flex flex-col gap-12">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="text" 
                  placeholder="Buscar produto..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-surface border border-white/10 rounded-xl pl-12 pr-4 py-4 text-sm text-white focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              {/* Categories */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-gray-500 mb-6">Categorias</h3>
                <ul className="flex flex-col gap-2">
                  {CATEGORIES.map(category => (
                    <li key={category.id}>
                      <button 
                        onClick={() => {
                          setActiveCategory(category.id);
                          setIsMobileFilterOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors text-sm font-medium ${
                          activeCategory === category.id 
                            ? 'bg-accent text-ink font-bold' 
                            : 'text-gray-400 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {category.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <div className="lg:w-3/4">
            <div className="mb-8 text-sm text-gray-500 font-mono">
              Mostrando {filteredProducts.length} produtos
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredProducts.map((product, i) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    key={product.id}
                  >
                    <Link 
                      href={`/product/${product.id}?lang=${currentLang}`}
                      className="group flex flex-col bg-surface border border-white/5 rounded-2xl overflow-hidden hover:border-accent/50 transition-colors h-full"
                    >
                      <div className="relative aspect-square w-full overflow-hidden bg-white/5">
                        <Image 
                          src={product.image} 
                          alt={product.translations[currentLang]?.name || product.translations['pt'].name} 
                          fill 
                          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-grow justify-between gap-4">
                        <div>
                          <span className="text-[10px] font-bold uppercase tracking-widest text-accent mb-2 block">
                            {CATEGORIES.find(c => c.id === product.categoryId)?.name}
                          </span>
                          <h3 className="font-display text-2xl uppercase leading-tight group-hover:text-accent transition-colors">
                            {product.translations[currentLang]?.name || product.translations['pt'].name}
                          </h3>
                        </div>
                        <div className="flex items-center justify-end mt-4 pt-4 border-t border-white/10">
                          <span className="text-xs font-bold uppercase tracking-widest text-white group-hover:text-accent transition-colors">
                            Detalhes →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>

              {filteredProducts.length === 0 && (
                <div className="col-span-full py-24 text-center flex flex-col items-center justify-center border border-dashed border-white/20 rounded-2xl">
                  <p className="text-gray-400 text-lg mb-4">Nenhum produto encontrado.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setActiveCategory('all');
                    }}
                    className="text-accent hover:text-white transition-colors font-bold uppercase tracking-widest text-xs"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
