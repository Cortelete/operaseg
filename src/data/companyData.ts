import { InsuranceItem, FaqItem, ArticleItem, BrokerMember } from '../types';

export const COMPANY_INFO = {
  name: 'Operaseg Corretora de Seguros',
  legalName: 'Operaseg Corretora de Seguros LTDA',
  city: 'Ponta Grossa',
  state: 'PR',
  region: 'Campos Gerais - Paraná',
  activeSince: '24 de março de 2025',
  cnae: 'Corretora e agente de seguros, compreendendo seguros em geral, previdência complementar e planos de saúde',
  cnpj: 'Em consulta pública e formalização cadastral',
  susepCode: 'Corretora habilitada e em conformidade regulatória perante a SUSEP',
  founderName: 'Eliane Santos de Lima de Oliveira',
  founderTitle: 'Sócia-Administradora & Corretora de Seguros',
  founderExperience: 'Mais de 6 anos de atuação profissional ligada à MAPFRE Seguros',
  founderBio: 'Sócia-administradora da Operaseg, com sólida trajetória de mais de seis anos de atuação ligada à MAPFRE Seguros. Reúne experiência prática em regulação de riscos, análise de coberturas securitárias e consultoria personalizada centrada na proteção do cliente.',
  teamExperienceNote: 'A liderança técnica e os profissionais associados reúnem anos de experiência consolidada no mercado segurador nacional.',
  address: 'R. Benjamin Constant, 1 - Sl 3 - Centro, Ponta Grossa - PR, 84010-380',
  street: 'R. Benjamin Constant, 1 - Sl 3',
  neighborhood: 'Centro',
  cep: '84010-380',
  mapsUrl: 'https://maps.app.goo.gl/cH7PWzd88Zdp8TZ47',
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.0465895052935!2d-50.156330200000006!3d-25.100284199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94e81b805f02aa8d%3A0xf0a160c99890833d!2sOperaseg%20Corretora%20de%20Seguros!5e0!3m2!1spt-BR!2sbr!4v1790097767781!5m2!1spt-BR!2sbr',
  referenceLocation: 'Centro de Ponta Grossa, PR e Região dos Campos Gerais',
  phone: '(42) 2702-0483',
  phoneRaw: '4227020483',
  whatsapp: '4227020483',
  whatsappFormatted: '(42) 2702-0483',
  email: 'Atendimento via WhatsApp e Telefone (canais corporativos em ativação)',
  businessHours: 'Segunda a Sexta-feira: 08:00 às 17:30',
  instagram: '@opera_seg',
  instagramUrl: 'https://www.instagram.com/opera_seg/',
  googleBusiness: 'https://maps.app.goo.gl/cH7PWzd88Zdp8TZ47',
  googleRating: '5,0',
  googleReviewsCount: '9 avaliações no Google',
  socialProofNote: 'Avaliação 5,0/5 estrelas no Google Meu Negócio em Ponta Grossa',
};

/**
 * Estrutura preparada para expansão da equipe de corretores da Operaseg.
 * O usuário poderá adicionar aqui o número de cada corretor e e-mails individuais.
 */
export const BROKERS_TEAM: BrokerMember[] = [
  {
    id: 'eliane-oliveira',
    name: 'Eliane Santos de Lima de Oliveira',
    role: 'Corretora de Seguros & Responsável Técnica',
    phone: '(42) 2702-0483',
    whatsapp: '4227020483',
    status: 'ativo',
    note: 'Responsável técnica da Operaseg e consultoria securitária geral.',
  },
  {
    id: 'corretor-auto-patrimonial',
    name: 'Atendimento de Seguros Automóvel & Patrimonial',
    role: 'Consultoria Especializada em Veículos e Frotas',
    phone: '(42) 2702-0483',
    whatsapp: '4227020483',
    status: 'ativo',
    note: 'Central de cotações de auto e proteção patrimonial. Número direto em breve.',
  },
  {
    id: 'corretor-vida-empresas',
    name: 'Atendimento de Vida, Residencial & Empresas',
    role: 'Consultoria Especializada em Pessoas e Negócios',
    phone: '(42) 2702-0483',
    whatsapp: '4227020483',
    status: 'ativo',
    note: 'Planejamento de seguros para famílias e empresas. Número direto e e-mail em breve.',
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: '01',
    title: 'Conversamos',
    subtitle: 'Você explica o que precisa',
    description: 'Sem questionários frios ou formulários intermináveis. Iniciamos ouvindo a sua rotina, o bem que você quer proteger ou o momento da sua família ou empresa.',
  },
  {
    step: '02',
    title: 'Entendemos seu perfil',
    subtitle: 'Analisamos necessidades e prioridades',
    description: 'Nem todo cliente precisa das mesmas coberturas. Identificamos os riscos reais para desenhar propostas que façam sentido para a sua realidade.',
  },
  {
    step: '03',
    title: 'Buscamos alternativas',
    subtitle: 'Avaliamos as opções disponíveis',
    description: 'Como corretora independente, consultamos o mercado e pesquisamos alternativas compatíveis com o seu perfil entre as companhias seguradoras autorizadas pela SUSEP.',
  },
  {
    step: '04',
    title: 'Explicamos as diferenças',
    subtitle: 'Você entende o que está contratando',
    description: 'Traduzimos os termos técnicos: o que é franquia, o que a apólice cobre, quais são os limites e o que está expressamente excluído. Clareza antes de qualquer assinatura.',
  },
  {
    step: '05',
    title: 'Você escolhe',
    subtitle: 'A decisão consciente é sempre sua',
    description: 'Apresentamos as opções lado a lado, com prós e contras transparentes. Sem pressão comercial para empurrar produtos que você não precisa.',
  },
  {
    step: '06',
    title: 'Continuamos ao seu lado',
    subtitle: 'Acompanhamento constante no pós-venda',
    description: 'O papel da Operaseg não termina na emissão da apólice. Se você precisar acionar um guincho, registrar um sinistro, tirar dúvidas ou renovar, nós estaremos ao seu lado.',
  },
];

export const DIFFERENTIALS = [
  {
    title: 'Atendimento próximo e humano',
    description: 'Em Ponta Grossa, você conversa diretamente com pessoas que conhecem seu nome e sua necessidade, sem se perder em labirintos de atendimento automatizado.',
  },
  {
    title: 'Orientação clara e descomplicada',
    description: 'Seguro não precisa ser repleto de "letras miúdas". Explicamos cada detalhe de coberturas, franquias e exclusões em linguagem acessível e transparente.',
  },
  {
    title: 'Análise personalizada de risco',
    description: 'Partimos da sua realidade. Ajustamos coberturas para o que é essencial para você, sem pagar por proteções supérfluas e sem deixar riscos importantes descobertos.',
  },
  {
    title: 'Relacionamento e suporte no sinistro',
    description: 'A hora em que você mais precisa de um corretor é quando ocorre um imprevisto. Prestamos assessoria ativa no encaminhamento e acompanhamento junto à seguradora.',
  },
];

export const INSURANCES_DATA: InsuranceItem[] = [
  {
    id: 'auto',
    title: 'Seguro Automóvel',
    badge: 'Proteção Veicular',
    tagline: 'Tranquilidade para circular com seu carro ou utilitário.',
    shortDescription: 'Orientação completa para proteger seu veículo contra colisão, roubo, furto, danos a terceiros e com assistência 24 horas.',
    fullDescription: 'O seguro de automóvel vai muito além de proteger a lataria do carro: ele protege seu orçamento contra despesas repentinas e oferece suporte prático em viagens e no dia a dia. A Operaseg analisa o modelo do seu veículo, perfil de uso e rotinas para apresentar opções balanceadas entre proteção, franquia e assistência.',
    whoIsItFor: [
      'Proprietários de veículos particulares de passeio',
      'Profissionais autônomos que utilizam o veículo para trabalho diário',
      'Famílias que buscam assistência ágil para viagens e emergências',
      'Motoristas que desejam proteção para terceiros e guincho sem surpresas',
    ],
    situationsCovered: [
      'Colisão, capotagem ou abalroamento acidental',
      'Roubo ou furto total e parcial do veículo',
      'Danos materiais e corporais causados a terceiros (RCF-V)',
      'Danos da natureza (alagamento, granizo, queda de árvore, etc.)',
      'Quebra ou trinca de vidros, faróis, lanternas e retrovisores',
      'Assistência 24 horas com guincho, chaveiro e carro reserva',
    ],
    factorsInfluencingPrice: [
      'Modelo, ano e valor de tabela do veículo',
      'Região de circulação e CEP de pernoite (ex.: Ponta Grossa e região)',
      'Idade dos condutores principais e histórico de direção',
      'Finalidade do uso (lazer, trabalho diário ou transporte de passageiros)',
      'Opção e valor da franquia (básica, reduzida ou ampliada)',
    ],
    commonFaqs: [
      {
        question: 'O que é a franquia do seguro auto?',
        answer: 'A franquia é a participação obrigatória do segurado nos custos de reparo do próprio veículo em caso de perda parcial (sinistro com reparo). Em caso de roubo/furto sem recuperação ou indenização integral (perda total), não há cobrança de franquia.',
      },
      {
        question: 'Por que é importante contratar a cobertura para terceiros?',
        answer: 'A cobertura de RCF-V protege seu patrimônio caso você se envolva em um acidente e cause danos materiais ou físicos a outras pessoas ou veículos. Sem ela, você teria que arcar integralmente com os custos do outro condutor.',
      },
      {
        question: 'O seguro cobre granizo e alagamento em Ponta Grossa?',
        answer: 'Na contratação da cobertura compreensiva (completa), danos decorrentes de fenômenos da natureza como chuva de granizo, alagamento de água doce e queda de galhos costumam estar previstos. Orientamos você a verificar as cláusulas exatas da proposta.',
      },
    ],
    whatsappMessage: 'Olá! Vim pelo site da Operaseg e gostaria de fazer uma cotação de seguro auto.',
    status: 'confirmado',
  },
  {
    id: 'frotas',
    title: 'Seguro de Frotas',
    badge: 'Logística & Transporte',
    tagline: 'Gestão de risco e proteção sob medida para a frota de veículos da sua empresa.',
    shortDescription: 'Condições comerciais diferenciadas para empresas a partir de 3 ou mais veículos, incluindo caminhões, utilitários e automóveis comerciais.',
    fullDescription: 'Gerenciar uma frota requer controle de custos e agilidade para que nenhum veículo fique parado gerando prejuízo. O seguro de frotas da Operaseg unifica a proteção sob uma única apólice simplificada, com condições especiais de franquia, assistência 24h customizada para veículos pesados ou leves e cobertura completa de terceiros.',
    whoIsItFor: [
      'Empresas com 3 ou mais veículos leves, médios ou pesados',
      'Transportadoras, distribuidoras e operadores logísticos dos Campos Gerais',
      'Empresas de prestação de serviços com equipes externas em campo',
      'Produtores rurais e cooperativas que movimentam cargas regionais',
    ],
    situationsCovered: [
      'Colisão, capotagem, tombamento e incêndio de veículos da frota',
      'Roubo e furto qualificado total ou parcial',
      'Danos a terceiros (materiais, corporais e morais)',
      'Assistência 24h com guincho para leves e pesados em âmbito nacional',
      'Carro reserva executivo ou utilitário temporário',
      'Cobertura para equipamentos e implementos acoplados',
    ],
    factorsInfluencingPrice: [
      'Quantidade e tipos de veículos que compõem a frota',
      'Raio de circulação (urbano, intermunicipal ou interestadual)',
      'Tipo de carga transportada ou atividade operacional da frota',
      'Tecnologias de rastreamento e gerenciamento de risco adotadas',
    ],
    commonFaqs: [
      {
        question: 'A partir de quantos veículos já é considerado frota?',
        answer: 'Na maioria das seguradoras parceiras da Operaseg, frotas a partir de 3, 4 ou 5 veículos já podem usufruir de condições comerciais diferenciadas e apólice unificada.',
      },
      {
        question: 'Posso incluir carros de passeio e caminhões na mesma apólice de frota?',
        answer: 'Sim, a apólice de frota pode ser mista, abrangendo desde automóveis da diretoria e representantes até utilitários e caminhões de entrega.',
      },
      {
        question: 'Como funciona a assistência 24 horas para frotas?',
        answer: 'A assistência é parametrizada de acordo com as necessidades da sua operação, incluindo guincho com quilometragem ampliada ou ilimitada, socorro mecânico e reboque de veículos de carga.',
      },
    ],
    whatsappMessage: 'Olá! Vim pelo site da Operaseg e gostaria de fazer uma cotação para a frota da minha empresa.',
    status: 'confirmado',
  },
  {
    id: 'maquinas-agricolas',
    title: 'Seguro de Máquinas Agrícolas & Equipamentos',
    badge: 'Agronegócio & Campo',
    tagline: 'Proteção patrimonial para tratores, colheitadeiras e implementos agrícolas.',
    shortDescription: 'Blindagem financeira essencial para o produtor rural contra acidentes operacionais, incêndio, tombamento, alagamento e roubo na lavoura.',
    fullDescription: 'Os Campos Gerais e o Paraná têm no agronegócio uma das suas maiores forças. Tratores, colheitadeiras, pulverizadores e plantadeiras representam investimentos de alto valor que operam sob condições severas. A Operaseg oferece seguro de máquinas e equipamentos agrícolas que resguarda seu investimento tanto em operação quanto no transporte e guarda.',
    whoIsItFor: [
      'Produtores rurais e pecuaristas de Ponta Grossa e Campos Gerais',
      'Cooperativas agroindustriais e associações de produtores',
      'Empresas prestadoras de serviços agrícolas e colheita terceirizada',
      'Proprietários de equipamentos financiados via Pronaf, Pronamp ou Moderfrota',
    ],
    situationsCovered: [
      'Tombamento, colisão e acidentes de causa externa durante o trabalho',
      'Incêndio, raio, explosão e queima de palhada/lavoura adjacente',
      'Roubo ou furto qualificado do maquinário na propriedade ou em trânsito',
      'Alagamento, inundação e vendaval',
      'Responsabilidade civil do operador e danos a terceiros',
      'Danos elétricos aos componentes eletrônicos e computadores de bordo',
    ],
    factorsInfluencingPrice: [
      'Tipo de equipamento (trator, colheitadeira, pulverizador autopropelido, implemento)',
      'Ano de fabricação, modelo e valor de reposição no mercado',
      'Região da propriedade e infraestrutura de guarda e segurança',
      'Se o maquinário está atrelado a financiamento bancário/penhor rural',
    ],
    commonFaqs: [
      {
        question: 'O seguro cobre tombamento de trator ou colheitadeira na lavoura?',
        answer: 'Sim, acidentes de operação de causa externa, como tombamento em terrenos inclinados ou valas e colisão, estão entre as principais coberturas contratadas pelo produtor rural.',
      },
      {
        question: 'O seguro atende exigências de financiamento bancário (Banco do Brasil, Sicredi, Sicoob, etc.)?',
        answer: 'Sim! Nossas apólices atendem integralmente às exigências contratuais de penhor e garantia exigidas pelas instituições financeiras para liberação de crédito rural.',
      },
      {
        question: 'O maquinário fica coberto durante o transporte em prancha ou rodovia?',
        answer: 'Sim, pode-se contratar a extensão de cobertura para traslado e transporte do maquinário de uma propriedade ou talhão para outro.',
      },
    ],
    whatsappMessage: 'Olá! Vim pelo site da Operaseg e gostaria de cotar seguro para máquinas e implementos agrícolas.',
    status: 'confirmado',
  },
  {
    id: 'residencial',
    title: 'Seguro Residencial',
    badge: 'Proteção do Lar',
    tagline: 'Segurança para sua casa ou apartamento com serviços para o dia a dia.',
    shortDescription: 'Protege a estrutura e o conteúdo da sua residência contra incêndio, vendaval, danos elétricos e roubo, além de assistências emergenciais.',
    fullDescription: 'Sua casa é provavelmente um dos seus maiores bens materiais e o centro da vida da sua família. O seguro residencial é surpreendentemente acessível e alia a proteção patrimonial estrutural a uma ampla rede de assistências para reparos emergenciais (como encanador, eletricista e chaveiro).',
    whoIsItFor: [
      'Proprietários de casas e sobrados em bairros ou condomínios fechados',
      'Moradores e proprietários de apartamentos residenciais',
      'Locatários (inquilinos que desejam proteger seus móveis e eletrodomésticos)',
      'Casas de campo, veraneio ou chácaras de lazer na região',
    ],
    situationsCovered: [
      'Incêndio, queda de raio e explosão de qualquer natureza',
      'Danos elétricos em aparelhos causados por sobretensão ou curto-circuito',
      'Vendaval, tempestade, furacão e granizo',
      'Roubo ou furto qualificado de bens no interior do imóvel',
      'Impacto de veículos e quebra de vidros',
      'Assistências 24h: chaveiro, hidráulica, elétrica e desentupimento',
    ],
    factorsInfluencingPrice: [
      'Tipo de imóvel (casa de alvenaria, madeira ou apartamento)',
      'Localização geográfica e CEP do imóvel em Ponta Grossa e região',
      'Valor estimado para reconstrução do imóvel e bens no interior',
      'Contratação de coberturas adicionais (danos elétricos, roubo, etc.)',
    ],
    commonFaqs: [
      {
        question: 'O seguro residencial é caro?',
        answer: 'Pelo contrário: o seguro residencial é tradicionalmente um dos seguros mais acessíveis do mercado, custando em média uma pequena fração do valor de um seguro de automóvel para proteger um patrimônio muito maior.',
      },
      {
        question: 'Quem mora de aluguel pode contratar seguro residencial?',
        answer: 'Sim! O inquilino pode contratar o seguro para proteger o conteúdo (seus móveis, eletrodomésticos e equipamentos) e incluir a cobertura de perda de aluguel ou incêndio exigida no contrato de locação.',
      },
      {
        question: 'Como funcionam os serviços de assistência residencial?',
        answer: 'Dependendo da apólice contratada, você pode acionar profissionais conveniados da seguradora para pequenos reparos como vazamentos hidráulicos, troca de fechadura ou problemas na fiação elétrica.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de conhecer as opções de seguro residencial.',
    status: 'confirmado',
  },
  {
    id: 'vida',
    title: 'Seguro de Vida',
    badge: 'Cuidado & Família',
    tagline: 'Proteção financeira responsável para quem você ama e benefícios em vida.',
    shortDescription: 'Garante tranquilidade financeira para seus dependentes em momentos difíceis e oferece coberturas aproveitadas em vida, como diagnóstico de doenças graves e invalidez.',
    fullDescription: 'Conversar sobre seguro de vida é falar sobre responsabilidade, cuidado e estabilidade financeira. Longe de ser um produto restrito a fatalidades, o seguro de vida moderno foi reformulado para apoiar o segurado ainda em vida: em casos de invalidez, diagnósticos de doenças graves, diárias por incapacidade temporária e assistência especializada.',
    whoIsItFor: [
      'Chefes de família com filhos ou dependentes financeiros',
      'Profissionais liberais e autônomos que dependem diretamente de sua força de trabalho',
      'Pessoas que buscam proteção financeira em caso de imprevistos de saúde',
      'Sócios de empresas que desejam blindar a sucessão e continuidade do negócio',
    ],
    situationsCovered: [
      'Morte por causas naturais ou acidentais',
      'Invalidez permanente total ou parcial por acidente (IPA)',
      'Diagnóstico de doenças graves (câncer, infarto, AVC, etc.) com indenização em vida',
      'Diárias por Incapacidade Temporária (DIT) para autônomos',
      'Assistência funeral individual ou familiar',
      'Isenção de inventário com pagamento rápido aos beneficiários',
    ],
    factorsInfluencingPrice: [
      'Idade do segurado no momento da contratação',
      'Profissão exercida e grau de exposição a riscos diários',
      'Histórico de saúde e questionário declaratório (DPS)',
      'Capital segurado desejado para cada cobertura contratada',
    ],
    commonFaqs: [
      {
        question: 'O seguro de vida pode ser utilizado em vida?',
        answer: 'Sim! Coberturas modernas como invalidez por acidente, diagnóstico de doenças graves e diárias por incapacidade temporária pagam a indenização diretamente a você enquanto você está em tratamento ou recuperação.',
      },
      {
        question: 'O seguro de vida entra em inventário judicial?',
        answer: 'Não. Por lei federal, a indenização do seguro de vida não entra em inventário, não responde por dívidas do falecido e é isenta de imposto de renda, garantindo liquidez financeira rápida aos beneficiários escolhidos.',
      },
      {
        question: 'Posso escolher qualquer pessoa como beneficiária?',
        answer: 'Sim, você tem a liberdade de indicar os beneficiários que desejar na apólice e pode atualizar essas porcentagens ao longo do tempo.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de conhecer as opções de seguro de vida com a Operaseg.',
    status: 'confirmado',
  },
  {
    id: 'empresarial',
    title: 'Seguro Empresarial',
    badge: 'Proteção Corporativa',
    tagline: 'Segurança sob medida para manter o funcionamento da sua empresa em Ponta Grossa.',
    shortDescription: 'Solução sob medida para proteger comércios, escritórios, indústrias e prestadores de serviços contra danos ao patrimônio físico, estoques e equipamentos.',
    fullDescription: 'Um imprevisto patrimonial não pode interromper o sonho e a operação do seu negócio. O seguro empresarial é modulável de acordo com o segmento da empresa (comércio, indústria, consultórios, galpões ou escritórios), cobrindo o prédio, instalações, mercadorias e lucros cessantes.',
    whoIsItFor: [
      'Comércios de rua, galerias e centros comerciais de Ponta Grossa',
      'Escritórios de advocacia, contabilidade e consultórios médicos',
      'Pequenas e médias indústrias, distribuidoras e centros de armazenagem',
      'Prestadores de serviços e empresas de tecnologia e logística',
    ],
    situationsCovered: [
      'Incêndio, fumaça e explosão no estabelecimento',
      'Danos elétricos a máquinas, servidores e computadores',
      'Roubo ou furto qualificado de bens, mercadorias e valores',
      'Responsabilidade Civil Operações (danos involuntários a clientes no local)',
      'Perda ou pagamento de aluguel do imóvel comercial',
      'Lucros cessantes ou despesas fixas em decorrência de paralisação',
    ],
    factorsInfluencingPrice: [
      'Atividade econômica (CNAE) e segmento da empresa',
      'Medidas de prevenção e combate a incêndio existentes no local',
      'Localização do imóvel em Ponta Grossa e características construtivas',
      'Valores declarados de estoque, máquinas, instalações e prédio',
    ],
    commonFaqs: [
      {
        question: 'O seguro empresarial cobre meus equipamentos eletrônicos?',
        answer: 'Sim, através da cobertura opcional de equipamentos eletrônicos ou danos elétricos, que protege computadores, periféricos e maquinários essenciais contra curtos-circuitos e quebras acidentais.',
      },
      {
        question: 'E se a empresa precisar parar as atividades após um incêndio?',
        answer: 'Pode-se contratar a cobertura de despesas fixas ou lucros cessantes, que auxilia a empresa a honrar folha de pagamento, tributos e custos operacionais enquanto o espaço é recuperado.',
      },
      {
        question: 'A Operaseg atende empresas de qualquer porte?',
        answer: 'Sim, desde pequenas salas comerciais e MEIs até indústrias e galpões comerciais de grande porte em Ponta Grossa e região.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de conversar sobre seguro para minha empresa.',
    status: 'confirmado',
  },
  {
    id: 'saude',
    title: 'Planos de Saúde & Odonto',
    badge: 'A Confirmar Disponibilidade',
    tagline: 'Assistência médica e odontológica para indivíduos, famílias e empresas.',
    shortDescription: 'Soluções para cuidar da saúde de colaboradores e familiares com redes credenciadas de hospitais, clínicas e laboratórios.',
    fullDescription: 'A assistência médica e odontológica é um dos benefícios mais valorizados por famílias e colaboradores. Atuamos na intermediação de planos de saúde individuais, coletivos por adesão e empresariais, auxiliando a comparar tabelas de carências, abrangência geográfica e redes referenciadas.',
    whoIsItFor: [
      'Empresas a partir de 2 ou 3 vidas (sócios, funcionários e dependentes)',
      'Profissionais liberais vinculados a entidades de classe',
      'Famílias que buscam segurança no atendimento médico regional',
    ],
    situationsCovered: [
      'Consultas médicas, exames diagnósticos e terapias',
      'Internações clínicas e cirúrgicas em hospitais conveniados',
      'Urgência e emergência 24 horas',
      'Atendimento odontológico conforme o plano contratado',
    ],
    factorsInfluencingPrice: [
      'Faixa etária dos beneficiários',
      'Tipo de acomodação (enfermaria ou apartamento privativo)',
      'Opção com ou sem coparticipação nos procedimentos',
      'Abrangência regional (Campos Gerais/PR) ou nacional',
    ],
    commonFaqs: [
      {
        question: 'Qual a vantagem de contratar plano de saúde empresarial?',
        answer: 'Planos empresariais geralmente possuem valores por vida mais vantajosos que planos individuais e regras diferenciadas para redução ou isenção de carências dependendo do número de vidas.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de verificar a disponibilidade e opções de planos de saúde e odonto com a Operaseg.',
    status: 'a_confirmar',
  },
  {
    id: 'previdencia',
    title: 'Previdência Privada',
    badge: 'A Confirmar Disponibilidade',
    tagline: 'Planejamento financeiro de longo prazo para um futuro equilibrado.',
    shortDescription: 'Ferramenta estruturada de acumulação e planejamento sucessório para complementar a aposentadoria ou realizar projetos futuros.',
    fullDescription: 'A previdência privada complementar permite construir uma reserva financeira ao longo do tempo com vantagens tributárias específicas e flexibilidade de resgate ou renda programada.',
    whoIsItFor: [
      'Pessoas que desejam planejar sua aposentadoria com independência',
      'Pais que desejam formar reserva financeira para os estudos dos filhos',
      'Profissionais que buscam planejamento fiscal e sucessório',
    ],
    situationsCovered: [
      'Acumulação de capital com rentabilidade conforme perfil de risco',
      'Opções de tabela tributária regressiva ou progressiva',
      'Planejamento sucessório direto para beneficiários sem morosidade',
    ],
    factorsInfluencingPrice: [
      'Valor do aporte inicial e contribuições mensais programadas',
      'Tempo de acumulação até a fase de resgate ou renda',
      'Perfil de investimento do fundo escolhido (conservador, moderado ou arrojado)',
    ],
    commonFaqs: [
      {
        question: 'Qual a diferença entre PGBL e VGBL?',
        answer: 'O PGBL é indicado para quem faz declaração completa do Imposto de Renda (permite dedução de até 12% da renda bruta tributável), enquanto o VGBL é indicado para declaração simplificada ou quem já atingiu o limite do PGBL.',
      },
    ],
    whatsappMessage: 'Olá! Gostaria de saber mais sobre as opções de previdência privada com a Operaseg.',
    status: 'a_confirmar',
  },
];

export const FAQS_DATA: FaqItem[] = [
  {
    id: '1',
    category: 'geral',
    question: 'O que faz uma corretora de seguros?',
    answer: 'Uma corretora de seguros atua como consultora e intermediadora autorizada pela SUSEP entre você e as seguradoras. Nosso papel é analisar suas reais necessidades, pesquisar as melhores alternativas disponíveis no mercado, explicar detalhadamente termos e coberturas para que você faça uma escolha consciente, e acompanhar todo o relacionamento pós-venda, inclusive prestando suporte caso ocorra um sinistro.',
  },
  {
    id: '2',
    category: 'geral',
    question: 'A Operaseg trabalha com quais tipos de seguro?',
    answer: 'Trabalhamos com Seguro Automóvel (veículos particulares, comerciais e frotas), Seguro Residencial (casas e apartamentos), Seguro de Vida (individual e em grupo) e Seguro Empresarial (patrimonial e responsabilidade civil). Também mantemos canais abertos para orientação em planos de saúde e previdência [a confirmar disponibilidade de carteira].',
  },
  {
    id: '3',
    category: 'geral',
    question: 'Quanto custa um seguro?',
    answer: 'O valor de um seguro não é fixo porque ele é calculado matematicamente a partir da análise de risco individual: tipo de bem, localização (como Ponta Grossa e rotinas de uso), perfil dos condutores ou segurados e limites de cobertura escolhidos. Por isso, realizamos um estudo personalizado para encontrar a proteção que caiba confortavelmente no seu orçamento.',
  },
  {
    id: '4',
    category: 'geral',
    question: 'Preciso contratar o seguro mais barato?',
    answer: 'Nem sempre a opção mais barata é a mais indicada para sua segurança. Uma apólice com preço muito reduzido pode conter franquias elevadas, limites baixos para danos a terceiros ou exclusões importantes que deixam você desamparado na hora que mais precisa. Na Operaseg, mostramos o custo-benefício real de cada proposta para você decidir com clareza.',
  },
  {
    id: '5',
    category: 'processo',
    question: 'Como funciona uma cotação com a Operaseg?',
    answer: 'O processo é simples e transparente: você nos conta o que precisa proteger pelo WhatsApp, formulário ou telefone. Coletamos apenas as informações estritamente necessárias, pesquisamos propostas compatíveis e apresentamos as alternativas com explicações claras sobre coberturas e valores. Você escolhe se e quando contratar.',
  },
  {
    id: '6',
    category: 'processo',
    question: 'Quais informações preciso fornecer para cotar um seguro?',
    answer: 'Depende do tipo de seguro: para automóvel, são necessários dados do veículo (placa, modelo, chassi) e perfil de uso do condutor; para residencial, o endereço e características do imóvel; para seguro de vida, idade, ocupação e perfil básico de saúde; e para empresarial, ramo de atividade, endereço e valor aproximado de instalações e mercadorias.',
  },
  {
    id: '7',
    category: 'geral',
    question: 'Posso comparar diferentes opções antes de fechar?',
    answer: 'Com certeza! Esse é um dos maiores benefícios de contar com uma corretora independente. Nós apresentamos diferentes alternativas de propostas para que você possa comparar limites, coberturas, franquias e formas de pagamento com tranquilidade.',
  },
  {
    id: '8',
    category: 'auto',
    question: 'O que é franquia no seguro?',
    answer: 'A franquia é a quantia prevista em apólice com a qual o segurado participa financeiramente nos prejuízos resultantes de um sinistro com perda parcial (por exemplo, no conserto do próprio veículo em uma colisão). A seguradora cobre o valor restante que exceder essa quantia. Para perda total ou roubo sem localização do bem, não há pagamento de franquia.',
  },
  {
    id: '9',
    category: 'geral',
    question: 'O que são coberturas e exclusões em uma apólice?',
    answer: 'Coberturas são as situações expressamente garantidas pelo contrato de seguro que geram indenização ou assistência caso aconteçam. Já as exclusões (riscos excluídos) são eventos específicos descritos nas Condições Gerais da seguradora que não possuem cobertura contratual. Nosso compromisso na Operaseg é apontar exatamente essas exclusões para você nunca ser pego de surpresa.',
  },
  {
    id: '10',
    category: 'processo',
    question: 'A Operaseg acompanha o cliente depois da contratação?',
    answer: 'Sim, esse é um dos nossos maiores compromissos. Continuamos ao seu lado durante toda a vigência da apólice para alterações de cadastro, inclusão de coberturas, renovações planejadas e, principalmente, para dar suporte ágil e humanizado em caso de sinistro.',
  },
  {
    id: '11',
    category: 'geral',
    question: 'Como falar com a Operaseg em Ponta Grossa?',
    answer: 'Você pode falar diretamente conosco pelo nosso WhatsApp oficial, por telefone, formulário de contato no site ou agendando um atendimento presencial em Ponta Grossa, Paraná.',
  },
];

export const ARTICLES_DATA: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'o-que-e-franquia-seguro-auto',
    title: 'O que é Franquia no Seguro Auto e como escolher a opção adequada?',
    category: 'Seguro Auto',
    readTime: '4 min de leitura',
    publishDate: 'Artigo Educativo',
    summary: 'Entenda como funciona a participação do segurado em caso de sinistro e as diferenças práticas entre franquia básica, reduzida e ampliada.',
    content: [
      'Ao cotar um seguro para seu veículo, um dos termos mais recorrentes e que mais geram dúvidas é a franquia. Compreender o que ela representa evita surpresas no momento de acionar a seguradora.',
      'Em termos diretos, a franquia é a quantia prevista em contrato com a qual o segurado participa caso ocorra um sinistro de perda parcial — ou seja, quando o conserto do carro for viável e não atingir o limite de perda total (geralmente 75% do valor do veículo).',
      'Existem três modalidades usuais no mercado: a Franquia Básica (padrão de mercado), a Franquia Reduzida (onde o valor a ser pago pelo segurado no reparo é menor, gerando uma apólice com valor ligeiramente maior) e a Franquia Ampliada ou Majorada (indicada para condutores que raramente acionam pequenos reparos e preferem baratear o custo inicial da apólice).',
      'Na Operaseg, auxiliamos você a simular essas opções de acordo com o seu perfil de uso em Ponta Grossa, para que a escolha seja coerente tanto no desembolso anual quanto na tranquilidade de um conserto eventual.',
    ],
  },
  {
    id: 'art-2',
    slug: 'diferenca-entre-seguro-e-assistencia-24h',
    title: 'Diferença entre Seguro e Assistência 24h: entenda o que cada um cobre',
    category: 'Conceitos',
    readTime: '3 min de leitura',
    publishDate: 'Artigo Educativo',
    summary: 'Muitos motoristas confundem o socorro mecânico com a proteção patrimonial do seguro. Veja por que eles se complementam.',
    content: [
      'É muito comum ouvir pessoas dizendo: "meu seguro me mandou um guincho". No entanto, seguro e assistência 24h são serviços distintos que operam em conjunto.',
      'A Assistência 24 Horas é um serviço de conveniência emergencial: envio de reboque/guincho em caso de pane seca, elétrica ou mecânica, troca de pneu furado, chaveiro e carro reserva em casos cobertos. Ela resolve o imprevisto imediato na rua ou estrada.',
      'O Seguro, por sua vez, é a garantia de indenização patrimonial contra prejuízos financeiros graves: colisão com perda parcial ou total, roubo, furto qualificado, incêndio e indenização por danos materiais ou corporais causados a terceiros.',
      'Ao contratar uma apólice pela Operaseg, garantimos que os limites de quilometragem do guincho e a quantidade de utilizações da assistência atendam às suas rotinas em Ponta Grossa e viagens habituais.',
    ],
  },
  {
    id: 'art-3',
    slug: 'seguro-residencial-alem-do-incendio',
    title: 'Seguro Residencial: muito além de incêndio, uma rede de proteção prática',
    category: 'Seguro Residencial',
    readTime: '5 min de leitura',
    publishDate: 'Artigo Educativo',
    summary: 'Descubra por que o seguro de casa é um dos mais econômicos do mercado e como as assistências do dia a dia trazem retorno imediato.',
    content: [
      'Embora a cobertura básica histórica seja contra incêndio, queda de raio e explosão, o seguro residencial moderno se transformou em uma ferramenta multifuncional de manutenção e resguardo patrimonial.',
      'Em regiões com variações climáticas e tempestades pontuais como os Campos Gerais, coberturas contra danos elétricos (queima de aparelhos de ar-condicionado, televisores e computadores por sobretensão) e vendavais são essenciais.',
      'Além disso, o seguro conta com assistência residencial que disponibiliza encanadores para vazamentos, eletricistas para curtos na fiação e chaveiros para trocas de miolo de fechadura, evitando gastos imprevistos.',
      'Com um custo que frequentemente não ultrapassa algumas dezenas de reais ao mês, proteger seu lar é uma decisão prática e financeiramente inteligente.',
    ],
  },
  {
    id: 'art-4',
    slug: 'erros-comuns-ao-contratar-um-seguro',
    title: 'Erros comuns ao contratar um seguro e como evitá-los com orientação',
    category: 'Orientação',
    readTime: '4 min de leitura',
    publishDate: 'Artigo Educativo',
    summary: 'Omitir informações no perfil do condutor ou escolher coberturas incompatíveis pode comprometer a indenização. Veja os cuidados essenciais.',
    content: [
      'Ao contratar uma apólice, o preenchimento do questionário de avaliação de risco deve ser pautado pela total boa-fé e exatidão das informações prestadas.',
      'Um dos erros mais comuns é omitir a existência de condutores jovens (entre 18 e 25 anos) que utilizam o veículo, ou informar um CEP de pernoite que não corresponde à realidade, na tentativa de reduzir o valor do prêmio. Essa divergência pode resultar na perda de direito à indenização em caso de sinistro.',
      'Outro erro comum é focar unicamente no preço mais baixo e desconsiderar a cobertura de Responsabilidade Civil Facultativa (terceiros), deixando limites baixos que não cobrem os veículos de valor elevado que circulam hoje nas ruas.',
      'O papel de um corretor de seguros é justamente orientar você com retidão e técnica, garantindo que o seu contrato seja juridicamente sólido e seguro perante a seguradora.',
    ],
  },
];
