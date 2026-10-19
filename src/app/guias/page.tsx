import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { GUIAS_CATALOG } from '@/data/editorial';

export const metadata = {
  title: 'Guias de Compra e Comparativos | Penido Achadinhos',
  description: 'Guias definitivos e comparativos passo a passo para você escolher os melhores produtos na Amazon sem gastar mais por isso.',
};

export default function GuiasIndexPage() {
  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        <div className="border-b border-[#232F3E] pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold mb-3">
            📚 Guias Editoriais Comparativos
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Guias de Compra Definitivos
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Comparações lado a lado, critérios técnicos e recomendações sinceras para orientar a sua decisão de compra.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {GUIAS_CATALOG.map((guia) => (
            <article
              key={guia.id}
              className="bg-[#131921] border border-[#232F3E] hover:border-amber-500/50 rounded-2xl p-6 sm:p-8 flex flex-col justify-between space-y-6 transition-all hover:-translate-y-1 shadow-lg group"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="text-[#FF9900] font-bold">{guia.categoria}</span>
                  <span>•</span>
                  <span>⏱️ {guia.tempoLeitura}</span>
                  <span>•</span>
                  <span>📅 {guia.dataPublicacao}</span>
                </div>

                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#FF9900] transition-colors leading-snug">
                  <Link href={`/guias/${guia.slug}`}>
                    {guia.titulo}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {guia.resumo}
                </p>
              </div>

              {/* Top Picks Preview */}
              <div className="p-4 rounded-xl bg-[#0F141C] border border-[#232F3E] space-y-2">
                <div className="text-xs font-bold text-slate-300">Nossas Principais Escolhas:</div>
                <ul className="text-xs text-slate-400 space-y-1">
                  {guia.topPicks.map((pick) => (
                    <li key={pick.posicao} className="flex items-center gap-2">
                      <span className="w-4 h-4 rounded-full bg-[#FF9900] text-slate-950 font-black text-[10px] flex items-center justify-center">
                        {pick.posicao}
                      </span>
                      <strong className="text-white">{pick.titulo}</strong>
                      <span className="text-slate-500 text-[11px]">({pick.destaque})</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Link
                  href={`/guias/${guia.slug}`}
                  className="w-full py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-black bg-[#232F3E] hover:bg-[#FF9900] text-slate-200 hover:text-slate-950 transition-colors border border-[#37475A]"
                >
                  <span>Acessar o Guia Completo</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
