import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Sobre Nós | Penido Achadinhos - Nossa Metodologia e Compromisso',
  description: 'Conheça o Penido Achadinhos: quem somos, nossa missão editorial, como testamos produtos e nossos critérios de recomendação e independência.',
};

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        
        {/* Titulo Header */}
        <div className="border-b border-[#232F3E] pb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold mb-4">
            Transparência & Ética Editorial
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Sobre o Penido Achadinhos
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Somos um portal brasileiro focado em curadoria de ofertas, resenhas honestas e guias de compra comparativos para ajudar você a fazer escolhas inteligentes e econômicas na Amazon Brasil.
          </p>
        </div>

        {/* Nossa Missao */}
        <section className="space-y-4">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🎯</span> Nossa Missão
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            A internet está inundada por milhares de ofertas diárias, mas muitas delas não entregam a qualidade prometida ou mascaram descontos fictícios. A missão do <strong>Penido Achadinhos</strong> é filtrar o ruído: selecionamos somente produtos que realmente valem o investimento, avaliando custo-benefício, reputação da marca e satisfação real de quem comprou.
          </p>
        </section>

        {/* Metodologia de Avaliacao */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🔬</span> Como Avaliamos os Produtos
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Nossos reviews e guias são construídos seguindo um rigoroso processo de auditoria de 4 etapas:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <div className="text-xl font-bold text-[#FF9900]">1. Histórico de Preços Real</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Rastreamos a evolução de preços dos últimos 90 dias para garantir que a promoção seja genuína e que o leitor não pague o valor cheio por engano.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <div className="text-xl font-bold text-[#FF9900]">2. Análise Técnica e Especificações</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Estudamos a ficha técnica com profundidade: materiais, durabilidade, conectividade e diferenciais reais frente aos principais concorrentes da mesma faixa de preço.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <div className="text-xl font-bold text-[#FF9900]">3. Feedback de Compradores Reais</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Lemos e catalogamos centenas de avaliações verificadas de compradores na Amazon para identificar pontos fracos crônicos ou virtudes que não constam no manual do fabricante.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <div className="text-xl font-bold text-[#FF9900]">4. Pontos Negativos em Destaque</div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Acreditamos na verdade: se um produto tem bateria fraca ou plástico frágil, apontamos com clareza na seção "Contras" e indicamos alternativas melhores.
              </p>
            </div>
          </div>
        </section>

        {/* Independencia Editorial & Afiliados */}
        <section className="space-y-4 p-6 rounded-2xl bg-[#131921] border border-[#232F3E]">
          <h2 className="text-2xl font-bold text-white flex items-center gap-2">
            <span>🤝</span> Independência Editorial & Divulgação de Afiliados
          </h2>
          <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
            Participamos do <strong>Programa de Associados da Amazon Brasil</strong>. Isso significa que, quando você clica em nossos links e realiza uma compra na Amazon, podemos receber uma pequena comissão sobre o valor da venda.
          </p>
          <div className="p-4 rounded-xl bg-[#0F141C] border border-[#37475A] text-xs text-slate-300 leading-relaxed space-y-2">
            <p className="font-bold text-amber-400">
              Isso afeta o preço que você paga? Absolutamente NÃO.
            </p>
            <p>
              O preço na Amazon.com.br é exatamente o mesmo, com os mesmos cupons e os mesmos benefícios do frete Prime. Essa comissão é paga pela própria Amazon para remunerar nosso trabalho editorial contínuo de pesquisa e manutenção dos servidores.
            </p>
          </div>
        </section>

        {/* CTA final */}
        <div className="border-t border-[#232F3E] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold text-white">Dúvidas ou sugestões de produtos?</h3>
            <p className="text-xs text-slate-400">Nossa equipe está sempre aberta a ouvir você.</p>
          </div>
          <Link
            href="/contato"
            className="px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-amber-400 text-slate-950 font-bold text-sm transition-all"
          >
            Fale com a Nossa Equipe &rarr;
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
