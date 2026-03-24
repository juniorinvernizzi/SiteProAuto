import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-ink text-white">
      <h2 className="text-4xl font-display mb-4">Página não encontrada</h2>
      <p className="mb-8 text-gray-400">A página que você está procurando não existe.</p>
      <Link href="/" className="px-6 py-3 bg-accent text-ink font-bold rounded-lg hover:bg-white transition-colors">
        Voltar para o Início
      </Link>
    </div>
  );
}
