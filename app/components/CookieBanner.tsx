'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('proauto-cookie-consent');
    if (!consent) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('proauto-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pointer-events-none"
        >
          <div className="container mx-auto max-w-5xl pointer-events-auto">
            <div className="bg-surface border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-white font-bold mb-2">Sua privacidade é importante para nós</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Utilizamos cookies para melhorar sua experiência em nosso site, personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Ao continuar navegando, você concorda com a nossa{' '}
                  <Link href="/privacy" className="text-accent hover:underline">Política de Privacidade</Link>.
                </p>
              </div>
              <div className="flex gap-4 flex-shrink-0 w-full md:w-auto">
                <button 
                  onClick={acceptCookies}
                  className="w-full md:w-auto px-8 py-3 bg-accent text-ink font-bold uppercase tracking-widest text-xs rounded-lg hover:bg-white transition-colors"
                >
                  Aceitar e Fechar
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
