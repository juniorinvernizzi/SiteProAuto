'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
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
            Termos de <span className="text-accent">Uso</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none text-gray-400">
            <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">1. Aceitação dos Termos</h2>
            <p>
              Ao acessar e utilizar o site da Proauto, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">2. Uso da Licença</h2>
            <p>
              É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Proauto, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:
            </p>
            <ul>
              <li>Modificar ou copiar os materiais;</li>
              <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
              <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da Proauto;</li>
              <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
              <li>Transferir os materiais para outra pessoa ou &apos;espelhar&apos; os materiais em qualquer outro servidor.</li>
            </ul>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">3. Isenção de Responsabilidade</h2>
            <p>
              Os materiais no site da Proauto são fornecidos &apos;como estão&apos;. A Proauto não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">4. Limitações</h2>
            <p>
              Em nenhum caso a Proauto ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Proauto, mesmo que a Proauto ou um representante autorizado da Proauto tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">5. Precisão dos Materiais</h2>
            <p>
              Os materiais exibidos no site da Proauto podem incluir erros técnicos, tipográficos ou fotográficos. A Proauto não garante que qualquer material em seu site seja preciso, completo ou atual. A Proauto pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">6. Links</h2>
            <p>
              A Proauto não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Proauto do site. O uso de qualquer site vinculado é por conta e risco do usuário.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">7. Modificações</h2>
            <p>
              A Proauto pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
            </p>

            <h2 className="text-white font-display text-3xl uppercase mt-12 mb-6">8. Lei Aplicável</h2>
            <p>
              Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
            </p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
