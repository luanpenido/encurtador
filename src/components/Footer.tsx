import React from 'react';
import Link from 'next/link';
import { WHATSAPP_VIP_LINK } from '@/data/editorial';

export default function Footer() {
  return (
    <footer className="border-t border-[#232F3E] bg-[#131921] py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-[#232F3E]">
          
          {/* Coluna 1: Missão */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white font-extrabold text-base">
              <span className="text-[#FF9900]">🏷️ Penido Achadinhos</span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Portal independente especializado em reviews detalhados, testes práticos e curadoria inteligente das melhores ofertas da Amazon Brasil.
            </p>
            <p className="text-[11px] text-slate-500">
              Ajudamos consumidores a economizar com decisões de compra bem informadas.
            </p>
          </div>

          {/* Coluna 2: Conteúdo Editorial */}
          <div>
            <h5 className="text-white font-bold text-sm mb-3">Conteúdo Editorial</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/reviews" className="hover:text-[#FF9900] transition-colors">
                  ⭐ Todos os Reviews de Produtos
                </Link>
              </li>
              <li>
                <Link href="/guias" className="hover:text-[#FF9900] transition-colors">
                  📚 Guias de Compra Comparativos
                </Link>
              </li>
              <li>
                <Link href="/reviews/review-amazon-echo-pop-alexa" className="hover:text-[#FF9900] transition-colors">
                  Análise: Amazon Echo Pop
                </Link>
              </li>
              <li>
                <Link href="/reviews/review-kindle-11-geracao-vale-a-pena" className="hover:text-[#FF9900] transition-colors">
                  Análise: Kindle 11ª Geração
                </Link>
              </li>
              <li>
                <Link href="/reviews/review-airfryer-mondial-family-inox-4l" className="hover:text-[#FF9900] transition-colors">
                  Análise: Air Fryer Mondial 4L
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 3: Institucional & Transparência */}
          <div>
            <h5 className="text-white font-bold text-sm mb-3">Institucional & Legal</h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/sobre" className="hover:text-[#FF9900] transition-colors">
                  Sobre Nós & Nossa Metodologia
                </Link>
              </li>
              <li>
                <Link href="/politica-de-privacidade" className="hover:text-[#FF9900] transition-colors">
                  Política de Privacidade (LGPD)
                </Link>
              </li>
              <li>
                <Link href="/termos" className="hover:text-[#FF9900] transition-colors">
                  Termos e Condições de Uso
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:text-[#FF9900] transition-colors">
                  Fale Conosco / Contato
                </Link>
              </li>
              <li>
                <a href={WHATSAPP_VIP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-[#25D366] transition-colors">
                  💬 Canal VIP no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Segurança & Amazon */}
          <div className="space-y-3">
            <h5 className="text-white font-bold text-sm mb-2">Compre com Segurança</h5>
            <p className="text-slate-400 text-xs leading-relaxed">
              Todos os links de compra direcionam com criptografia e segurança diretamente para a loja oficial da <strong className="text-slate-200">Amazon.com.br</strong>.
            </p>
            <div className="p-3 rounded-lg bg-[#232F3E]/60 border border-[#37475A] text-[11px] text-slate-300">
              🔒 Seus dados e pagamentos são processados exclusivamente dentro dos servidores seguros da Amazon.
            </div>
          </div>
        </div>

        {/* Declaracao Oficial de Afiliado da Amazon */}
        <div className="bg-[#0B0F15] p-5 rounded-xl border border-[#232F3E] text-slate-400 text-[11px] leading-relaxed space-y-2">
          <p className="font-semibold text-slate-200 text-xs">
            Declaração de Divulgação de Afiliado (Amazon Associates Disclosure):
          </p>
          <p>
            O portal <strong className="text-slate-300">Penido Achadinhos</strong> é um participante do <strong>Programa de Associados da Amazon Services LLC</strong>, um programa de publicidade de afiliados projetado para fornecer um meio para que sites ganhem taxas de publicidade divulgando e fornecendo links para produtos no site oficial <em>Amazon.com.br</em>.
          </p>
          <p>
            Como associado da Amazon, recebemos remuneração por compras qualificadas, sem nenhum custo adicional para o comprador. Os preços, disponibilidade em estoque e cupons estão sujeitos a alterações a qualquer momento pela Amazon Brasil.
          </p>
        </div>

        <div className="text-center text-slate-500 text-[11px] pt-2">
          <p>
            &copy; {new Date().getFullYear()} Penido Achadinhos. Todos os direitos reservados. Amazon e o logotipo da Amazon são marcas comerciais da Amazon.com, Inc. ou de suas afiliadas.
          </p>
        </div>
      </div>
    </footer>
  );
}
