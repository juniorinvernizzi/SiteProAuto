'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageCircle, X, Headset, ShoppingCart } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-12 right-6 z-50 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4 bg-surface border border-white/10 rounded-2xl shadow-2xl overflow-hidden w-64"
          >
            <div className="bg-accent p-4 text-white font-bold text-sm uppercase tracking-wider">
              Como podemos ajudar?
            </div>
            <div className="p-2 flex flex-col gap-2">
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <Headset size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">SAC</p>
                  <p className="text-xs text-gray-400">Dúvidas e suporte</p>
                </div>
              </a>
              <a 
                href="https://wa.me/5511888888888" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-colors group"
              >
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-accent transition-colors">
                  <ShoppingCart size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Vendas</p>
                  <p className="text-xs text-gray-400">Compre agora</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
}
