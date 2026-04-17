

'use client';

import { useState } from 'react';
import { translations } from '@/app/translations';
import { useLanguage } from '@/app/contexts/LanguageContext';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ShieldCheck, TrendingUp, Package, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';

const customEase = [0.16, 1, 0.3, 1] as const;

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 11);
  if (digits.length > 6) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
  } else if (digits.length > 2) {
    return `(${digits.slice(0, 2)}) ${digits.slice(2)}`;
  } else if (digits.length > 0) {
    return `(${digits}`;
  }
  return '';
}

function formatCnpj(raw: string): string {
  const digits = raw.replace(/\D/g, '').slice(0, 14);
  if (digits.length <= 2) return digits;
  if (digits.length <= 5) return `${digits.slice(0, 2)}.${digits.slice(2)}`;
  if (digits.length <= 8) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5)}`;
  if (digits.length <= 12) return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8)}`;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

export default function SejaUmRevendedorPage() {
  const { lang } = useLanguage();
  const t = translations[lang];
  const r = t.revendedor;

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [cnpj, setCnpj] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [segment, setSegment] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value));
  };
  const handleCnpj = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCnpj(formatCnpj(e.target.value));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const infoItems = [
    { Icon: ShieldCheck, title: r.info1Title, text: r.info1Text },
    { Icon: TrendingUp, title: r.info2Title, text: r.info2Text },
    { Icon: Package, title: r.info3Title, text: r.info3Text },
  ];

  const inputClass =
    'bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none w-full placeholder:text-white/20';
  const labelClass =
    'text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 group-focus-within:text-accent transition-colors';

  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink flex flex-col md:flex-row pt-24 md:pt-0">
      {/* ── Left Side ── */}
      <div className="w-full md:w-1/2 relative min-h-[50vh] md:min-h-screen flex flex-col justify-between p-8 md:p-16 lg:p-24 md:pt-32 lg:pt-32 border-b md:border-b-0 md:border-r border-white/10 overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=2070&auto=format&fit=crop"
            alt="Proauto Revendedor"
            fill
            className="object-cover opacity-15 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/85 to-ink/50" />
        </div>

        {/* Top */}
        <div className="relative z-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-16 uppercase tracking-widest text-xs font-bold w-fit"
          >
            <ArrowLeft size={16} />
            {t.product.back}
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: customEase }}
            className="font-display text-6xl md:text-8xl lg:text-[110px] leading-[0.85] uppercase tracking-tighter mb-8"
          >
            {r.title1}
            <br />
            <span className="text-accent">{r.title2}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7, ease: customEase }}
            className="text-lg md:text-xl text-gray-400 font-light max-w-md leading-relaxed"
          >
            {r.subtitle}
          </motion.p>
        </div>

        {/* Bottom — benefits */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          className="relative z-10 mt-16 flex flex-col gap-8"
        >
          {infoItems.map(({ Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1, duration: 0.6, ease: customEase }}
              className="flex items-start gap-5"
            >
              <div className="mt-0.5 shrink-0 w-10 h-10 flex items-center justify-center border border-accent/40 bg-accent/10">
                <Icon size={18} className="text-accent" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.15em] text-white mb-1">{title}</p>
                <p className="text-sm text-gray-400 leading-relaxed">{text}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Right Side ── */}
      <div className="w-full md:w-1/2 bg-surface flex flex-col justify-center p-8 md:p-16 lg:p-24 md:pt-32 lg:pt-32">
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.7, ease: customEase }}
          className="max-w-xl w-full mx-auto"
        >
          <AnimatePresence mode="wait">
            {submitted ? (
              /* Success state */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, ease: customEase }}
                className="flex flex-col items-center justify-center text-center py-24 gap-6"
              >
                <div className="w-20 h-20 flex items-center justify-center bg-accent/10 border border-accent/30 mb-2">
                  <CheckCircle2 size={36} className="text-accent" />
                </div>
                <h2 className="font-display text-4xl md:text-5xl uppercase">{r.successTitle}</h2>
                <p className="text-gray-400 max-w-xs leading-relaxed">{r.successText}</p>
                <Link
                  href="/"
                  className="mt-6 group flex items-center gap-3 border border-white/20 px-8 py-4 text-xs font-bold uppercase tracking-widest hover:border-accent hover:text-accent transition-colors"
                >
                  {t.product.back}
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            ) : (
              /* Form */
              <motion.div key="form" exit={{ opacity: 0 }}>
                <div className="mb-10">
                  <h2 className="font-display text-3xl md:text-4xl uppercase mb-3">{r.formTitle}</h2>
                  <p className="text-sm text-gray-400">{r.formSubtitle}</p>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                  {/* Row 1 — Name + Company */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.fullName}</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={e => setName(e.target.value)}
                        placeholder={r.fullNamePlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.company}</label>
                      <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)}
                        placeholder={r.companyPlaceholder}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 2 — CNPJ + Segment */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.cnpj}</label>
                      <input
                        type="text"
                        value={cnpj}
                        onChange={handleCnpj}
                        placeholder={r.cnpjPlaceholder}
                        inputMode="numeric"
                        maxLength={18}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.segment}</label>
                      <select
                        value={segment}
                        onChange={e => setSegment(e.target.value)}
                        className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none appearance-none cursor-pointer w-full"
                      >
                        <option value="" className="bg-ink text-gray-500">{r.segmentPlaceholder}</option>
                        {r.segmentOptions.map(opt => (
                          <option key={opt.value} value={opt.value} className="bg-ink">{opt.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Row 3 — Email + Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.email}</label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder={r.emailPlaceholder}
                        className={inputClass}
                      />
                    </div>
                    <div className="flex flex-col gap-3 relative group">
                      <label className={labelClass}>{r.phone}</label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={handlePhone}
                        placeholder={r.phonePlaceholder}
                        inputMode="numeric"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  {/* Row 4 — City */}
                  <div className="flex flex-col gap-3 relative group">
                    <label className={labelClass}>{r.city}</label>
                    <input
                      type="text"
                      value={city}
                      onChange={e => setCity(e.target.value)}
                      placeholder={r.cityPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  {/* Row 5 — Message */}
                  <div className="flex flex-col gap-3 relative group">
                    <label className={labelClass}>{r.message}</label>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={e => setMessage(e.target.value)}
                      placeholder={r.messagePlaceholder}
                      className="bg-transparent border-b border-white/20 pb-3 text-white focus:outline-none focus:border-accent transition-colors rounded-none resize-none w-full placeholder:text-white/20"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group mt-4 flex items-center justify-between bg-accent text-white px-8 py-5 hover:bg-white hover:text-ink transition-colors w-full md:w-auto self-start"
                  >
                    <span className="font-bold uppercase tracking-widest text-xs">{r.send}</span>
                    <ArrowRight size={18} className="ml-6 group-hover:translate-x-2 transition-transform" />
                  </button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </main>
  );
}
