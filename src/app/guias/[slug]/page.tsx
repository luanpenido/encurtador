import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GUIAS_CATALOG } from '@/data/editorial';

export async function generateStaticParams() {
  return GUIAS_CATALOG.map((guia) => ({
    slug: guia.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guia = GUIAS_CATALOG.find((g) => g.slug === slug);
  if (!guia) return { title: 'Guia não encontrado' };

  return {
    title: `${guia.titulo} | Penido Achadinhos`,
    description: guia.resumo,
  };
}

export default async function GuiaDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guia = GUIAS_CATALOG.find((g) => g.slug === slug);

  if (!guia) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Breadcrumb */}
        <nav aria-label="Navegação" className="text-xs text-slate-400 flex items-center gap-2">
          <Link href="/" className="hover:text-white">Início</Link>
          <span>/</span>
          <Link href="/guias" className="hover:text-white">Guias</Link>
          <span>/</span>
          <span className="text-[#FF9900] truncate max-w-xs">{guia.titulo}</span>
        </nav>

        {/* Header */}
        <header className="space-y-4 border-b border-[#232F3E] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold">
              {guia.categoria}
            </span>
            <span className="text-xs text-slate-400">📅 {guia.dataPublicacao}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-400">⏱️ Leitura: {guia.tempoLeitura}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {guia.titulo}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {guia.resumo}
          </p>
        </header>

        {/* Introducao */}
        <section className="space-y-4">
          {guia.introducao.map((p, idx) => (
            <p key={idx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
              {p}
            </p>
          ))}
        </section>

        {/* Top Picks List */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span>🏆</span> Os Melhores Modelos Selecionados
          </h2>

          <div className="space-y-4">
            {guia.topPicks.map((pick) => (
              <div
                key={pick.posicao}
                className="p-6 rounded-2xl bg-[#131921] border border-[#232F3E] space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 rounded-xl bg-[#FF9900] text-slate-950 font-black text-sm flex items-center justify-center shrink-0">
                      #{pick.posicao}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{pick.titulo}</h3>
                      <div className="text-xs font-semibold text-amber-400">{pick.destaque}</div>
                    </div>
                  </div>
                  <div className="text-lg font-black text-[#FF9900]">{pick.preco}</div>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {pick.motivo}
                </p>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                  <a
                    href={pick.linkAfiliado}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="px-5 py-2.5 rounded-xl bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 font-black text-xs transition-colors"
                  >
                    Ver na Amazon Brasil &rarr;
                  </a>

                  {pick.reviewSlug && (
                    <Link
                      href={`/reviews/${pick.reviewSlug}`}
                      className="px-4 py-2.5 rounded-xl bg-[#232F3E] hover:bg-[#2d3d50] text-slate-200 font-bold text-xs transition-colors border border-[#37475A]"
                    >
                      Ler Análise Completa
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Criterios de Avaliacao */}
        <section className="space-y-4 p-6 rounded-2xl bg-[#131921] border border-[#232F3E]">
          <h2 className="text-lg font-black text-white flex items-center gap-2">
            <span>🔍</span> O Que Você Deve Considerar Antes de Comprar
          </h2>
          <div className="space-y-3">
            {guia.criteriosAvaliacao.map((c, idx) => (
              <div key={idx} className="border-l-2 border-[#FF9900] pl-4 space-y-1">
                <div className="text-xs font-bold text-white">{c.criterio}</div>
                <div className="text-xs text-slate-400 leading-relaxed">{c.descricao}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusao */}
        <section className="space-y-3 border-t border-[#232F3E] pt-6">
          <h2 className="text-xl font-bold text-white">Conclusão</h2>
          {guia.conclusao.map((p, idx) => (
            <p key={idx} className="text-slate-300 leading-relaxed text-sm">
              {p}
            </p>
          ))}
        </section>

      </main>

      <Footer />
    </div>
  );
}
