import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Termos de Uso | Penido Achadinhos',
  description: 'Termos e Condições de Uso do portal Penido Achadinhos.',
};

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-8">
        <div className="border-b border-[#232F3E] pb-6">
          <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Termos de Uso
          </h1>
          <p className="mt-2 text-slate-400 text-sm">
            Condições gerais de navegação e isenção de responsabilidade sobre preços e produtos.
          </p>
        </div>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">1. Natureza do Serviço</h2>
          <p>
            O <strong>Penido Achadinhos</strong> é uma plataforma editorial e de curadoria informativa. Não somos uma loja virtual própria e não mantemos estoque físico. Atuamos como intermediários informativos e participantes do Programa de Associados da Amazon.
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">2. Dinâmica de Preços e Estoque</h2>
          <p>
            Os preços, estoques, cupons de desconto e condições de frete informados em nossos artigos e vitrine refletem o momento de apuração. A Amazon.com.br opera com precificação dinâmica em tempo real, podendo alterar valores e esgotar unidades a qualquer instante sem aviso prévio.
          </p>
          <p className="p-4 rounded-xl bg-[#131921] border border-[#232F3E] text-xs text-amber-300">
            <strong>Importante:</strong> O preço válido e vinculante é sempre aquele exibido no carrinho de compras final dentro do site da Amazon Brasil.
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">3. Garantia e Pós-Venda</h2>
          <p>
            Quaisquer dúvidas a respeito de entrega, devolução, garantia do fabricante, nota fiscal ou defeito de fábrica devem ser tratadas diretamente com o suporte ao cliente da Amazon Brasil ou com o lojista vendedor (marketplace).
          </p>
        </section>

        <section className="space-y-3 text-slate-300 text-sm leading-relaxed">
          <h2 className="text-xl font-bold text-white">4. Propriedade Intelectual</h2>
          <p>
            Os textos, resenhas originais e marcas do Penido Achadinhos são de nossa propriedade intelectual. O logotipo da Amazon e as marcas registradas de produtos pertencem exclusivamente às suas respectivas detentoras legais.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
