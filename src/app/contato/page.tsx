'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { WHATSAPP_VIP_LINK } from '@/data/editorial';

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nome || !email || !mensagem) return;
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-[#0F141C] text-slate-100 flex flex-col font-sans">
      <Header />

      <main className="flex-1 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-12">
        <div className="border-b border-[#232F3E] pb-8 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-[#FF9900] text-xs font-bold mb-4">
            Canal Aberto com Nossos Leitores
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Fale Conosco
          </h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Dúvidas sobre algum produto avaliado, parcerias editoriais ou reporte de links com cupom expirado? Envie uma mensagem diretamente para nossa equipe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Informacoes de Contato */}
          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-[#131921] border border-[#232F3E] space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <span>💬</span> Atendimento Rápido
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Nosso canal mais rápido para tirar dúvidas e receber alertas instantâneos de promoções é pelo grupo oficial no WhatsApp.
              </p>
              <a
                href={WHATSAPP_VIP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 text-xs font-bold bg-[#25D366] text-slate-950 hover:bg-[#20bd5a] transition-colors"
              >
                Entrar no WhatsApp VIP &rarr;
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-[#131921] border border-[#232F3E] space-y-2">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <span>📧</span> E-mail Editorial
              </h3>
              <p className="text-xs text-slate-400">
                contato.penidoachadinhos@gmail.com
              </p>
              <p className="text-[11px] text-slate-500 pt-2">
                Respondemos em até 24 horas úteis.
              </p>
            </div>
          </div>

          {/* Formulario */}
          <div className="md:col-span-2 p-6 sm:p-8 rounded-2xl bg-[#131921] border border-[#232F3E]">
            {enviado ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl mx-auto border border-emerald-500/30">
                  ✓
                </div>
                <h3 className="text-xl font-bold text-white">Mensagem Enviada com Sucesso!</h3>
                <p className="text-slate-400 text-xs sm:text-sm max-w-md mx-auto">
                  Obrigado pelo contato, {nome}. Nossa equipe editorial responderá para o endereço <strong>{email}</strong> em breve.
                </p>
                <button
                  onClick={() => {
                    setEnviado(false);
                    setNome('');
                    setEmail('');
                    setMensagem('');
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#232F3E] text-slate-200 text-xs font-bold hover:bg-[#2d3d50] transition-colors"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-lg font-bold text-white mb-2">Envie uma Mensagem</h3>
                
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Seu Nome Completo</label>
                  <input
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Ex: Carlos Eduardo"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F141C] border border-[#232F3E] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF9900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Seu Melhor E-mail</label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ex: seuemail@exemplo.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F141C] border border-[#232F3E] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF9900]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">Mensagem ou Dúvida</label>
                  <textarea
                    required
                    rows={4}
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Escreva sua mensagem com detalhes..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#0F141C] border border-[#232F3E] text-white text-xs sm:text-sm focus:outline-none focus:border-[#FF9900]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-[#FF9900] hover:bg-amber-400 text-slate-950 font-black text-xs sm:text-sm transition-all hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-amber-500/10"
                >
                  Enviar Mensagem para a Equipe &rarr;
                </button>
              </form>
            )}
          </div>

        </div>

      </main>

      <Footer />
    </div>
  );
}
