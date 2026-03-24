import type {Metadata} from 'next';
import { Inter, Anton } from 'next/font/google';
import './globals.css';
import WhatsAppWidget from './components/WhatsAppWidget';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import { LanguageProvider } from './contexts/LanguageContext';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Proauto | Alta Performance Automotiva',
  description: 'Produtos premium para limpeza e estética automotiva.',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${anton.variable}`}>
      <body className="bg-ink bg-tech-grid text-white font-sans antialiased selection:bg-accent selection:text-white flex flex-col min-h-screen" suppressHydrationWarning>
        <LanguageProvider>
          <div className="bg-glow"></div>
          <div className="fixed inset-0 bg-noise opacity-[0.03] pointer-events-none z-50 mix-blend-overlay"></div>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <WhatsAppWidget />
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  );
}
