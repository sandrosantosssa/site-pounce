/**
 * Dicionário i18n centralizado do site Pounce.
 * Para adicionar/ajustar textos: editar pt e en mantendo a mesma estrutura.
 * Todos os termos técnicos de reciclagem foram revisados para uso profissional.
 */

export type Lang = 'pt' | 'en';

export const dict = {
  pt: {
    common: {
      brand: 'Pounce',
      tagline: 'Transformando resíduos em valor.',
    },
    nav: {
      home: 'Início',
      about: 'Sobre',
      esg: 'ESG',
      products: 'Produtos',
      news: 'Notícias',
      contact: 'Contato',
      contactUs: 'Fale conosco',
      contactUsDesc: 'Formulário e e-mail comercial',
      workWithUs: 'Trabalhe conosco',
      workWithUsDesc: 'Envie seu currículo ao RH',
      menuAria: 'Menu',
      ctaContact: 'Fale conosco',
      clientPortal: 'Portal do Cliente',
      clientPortalBadge: 'em breve',
      clientPortalAlert: 'Portal do Cliente em desenvolvimento. Em breve você acessará pedidos, notas fiscais e laudos por aqui.',
    },
    lang: {
      switchAria: 'Mudar idioma',
      pt: 'PT',
      en: 'EN',
    },
    hero: {
      badge: 'Recicladora de Plásticos Pós-consumo',
      titlePre: 'Transformando',
      titleHighlight: 'resíduos',
      titlePost: 'em valor.',
      subtitle:
        'Soluções avançadas em reciclagem mecânica de plásticos. Unimos rastreabilidade, alto desempenho técnico e compromisso ambiental para sermos o parceiro ideal das empresas que buscam fechar o ciclo do plástico.',
      ctaPrimary: 'Falar com o time',
      ctaSecondary: 'Nossa atuação ESG',
      kpi1Value: '6 mil',
      kpi1Label: 'ton/ano de capacidade',
      kpi2Value: '+5M',
      kpi2Label: 'embalagens/ano',
      kpi3Value: '100%',
      kpi3Label: 'rastreabilidade',
      soundOn: 'Som',
      soundOff: 'Mudo',
      soundAriaOn: 'Ativar som',
      soundAriaOff: 'Desativar som',
    },
    sobre: {
      badge: 'Sobre a Pounce',
      titlePre: 'Indústria de reciclagem com',
      titleHighlight: 'propósito ambiental',
      titlePost: '.',
      p1: 'A Pounce é uma recicladora dedicada à transformação de plásticos pós-consumo em matéria-prima de alto desempenho. Atuamos com rastreabilidade, controle técnico e foco em soluções que reduzem o impacto ambiental das embalagens.',
      p2: 'Nascemos para fechar o ciclo do plástico, devolvendo à indústria um insumo confiável, sustentável e auditável.',
      cards: {
        proposito: {
          title: 'Propósito',
          desc: 'Transformar resíduos em valor real para a indústria, para as pessoas e para o planeta.',
        },
        tradicao: {
          title: 'Tradição',
          desc: 'Mais de uma década de experiência no setor industrial, com evolução constante em tecnologia e processos.',
        },
        rastreabilidade: {
          title: 'Rastreabilidade',
          desc: 'Controle ponta-a-ponta, do resíduo recebido ao pellet entregue ao cliente, com documentação técnica.',
        },
        desempenho: {
          title: 'Desempenho',
          desc: 'Matéria-prima reciclada com performance comprovada para aplicações industriais exigentes.',
        },
      },
    },
    esg: {
      badge: 'ESG · Reciclagem Mecânica',
      titlePre: 'Do resíduo ao pellet:',
      titleHighlight: 'processo completo',
      description:
        'Nossa atuação ESG na prática: operação industrial estruturada em seis etapas, com tecnologia e controle técnico para devolver à indústria um insumo confiável e sustentável.',
      steps: [
        {
          n: '01',
          title: 'Coleta & Recebimento',
          desc: 'Plásticos pós-consumo são recebidos com inspeção, identificação e classificação por tipo de polímero.',
        },
        {
          n: '02',
          title: 'Triagem & Separação',
          desc: 'Separação manual e técnica para garantir lotes homogêneos e livres de contaminantes.',
        },
        {
          n: '03',
          title: 'Moagem',
          desc: 'O material passa por moinhos industriais, sendo reduzido a flakes, a base do processo de reciclagem mecânica.',
        },
        {
          n: '04',
          title: 'Lavagem',
          desc: 'Etapa essencial de remoção de impurezas, rótulos e resíduos orgânicos, com controle de água e efluentes.',
        },
        {
          n: '05',
          title: 'Extrusão & Pelletização',
          desc: 'Os flakes são fundidos e transformados em pellets uniformes, matéria-prima pronta para nova aplicação.',
        },
        {
          n: '06',
          title: 'Controle de Qualidade',
          desc: 'Testes técnicos garantem o desempenho do pellet reciclado para uso na indústria de embalagens e produtos.',
        },
      ],
      pellet: {
        titlePre: 'Resinas PCR e PIR com',
        titleHighlight: 'desempenho industrial',
        desc: 'Trabalhamos com PE, PP e outros polímeros, tanto pós-consumo (PCR) quanto pós-indústria (PIR). Cada lote é entregue com ficha técnica e laudo, garantindo previsibilidade e estabilidade no seu processo produtivo.',
        boxes: [
          { v: 'PCR / PIR', l: 'Resinas PE & PP' },
          { v: 'Laudo', l: 'Ficha técnica por lote' },
          { v: 'Pós-consumo & Pós-indústria', l: 'Origem rastreada' },
          { v: 'B2B', l: 'Indústria & embalagens' },
        ],
      },
      impacto: {
        badge: 'Impacto Real',
        titlePre: 'Números que mostram a',
        titleHighlight: 'prática ESG',
        desc: 'Cada tonelada reciclada é menos extração de matéria virgem, menos resíduo no ambiente e mais economia circular.',
        metrics: [
          { v: '6.000', u: 'ton/ano', l: 'Capacidade' },
          { v: '+5M', u: 'embalagens', l: 'No ciclo / ano' },
          { v: '−70%', u: 'CO₂', l: 'vs. virgem' },
          { v: '100%', u: 'rastreado', l: 'Origem auditável' },
        ],
      },
    },
    produtos: {
      badge: 'Produtos',
      titlePre: 'Matéria-prima reciclada',
      titleHighlight: 'com performance',
      description:
        'Linha de produtos desenhada para a indústria. Cada lote acompanha ficha técnica e laudo, com previsibilidade do recebimento ao processamento.',
      available: 'Disponível',
      cta: 'Solicitar ficha técnica',
      footnote:
        '* Imagens, fotos de produto e fichas técnicas detalhadas em atualização. Solicite informações pelo formulário de contato.',
      items: [
        {
          sigla: 'PCR PE',
          nome: 'Resinas PCR PE',
          desc: 'Polietileno reciclado pós-consumo (PCR) em pellet uniforme, com cor padronizada e fluidez controlada, pronto para extrusão e injeção.',
          aplicacoes: ['Filmes técnicos', 'Sacolas industriais', 'Tubos não-potáveis'],
        },
        {
          sigla: 'PCR PP',
          nome: 'Resinas PCR PP',
          desc: 'Polipropileno reciclado pós-consumo (PCR) com performance consistente para aplicações que exigem rigidez e resistência térmica.',
          aplicacoes: ['Caixas técnicas', 'Componentes industriais', 'Mobiliário urbano'],
        },
        {
          sigla: 'PIR PE',
          nome: 'Resinas PIR PE',
          desc: 'Polietileno pós-indústria (PIR) proveniente de sobras de produção limpas. Excelente consistência, baixa contaminação e desempenho próximo da resina virgem.',
          aplicacoes: ['Filmes de alta exigência', 'Peças injetadas', 'Tubos & dutos'],
        },
        {
          sigla: 'PIR PP',
          nome: 'Resinas PIR PP',
          desc: 'Polipropileno pós-indústria (PIR) com origem industrial controlada e baixíssima contaminação. Performance técnica ao lado da resina virgem, com pegada ambiental menor.',
          aplicacoes: ['Componentes automotivos', 'Eletrodomésticos', 'Embalagens rígidas'],
        },
        {
          sigla: 'FLK',
          nome: 'Flakes Lavados',
          desc: 'Material moído e lavado, pronto para reprocessamento. Indicado para indústrias com extrusora própria.',
          aplicacoes: ['Reprocessamento próprio', 'Composição de masterbatch', 'Misturas técnicas'],
        },
        {
          sigla: 'CUSTOM',
          nome: 'Compostos sob medida',
          desc: 'Formulações customizadas por projeto: combinação de polímeros, cor e desempenho de acordo com a sua aplicação.',
          aplicacoes: ['Projeto técnico', 'Volume contratado', 'Laudo dedicado'],
        },
      ],
    },
    diferenciais: {
      badge: 'Por que a Pounce',
      title: 'Nossos diferenciais',
      description:
        'O que torna a Pounce uma parceira sólida para indústrias que precisam de matéria-prima reciclada com previsibilidade e responsabilidade.',
      items: [
        {
          title: 'Visão sistêmica',
          desc: 'Olhamos toda a cadeia, da coleta ao pellet, para entregar uma solução que faça sentido técnico e comercial.',
        },
        {
          title: 'Atuação estratégica',
          desc: 'Cada operação é planejada para entregar volume, qualidade e rastreabilidade, alinhada às metas ESG do cliente.',
        },
        {
          title: 'Tecnologia + Processo',
          desc: 'Equipamentos industriais, controle de qualidade e processos auditáveis em todas as etapas.',
        },
        {
          title: 'Compromisso ambiental',
          desc: 'Sustentabilidade como prática diária: gestão de água, efluentes e resíduos no padrão da boa indústria.',
        },
        {
          title: 'Parceria de longo prazo',
          desc: 'Relacionamento próximo, suporte técnico contínuo e previsibilidade de fornecimento.',
        },
        {
          title: 'Transparência total',
          desc: 'Documentação técnica, indicadores claros e rastreabilidade ponta-a-ponta para você comunicar com confiança.',
        },
      ],
    },
    timeline: {
      badge: 'Nossa Trajetória',
      titlePre: 'Uma jornada construída com',
      titleHighlight: 'consistência',
      description:
        'De uma trajetória sólida no setor industrial até a operação dedicada à reciclagem mecânica, sempre com foco em desempenho técnico e propósito ambiental.',
      items: [
        { year: '2008', title: 'Início da jornada', desc: 'Atuação no setor industrial e visão sistêmica sobre a cadeia produtiva.' },
        { year: '2015', title: 'Foco em sustentabilidade', desc: 'Aprofundamento em práticas ESG e estudo do ciclo do plástico.' },
        { year: '2020', title: 'Plano para reciclagem', desc: 'Estruturação de um modelo industrial para reciclagem mecânica com rastreabilidade.' },
        { year: '2024', title: 'Nasce a Pounce', desc: 'Lançamento oficial da operação dedicada à reciclagem de plásticos pós-consumo.' },
      ],
    },
    noticias: {
      badge: 'Notícias',
      title: 'O que move o setor da reciclagem',
      description:
        'Conteúdo selecionado sobre reciclagem de plásticos, sustentabilidade e economia circular, direto das principais fontes do setor.',
      ctaAll: 'Ver todas no Abiplast',
      readLink: 'Ler no Abiplast',
      attribution: 'Notícias com curadoria. Conteúdo original e direitos pertencem aos veículos de origem. Fonte:',
      source: 'Abiplast',
      items: [
        {
          tag: 'Indústria',
          titulo: 'Tecnologia e inovação transformam o setor plástico brasileiro',
          resumo:
            'Avanços em rastreabilidade e investimentos modernizam o setor, com foco em eficiência e inovação além do produto final.',
        },
        {
          tag: 'Reciclagem',
          titulo: 'Plástico reciclado ganha espaço em diferentes setores da economia',
          resumo:
            'Índice de reciclagem mecânica chegou a 24,4% em 2024. Setor avança em economia circular e reaproveitamento de resíduos pós-consumo.',
        },
        {
          tag: 'Sustentabilidade',
          titulo: 'Embalagem sustentável brasileira é reconhecida no WorldStar 2026',
          resumo:
            'Grunflex conquista prêmio internacional de embalagens com solução sustentável da indústria de transformação plástica.',
        },
        {
          tag: 'Premiação',
          titulo: 'Termotécnica recebe o WorldStar Awards 2026',
          resumo:
            'Solução que alia eficiência logística, proteção ao produto e sustentabilidade leva a maior premiação global de embalagens.',
        },
        {
          tag: 'Educação',
          titulo: 'Movimento Plástico Transforma inaugura espaço sobre reciclagem em Brasília',
          resumo:
            'Oficina e aparato educativo no SESI Lab apresentam a circularidade do material e a importância do descarte correto.',
        },
        {
          tag: 'Economia Circular',
          titulo: 'Reciclagem que gera valor para o país',
          resumo:
            'Análise sobre como a reciclagem se tornou pilar do debate ambiental global, frente à crise climática e à geração de resíduos.',
        },
      ],
    },
    mvv: {
      missao: {
        title: 'Missão',
        desc: 'Transformar resíduos plásticos em valor, entregando à indústria matéria-prima reciclada de alta qualidade, com rastreabilidade e propósito ambiental.',
      },
      visao: {
        title: 'Visão',
        desc: 'Ser referência em reciclagem mecânica de plásticos pós-consumo no Brasil, reconhecida pela excelência técnica e pela contribuição real para a economia circular.',
      },
      valores: {
        title: 'Valores',
        items: [
          'Ética e transparência',
          'Sustentabilidade como prática',
          'Inovação técnica',
          'Compromisso com o cliente',
          'Respeito às pessoas',
          'Responsabilidade ambiental',
        ],
      },
    },
    carreiras: {
      badge: 'Carreiras',
      titlePre: 'Trabalhe',
      titleHighlight: 'conosco',
      p1: 'Queremos pessoas com propósito, técnica e responsabilidade. Gente que acredita que a indústria pode ser parte da solução.',
      p2: 'Envie seu currículo no formulário ao lado. Vamos analisar e entraremos em contato caso seu perfil esteja alinhado às nossas vagas, presentes ou futuras.',
      bullets: [
        'Ambiente industrial com propósito ESG',
        'Time enxuto, com voz e responsabilidade',
        'Aprendizado contínuo em reciclagem mecânica',
      ],
      rhLabel: 'Recursos Humanos',
      form: {
        name: 'Nome completo',
        position: 'Cargo desejado',
        positionPlaceholder: 'Ex.: Operador de extrusão',
        email: 'E-mail',
        phone: 'Telefone',
        city: 'Cidade / UF',
        cityPlaceholder: 'Ex.: Curitiba/PR',
        messageLabel: 'Mensagem',
        messageOpt: '(opcional)',
        messagePlaceholder: 'Conte um pouco sobre você, sua experiência e o que te motiva.',
        cvLabel: 'Currículo (PDF, até 5MB)',
        cvPick: 'Clique para anexar o seu currículo',
        cvHint: 'Apenas PDF · máx. 5MB',
        cvReplace: 'clique para trocar',
        submit: 'Enviar candidatura',
        sending: 'Enviando…',
        errPdf: 'Envie um arquivo PDF.',
        errSize: 'O PDF não pode passar de 5MB.',
        errMissing: 'Anexe o seu currículo em PDF.',
        ok: 'Currículo enviado! O nosso RH retornará caso seu perfil seja compatível.',
        err: 'Não conseguimos enviar agora. Tente novamente em instantes ou escreva para',
      },
    },
    contato: {
      badge: 'Contato',
      titlePre: 'Vamos reciclar',
      titleHighlight: 'juntos?',
      description:
        'Conte para a gente sobre o seu material, volume e necessidade. Nosso time técnico responde em até 1 dia útil.',
      emailLabel: 'E-mail',
      workTitle: 'Trabalhe conosco',
      workDesc: 'Envie seu currículo ao RH',
      form: {
        name: 'Nome',
        company: 'Empresa',
        email: 'E-mail',
        phone: 'Telefone',
        messageLabel: 'Mensagem',
        messagePlaceholder:
          'Conte sobre o material, volume mensal e a sua necessidade...',
        submit: 'Enviar mensagem',
        sending: 'Enviando…',
        ok: 'Mensagem enviada! Em breve nosso time entrará em contato.',
        err: 'Não conseguimos enviar agora. Tente novamente em instantes ou escreva para',
      },
    },
    footer: {
      description:
        'Reciclagem mecânica de plásticos pós-consumo, com rastreabilidade e desempenho técnico, gerando impacto positivo para empresas, pessoas e o planeta.',
      nav: 'Navegação',
      contact: 'Contato',
      salesLabel: 'Comercial',
      hrLabel: 'Recursos Humanos',
      rights: 'Todos os direitos reservados.',
      tagline: 'Transformando resíduos em valor.',
      navItems: {
        home: 'Início',
        about: 'Sobre',
        esg: 'ESG',
        products: 'Produtos',
        news: 'Notícias',
        contactUs: 'Fale conosco',
        workWithUs: 'Trabalhe conosco',
      },
    },
  },

  en: {
    common: {
      brand: 'Pounce',
      tagline: 'Turning waste into value.',
    },
    nav: {
      home: 'Home',
      about: 'About',
      esg: 'ESG',
      products: 'Products',
      news: 'News',
      contact: 'Contact',
      contactUs: 'Contact us',
      contactUsDesc: 'Form and sales email',
      workWithUs: 'Work with us',
      workWithUsDesc: 'Send your resume to HR',
      menuAria: 'Menu',
      ctaContact: 'Contact us',
      clientPortal: 'Client Portal',
      clientPortalBadge: 'coming soon',
      clientPortalAlert: 'Client Portal under development. Soon you’ll access orders, invoices and certificates of analysis here.',
    },
    lang: {
      switchAria: 'Change language',
      pt: 'PT',
      en: 'EN',
    },
    hero: {
      badge: 'Post-consumer Plastics Recycler',
      titlePre: 'Turning',
      titleHighlight: 'waste',
      titlePost: 'into value.',
      subtitle:
        'Advanced solutions in mechanical plastics recycling. We combine traceability, high technical performance and environmental commitment to be the ideal partner for companies seeking to close the plastic loop.',
      ctaPrimary: 'Talk to our team',
      ctaSecondary: 'Our ESG approach',
      kpi1Value: '6,000',
      kpi1Label: 'tons/year capacity',
      kpi2Value: '+5M',
      kpi2Label: 'packages/year',
      kpi3Value: '100%',
      kpi3Label: 'traceability',
      soundOn: 'Sound',
      soundOff: 'Muted',
      soundAriaOn: 'Turn sound on',
      soundAriaOff: 'Turn sound off',
    },
    sobre: {
      badge: 'About Pounce',
      titlePre: 'A recycling industry with',
      titleHighlight: 'environmental purpose',
      titlePost: '.',
      p1: 'Pounce is a recycler dedicated to transforming post-consumer plastics into high-performance raw material. We operate with traceability, technical control and a focus on solutions that reduce the environmental impact of packaging.',
      p2: 'We were born to close the plastic loop, delivering to the industry a reliable, sustainable and auditable feedstock.',
      cards: {
        proposito: {
          title: 'Purpose',
          desc: 'Turn waste into real value for the industry, for people and for the planet.',
        },
        tradicao: {
          title: 'Track record',
          desc: 'Over a decade of experience in the industrial sector, with constant evolution in technology and processes.',
        },
        rastreabilidade: {
          title: 'Traceability',
          desc: 'End-to-end control, from the incoming waste to the pellet delivered to the customer, with technical documentation.',
        },
        desempenho: {
          title: 'Performance',
          desc: 'Recycled raw material with proven performance for demanding industrial applications.',
        },
      },
    },
    esg: {
      badge: 'ESG · Mechanical Recycling',
      titlePre: 'From waste to pellet:',
      titleHighlight: 'the full process',
      description:
        'Our ESG strategy in practice: an industrial operation structured in six stages, with technology and technical control to deliver to the industry a reliable and sustainable feedstock.',
      steps: [
        {
          n: '01',
          title: 'Collection & Receiving',
          desc: 'Post-consumer plastics are received with inspection, identification and classification by polymer type.',
        },
        {
          n: '02',
          title: 'Sorting & Separation',
          desc: 'Manual and technical separation to ensure homogeneous, contaminant-free batches.',
        },
        {
          n: '03',
          title: 'Grinding',
          desc: 'The material goes through industrial mills, being reduced to flakes, the foundation of the mechanical recycling process.',
        },
        {
          n: '04',
          title: 'Washing',
          desc: 'Essential stage for removing impurities, labels and organic residues, with control of water and effluents.',
        },
        {
          n: '05',
          title: 'Extrusion & Pelletizing',
          desc: 'The flakes are melted and transformed into uniform pellets, raw material ready for a new application.',
        },
        {
          n: '06',
          title: 'Quality Control',
          desc: 'Technical tests ensure the performance of the recycled pellet for use in the packaging and products industries.',
        },
      ],
      pellet: {
        titlePre: 'PCR and PIR resins with',
        titleHighlight: 'industrial performance',
        desc: 'We work with PE, PP and other polymers, both post-consumer (PCR) and post-industrial (PIR). Each batch is delivered with a technical datasheet and certificate of analysis, ensuring predictability and stability in your production process.',
        boxes: [
          { v: 'PCR / PIR', l: 'PE & PP resins' },
          { v: 'CoA', l: 'Datasheet per batch' },
          { v: 'Post-consumer & Post-industrial', l: 'Traceable origin' },
          { v: 'B2B', l: 'Industry & packaging' },
        ],
      },
      impacto: {
        badge: 'Real Impact',
        titlePre: 'Numbers that show',
        titleHighlight: 'ESG in practice',
        desc: 'Every ton recycled means less virgin material extraction, less waste in the environment and more circular economy.',
        metrics: [
          { v: '6,000', u: 'tons/year', l: 'Capacity' },
          { v: '+5M', u: 'packages', l: 'In the loop / year' },
          { v: '−70%', u: 'CO₂', l: 'vs. virgin' },
          { v: '100%', u: 'tracked', l: 'Auditable origin' },
        ],
      },
    },
    produtos: {
      badge: 'Products',
      titlePre: 'Recycled raw material',
      titleHighlight: 'with performance',
      description:
        'A product line designed for industry. Each batch comes with a technical datasheet and certificate of analysis, with predictability from receiving to processing.',
      available: 'Available',
      cta: 'Request datasheet',
      footnote:
        '* Images, product photos and detailed datasheets are being updated. Request information through the contact form.',
      items: [
        {
          sigla: 'PCR PE',
          nome: 'PCR PE Resins',
          desc: 'Post-consumer recycled (PCR) polyethylene in a uniform pellet, with standardized color and controlled flow, ready for extrusion and injection.',
          aplicacoes: ['Technical films', 'Industrial bags', 'Non-potable pipes'],
        },
        {
          sigla: 'PCR PP',
          nome: 'PCR PP Resins',
          desc: 'Post-consumer recycled (PCR) polypropylene with consistent performance for applications that demand stiffness and thermal resistance.',
          aplicacoes: ['Technical crates', 'Industrial parts', 'Urban furniture'],
        },
        {
          sigla: 'PIR PE',
          nome: 'PIR PE Resins',
          desc: 'Post-industrial (PIR) polyethylene sourced from clean production scrap. Excellent consistency, low contamination and performance close to virgin resin.',
          aplicacoes: ['High-demand films', 'Injected parts', 'Pipes & ducts'],
        },
        {
          sigla: 'PIR PP',
          nome: 'PIR PP Resins',
          desc: 'Post-industrial (PIR) polypropylene with controlled industrial origin and very low contamination. Technical performance on par with virgin resin, with a lower environmental footprint.',
          aplicacoes: ['Automotive parts', 'Home appliances', 'Rigid packaging'],
        },
        {
          sigla: 'FLK',
          nome: 'Washed Flakes',
          desc: 'Ground and washed material, ready for reprocessing. Recommended for industries with their own extruder.',
          aplicacoes: ['In-house reprocessing', 'Masterbatch compounding', 'Technical blends'],
        },
        {
          sigla: 'CUSTOM',
          nome: 'Custom compounds',
          desc: 'Formulations customized per project: combination of polymers, color and performance tailored to your application.',
          aplicacoes: ['Technical project', 'Contracted volume', 'Dedicated CoA'],
        },
      ],
    },
    diferenciais: {
      badge: 'Why Pounce',
      title: 'What sets us apart',
      description:
        'What makes Pounce a solid partner for industries that need recycled raw material with predictability and accountability.',
      items: [
        {
          title: 'Systemic view',
          desc: 'We look at the whole chain, from collection to pellet, to deliver a solution that makes technical and commercial sense.',
        },
        {
          title: 'Strategic operation',
          desc: 'Every operation is planned to deliver volume, quality and traceability, aligned with the customer’s ESG goals.',
        },
        {
          title: 'Technology + Process',
          desc: 'Industrial equipment, quality control and auditable processes at every stage.',
        },
        {
          title: 'Environmental commitment',
          desc: 'Sustainability as a daily practice: management of water, effluents and waste at the standard of best industrial practices.',
        },
        {
          title: 'Long-term partnership',
          desc: 'Close relationship, continuous technical support and supply predictability.',
        },
        {
          title: 'Full transparency',
          desc: 'Technical documentation, clear indicators and end-to-end traceability so you can communicate with confidence.',
        },
      ],
    },
    timeline: {
      badge: 'Our Journey',
      titlePre: 'A journey built with',
      titleHighlight: 'consistency',
      description:
        'From a solid track record in the industrial sector to the operation dedicated to mechanical recycling, always focused on technical performance and environmental purpose.',
      items: [
        { year: '2008', title: 'The journey begins', desc: 'Activity in the industrial sector and a systemic view of the production chain.' },
        { year: '2015', title: 'Focus on sustainability', desc: 'Deepening ESG practices and studying the plastic loop.' },
        { year: '2020', title: 'A recycling blueprint', desc: 'Structuring an industrial model for mechanical recycling with full traceability.' },
        { year: '2024', title: 'Pounce is born', desc: 'Official launch of the operation dedicated to post-consumer plastics recycling.' },
      ],
    },
    noticias: {
      badge: 'News',
      title: 'What’s moving the recycling sector',
      description:
        'Curated content about plastics recycling, sustainability and circular economy, straight from the main sources of the industry.',
      ctaAll: 'See all on Abiplast',
      readLink: 'Read on Abiplast',
      attribution: 'Curated news. Original content and rights belong to the source outlets. Source:',
      source: 'Abiplast',
      items: [
        {
          tag: 'Industry',
          titulo: 'Technology and innovation transform the Brazilian plastics industry',
          resumo:
            'Advances in traceability and investment are modernizing the sector, focusing on efficiency and innovation beyond the final product.',
        },
        {
          tag: 'Recycling',
          titulo: 'Recycled plastic gains ground across economic sectors',
          resumo:
            'Mechanical recycling index reached 24.4% in 2024. The sector is advancing in circular economy and reuse of post-consumer waste.',
        },
        {
          tag: 'Sustainability',
          titulo: 'Brazilian sustainable packaging recognized at WorldStar 2026',
          resumo:
            'Grunflex wins international packaging award with a sustainable solution from the plastics conversion industry.',
        },
        {
          tag: 'Award',
          titulo: 'Termotécnica receives the WorldStar Awards 2026',
          resumo:
            'A solution that combines logistics efficiency, product protection and sustainability takes the largest global packaging prize.',
        },
        {
          tag: 'Education',
          titulo: 'Plástico Transforma opens a space on plastics recycling in Brasília',
          resumo:
            'A workshop and educational setup at SESI Lab show the circularity of the material and the importance of proper disposal.',
        },
        {
          tag: 'Circular Economy',
          titulo: 'Recycling that generates value for the country',
          resumo:
            'An analysis of how recycling has become a pillar of the global environmental debate, in the face of the climate crisis and waste generation.',
        },
      ],
    },
    mvv: {
      missao: {
        title: 'Mission',
        desc: 'Turn plastic waste into value, delivering to industry high-quality recycled raw material with traceability and environmental purpose.',
      },
      visao: {
        title: 'Vision',
        desc: 'To be a benchmark in mechanical recycling of post-consumer plastics in Brazil, recognized for technical excellence and a real contribution to the circular economy.',
      },
      valores: {
        title: 'Values',
        items: [
          'Ethics and transparency',
          'Sustainability as a practice',
          'Technical innovation',
          'Commitment to the customer',
          'Respect for people',
          'Environmental responsibility',
        ],
      },
    },
    carreiras: {
      badge: 'Careers',
      titlePre: 'Work',
      titleHighlight: 'with us',
      p1: 'We want people with purpose, technique and accountability. People who believe industry can be part of the solution.',
      p2: 'Send your resume through the form. We’ll review it and reach out if your profile matches our openings, current or future.',
      bullets: [
        'Industrial environment with ESG purpose',
        'Lean team, with voice and accountability',
        'Continuous learning in mechanical recycling',
      ],
      rhLabel: 'Human Resources',
      form: {
        name: 'Full name',
        position: 'Desired role',
        positionPlaceholder: 'e.g. Extrusion Operator',
        email: 'Email',
        phone: 'Phone',
        city: 'City / State',
        cityPlaceholder: 'e.g. Curitiba/PR',
        messageLabel: 'Message',
        messageOpt: '(optional)',
        messagePlaceholder: 'Tell us a bit about you, your experience and what motivates you.',
        cvLabel: 'Resume (PDF, up to 5MB)',
        cvPick: 'Click to attach your resume',
        cvHint: 'PDF only · max 5MB',
        cvReplace: 'click to replace',
        submit: 'Submit application',
        sending: 'Sending…',
        errPdf: 'Please upload a PDF file.',
        errSize: 'The PDF must be 5MB or less.',
        errMissing: 'Please attach your resume in PDF.',
        ok: 'Resume submitted! Our HR team will reach out if your profile matches.',
        err: 'We couldn’t send right now. Please try again in a moment or email',
      },
    },
    contato: {
      badge: 'Contact',
      titlePre: 'Shall we recycle',
      titleHighlight: 'together?',
      description:
        'Tell us about your material, volume and needs. Our technical team replies within one business day.',
      emailLabel: 'Email',
      workTitle: 'Work with us',
      workDesc: 'Send your resume to HR',
      form: {
        name: 'Name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        messageLabel: 'Message',
        messagePlaceholder:
          'Tell us about the material, monthly volume and your needs...',
        submit: 'Send message',
        sending: 'Sending…',
        ok: 'Message sent! Our team will get back to you soon.',
        err: 'We couldn’t send right now. Please try again in a moment or email',
      },
    },
    footer: {
      description:
        'Mechanical recycling of post-consumer plastics, with traceability and technical performance, generating positive impact for companies, people and the planet.',
      nav: 'Navigation',
      contact: 'Contact',
      salesLabel: 'Sales',
      hrLabel: 'Human Resources',
      rights: 'All rights reserved.',
      tagline: 'Turning waste into value.',
      navItems: {
        home: 'Home',
        about: 'About',
        esg: 'ESG',
        products: 'Products',
        news: 'News',
        contactUs: 'Contact us',
        workWithUs: 'Work with us',
      },
    },
  },
} as const;

export type Dict = typeof dict.pt;
