import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { REVIEWS_CATALOG } from '@/data/editorial';

export async function generateStaticParams() {
  return REVIEWS_CATALOG.map((rev) => ({
    slug: rev.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = REVIEWS_CATALOG.find((r) => r.slug === slug);
  if (!review) return { title: 'Review não encontrado' };

  return {
    title: `${review.titulo} | Penido Achadinhos`,
    description: review.resumo,
  };
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const review = REVIEWS_CATALOG.find((r) => r.slug === slug);

  if (!review) {
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
          <Link href="/reviews" className="hover:text-white">Reviews</Link>
          <span>/</span>
          <span className="text-[#FF9900] truncate max-w-xs">{review.produto}</span>
        </nav>

        {/* Header do Artigo */}
        <header className="space-y-4 border-b border-[#232F3E] pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold">
              {review.categoriaNome}
            </span>
            <span className="text-xs text-slate-400">📅 {review.dataPublicacao}</span>
            <span className="text-xs text-slate-400">•</span>
            <span className="text-xs text-slate-400">⏱️ Leitura: {review.tempoLeitura}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
            {review.titulo}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {review.resumo}
          </p>

          {/* Aviso de Transparencia de Afiliado no Topo */}
          <div className="p-3.5 rounded-xl bg-[#131921] border border-[#232F3E] text-[11px] text-slate-400 flex items-center gap-2">
            <span>ℹ️</span>
            <span>
              <strong>Transparência:</strong> Este review é independente. Se você comprar por meio dos nossos links, podemos receber uma comissão da Amazon Brasil sem que você pague nada a mais por isso.
            </span>
          </div>
        </header>

        {/* Card Destaque de Compra Rapida + Nota */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#131921] border border-[#232F3E] grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
          <div className="bg-white p-4 rounded-xl flex items-center justify-center h-48 sm:h-56">
            <img
              src={review.imagemUrl}
              alt={review.produto}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          
          <div className="sm:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-400">Veredito da Redação</span>
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-lg font-black text-sm">
                <span>Nota Final:</span>
                <span className="text-base text-white">{review.nota} / 10</span>
              </div>
            </div>

            <h2 className="text-lg font-bold text-white">{review.produto}</h2>
            
            <div>
              <div className="text-xs text-slate-400">Preço verificado na Amazon:</div>
              <div className="text-2xl font-black text-[#FF9900]">{review.precoAproximado}</div>
            </div>

            <div className="pt-2">
              <a
                href={review.linkAfiliado}
                target="_blank"
                rel="noopener noreferrer sponsored"
                className="w-full py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 font-extrabold text-sm bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 shadow-xl shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Ver Preço Atual e Oferta</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
              <p className="text-[10px] text-slate-500 text-center mt-2">
                Compra 100% segura com garantia e política de devolução da Amazon Brasil.
              </p>
            </div>
          </div>
        </div>

        {/* Prós e Contras */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span>⚖️</span> Prós e Contras
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prós */}
            <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 space-y-3">
              <h3 className="text-sm font-black text-emerald-400 flex items-center gap-2">
                <span>✓</span> Pontos Positivos
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {review.pros.map((pro, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 font-bold shrink-0">•</span>
                    <span>{pro}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contras */}
            <div className="p-6 rounded-2xl bg-rose-950/20 border border-rose-800/40 space-y-3">
              <h3 className="text-sm font-black text-rose-400 flex items-center gap-2">
                <span>✕</span> O Que Poderia Ser Melhor
              </h3>
              <ul className="space-y-2 text-xs text-slate-300">
                {review.cons.map((con, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 font-bold shrink-0">•</span>
                    <span>{con}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Secoes Detalhadas do Review */}
        <section className="space-y-8">
          {review.secoes.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h2 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {sec.subtitulo}
              </h2>
              {sec.paragrafos.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-300 leading-relaxed text-sm sm:text-base">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </section>

        {/* Ficha Tecnica */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span>📋</span> Especificações Técnicas
          </h2>
          <div className="overflow-hidden rounded-xl border border-[#232F3E]">
            <table className="w-full text-left text-xs sm:text-sm">
              <tbody className="divide-y divide-[#232F3E]">
                {review.especificacoes.map((spec, idx) => (
                  <tr key={idx} className={idx % 2 === 0 ? 'bg-[#131921]' : 'bg-[#0F141C]'}>
                    <td className="py-3 px-4 font-bold text-slate-300 w-1/3">{spec.rotulo}</td>
                    <td className="py-3 px-4 text-slate-400">{spec.valor}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Para quem é / Para quem não é */}
        <section className="space-y-4">
          <h2 className="text-xl font-black text-white flex items-center gap-2">
            <span>🎯</span> Para Quem Recomendamos?
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <h3 className="text-xs font-bold text-[#FF9900] uppercase tracking-wider">Vale a Pena Se Você:</h3>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {review.paraQuemE.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-emerald-400">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-[#131921] border border-[#232F3E] space-y-2">
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Evite Se Você:</h3>
              <ul className="text-xs text-slate-300 space-y-1.5">
                {review.paraQuemNaoE.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-rose-400">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Veredito Final Box */}
        <section className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-[#131921] to-[#232F3E]/40 border border-[#FF9900]/40 space-y-4">
          <div className="flex items-center gap-2 text-[#FF9900] font-black text-sm uppercase tracking-wider">
            <span>🏆</span> Veredito Final Penido Achadinhos
          </div>
          <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
            {review.veredito}
          </p>

          <div className="pt-2">
            <a
              href={review.linkAfiliado}
              target="_blank"
              rel="noopener noreferrer sponsored"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 font-black text-sm transition-all"
            >
              <span>Ver Oferta na Loja</span>
              <span>&rarr;</span>
            </a>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
