import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-ink text-white border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="mb-6 block">
              <Image src="/logo.svg" alt="Proauto Logo" width={180} height={60} className="object-contain" />
            </Link>
            <p className="text-gray-400 text-sm max-w-sm leading-relaxed mb-8">
              Elevando a performance da estética automotiva com tecnologia de ponta e produtos de alta qualidade.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-ink transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-ink transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center hover:bg-accent hover:text-ink transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Links Rápidos</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/brand" className="hover:text-accent transition-colors">A Marca</Link></li>
              <li><Link href="/products" className="hover:text-accent transition-colors">Produtos</Link></li>
              <li><Link href="/buy-online" className="hover:text-accent transition-colors">Compre Online</Link></li>
              <li><Link href="/contact" className="hover:text-accent transition-colors">Contato</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase tracking-widest text-xs mb-6 text-gray-500">Legal</h4>
            <ul className="flex flex-col gap-4 text-sm text-gray-400">
              <li><Link href="/privacy" className="hover:text-accent transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/terms" className="hover:text-accent transition-colors">Termos de Uso</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Proauto. Todos os direitos reservados.</p>
          <p>Desenvolvido pela <a href="#" className="text-white hover:text-accent transition-colors font-bold">Agenciamark2</a></p>
        </div>
      </div>
    </footer>
  );
}
