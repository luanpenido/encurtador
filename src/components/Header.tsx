'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { WHATSAPP_VIP_LINK } from '@/data/editorial';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Top Banner Oficial */}
      <div className="bg-[#232F3E] border-b border-[#37475A] text-slate-200 py-2 px-4 text-center text-xs sm:text-sm flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FF9900] animate-ping" />
        <span>
          <strong>Penido Achadinhos</strong>: Portal independente de reviews, análises e curadoria de preços verificados.
        </span>
        <a 
          href={WHATSAPP_VIP_LINK} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#FF9900] hover:text-amber-300 font-bold ml-1 underline hidden sm:inline"
        >
          Entrar no Grupo VIP &rarr;
        </a>
      </div>

      {/* Header Principal */}
      <header className="border-b border-[#232F3E] bg-[#131921] sticky top-0 z-40 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-[#FF9900] to-amber-300 flex items-center justify-center shadow-lg shadow-amber-500/20 text-2xl font-black text-slate-950 group-hover:scale-105 transition-transform">
              🏷️
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-1.5">
                Penido <span className="text-[#FF9900]">Achadinhos</span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
                Avaliações Sinceras & Curadoria de Produtos
              </p>
            </div>
          </Link>

          {/* Navegação Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-200">
            <Link href="/" className="hover:text-[#FF9900] transition-colors">
              Início
            </Link>
            <Link href="/reviews" className="hover:text-[#FF9900] transition-colors flex items-center gap-1">
              <span>Reviews Detalhados</span>
              <span className="text-[10px] bg-[#FF9900]/20 text-[#FF9900] px-1.5 py-0.5 rounded font-black border border-[#FF9900]/30">NOVO</span>
            </Link>
            <Link href="/guias" className="hover:text-[#FF9900] transition-colors">
              Guias de Compra
            </Link>
            <Link href="/sobre" className="hover:text-[#FF9900] transition-colors">
              Sobre Nós
            </Link>
            <Link href="/contato" className="hover:text-[#FF9900] transition-colors">
              Contato
            </Link>
          </nav>

          {/* Botões Ação */}
          <div className="flex items-center gap-3">
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

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-[#232F3E] bg-[#0F141C] px-4 py-4 space-y-3 text-sm font-semibold">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-200 hover:text-[#FF9900]"
            >
              Início / Ofertas do Dia
            </Link>
            <Link 
              href="/reviews" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-200 hover:text-[#FF9900]"
            >
              ⭐ Reviews Detalhados
            </Link>
            <Link 
              href="/guias" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-200 hover:text-[#FF9900]"
            >
              📚 Guias de Compra
            </Link>
            <Link 
              href="/sobre" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-200 hover:text-[#FF9900]"
            >
              ℹ️ Sobre Nós & Metodologia
            </Link>
            <Link 
              href="/contato" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-1.5 text-slate-200 hover:text-[#FF9900]"
            >
              ✉️ Fale Conosco
            </Link>
          </div>
        )}
      </header>
    </>
  );
}
