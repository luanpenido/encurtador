import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { REVIEWS_CATALOG } from '@/data/editorial';

export const metadata = {
  title: 'Reviews e Avaliações de Produtos | Penido Achadinhos',
  description: 'Confira análises completas, prós e contras, notas e testes reais dos produtos mais populares da Amazon Brasil.',
};

export default function ReviewsIndexPage() {
  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 space-y-10">
        
        {/* Header da Pagina */}
        <div className="border-b border-[#232F3E] pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold mb-3">
            ⭐ Avaliações Honestadas e Detalhadas
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Reviews e Testes de Produtos
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-3xl leading-relaxed">
            Nossa equipe analisa cada detalhe antes de você comprar: verificamos acabamento, durabilidade, som, consumo e se o produto realmente entrega o que promete pelo preço da Amazon.
          </p>
        </div>

        {/* Grade de Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {REVIEWS_CATALOG.map((rev) => (
            <article 
              key={rev.id}
              className="bg-[#131921] border border-[#232F3E] hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 shadow-lg group"
            >
              {/* Top Image & Nota */}
              <div className="relative h-56 bg-white p-6 flex items-center justify-center overflow-hidden border-b border-[#232F3E]">
                <img
                  src={rev.imagemUrl}
                  alt={rev.produto}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 bg-[#0F141C]/90 backdrop-blur px-2.5 py-1 rounded-md text-[11px] font-extrabold text-[#FF9900] border border-[#232F3E]">
                  {rev.categoriaNome}
                </div>
                <div className="absolute top-3 right-3 bg-emerald-500 text-slate-950 font-black px-2.5 py-1 rounded-md text-xs shadow-md">
                  Nota {rev.nota}/10
                </div>
              </div>

              {/* Conteudo */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] text-slate-400">
                    <span>📅 {rev.dataPublicacao}</span>
                    <span>•</span>
                    <span>⏱️ {rev.tempoLeitura}</span>
                  </div>
                  <h2 className="text-base font-bold text-white group-hover:text-[#FF9900] transition-colors leading-snug">
                    <Link href={`/reviews/${rev.slug}`}>
                      {rev.titulo}
                    </Link>
                  </h2>
                  <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                    {rev.resumo}
                  </p>
                </div>

                {/* Pros Highlights */}
                <div className="pt-2 border-t border-[#232F3E] space-y-1.5">
                  <div className="text-[11px] font-bold text-emerald-400">Pontos Fortes:</div>
                  <ul className="text-[11px] text-slate-300 space-y-1">
                    {rev.pros.slice(0, 2).map((p, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-emerald-400 font-bold">✓</span>
                        <span className="line-clamp-1">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Botao de Acesso */}
                <div className="pt-3">
                  <Link
                    href={`/reviews/${rev.slug}`}
                    className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-black bg-[#232F3E] hover:bg-[#FF9900] text-slate-200 hover:text-slate-950 transition-colors border border-[#37475A]"
                  >
                    <span>Ler Análise Completa</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </main>

      <Footer />
    </div>
  );
}
