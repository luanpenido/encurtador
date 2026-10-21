import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Política de Privacidade | Penido Achadinhos',
  description: 'Política de Privacidade e Cookies do Penido Achadinhos, em conformidade com a LGPD e o Programa de Associados da Amazon.',
};

export default function PoliticaPrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="border-b border-[#232F3E] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Política de Privacidade
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Última atualização: Outubro de 2026 | Conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
          </p>
        </div>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Informações Gerais</h2>
          <p>
            O portal <strong>Penido Achadinhos</strong> (acessível pelo endereço penido.vercel.app) preza pela privacidade, transparência e segurança de todos os usuários. Este documento detalha como tratamos eventuais dados de navegação e as tecnologias de rastreamento de afiliados empregadas.
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">2. Dados Coletados e Finalidade</h2>
          <p>
            O Penido Achadinhos <strong>não exige cadastro obrigatório</strong> e não comercializa dados pessoais com terceiros. As únicas informações coletadas são:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-400">
            <li><strong>Logs de Acesso e Métricas Anônimas:</strong> Endereço IP aproximado, tipo de dispositivo, navegador e páginas visitadas para fins estatísticos e prevenção de tráfego abusivo.</li>
            <li><strong>Formulário de Contato:</strong> Nome e endereço de e-mail fornecidos voluntariamente quando você nos envia uma mensagem direta, utilizados unicamente para respondê-lo.</li>
          </ul>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">3. Cookies e Links de Afiliados da Amazon</h2>
          <p>
            Utilizamos links de afiliados do <strong>Programa de Associados da Amazon Brasil</strong>. Ao clicar em um botão de oferta ("Comprar na Amazon" ou "Ver Preço"), você é redirecionado para os servidores da Amazon.com.br.
          </p>
          <p>
            A Amazon pode utilizar cookies para registrar que o visitante foi originado através de nossa recomendação, viabilizando o cálculo de comissões por compras qualificadas dentro de uma janela temporal (geralmente de 24 horas a contar do clique).
          </p>
          <p>
            Você pode desativar ou apagar cookies a qualquer momento diretamente nas configurações de privacidade do seu navegador de internet.
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">4. Segurança de Pagamentos e Dados Financeiros</h2>
          <p>
            O Penido Achadinhos <strong>nunca solicita nem armazena números de cartões de crédito, senhas bancárias ou dados de pagamento</strong>. Todo o processo de finalização de compra, pagamento e faturamento é executado com tecnologia SSL de ponta dentro da plataforma segura da Amazon Brasil.
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">5. Seus Direitos (LGPD)</h2>
          <p>
            De acordo com a Lei Geral de Proteção de Dados (LGPD), você tem o direito de solicitar a confirmação da existência de tratamento, correção de dados incompletos ou eliminação de informações enviadas por nossos canais de contato. Para isso, envie uma solicitação para nossa equipe através da página de contato.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
