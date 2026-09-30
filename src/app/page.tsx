'use client';

import React, { useState, useEffect, useMemo } from 'react';

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
}

const AMAZON_TAG = 'penido005-20';
const WHATSAPP_VIP_LINK = 'https://chat.whatsapp.com/KWSSacbkawP5QDgw79KRfa';

// Catalogo 100% Amazon Brasil Curado e Organizado por Categorias
const AMAZON_CATALOG_BASE: AmazonDeal[] = [
  // Dispositivos Amazon & Alexa
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
    isPrime: true
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
    id: 'AMZ_KINDLE_11',
    titulo: 'Kindle 11a Geracao Mais leve e compacto com tela antirreflexo de 300 ppi e 16GB',
    precoOriginal: 499.00,
    precoDesconto: 424.00,
    percentualDesconto: 15,
    urlImagem: 'https://m.media-amazon.com/images/I/71B1w330zBL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'alexa',
    linkAfiliado: `https://www.amazon.com.br/dp/B09B8V1LZ3?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },

  // Beleza & Cuidados
  {
    id: 'AMZ_WELLA_OIL',
    titulo: 'Mascara Capilar Oil Reflections Wella Professionals 500ml - Nutricao e Brilho',
    precoOriginal: 302.00,
    precoDesconto: 195.69,
    percentualDesconto: 35,
    urlImagem: 'https://m.media-amazon.com/images/I/61WEIF5QCrL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'beleza',
    linkAfiliado: `https://www.amazon.com.br/dp/B0BM4RN4RL?tag=${AMAZON_TAG}`,
    isPrime: true
  },
  {
    id: 'AMZ_LOLA_MORTE',
    titulo: 'Morte Subita Mascara Super Hidratante 450g - Lola Cosmetics Vegano',
    precoOriginal: 59.90,
    precoDesconto: 39.48,
    percentualDesconto: 34,
    urlImagem: 'https://m.media-amazon.com/images/I/71vJXnkK-NL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'beleza',
    linkAfiliado: `https://www.amazon.com.br/dp/B074LTNQBP?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: 'AMZ_CETAPHIL',
    titulo: 'Cetaphil Creme Hidratante Corporal e Facial Pele Seca e Sensivel 453g',
    precoOriginal: 104.90,
    precoDesconto: 89.90,
    percentualDesconto: 14,
    urlImagem: 'https://m.media-amazon.com/images/I/71l4OrWPpLL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'beleza',
    linkAfiliado: `https://www.amazon.com.br/dp/B079VXJK79?tag=${AMAZON_TAG}`,
    isPrime: true
  },
  {
    id: 'AMZ_BRITANIA_ESCOVA',
    titulo: 'Britania Escova Secadora Soft 4 em 1 1300W Bivolt - Seca, Modela e Alisa',
    precoOriginal: 157.07,
    precoDesconto: 92.90,
    percentualDesconto: 41,
    urlImagem: 'https://m.media-amazon.com/images/I/51KoGFYvmPL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'beleza',
    linkAfiliado: `https://www.amazon.com.br/dp/B08L6YHZ75?tag=${AMAZON_TAG}`,
    isPrime: true
  },

  // Casa & Cozinha
  {
    id: 'AMZ_AIRFRYER_MONDIAL',
    titulo: 'Fritadeira Sem Oleo Air Fryer Mondial Family Inox 4L 1500W Antiaderente',
    precoOriginal: 399.90,
    precoDesconto: 279.90,
    percentualDesconto: 30,
    urlImagem: 'https://m.media-amazon.com/images/I/71p0Wf84HUL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'casa',
    linkAfiliado: `https://www.amazon.com.br/dp/B085V8HFFJ?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: 'AMZ_STANLEY_COPO',
    titulo: 'Copo Termico de Cerveja com Tampa 473ml Stanley Aco Inox Mantem Gelado 4.5h',
    precoOriginal: 199.00,
    precoDesconto: 139.90,
    percentualDesconto: 30,
    urlImagem: 'https://m.media-amazon.com/images/I/61NlBqV8JHL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'casa',
    linkAfiliado: `https://www.amazon.com.br/dp/B084G47743?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },

  // Ferramentas & Garagem
  {
    id: 'AMZ_WAP_FURADEIRA',
    titulo: 'WAP Parafusadeira e Furadeira sem Fio 12V BPF 12K3 com Maleta e Acessorios',
    precoOriginal: 359.90,
    precoDesconto: 169.90,
    percentualDesconto: 53,
    urlImagem: 'https://m.media-amazon.com/images/I/71wZqXGvWbL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'ferramentas',
    linkAfiliado: `https://www.amazon.com.br/dp/B09V1SM8QB?tag=${AMAZON_TAG}`,
    isBug: true,
    isPrime: true
  },
  {
    id: 'AMZ_SPARTA_KIT',
    titulo: 'Sparta Maleta de Ferramentas Kit Completo com 129 Pecas e Maleta Organizadora',
    precoOriginal: 140.45,
    precoDesconto: 95.84,
    percentualDesconto: 32,
    urlImagem: 'https://m.media-amazon.com/images/I/61ZmjmMLsRL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'ferramentas',
    linkAfiliado: `https://www.amazon.com.br/dp/B076N2S8FV?tag=${AMAZON_TAG}`,
    isPrime: true
  },

  // Tecnologia & Gadgets
  {
    id: 'AMZ_XIAOMI_REDMI',
    titulo: 'Smartphone Xiaomi Redmi Note 13 4G 8GB RAM 256GB Versao Global Desbloqueado',
    precoOriginal: 1499.00,
    precoDesconto: 1149.00,
    percentualDesconto: 23,
    urlImagem: 'https://m.media-amazon.com/images/I/61NlBqV8JHL._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'tecnologia',
    linkAfiliado: `https://www.amazon.com.br/dp/B098FL4V67?tag=${AMAZON_TAG}`,
    isBestSeller: true,
    isPrime: true
  },
  {
    id: 'AMZ_FONE_QCY',
    titulo: 'Fone de Ouvido Bluetooth QCY T13 TWS 4 Microfones Cancelamento de Ruido 30h Bateria',
    precoOriginal: 189.90,
    precoDesconto: 129.00,
    percentualDesconto: 32,
    urlImagem: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    marketplace: 'amazon',
    categoria: 'tecnologia',
    linkAfiliado: `https://www.amazon.com.br/dp/B09G3B7CQ5?tag=${AMAZON_TAG}`,
    isPrime: true
  }
];

export default function VitrineAmazonPage() {
  const [deals, setDeals] = useState<AmazonDeal[]>(AMAZON_CATALOG_BASE);
  const [selectedCategory, setSelectedCategory] = useState('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('discount');
  const [copiedCoupon, setCopiedCoupon] = useState<string | null>(null);

  useEffect(() => {
    async function loadDeals() {
      try {
        const res = await fetch('/api/deals?marketplace=amazon&limit=100');
        if (res.ok) {
          const data = await res.json();
          if (data.deals && Array.isArray(data.deals) && data.deals.length > 0) {
            // Filtra exclusivamente produtos da Amazon
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
        console.warn('Usando catalogo curado Amazon:', err);
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

    if (sortBy === 'discount') {
      result.sort((a, b) => (b.percentualDesconto || 0) - (a.percentualDesconto || 0));
    } else if (sortBy === 'price_asc') {
      result.sort((a, b) => a.precoDesconto - b.precoDesconto);
    } else if (sortBy === 'price_desc') {
      result.sort((a, b) => b.precoDesconto - a.precoDesconto);
    }

    return result;
  }, [deals, selectedCategory, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 antialiased selection:bg-amber-400 selection:text-slate-950 font-sans">
      
      {/* Top Banner Oficial Amazon */}
      <div className="bg-[#232F3E] border-b border-[#37475A] text-slate-200 py-2.5 px-4 text-center text-xs sm:text-sm flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
        <span>📦 <strong>Vitrine Oficial de Achadinhos da Amazon Brasil</strong> — Ofertas com frete grátis Prime e cupons verificados:</span>
        <a 
          href={WHATSAPP_VIP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-amber-400 hover:text-amber-300 font-bold ml-1 underline whitespace-nowrap"
        >
          Receber no WhatsApp &rarr;
        </a>
      </div>

      {/* Header Principal */}
      <header className="border-b border-[#232F3E] bg-[#131921] sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FF9900] to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/10 text-2xl font-black text-slate-950">
              📦
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                Penido <span className="text-[#FF9900]">Achadinhos</span>
              </h1>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">Ofertas & Promoções Verificadas Amazon Brasil</p>
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href="/encurtar"
              className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-[#232F3E] hover:bg-[#2d3d50] border border-[#37475A] rounded-xl transition-all"
            >
              🔗 Encurtador
            </a>
            <a
              href={WHATSAPP_VIP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg shadow-emerald-500/20 transition-all hover:scale-105 active:scale-95"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.711 2.598 2.664-.698c.97.549 1.771.849 2.796.849 3.183 0 5.77-2.587 5.77-5.766.001-3.182-2.585-5.768-5.77-5.768zm0-2.172c4.418 0 8 3.582 8 8 0 1.545-.443 2.986-1.209 4.209l1.178 4.302-4.408-1.156c-1.173.687-2.544 1.077-4.001 1.077-4.418 0-8-3.582-8-8 0-4.418 3.582-8 8-8z" />
              </svg>
              <span>Grupo VIP Grátis</span>
            </a>
          </div>

        </div>
      </header>

      {/* Hero Section Amazon */}
      <section className="relative overflow-hidden py-10 sm:py-14 border-b border-[#232F3E] bg-gradient-to-b from-[#131921] to-[#0F141C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-300 text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            Links Canônicos Diretos com a Tag Oficial {AMAZON_TAG}
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Achadinhos da <span className="text-[#FF9900]">Amazon Brasil</span> com Desconto Real
          </h2>
          
          <p className="mt-3.5 text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Monitoramos quedas de preço relâmpago, cupons e bugs na Amazon. Clique na oferta para abrir diretamente no app ou site oficial da Amazon com segurança.
          </p>
        </div>
      </section>

      {/* Barra de Filtros por Categoria e Pesquisa */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 bg-[#1A222D] border border-[#2B3848] p-4 rounded-2xl shadow-xl">
          
          {/* Categorias Amazon */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
            {[
              { id: 'todos', label: '🔥 Todas as Ofertas' },
              { id: 'alexa', label: '📱 Echo & Alexa' },
              { id: 'casa', label: '🏠 Casa & Cozinha' },
              { id: 'beleza', label: '💄 Beleza & Skincare' },
              { id: 'ferramentas', label: '🛠️ Ferramentas' },
              { id: 'tecnologia', label: '💻 Tecnologia' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all ${
                  selectedCategory === tab.id
                    ? 'bg-[#FF9900] text-slate-950 shadow-md shadow-amber-500/20 font-black'
                    : 'bg-[#232F3E] text-slate-300 hover:bg-[#2e3e52] hover:text-white'
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
                placeholder="Buscar produto Amazon..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-[#0F141C] border border-[#37475A] text-white text-xs sm:text-sm rounded-xl pl-9 pr-8 py-2.5 focus:outline-none focus:border-[#FF9900]"
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
              className="bg-[#0F141C] border border-[#37475A] text-slate-200 text-xs sm:text-sm rounded-xl px-3 py-2.5 focus:outline-none focus:border-[#FF9900]"
            >
              <option value="discount">🔥 Maior Desconto</option>
              <option value="price_asc">💰 Menor Preço</option>
              <option value="price_desc">💎 Maior Preço</option>
            </select>
          </div>

        </div>
      </section>

      {/* Grid de Produtos Exclusivos Amazon */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Produtos Amazon em Destaque</span>
            <span className="text-xs bg-[#232F3E] text-amber-400 font-bold px-2.5 py-0.5 rounded-full border border-[#37475A]">
              {filteredDeals.length} ofertas
            </span>
          </h3>
        </div>

        {filteredDeals.length === 0 ? (
          <div className="text-center py-20 bg-[#1A222D]/60 border border-[#2B3848] rounded-3xl p-8">
            <div className="text-5xl mb-3">🔎</div>
            <h4 className="text-lg font-bold text-white">Nenhum produto encontrado nesta categoria</h4>
            <p className="text-sm text-slate-400 mt-1">Tente pesquisar outro termo ou veja todas as ofertas da Amazon.</p>
            <button
              onClick={() => { setSelectedCategory('todos'); setSearchQuery(''); }}
              className="mt-4 px-4 py-2 bg-[#FF9900] text-slate-950 text-xs rounded-xl font-bold"
            >
              Ver Todas as Ofertas
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredDeals.map((deal) => {
              const linkWithTag = deal.linkAfiliado.includes('tag=')
                ? deal.linkAfiliado
                : `${deal.linkAfiliado}${deal.linkAfiliado.includes('?') ? '&' : '?'}tag=${AMAZON_TAG}`;

              return (
                <article
                  key={deal.id}
                  className="bg-[#1A222D] border border-[#2B3848] hover:border-[#FF9900]/50 rounded-2xl overflow-hidden flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-500/10 group"
                >
                  <div>
                    {/* Imagem do Produto */}
                    <div className="relative bg-white p-4 h-56 flex items-center justify-center overflow-hidden">
                      {deal.percentualDesconto && deal.percentualDesconto > 0 ? (
                        <div className="absolute top-3 left-3 bg-[#CC0C39] text-white text-xs font-black px-2.5 py-1 rounded-lg shadow-md z-10 uppercase tracking-wider">
                          -{deal.percentualDesconto}% OFF
                        </div>
                      ) : null}

                      {deal.isBug && (
                        <div className="absolute top-3 right-3 bg-amber-400 text-slate-950 text-xs font-black px-2 py-0.5 rounded-md shadow z-10 animate-pulse">
                          ⚡ BUG AMAZON
                        </div>
                      )}

                      {deal.isBestSeller && !deal.isBug && (
                        <div className="absolute top-3 right-3 bg-[#232F3E] text-amber-400 text-[10px] font-extrabold px-2 py-0.5 rounded-md shadow z-10 border border-[#37475A]">
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
                      {/* Badge Amazon & Prime */}
                      <div className="flex items-center justify-between">
                        <span className="inline-flex items-center gap-1 text-[11px] font-extrabold px-2 py-0.5 rounded-md bg-[#232F3E] text-amber-400 border border-[#37475A]">
                          <span>📦</span>
                          <span>Amazon Brasil</span>
                        </span>
                        <span className="text-[10px] font-black text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60">
                          ⚡ PRIME
                        </span>
                      </div>

                      {/* Titulo */}
                      <h4 className="text-sm font-semibold text-slate-100 line-clamp-2 leading-snug group-hover:text-[#FF9900] transition-colors" title={deal.titulo}>
                        {deal.titulo}
                      </h4>

                      {/* Bloco de Preco */}
                      <div className="pt-1">
                        {deal.precoOriginal && deal.precoOriginal > deal.precoDesconto ? (
                          <div className="text-xs text-slate-400 line-through">
                            De R$ {deal.precoOriginal.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                          </div>
                        ) : (
                          <div className="text-xs text-slate-500">Menor preço Amazon</div>
                        )}

                        <div className="flex items-baseline gap-1 mt-0.5">
                          <span className="text-xs font-bold text-[#FF9900]">R$</span>
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
                            className="text-[10px] font-bold bg-[#FF9900] hover:bg-amber-400 text-slate-950 px-2 py-1 rounded transition-colors whitespace-nowrap"
                          >
                            {copiedCoupon === deal.cupom ? 'Copiado!' : 'Copiar'}
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Botao de Compra Direto na Amazon */}
                  <div className="p-4 pt-0">
                    <a
                      href={linkWithTag}
                      target="_blank"
                      rel="noopener noreferrer sponsored"
                      className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs sm:text-sm font-extrabold bg-[#FF9900] hover:bg-[#e68a00] text-slate-950 shadow-md shadow-amber-500/10 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>Comprar na Amazon</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      <footer className="border-t border-[#232F3E] bg-[#131921] py-12 text-slate-400 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-[#232F3E]">
            <div>
              <div className="flex items-center gap-2 text-white font-extrabold text-base mb-2">
                <span className="text-[#FF9900]">📦 Penido Achadinhos Amazon</span>
              </div>
              <p className="text-slate-400 text-xs leading-relaxed">
                Portal de curadoria independente de promoções e achadinhos da Amazon Brasil verificados diariamente em tempo real.
              </p>
            </div>
            <div>
              <h5 className="text-white font-bold text-sm mb-2">Acesso Rápido</h5>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li><a href={WHATSAPP_VIP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#FF9900]">💬 Grupo VIP do WhatsApp</a></li>
                <li><a href="/encurtar" className="hover:text-[#FF9900]">🔗 Encurtador de Links</a></li>
                <li><a href="/painel" className="hover:text-[#FF9900]">⚙️ Painel Operacional</a></li>
              </ul>
            </div>
            <div>
              <h5 className="text-white font-bold text-sm mb-2">Programa de Associados</h5>
              <p className="text-slate-400 text-xs leading-relaxed">
                Todos os produtos direcionam para a Amazon Brasil de forma oficial através da tag de associado {AMAZON_TAG}.
              </p>
            </div>
          </div>

          {/* Declaracao Oficial de Associado Amazon */}
          <div className="text-center text-slate-500 text-[11px] leading-relaxed pt-2">
            <p className="font-semibold text-slate-300 mb-1">
              Divulgação de Afiliado: Como participante do Programa de Associados da Amazon, sou remunerado por compras qualificadas.
            </p>
            <p>
              Os preços, estoque e cupons estão sujeitos a alterações a qualquer momento pela Amazon.com.br.
            </p>
            <p className="mt-4 text-slate-600">
              &copy; {new Date().getFullYear()} Penido Ofertas Amazon. Todos os direitos reservados.
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
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-slate-950 font-black px-4 py-3 rounded-full shadow-2xl shadow-emerald-500/30 hover:scale-105 active:scale-95 transition-all text-xs sm:text-sm group"
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
