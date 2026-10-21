'use client';

import React, { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { REVIEWS_CATALOG, GUIAS_CATALOG, WHATSAPP_VIP_LINK, AMAZON_TAG } from '@/data/editorial';

interface AmazonDeal {
  id: string;
  titulo: string;
  linkAfiliado: string;
  precoDesconto: number;
  precoOriginal?: number;
  percentualDesconto?: number;
  urlImagem?: string;
  marketplace: string;
  categoria?: string;
  cupom?: string;
  enviadoEm?: string;
  isBestSeller?: boolean;
  isBug?: boolean;
  isPrime?: boolean;
  reviewSlug?: string;
}

const AMAZON_CATALOG_BASE: AmazonDeal[] = [
  {
    id: 'AMZ_ECHO_POP',
    titulo: 'Amazon Echo Pop Smart Speaker compacto com som envolvente e Alexa - Cor Preta',
    precoOriginal: 349.00,
    precoDesconto: 242.10,
    percentualDesconto: 31,
    urlImagem: 'https://m.media-amazon.com/images/I/61jby3y93gL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'alexa',
    linkAfiliado: `https://www.amazon.com.br/dp/B0B1NXW527?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true,
    reviewSlug: 'review-amazon-echo-pop-alexa'
  },
  {
    id: 'AMZ_KINDLE_11',
    titulo: 'Kindle 11ª Geração Mais leve e compacto com tela antirreflexo de 300 ppi e 16GB',
    precoOriginal: 499.00,
    precoDesconto: 424.00,
    percentualDesconto: 15,
    urlImagem: 'https://m.media-amazon.com/images/I/71B1w330zBL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'alexa',
    linkAfiliado: `https://www.amazon.com.br/dp/B09B8V1LZ3?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true,
    reviewSlug: 'review-kindle-11-geracao-vale-a-pena'
  },
  {
    id: 'AMZ_AIRFRYER_MONDIAL',
    titulo: 'Fritadeira Sem Óleo Air Fryer Mondial Family Inox 4L 1500W Antiaderente',
    precoOriginal: 399.90,
    precoDesconto: 279.90,
    percentualDesconto: 30,
    urlImagem: 'https://m.media-amazon.com/images/I/71p0Wf84HUL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'casa',
    linkAfiliado: `https://www.amazon.com.br/dp/B085V8HFFJ?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true,
    reviewSlug: 'review-airfryer-mondial-family-inox-4l'
  },
  {
    id: 'AMZ_FONE_QCY',
    titulo: 'Fone de Ouvido Bluetooth QCY T13 TWS 4 Microfones Cancelamento de Ruído 30h Bateria',
    precoOriginal: 189.90,
    precoDesconto: 129.00,
    percentualDesconto: 32,
    urlImagem: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'tecnologia',
    linkAfiliado: `https://www.amazon.com.br/dp/B09G3B7CQ5?tag=${AMAZON_TAG}`,
    isPrime: true,
    reviewSlug: 'review-fone-bluetooth-qcy-t13-tws'
  },
  {
    id: 'AMZ_STANLEY_COPO',
    titulo: 'Copo Térmico de Cerveja com Tampa 473ml Stanley Aço Inox Mantém Gelado 4.5h',
    precoOriginal: 199.00,
    precoDesconto: 139.90,
    percentualDesconto: 30,
    urlImagem: 'https://m.media-amazon.com/images/I/61NlBqV8JHL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'casa',
    linkAfiliado: `https://www.amazon.com.br/dp/B084G47743?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true,
    reviewSlug: 'review-copo-termico-stanley-473ml'
  },
  {
    id: 'AMZ_WELLA_OIL',
    titulo: 'Máscara Capilar Oil Reflections Wella Professionals 500ml - Nutrição e Brilho',
    precoOriginal: 302.00,
    precoDesconto: 195.69,
    percentualDesconto: 35,
    urlImagem: 'https://m.media-amazon.com/images/I/61WEIF5QCrL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'beleza',
    linkAfiliado: `https://www.amazon.com.br/dp/B0BM4RN4RL?tag=${AMAZON_TAG}`,
    isPrime: true,
    reviewSlug: 'review-mascara-wella-oil-reflections'
  },
  {
    id: 'AMZ_FIRE_TV',
    titulo: 'Fire TV Stick Lite Streaming em Full HD com Controle Remoto por Voz com Alexa',
    precoOriginal: 299.00,
    precoDesconto: 215.10,
    percentualDesconto: 28,
    urlImagem: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'alexa',
    linkAfiliado: `https://www.amazon.com.br/dp/B084DWCZY6?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: 'AMZ_WAP_FURADEIRA',
    titulo: 'WAP Parafusadeira e Furadeira sem Fio 12V BPF 12K3 com Maleta e Acessórios',
    precoOriginal: 359.90,
    precoDesconto: 169.90,
    percentualDesconto: 53,
    urlImagem: 'https://m.media-amazon.com/images/I/71wZqXGvWbL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'ferramentas',
    linkAfiliado: `https://www.amazon.com.br/dp/B09V1SM8QB?tag=${AMAZON_TAG}`,
    isBug: true,
    isPrime: true
  }
];

export default function VitrineAmazonPage() {
  const [deals, setDeals] = useState<AmazonDeal[]>(AMAZON_CATALOG_BASE);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  useEffect(() => {
    async function loadDeals() {
      try {
        const res = await fetch('/api/deals?marketplace=amazon&limit=100');
        if (res.ok) {
          const data = await res.json();
          if (data.deals && Array.isArray(data.deals) && data.deals.length > 0) {
            const amazonOnly = data.deals.filter((d: any) => 
              (d.marketplace || '').toLowerCase().includes('amazon') ||
              (d.linkAfiliado || '').includes('amazon') ||
              (d.linkAfiliado || '').includes('amzn.to')
            );
            if (amazonOnly.length > 0) {
              setDeals(amazonOnly);
            }
          }
        }
      } catch (err) {
        console.warn('Usando catálogo curado Amazon:', err);
      }
    }
    loadDeals();
  }, []);

  const handleCopyCoupon = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCoupon(code);
    setTimeout(() => setCopiedCoupon(null), 2500);
  };

  const filteredDeals = useMemo(() => {
    let result = [...deals];

    if (selectedCategory !== 'todos') {
      result = result.filter(d => {
        if (selectedCategory === 'alexa') {
          return d.categoria === 'alexa' || /echo|alexa|fire tv|kindle/i.test(d.titulo);
        }
        if (selectedCategory === 'beleza') {
          return d.categoria === 'beleza' || /cabelo|shampoo|mascara|hidratante|wella|lola|cetaphil|creme/i.test(d.titulo);
        }
        if (selectedCategory === 'casa') {
          return d.categoria === 'casa' || /air fryer|fritadeira|copo|stanley|cozinha|panela|aspirador/i.test(d.titulo);
        }
        if (selectedCategory === 'ferramentas') {
          return d.categoria === 'ferramentas' || /wap|parafusadeira|furadeira|ferramenta|maleta|vonder/i.test(d.titulo);
        }
        if (selectedCategory === 'tecnologia') {
          return d.categoria === 'tecnologia' || /xiaomi|fone|bluetooth|celular|smart|gamer|teclado/i.test(d.titulo);
        }
        return true;
      });
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(d => d.titulo.toLowerCase().includes(q));
    }

    return result;
  }, [deals, selectedCategory, searchQuery]);

  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      {/* Hero Section Editorial */}
      <section className="relative overflow-hidden py-12 sm:py-16 border-b border-[#232F3E] bg-gradient-to-b from-[#131921] to-[#0F141C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold">
            Portal Editorial Independente de Avaliações
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Avaliações Sinceras e <span className="text-[#FF9900]">Achadinhos Selecionados</span>
          </h1>
          
          <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Testamos produtos, auditamos o histórico de preços e selecionamos as melhores opções com procedência e entrega garantida.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/reviews"
              className="px-6 py-3 rounded-xl bg-[#FF9900] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all"
            >
              ⭐ Ver Reviews de Produtos
            </Link>
            <Link
              href="/guias"
              className="px-6 py-3 rounded-xl bg-[#232F3E] hover:bg-[#2d3d50] text-slate-200 font-bold text-xs sm:text-sm transition-all border border-[#37475A]"
            >
              📚 Guias de Compra
            </Link>
          </div>
        </div>
      </section>

      {/* Secao: Reviews em Destaque (Vital para Auditoria da Amazon) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 border-b border-[#232F3E] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
          <div>
            <div className="text-xs font-bold text-[#FF9900] uppercase tracking-wider">Conteúdo Editorial Verificado</div>
            <h2 className="text-2xl font-black text-white">Análises e Reviews em Destaque</h2>
          </div>
          <Link href="/reviews" className="text-xs font-bold text-amber-400 hover:underline">
            Ver todos os reviews &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS_CATALOG.slice(0, 3).map((rev) => (
            <article
              key={rev.id}
              className="bg-[#131921] border border-[#232F3E] hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all hover:-translate-y-1 group"
            >
              <div className="h-44 bg-white p-4 flex items-center justify-center relative border-b border-[#232F3E]">
                <img
                  src={rev.imagemUrl}
                  alt={rev.produto}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                />
                <span className="absolute top-2 right-2 bg-emerald-500 text-slate-950 font-black px-2 py-0.5 rounded text-[11px]">
                  Nota {rev.nota}/10
                </span>
              </div>
              <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[11px] font-bold text-slate-400">{rev.categoriaNome}</div>
                  <h3 className="text-sm font-bold text-white group-hover:text-[#FF9900] transition-colors line-clamp-2 mt-1">
                    {rev.titulo}
                  </h3>
                </div>
                <Link
                  href={`/reviews/${rev.slug}`}
                  className="text-xs font-bold text-[#FF9900] hover:underline flex items-center gap-1 pt-2"
                >
                  <span>Ler análise completa</span>
                  <span>&rarr;</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Secao de Ofertas e Achadinhos */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-6 flex-1">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-white">Achadinhos do Dia Verificados</h2>
            <p className="text-xs text-slate-400 mt-1">
              Produtos com queda de preço monitorada e links verificados
            </p>
          </div>

          {/* Filtros Rapidos */}
          <div className="flex flex-wrap gap-2">
            {[
              { id: 'todos', label: 'Todas' },
              { id: 'alexa', label: 'Alexa & Dispositivos' },
              { id: 'tecnologia', label: 'Tecnologia' },
              { id: 'casa', label: 'Casa & Cozinha' },
              { id: 'beleza', label: 'Beleza' },
              { id: 'ferramentas', label: 'Ferramentas' },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-[#FF9900] text-slate-950'
                    : 'bg-[#131921] text-slate-300 hover:text-white border border-[#232F3E]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredDeals.map((deal) => {
            const linkWithTag = deal.linkAfiliado.includes('tag=')
              ? deal.linkAfiliado
              : `${deal.linkAfiliado}${deal.linkAfiliado.includes('?') ? '&' : '?'}tag=${AMAZON_TAG}`;

            return (
              <article
                key={deal.id}
                className="bg-[#131921] border border-[#232F3E] hover:border-amber-500/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-lg group"
              >
                <div>
                  <div className="relative h-48 bg-white p-4 flex items-center justify-center border-b border-[#232F3E]">
                    {deal.percentualDesconto && deal.percentualDesconto > 0 && (
                      <span className="absolute top-2 left-2 bg-rose-600 text-white text-[10px] font-black px-2 py-0.5 rounded-md">
                        -{deal.percentualDesconto}% OFF
                      </span>
                    )}
                    <img
                      src={deal.urlImagem}
                      alt={deal.titulo}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 space-y-2">
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-amber-400 font-extrabold">Oferta Verificada</span>
                      <span className="text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded font-black border border-emerald-800/60">DISPONÍVEL</span>
                    </div>

                    <h3 className="text-xs font-semibold text-slate-100 line-clamp-2 group-hover:text-[#FF9900] transition-colors">
                      {deal.titulo}
                    </h3>

                    <div className="pt-1">
                      {deal.precoOriginal && deal.precoOriginal > deal.precoDesconto && (
                        <div className="text-[11px] text-slate-400 line-through">
                          De R$ {deal.precoOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                      )}
                      <div className="text-lg font-black text-white">
                        <span className="text-xs text-[#FF9900]">R$ </span>
                        {deal.precoDesconto.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-4 pt-0 space-y-2">
                  {deal.reviewSlug && (
                    <Link
                      href={`/reviews/${deal.reviewSlug}`}
                      className="w-full py-1.5 px-3 rounded-lg flex items-center justify-center text-[11px] font-bold bg-[#232F3E] text-slate-300 hover:text-white border border-[#37475A] transition-colors"
                    >
                      ⭐ Ler Review Completo
                    </Link>
                  )}

                  <a
                    href={linkWithTag}
                    target="_blank"
                    rel="noopener noreferrer sponsored"
                    className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-black bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span>Ver Oferta na Loja</span>
                    <span>&rarr;</span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
}
