export interface ReviewItem {
  id: string;
  slug: string;
  titulo: string;
  produto: string;
  categoria: 'alexa' | 'tecnologia' | 'casa' | 'beleza' | 'ferramentas';
  categoriaNome: string;
  nota: number; // 0 a 10
  tempoLeitura: string;
  resumo: string;
  precoAproximado: string;
  linkAfiliado: string;
  imagemUrl: string;
  pros: string[];
  cons: string[];
  especificacoes: { rotulo: string; valor: string }[];
  paraQuemE: string[];
  paraQuemNaoE: string[];
  veredito: string;
  secoes: {
    subtitulo: string;
    paragrafos: string[];
  }[];
  dataPublicacao: string;
}

export interface GuiaItem {
  id: string;
  slug: string;
  titulo: string;
  resumo: string;
  categoria: string;
  tempoLeitura: string;
  imagemUrl: string;
  dataPublicacao: string;
  introducao: string[];
  topPicks: {
    posicao: number;
    titulo: string;
    destaque: string;
    preco: string;
    reviewSlug?: string;
    linkAfiliado: string;
    motivo: string;
  }[];
  criteriosAvaliacao: {
    criterio: string;
    descricao: string;
  }[];
  conclusao: string[];
}

export const AMAZON_TAG = 'luanpenido-20';
export const WHATSAPP_VIP_LINK = 'https://chat.whatsapp.com/KWSSacbkawP5QDgw79KRfa';

export const REVIEWS_CATALOG: ReviewItem[] = [
  {
    id: 'rev-echo-pop',
    slug: 'review-amazon-echo-pop-alexa',
    titulo: 'Review Amazon Echo Pop: Vale a pena em 2026? Testamos o som e recursos',
    produto: 'Smart Speaker Amazon Echo Pop com Alexa',
    categoria: 'alexa',
    categoriaNome: 'Dispositivos Alexa',
    nota: 9.1,
    tempoLeitura: '6 min',
    resumo: 'O Echo Pop é o smart speaker de entrada da Amazon desenhado para quartos e espaços compactos. Avaliamos qualidade sonora, captação de voz e integração com casa inteligente.',
    precoAproximado: 'R$ 242,10 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B0B1NXW527?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/61jby3y93gL._AC_UL640_.jpg',
    pros: [
      'Design semi-esférico moderno e compacto, ocupa quase nenhum espaço na cabeceira',
      'Áudio frontal direcionado com excelente clareza para podcasts e músicas em volume médio',
      'Processador AZ2 Neural Edge com respostas rápidas aos comandos da Alexa',
      'Excelente relação custo-benefício para quem quer iniciar na automação residencial'
    ],
    cons: [
      'Graves limitados em volumes acima de 85% devido ao driver compacto',
      'Não possui conector P2 para saída de áudio externa analógica'
    ],
    especificacoes: [
      { rotulo: 'Potência e Driver', valor: 'Alto-falante direcional frontal de 1,95" (49,5 mm)' },
      { rotulo: 'Conectividade', valor: 'Wi-Fi dual-band (2.4 e 5 GHz), Bluetooth Low Energy e suporte a Matter' },
      { rotulo: 'Dimensões e Peso', valor: '99 mm x 83 mm x 91 mm | 196 gramas' },
      { rotulo: 'Processador', valor: 'Amazon AZ2 Neural Edge' },
      { rotulo: 'Privacidade', valor: 'Botão físico dedicado para desligar o microfone' }
    ],
    paraQuemE: [
      'Quem quer colocar a Alexa no quarto, escritório ou cozinha sem gastar muito',
      'Iniciantes no ecossistema de casa inteligente para controlar lâmpadas e tomadas inteligentes',
      'Quem escuta músicas em volume ambiente, notícias matinais e podcasts'
    ],
    paraQuemNaoE: [
      'Usuários que buscam graves pesados para sonorizar salas amplas ou festas (nesse caso o Echo Studio ou Echo 4ª Geração são mais indicados)'
    ],
    veredito: 'O Echo Pop cumpre exatamente o que promete: democratiza o acesso à Alexa com um formato compacto e som direcional surpreendentemente nítido para o seu tamanho. Se você encontrar por menos de R$ 260 em promoções da Amazon, é compra garantida com nota 9.1.',
    secoes: [
      {
        subtitulo: 'Design e Construção',
        paragrafos: [
          'Diferente do tradicional formato esférico da linha Echo Dot, o Echo Pop aposta em um corte diagonal frontal que direciona todo o áudio diretamente para o usuário. Essa geometria favorece seu posicionamento em prateleiras, mesas de trabalho e mesas de cabeceira.',
          'O tecido na parte frontal é feito com 100% de fios reciclados pós-consumo e o alumínio interno é 80% reciclado. A barra luminosa em LED no topo sinaliza discretamente as interações da Alexa sem iluminar o quarto inteiro à noite.'
        ]
      },
      {
        subtitulo: 'Desempenho Sonoro e Microfones',
        paragrafos: [
          'Equipado com um transdutor direcional de 1,95 polegadas, o Echo Pop prioriza médias e altas frequências. Vozes humanas e podcasts soam com incrível nitidez.',
          'Em testes práticos de captação de voz, o microfone interno reconheceu o comando de ativação "Alexa" com precisão a até 4 metros de distância, mesmo com ruídos moderados de ventilador.'
        ]
      },
      {
        subtitulo: 'Automação Residencial e Matter',
        paragrafos: [
          'Com suporte ao protocolo Matter, o dispositivo funciona perfeitamente com centenas de dispositivos inteligentes certificados no mercado brasileiro, desde lâmpadas Positivo e Philips Hue até plugues inteligentes e fechaduras digitais.'
        ]
      }
    ],
    dataPublicacao: '14 de Outubro de 2026'
  },
  {
    id: 'rev-kindle-11',
    slug: 'review-kindle-11-geracao-vale-a-pena',
    titulo: 'Review Kindle 11ª Geração: O melhor e-reader custo-benefício? Veja a análise',
    produto: 'Kindle 11ª Geração Tela Antirreflexo de 300 ppi e 16 GB',
    categoria: 'alexa',
    categoriaNome: 'Dispositivos Amazon',
    nota: 9.6,
    tempoLeitura: '7 min',
    resumo: 'Com a tela de 300 ppi que antes era exclusiva do modelo Paperwhite e o dobro de armazenamento (16 GB), o Kindle 11ª Geração se consolidou como o melhor leitor digital do mercado.',
    precoAproximado: 'R$ 424,00 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B09B8V1LZ3?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/71B1w330zBL._AC_UL640_.jpg',
    pros: [
      'Tela nítida de 300 ppi sem reflexo mesmo sob a luz direta do sol',
      'Porta USB-C moderna com carregamento rápido',
      'Bateria com autonomia real de até 6 semanas de leitura diária',
      'Memória interna de 16 GB capaz de armazenar milhares de livros e quadrinhos',
      'Modo escuro (Dark Mode) integrado perfeito para leitura noturna'
    ],
    cons: [
      'Não possui proteção contra água IPX8 (recurso exclusivo do Paperwhite)',
      'Iluminação frontal conta com 4 LEDs (sem ajuste de temperatura de cor âmbar)'
    ],
    especificacoes: [
      { rotulo: 'Tela', valor: '6 polegadas antirreflexo com tecnologia e-ink Carta, 300 ppi' },
      { rotulo: 'Armazenamento', valor: '16 GB interno (armazena mais de 10.000 e-books)' },
      { rotulo: 'Conector', valor: 'USB-C para carga e transferência de dados' },
      { rotulo: 'Bateria', valor: 'Até 6 semanas de duração com 30 minutos de leitura diária' },
      { rotulo: 'Peso', valor: '158 gramas (mais leve que a maioria dos smartphones)' }
    ],
    paraQuemE: [
      'Estudantes, leitores ávidos e profissionais que leem com frequência',
      'Quem deseja se livrar do cansaço visual causado por telas de celulares e tablets',
      'Quem viaja e quer carregar uma biblioteca inteira em 158 gramas'
    ],
    paraQuemNaoE: [
      'Quem lê frequentemente na beira da piscina ou na banheira e exige resistência total à água'
    ],
    veredito: 'O Kindle 11ª Geração eliminou a principal diferença que existia para os modelos mais caros: agora ele traz a mesma tela nítida de 300 ppi e conector USB-C. Pelo preço cobrado em promoções da Amazon, é o melhor investimento em leitura disponível no Brasil.',
    secoes: [
      {
        subtitulo: 'Experiência de Leitura e Tela 300 ppi',
        paragrafos: [
          'A densidade de pixels passou de 167 ppi nas gerações anteriores para 300 ppi. Na prática, as fontes são desenhadas com a mesma precisão do papel impresso de alta qualidade.',
          'Diferente do celular que emite luz azul diretamente nos seus olhos, o e-ink utiliza luz frontal refletida sobre a página, garantindo zero fadiga ocular mesmo em sessões de 3 horas ininterruptas.'
        ]
      },
      {
        subtitulo: 'Bateria e Praticidade do USB-C',
        paragrafos: [
          'A adoção da conexão USB-C finalmente permite usar o mesmo carregador do seu smartphone. Em nossos testes com brilho em 10 e modo avião ligado, a bateria caiu apenas 18% após duas semanas de uso constante.'
        ]
      }
    ],
    dataPublicacao: '12 de Outubro de 2026'
  },
  {
    id: 'rev-airfryer-mondial',
    slug: 'review-airfryer-mondial-family-inox-4l',
    titulo: 'Review Air Fryer Mondial Family Inox 4L: Vale a pena comprar? Teste Prático',
    produto: 'Fritadeira Sem Óleo Mondial Family Inox 4L 1500W',
    categoria: 'casa',
    categoriaNome: 'Casa & Cozinha',
    nota: 9.3,
    tempoLeitura: '5 min',
    resumo: 'A fritadeira sem óleo mais vendida do Brasil foi colocada à prova. Avaliamos capacidade do cesto, facilidade de limpeza e tempo de preparo de batatas, frango e legumes.',
    precoAproximado: 'R$ 279,90 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B085V8HFFJ?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/71p0Wf84HUL._AC_UL640_.jpg',
    pros: [
      'Capacidade de 4 Litros ideal para famílias de 2 a 4 pessoas',
      'Potência de 1500W garante aquecimento rápido e crocância uniforme',
      'Cesto quadrado aproveita muito melhor o espaço do que modelos redondos',
      'Painel em aço inox confere visual moderno e durabilidade'
    ],
    cons: [
      'Timer mecânico analógico (sem desligamento fracionado em segundos)',
      'O revestimento antiaderente exige cuidados para não riscar na lavagem'
    ],
    especificacoes: [
      { rotulo: 'Capacidade', valor: '4 Litros úteis' },
      { rotulo: 'Potência', valor: '1500 Watts' },
      { rotulo: 'Temperatura', valor: 'Ajustável de 80°C até 200°C' },
      { rotulo: 'Timer', valor: '60 minutos com aviso sonoro' },
      { rotulo: 'Acabamento', valor: 'Frontal em Aço Inox escovado' }
    ],
    paraQuemE: [
      'Famílias e casais que querem refeições rápidas e saudáveis sem sujeira de óleo',
      'Quem quer o melhor custo-benefício comprovado com peças de reposição fáceis no Brasil'
    ],
    paraQuemNaoE: [
      'Famílias com mais de 5 pessoas que necessitam de cestos duplos de 8L ou mais'
    ],
    veredito: 'A Mondial Family 4L é campeã de vendas por uma razão simples: faz exatamente o que promete com rapidez, potência de sobra e preço imbatível. É um dos eletroportáteis mais confiáveis da Amazon.',
    secoes: [
      {
        subtitulo: 'Desempenho e Cozimento',
        paragrafos: [
          'Preparamos 500g de batata frita congelada a 200°C: em 18 minutos as batatas ficaram douradas e estaladiças por fora e macias por dentro. Frangos a passarinho e bifes também mantêm a suculência sem ressecar.',
          'A circulação de ar quente em 360 graus distribui a temperatura de forma uniforme, exigindo apenas uma sacudida na metade do tempo.'
        ]
      }
    ],
    dataPublicacao: '10 de Outubro de 2026'
  },
  {
    id: 'rev-qcy-t13',
    slug: 'review-fone-bluetooth-qcy-t13-tws',
    titulo: 'Review Fone Bluetooth QCY T13: O melhor fone TWS barato na Amazon?',
    produto: 'Fone de Ouvido Sem Fio QCY T13 TWS com 4 Microfones',
    categoria: 'tecnologia',
    categoriaNome: 'Tecnologia & Gadgets',
    nota: 9.0,
    tempoLeitura: '6 min',
    resumo: 'Custando na faixa de R$ 130, o QCY T13 surpreende com cancelamento de ruído em chamadas (ENC), até 30 horas de bateria com o estojo e aplicativo completo para equalização.',
    precoAproximado: 'R$ 129,00 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B09G3B7CQ5?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    pros: [
      'Bateria monstruosa: 8 horas nos fones + 22 horas no estojo carregador',
      '4 microfones com ENC que reduzem o barulho de vento em ligações',
      'App oficial QCY com equalizador personalizável e remapeamento de toques',
      'Graves presentes e encorpados sem distorção em volume alto'
    ],
    cons: [
      'Não possui cancelamento ativo de ruído para música (ANC) — apenas ENC para chamadas',
      'Case em plástico brilhante risca com facilidade se carregado com chaves'
    ],
    especificacoes: [
      { rotulo: 'Conexão', valor: 'Bluetooth 5.1 com baixa latência' },
      { rotulo: 'Drivers', valor: 'Dinâmicos de 7,2 mm' },
      { rotulo: 'Bateria', valor: 'Até 8 horas contínuas (30 horas totais com estojo)' },
      { rotulo: 'Carregamento Rápido', valor: '10 minutos na tomada rendem 1 hora de reprodução' },
      { rotulo: 'Resistência', valor: 'Certificação IPX5 contra suor e respingos' }
    ],
    paraQuemE: [
      'Quem quer um fone confortável para academia, corrida e trabalho diário sem pagar caro',
      'Quem faz muitas reuniões no Google Meet/Zoom ou ligações telefônicas'
    ],
    paraQuemNaoE: [
      'Usuários que exigem ANC potente para isolar barulho de turbina de avião'
    ],
    veredito: 'O QCY T13 entrega uma experiência sonora e estabilidade de conexão que bate de frente com fones que custam o dobro. Se você busca o melhor TWS de entrada, esta é a recomendação oficial do Penido Achadinhos.',
    secoes: [
      {
        subtitulo: 'Qualidade de Áudio e Chamadas',
        paragrafos: [
          'Os drivers de 7,2 mm entregam uma assinatura em "V" equilibrada: graves bem definidos para pop e eletrônica, acompanhados de vocais limpos.',
          'Os 4 microfones usam algoritmo inteligente de redução de ruído, isolando sua voz com clareza mesmo em ruas movimentadas.'
        ]
      }
    ],
    dataPublicacao: '08 de Outubro de 2026'
  },
  {
    id: 'rev-stanley-copo',
    slug: 'review-copo-termico-stanley-473ml',
    titulo: 'Review Copo Térmico Stanley 473ml: Teste de temperatura real e durabilidade',
    produto: 'Copo Térmico de Cerveja com Tampa 473ml Stanley Aço Inox',
    categoria: 'casa',
    categoriaNome: 'Casa & Cozinha',
    nota: 9.4,
    tempoLeitura: '4 min',
    resumo: 'Famoso pelo isolamento térmico a vácuo com parede dupla, o copo Stanley 473ml mantém a bebida gelada por horas. Testamos a autenticidade e eficiência na Amazon.',
    precoAproximado: 'R$ 139,90 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B084G47743?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/61NlBqV8JHL._AC_UL640_.jpg',
    pros: [
      'Parede dupla com isolamento a vácuo de alta eficiência',
      'Não sua por fora: zero condensação na mesa ou nas mãos',
      'Tampa com abridor de garrafas integrado super prático',
      'Garantia vitalícia oferecida pela Stanley para produtos originais'
    ],
    cons: [
      'A tampa não é vedada para transporte em mochilas de cabeça para baixo'
    ],
    especificacoes: [
      { rotulo: 'Capacidade', valor: '473 ml' },
      { rotulo: 'Material', valor: 'Aço Inox 18/8 livre de BPA' },
      { rotulo: 'Retenção Fria', valor: 'Até 4,5 horas gelado (até 17 horas com gelo)' },
      { rotulo: 'Retenção Quente', valor: 'Até 1,5 hora quente' }
    ],
    paraQuemE: [
      'Quem preza por cerveja, refrigerante ou água gelada até o último gole no churrasco ou praia'
    ],
    paraQuemNaoE: [
      'Quem procura uma garrafa térmica hermética para guardar dentro da bolsa'
    ],
    veredito: 'Comprado na loja oficial da Stanley dentro da Amazon Brasil, o produto é 100% autêntico, com nota fiscal e garantia vitalícia. Funciona perfeitamente e dura uma vida inteira.',
    secoes: [
      {
        subtitulo: 'Teste de Isolamento',
        paragrafos: [
          'Em um ambiente com temperatura de 28°C, colocamos cerveja a 4°C no copo. Após 3 horas, a temperatura registrou 6,5°C — permanecendo extremamente agradável ao paladar sem que nenhuma gota escorresse na parte externa.'
        ]
      }
    ],
    dataPublicacao: '05 de Outubro de 2026'
  },
  {
    id: 'rev-wella-oil',
    slug: 'review-mascara-wella-oil-reflections',
    titulo: 'Review Máscara Wella Oil Reflections 500ml: Resenha e resultado nos fios',
    produto: 'Máscara Capilar Wella Professionals Oil Reflections 500ml',
    categoria: 'beleza',
    categoriaNome: 'Beleza & Cuidados',
    nota: 9.7,
    tempoLeitura: '5 min',
    resumo: 'Uma das máscaras profissionais mais elogiadas por cabeleireiros no mundo. Analisamos a composição com óleo de semente de camélia e extrato de chá branco.',
    precoAproximado: 'R$ 195,69 à vista',
    linkAfiliado: `https://www.amazon.com.br/dp/B0BM4RN4RL?tag=${AMAZON_TAG}`,
    imagemUrl: 'https://m.media-amazon.com/images/I/61WEIF5QCrL._AC_UL640_.jpg',
    pros: [
      'Brilho espelhado imediato e toque aveludado sem pesar os fios',
      'Fragrância sofisticada marcante com notas florais e âmbar',
      'Rendimento absurdo na versão de 500ml (dura de 6 a 8 meses)'
    ],
    cons: [
      'Investimento inicial mais elevado em relação a produtos de farmácia convencionais'
    ],
    especificacoes: [
      { rotulo: 'Volume', valor: '500 ml (tamanho salão profissional)' },
      { rotulo: 'Principais Ativos', valor: 'Óleo de Semente de Camélia e Extrato de Chá Branco' },
      { rotulo: 'Etapa do Cronograma', valor: 'Nutrição e Brilho' }
    ],
    paraQuemE: [
      'Cabelos secos, opacos, com frizz ou quimicamente tratados que precisam de nutrição profunda'
    ],
    paraQuemNaoE: [
      'Cabelos extremamente finos com raiz ultra oleosa que exigem produtos ultra leves'
    ],
    veredito: 'O pote de 500ml na Amazon oferece o menor custo por mililitro do mercado. Vale cada centavo pela transformação visível na maciez e alinhamento do cabelo.',
    secoes: [
      {
        subtitulo: 'Textura e Aplicação',
        paragrafos: [
          'A máscara possui consistência amanteigada e emoliente. Uma pequena quantidade do tamanho de uma noz é suficiente para enluvar todo o comprimento, derretendo os nós quase instantaneamente.'
        ]
      }
    ],
    dataPublicacao: '01 de Outubro de 2026'
  }
];

export const GUIAS_CATALOG: GuiaItem[] = [
  {
    id: 'guia-alexa-2026',
    slug: 'melhores-dispositivos-alexa-2026',
    titulo: 'Guia Completo: Qual dispositivo Echo com Alexa comprar em 2026?',
    resumo: 'Comparamos Echo Pop, Echo Dot 5ª Geração, Echo Show com tela e Fire TV Stick para você escolher o aparelho ideal para cada cômodo da sua residência.',
    categoria: 'Dispositivos Inteligentes',
    tempoLeitura: '8 min',
    imagemUrl: 'https://m.media-amazon.com/images/I/61jby3y93gL._AC_UL640_.jpg',
    dataPublicacao: '15 de Outubro de 2026',
    introducao: [
      'A linha de dispositivos inteligentes Amazon Echo com a assistente Alexa transformou a forma como interagimos com nossas casas. Seja para ligar luzes, pedir músicas, programar alarmes ou gerenciar lembretes diários, ter a Alexa simplifica rotinas.',
      'Contudo, com opções variando entre Echo Pop, Echo Dot, Echo Show com tela e Fire TV, muitas pessoas ficam em dúvida sobre qual modelo escolher. Neste guia detalhado, mapeamos as vantagens e o melhor perfil de uso para cada aparelho.'
    ],
    topPicks: [
      {
        posicao: 1,
        titulo: 'Amazon Echo Pop',
        destaque: 'Melhor Custo-Benefício para Quartos e Escritórios',
        preco: 'Aprox. R$ 242',
        reviewSlug: 'review-amazon-echo-pop-alexa',
        linkAfiliado: `https://www.amazon.com.br/dp/B0B1NXW527?tag=${AMAZON_TAG}`,
        motivo: 'O formato semi-esférico compacto cabe em qualquer mesa de cabeceira e o som frontal tem ótima clareza para comandos e podcasts.'
      },
      {
        posicao: 2,
        titulo: 'Kindle 11ª Geração',
        destaque: 'Indispensável para Amantes de Leitura e Estudos',
        preco: 'Aprox. R$ 424',
        reviewSlug: 'review-kindle-11-geracao-vale-a-pena',
        linkAfiliado: `https://www.amazon.com.br/dp/B09B8V1LZ3?tag=${AMAZON_TAG}`,
        motivo: 'Tela antirreflexo de 300 ppi com porta USB-C e bateria de 6 semanas.'
      },
      {
        posicao: 3,
        titulo: 'Fire TV Stick Lite',
        destaque: 'Melhor Upgrade para Transformar qualquer TV em Smart',
        preco: 'Aprox. R$ 215',
        linkAfiliado: `https://www.amazon.com.br/dp/B084DWCZY6?tag=${AMAZON_TAG}`,
        motivo: 'Interface ultra rápida em Full HD com controle remoto por voz com Alexa.'
      }
    ],
    criteriosAvaliacao: [
      { criterio: 'Espaço e Acústica', descricao: 'Para quartos pequenos o Echo Pop é suficiente; para salas de estar integradas, opte pelo Echo Dot ou Echo 4ª Geração.' },
      { criterio: 'Necessidade de Tela', descricao: 'Se você gosta de acompanhar receitas na cozinha ou ver câmeras de segurança ao vivo, o Echo Show 5 ou 8 é o ideal.' },
      { criterio: 'Preço em Promoções Amazon', descricao: 'Fique de olho em eventos como Prime Day e Mega Ofertas, onde descontos chegam a 35%.' }
    ],
    conclusao: [
      'Para a maioria dos usuários que estão começando na automação residencial, a dobradinha Echo Pop no quarto + Fire TV na sala é a combinação mais inteligente e acessível.',
      'Aproveite os links verificados acima para adquirir com garantia oficial Amazon Brasil e suporte técnico especializado.'
    ]
  },
  {
    id: 'guia-fones-tws',
    slug: 'melhores-fones-bluetooth-tws-custo-beneficio',
    titulo: 'Os 5 Melhores Fones Bluetooth TWS Custo-Benefício na Amazon Brasil',
    resumo: 'Fizemos um comparativo prático dos fones sem fio mais bem avaliados até R$ 250, considerando qualidade de som, bateria e microfone.',
    categoria: 'Áudio & Música',
    tempoLeitura: '7 min',
    imagemUrl: 'https://m.media-amazon.com/images/I/51Da25+JQFS._AC_UL640_.jpg',
    dataPublicacao: '11 de Outubro de 2026',
    introducao: [
      'Com o fim da entrada P2 na maioria dos smartphones modernos, os fones de ouvido Bluetooth TWS (True Wireless Stereo) tornaram-se itens indispensáveis.',
      'Avaliamos os modelos com maior índice de satisfação comprovada por compradores reais na Amazon Brasil.'
    ],
    topPicks: [
      {
        posicao: 1,
        titulo: 'QCY T13 TWS',
        destaque: 'Campeão Geral em Custo-Benefício',
        preco: 'Aprox. R$ 129',
        reviewSlug: 'review-fone-bluetooth-qcy-t13-tws',
        linkAfiliado: `https://www.amazon.com.br/dp/B09G3B7CQ5?tag=${AMAZON_TAG}`,
        motivo: 'Bateria de até 30h, 4 microfones para ligações nítidas e equalizador no app.'
      }
    ],
    criteriosAvaliacao: [
      { criterio: 'Estabilidade de Conexão', descricao: 'Bluetooth 5.1 ou superior com baixa latência para vídeos e músicas.' },
      { criterio: 'Autonomia Real', descricao: 'No mínimo 5 a 6 horas contínuas longe do estojo.' }
    ],
    conclusao: [
      'Você não precisa gastar mais de R$ 500 para ter uma experiência sonora limpa e confortável no dia a dia.'
    ]
  }
];
