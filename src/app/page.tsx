'use client';

import React, { useState, useEffect, useMemo } from 'react';

interface Deal {
  id: string;
  titulo: string;
  linkAfiliado: string;
  precoDesconto: number;
  precoOriginal?: number;
  percentualDesconto?: number;
  urlImagem?: string;
  marketplace: string;
  cupom?: string;
  enviadoEm?: string;
  isBestSeller?: boolean;
  isBug?: boolean;
}

const AMAZON_TAG = 'penido005-20';
const WHATSAPP_VIP_LINK = 'https://chat.whatsapp.com/KWSSacbkawP5QDgw79KRfa';

// Catalogo inicial de alta conversao da Amazon para renderizacao instantanea e fallback
const INITIAL_AMAZON_DEALS: Deal[] = [
  {
    id: 'AMZ_B0B1NXW527',
    titulo: 'Amazon Echo Pop Smart Speaker compacto com som envolvente e Alexa',
    precoOriginal: 349.00,
    precoDesconto: 242.10,
    percentualDesconto: 31,
    urlImagem: 'https://m.media-amazon.com/images/I/61jby3y93gL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B0B1NXW527?tag=${AMAZON_TAG}`,
    isBestSeller: true
  },
  {
    id: 'AMZ_B084DWCZY6',
    titulo: 'Fire TV Stick Lite Streaming em Full HD com Controle Remoto por Voz com Alexa',
    precoOriginal: 299.00,
    precoDesconto: 215.10,
    percentualDesconto: 28,
    urlImagem: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B084DWCZY6?tag=${AMAZON_TAG}`,
    isBestSeller: true
  },
  {
    id: 'AMZ_B09B8V1LZ3',
    titulo: 'Kindle 11a Geracao Mais leve e compacto com tela antirreflexo de 300 ppi',
    precoOriginal: 499.00,
    precoDesconto: 424.00,
    percentualDesconto: 15,
    urlImagem: 'https://m.media-amazon.com/images/I/71B1w330zBL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B09B8V1LZ3?tag=${AMAZON_TAG}`,
    isBestSeller: true
  },
  {
    id: 'AMZ_B074LTNQBP',
    titulo: 'Morte Subita Mascara Super Hidratante 450g - Lola Cosmetics',
    precoOriginal: 59.90,
    precoDesconto: 39.48,
    percentualDesconto: 34,
    urlImagem: 'https://m.media-amazon.com/images/I/71vJXnkK-NL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B074LTNQBP?tag=${AMAZON_TAG}`
  },
  {
    id: 'AMZ_B079VXJK79',
    titulo: 'Cetaphil Creme Hidratante Corporal e Facial Pele Seca e Sensivel 453g',
    precoOriginal: 104.90,
    precoDesconto: 89.90,
    percentualDesconto: 14,
    urlImagem: 'https://m.media-amazon.com/images/I/71l4OrWPpLL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B079VXJK79?tag=${AMAZON_TAG}`
  },
  {
    id: 'AMZ_B09P47S7M3',
    titulo: 'WAP Parafusadeira e Furadeira sem Fio 12V BPF 12K3 com Maleta e Acessorios',
    precoOriginal: 359.90,
    precoDesconto: 169.90,
    percentualDesconto: 53,
    urlImagem: 'https://m.media-amazon.com/images/I/71wZqXGvWbL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B09P47S7M3?tag=${AMAZON_TAG}`,
    isBug: true
  },
  {
    id: 'AMZ_B085V8HFFJ',
    titulo: 'Fritadeira Sem Oleo Air Fryer Mondial Family Inox 4L 1500W',
    precoOriginal: 399.90,
    precoDesconto: 279.90,
    percentualDesconto: 30,
    urlImagem: 'https://m.media-amazon.com/images/I/71p0Wf84HUL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B085V8HFFJ?tag=${AMAZON_TAG}`
  },
  {
    id: 'AMZ_B098FL4V67',
    titulo: 'Xiaomi Redmi Note 13 4G 8GB RAM 256GB Versao Global',
    precoOriginal: 1499.00,
    precoDesconto: 1149.00,
    percentualDesconto: 23,
    urlImagem: 'https://m.media-amazon.com/images/I/61NlBqV8JHL._AC_UL640_.jpg',
    marketplace: 'amazon',
    linkAfiliado: `https://www.amazon.com.br/dp/B098FL4V67?tag=${AMAZON_TAG}`,
    isBestSeller: true
  }
];

export default function VitrinePage() {
  const [deals, setDeals] = useState<Deal[]>(INITIAL_AMAZON_DEALS);
  const [loading, setLoading] = useState(true);
  const [selectedMarketplace, setSelectedMarketplace] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('recent');
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  useEffect(() => {
    async function loadDeals() {
      try {
        const res = await fetch('/api/deals?limit=100');
        if (res.ok) {
          const data = await res.json();
          if (data.deals && Array.isArray(data.deals) && data.deals.length > 0) {
            setDeals(data.deals);
          }
        }
      } catch (err) {
        console.warn('API indisponivel, usando catalogo base:', err);
      } finally {
        setLoading(false);
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

    if (selectedMarketplace !== 'todos') {
      result = result.filter(d => (d.marketplace || '').toLowerCase() === selectedMarketplace.toLowerCase());
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(d => d.titulo.toLowerCase().includes(q));
    }

    if (sortBy === 'discount') {
      result.sort((a, b) => (b.percentualDesconto || 0) - (a.percentualDesconto || 0));
    } else if (sortBy === 'price_asc') {
      result.sort((a, b) => a.precoDesconto - b.precoDesconto);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.precoDesconto - a.precoDesconto);
    }

    return result;
  }, [deals, selectedMarketplace, searchQuery, sortBy]);

  const getMarketplaceBadge = (market: string) => {
    const m = (market || 'amazon').toLowerCase();
    if (m.includes('amazon')) {
      return {
        name: 'Amazon Brasil',
        bgColor: 'bg-amber-100 text-amber-900 border-amber-300',
        btnColor: 'bg-[#FF9900] hover:bg-[#e68a00] text-gray-950 font-bold',
        icon: '📦'
      };
    }
    if (m.includes('mercado') || m === 'mercadolivre') {
      return {
        name: 'Mercado Livre',
        bgColor: 'bg-yellow-100 text-yellow-900 border-yellow-300',
        btnColor: 'bg-[#FFE600] hover:bg-[#ecd500] text-gray-950 font-bold',
        icon: '💛'
      };
    }
    if (m.includes('shopee')) {
      return {
        name: 'Shopee',
        bgColor: 'bg-orange-100 text-orange-900 border-orange-300',
        btnColor: 'bg-[#EE4D2D] hover:bg-[#d94426] text-white font-bold',
        icon: '🛍️'
      };
    }
    if (m.includes('magalu')) {
      return {
        name: 'Magazine Luiza',
        bgColor: 'bg-blue-100 text-blue-900 border-blue-300',
        btnColor: 'bg-[#0086FF] hover:bg-[#0074db] text-white font-bold',
        icon: '🏪'
      };
    }
    return {
      name: 'Oferta Oficial',
      bgColor: 'bg-gray-100 text-gray-800 border-gray-300',
      btnColor: 'bg-gray-900 hover:bg-gray-800 text-white font-bold',
      icon: '🔥'
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
      
      {/* Top Banner de Alerta VIP */}
      <div className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md">
        <span className="inline-block w-2 h-2 rounded-full bg-white animate-ping" />
        <span>🔥 Ofertas e bugs de preço verificados hoje! Receba no WhatsApp antes que acabe o estoque:</span>
        <a 
          href={WHATSAPP_VIP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="underline hover:text-emerald-100 ml-1 font-bold whitespace-nowrap"
        >
          Entrar no Grupo VIP &rarr;
        </a>
      </div>

      {/* Header Principal */}
      <header className="border-b border-slate-800/80 bg-slate-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center shadow-lg shadow-amber-500/20 text-2xl font-black text-slate-950">
              ⚡
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white flex items-center gap-2">
                Penido <span className="text-amber-400">Ofertas</span>
              </h1>
              <p className="text-xs text-slate-400 hidden sm:block">Vitrine Oficial de Achadinhos & Promoções</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/encurtar"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800/70 hover:bg-slate-800 border border-slate-700 rounded-xl transition-all"
            >
              🔗 Encurtador
            </a>
            <a
              href={WHATSAPP_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white text-xs sm:text-sm font-bold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.549 1.771.849 2.796.849 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.768-5.77-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 1.545-.443 2.986-1.209 4.209l1.178 4.302-4.408-1.156c-1.173.687-2.544 1.077-4.001 1.077-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8z" />
              </svg>
              <span>Grupo VIP</span>
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-10 sm:py-16 border-b border-slate-800/60 bg-gradient-to-b from-slate-900/60 to-slate-950/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Promoções com Desconto Real Verificadas
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Achadinhos & Ofertas <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">Amazon Brasil</span>
          </h2>
          
          <p className="mt-4 text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitoramos quedas de preço e cupons nas principais lojas oficiais. Clique nas ofertas para comprar com segurança diretamente na Amazon.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href={WHATSAPP_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-600/30 transition-all hover:-translate-y-0.5 inline-flex items-center gap-2"
            >
              <span>Entrar no Grupo VIP do WhatsApp</span>
              <span className="bg-emerald-700/80 text-xs px-2 py-0.5 rounded-md font-semibold">Grátis</span>
            </a>
          </div>
        </div>
      </section>

      {/* Controles de Filtro e Pesquisa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-slate-900/90 border border-slate-800 p-4 rounded-2xl shadow-xl">
          
          {/* Categorias / Marketplaces */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'todos', label: '🔥 Todas', count: deals.length },
              { id: 'amazon', label: '📦 Amazon', count: deals.filter(d => (d.marketplace || '').toLowerCase().includes('amazon')).length },
              { id: 'mercadolivre', label: '💛 Mercado Livre', count: deals.filter(d => (d.marketplace || '').toLowerCase().includes('mercado')).length },
              { id: 'shopee', label: '🛍️ Shopee', count: deals.filter(d => (d.marketplace || '').toLowerCase().includes('shopee')).length },
              { id: 'magalu', label: '🏪 Magalu', count: deals.filter(d => (d.marketplace || '').toLowerCase().includes('magalu')).length },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedMarketplace(tab.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedMarketplace === tab.id
                    ? 'bg-amber-500 text-slate-950 shadow-md font-bold'
                    : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Busca e Ordenacao */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Buscar produto..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white text-xs sm:text-sm rounded-xl pl-9 pr-3 py-2.5 focus:outline-none focus:border-amber-400"
              />
              <span className="absolute left-3 top-2.5 text-slate-400 text-sm">🔍</span>
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-slate-400 hover:text-white text-xs"
                >
                  ✕
                </button>
              )}
            </div>

            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value)}
              className="bg-slate-950 border border-slate-700 text-slate-300 text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-amber-400"
            >
              <option value="recent">⚡ Mais Recentes</option>
              <option value="discount">🔥 Maior Desconto</option>
              <option value="price_asc">💰 Menor Preço</option>
              <option value="price_desc">💎 Maior Preço</option>
            </select>
          </div>
        </div>
      </section>

      {/* Grid de Ofertas */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Produtos em Destaque</span>
            <span className="text-xs bg-slate-800 text-slate-400 px-2 py-0.5 rounded-full">
              {filteredDeals.length} {filteredDeals.length === 1 ? 'oferta' : 'ofertas'}
            </span>
          </h3>
        </div>

        {filteredDeals.length === 0 ? (
          <div className="text-center py-20 bg-slate-900/50 border border-slate-800 rounded-3xl p-8">
            <div className="text-5xl mb-3">🔎</div>
            <h4 className="text-lg font-bold text-white">Nenhum produto encontrado</h4>
            <p className="text-sm text-slate-400 mt-1">Tente pesquisar por outro termo ou selecione todas as lojas.</p>
            <button
              onClick={() => { setSelectedMarketplace('todos'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs rounded-xl font-semibold"
            >
              Limpar Filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDeals.map((deal) => {
              const badge = getMarketplaceBadge(deal.marketplace);
              const isAmazon = (deal.marketplace || '').toLowerCase().includes('amazon');

              return (
                <article
                  key={deal.id}
                  className="bg-slate-900 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/5 group"
                >
                  <div>
                    {/* Imagem do Produto com Badge de Desconto */}
                    <div className="relative bg-white p-4 h-56 flex items-center justify-center overflow-hidden">
                      {deal.percentualDesconto && deal.percentualDesconto > 0 ? (
                        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md z-10 uppercase tracking-wider">
                          -{deal.percentualDesconto}% OFF
                        </div>
                      ) : null}

                      {deal.isBug && (
                        <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-xs font-black px-2 py-0.5 rounded-md shadow z-10 animate-pulse">
                          ⚡ BUG PREÇO
                        </div>
                      )}

                      {deal.isBestSeller && !deal.isBug && (
                        <div className="absolute top-3 right-3 bg-indigo-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-md shadow z-10">
                          ⭐ MAIS VENDIDO
                        </div>
                      )}

                      {deal.urlImagem ? (
                        <img
                          src={deal.urlImagem}
                          alt={deal.titulo}
                          className="max-h-48 max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                          loading="lazy"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="text-4xl text-slate-300">📦</div>
                      )}
                    </div>

                    {/* Conteudo do Card */}
                    <div className="p-4 space-y-3">
                      {/* Badge da Loja */}
                      <div className="flex items-center justify-between">
                        <span className={`inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-md border ${badge.bgColor}`}>
                          <span>{badge.icon}</span>
                          <span>{badge.name}</span>
                        </span>
                      </div>

                      {/* Titulo */}
                      <h4 className="text-sm font-semibold text-slate-100 line-clamp-2 leading-snug group-hover:text-amber-400 transition-colors" title={deal.titulo}>
                        {deal.titulo}
                      </h4>

                      {/* Bloco de Preco */}
                      <div className="pt-1">
                        {deal.precoOriginal && deal.precoOriginal > deal.precoDesconto ? (
                          <div className="text-xs text-slate-400 line-through">
                            De R$ {deal.precoOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        ) : (
                          <div className="text-xs text-slate-500">Menor preço verificado</div>
                        )}

                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-xs font-bold text-amber-400">R$</span>
                          <span className="text-2xl font-black text-white tracking-tight">
                            {deal.precoDesconto.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </span>
                        </div>
                      </div>

                      {/* Cupom se houver */}
                      {deal.cupom && (
                        <div className="bg-amber-500/10 border border-dashed border-amber-500/40 rounded-lg p-2 flex items-center justify-between gap-2">
                          <div className="text-[11px] text-amber-300 font-mono font-bold truncate">
                            🎟️ {deal.cupom}
                          </div>
                          <button
                            onClick={() => handleCopyCoupon(deal.cupom!)}
                            className="text-[10px] font-bold bg-amber-500 hover:bg-amber-400 text-slate-950 px-2 py-1 rounded transition-colors whitespace-nowrap"
                          >
                            {copiedCoupon === deal.cupom ? 'Copiado!' : 'Copiar'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botao de Compra Direto */}
                  <div className="p-4 pt-0">
                    <a
                      href={deal.linkAfiliado}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className={`w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] ${badge.btnColor}`}
                    >
                      <span>{isAmazon ? 'Comprar na Amazon' : 'Ver Oferta na Loja'}</span>
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </main>

      {/* Footer com Disclaimer Obrigatorio da Amazon */}
      <footer className="border-t border-slate-800 bg-slate-950 py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-slate-800/80">
            <div>
              <div className="flex items-center gap-2 text-white font-extrabold text-base mb-2">
                <span>⚡ Penido Ofertas</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Portal de curadoria de ofertas, achadinhos e cupons de desconto verificado em tempo real para economizar nas maiores lojas do Brasil.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold text-sm mb-2">Acesso Rápido</h5>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href={WHATSAPP_VIP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400">💬 Grupo VIP do WhatsApp</a></li>
                <li><a href="/encurtar" className="hover:text-amber-400">🔗 Encurtador de Links</a></li>
                <li><a href="/painel" className="hover:text-amber-400">⚙️ Painel Operacional</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold text-sm mb-2">Transparência & Parcerias</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Este site participa de programas de afiliados da Amazon, Mercado Livre, Shopee e Magazine Luiza, recebendo comissões por compras qualificadas sem qualquer custo adicional para você.
              </p>
            </div>
          </div>

          {/* Declaracao Oficial de Associado Amazon */}
          <div className="text-center text-slate-500 text-[11px] leading-relaxed pt-2">
            <p className="font-semibold text-slate-400 mb-1">
              Divulgação de Afiliado: Como participante do Programa de Associados da Amazon, sou remunerado por compras qualificadas.
            </p>
            <p>
              Os preços, estoque e cupons estão sujeitos a alterações a qualquer momento pelas lojas participantes.
            </p>
            <p className="mt-4 text-slate-600">
              &copy; {new Date().getFullYear()} Penido Ofertas & Achadinhos. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      {/* Botao Flutuante do WhatsApp */}
      <aside aria-label="Canal VIP WhatsApp" className="fixed bottom-6 right-6 z-50">
        <a
          href={WHATSAPP_VIP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/40 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm group"
        >
          <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.549 1.771.849 2.796.849 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.768-5.77-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 1.545-.443 2.986-1.209 4.209l1.178 4.302-4.408-1.156c-1.173.687-2.544 1.077-4.001 1.077-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8z" />
          </svg>
          <span className="hidden sm:inline">Grupo VIP WhatsApp</span>
        </a>
      </aside>

    </div>
  );
}
