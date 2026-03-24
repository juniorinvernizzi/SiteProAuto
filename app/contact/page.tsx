'use client';

import { translations, Language } from '@/app/translations';
import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export default function ContactPage({ searchParams }: { searchParams: Promise<{ lang?: string }> }) {
  const { lang } = use(searchParams);
  const currentLang = (lang as Language) || 'pt';
  const t = translations[currentLang];

  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink flex flex-col md:flex-row pt-24 md:pt-0">
      {/* Left Side - Info & Image */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen flex flex-col justify-between p-8 md:p-16 lg:p-24 md:pt-32 lg:pt-32 border-b md:border-b-0 md:border-r border-white/10">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
            alt="Proauto HQ" 
            fill 
            className="object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/80 to-ink/40" />
        </div>

        <div className="relative z-10">
          <Link href={`/?lang=${currentLang}`} className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16 uppercase tracking-widest text-xs font-bold w-fit">
            <ArrowLeft size={16} />
            {t.product.back}
          </Link>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-6xl md:text-8xl lg:text-[120px] leading-[0.85] uppercase tracking-tighter mb-8"
          >
            FALE<br/><span className="text-accent">CONOSCO</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed"
          >
            Estamos prontos para elevar a performance do seu negócio. Entre em contato para parcerias, distribuição ou suporte técnico.
          </motion.p>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="relative z-10 mt-16 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Matriz</span>
            <div className="flex items-start gap-4 text-white">
              <MapPin className="text-accent mt-1 shrink-0" size={20} />
              <span className="text-sm leading-relaxed">Av. das Nações Unidas, 14401<br/>Torre Tarumã, 14º Andar<br/>São Paulo, SP - Brasil</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-500">Contato Direto</span>
            <div className="flex flex-col gap-3">
              <a href="mailto:contato@proauto.com.br" className="flex items-center gap-4 text-white hover:text-accent transition-colors w-fit">
                <Mail className="text-accent shrink-0" size={20} />
                <span className="text-sm">contato@proauto.com.br</span>
              </a>
              <a href="tel:+5511999999999" className="flex items-center gap-4 text-white hover:text-accent transition-colors w-fit">
                <Phone className="text-accent shrink-0" size={20} />
                <span className="text-sm">+55 (11) 0800-123-4567</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full md:w-1/2 bg-surface flex flex-col justify-center p-8 md:p-16 lg:p-24 md:pt-32 lg:pt-32">
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="max-w-xl w-full mx-auto"
        >
          <div className="mb-12">
            <h2 className="font-display text-3xl md:text-4xl uppercase mb-4">Envie uma mensagem</h2>
            <p className="text-sm text-gray-400">Preencha os dados abaixo e retornaremos o mais breve possível.</p>
          </div>

          <form className="flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 relative group">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">Nome Completo</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none" placeholder="João Silva" />
              </div>
              <div className="flex flex-col gap-3 relative group">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">Empresa</label>
                <input type="text" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none" placeholder="Sua Empresa Ltda" />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col gap-3 relative group">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">E-mail Corporativo</label>
                <input type="email" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none" placeholder="joao@empresa.com.br" />
              </div>
              <div className="flex flex-col gap-3 relative group">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">Telefone / WhatsApp</label>
                <input type="tel" className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none" placeholder="(11) 99999-9999" />
              </div>
            </div>

            <div className="flex flex-col gap-3 relative group mt-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">Assunto</label>
              <select className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none appearance-none cursor-pointer">
                <option value="" className="bg-ink text-gray-500">Selecione o motivo do contato</option>
                <option value="revenda" className="bg-ink">Quero ser um revendedor</option>
                <option value="suporte" className="bg-ink">Suporte Técnico</option>
                <option value="comercial" className="bg-ink">Dúvidas Comerciais</option>
                <option value="outros" className="bg-ink">Outros assuntos</option>
              </select>
            </div>

            <div className="flex flex-col gap-3 relative group mt-4">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors">Sua Mensagem</label>
              <textarea rows={4} className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none resize-none" placeholder="Como podemos ajudar o seu negócio?"></textarea>
            </div>

            <button type="button" className="group mt-8 flex items-center justify-between bg-white text-ink px-8 py-5 hover:bg-accent transition-colors w-full md:w-auto self-start">
              <span className="font-bold uppercase tracking-widest text-xs">Enviar Mensagem</span>
              <ArrowRight size={18} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}
