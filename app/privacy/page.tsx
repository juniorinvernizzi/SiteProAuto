'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ink text-white font-sans selection:bg-accent selection:text-ink pt-32 pb-24">
      <div className="container mx-auto px-6 max-w-4xl">
        <Link href="/" className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-12 uppercase tracking-widest text-xs font-bold">
          <ArrowLeft size={16} />
          Voltar
        </Link>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-tighter mb-12">
            Política de <span className="text-accent">Privacidade</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">1. Introdução</h2>
            <p>
              A Proauto valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as suas informações quando você utiliza o nosso site e os nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">2. Dados que Coletamos</h2>
            <p>
              Podemos coletar os seguintes tipos de dados pessoais:
            </p>
            <ul>
              <li><strong>Dados de Contato:</strong> Nome, e-mail, número de telefone, endereço.</li>
              <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site, cookies.</li>
              <li><strong>Dados de Transação:</strong> Informações de pagamento e histórico de compras (quando aplicável).</li>
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">3. Como Usamos Seus Dados</h2>
            <p>
              Utilizamos os seus dados pessoais para as seguintes finalidades:
            </p>
            <ul>
              <li>Fornecer e melhorar nossos produtos e serviços.</li>
              <li>Processar suas transações e enviar confirmações.</li>
              <li>Responder às suas dúvidas e solicitações de suporte.</li>
              <li>Enviar comunicações de marketing e ofertas promocionais (com o seu consentimento).</li>
              <li>Cumprir obrigações legais e regulatórias.</li>
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">4. Compartilhamento de Dados</h2>
            <p>
              Não vendemos ou alugamos seus dados pessoais para terceiros. Podemos compartilhar suas informações com:
            </p>
            <ul>
              <li>Prestadores de serviços que nos auxiliam na operação do site e na condução dos nossos negócios (ex: processadores de pagamento, serviços de hospedagem).</li>
              <li>Autoridades governamentais, quando exigido por lei ou para proteger nossos direitos.</li>
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">5. Seus Direitos (LGPD)</h2>
            <p>
              De acordo com a LGPD, você tem o direito de:
            </p>
            <ul>
              <li>Confirmar a existência de tratamento de dados.</li>
              <li>Acessar seus dados pessoais.</li>
              <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
              <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.</li>
              <li>Revogar o seu consentimento a qualquer momento.</li>
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">6. Segurança</h2>
            <p>
              Adotamos medidas de segurança técnicas e administrativas para proteger os seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">7. Contato</h2>
            <p>
              Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco através do e-mail: <strong>privacidade@proauto.com.br</strong>.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
