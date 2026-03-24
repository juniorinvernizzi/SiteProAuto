export type Language = 'pt' | 'en' | 'es';

export const translations = {
  pt: {
    nav: {
      brand: "A Marca",
      products: "Produtos",
      contact: "Contato"
    },
    menu: {
      showroom: "Showroom",
      products: "Produtos",
      technology: "Tecnologia",
      brand: "A Marca",
      distributors: "Revendedores",
      buyOnline: "Compre Online",
      beDistributor: "Seja um Revendedor",
      contact: "Contato"
    },
    heroSlides: [
      {
        image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1920&auto=format&fit=crop",
        alt: "Dark Modern Car",
        title: "LIMPEZA",
        description: "A engenharia do brilho. Produtos de alta performance para quem exige o máximo em estética e proteção automotiva."
      },
      {
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920&auto=format&fit=crop",
        alt: "Luxury Car Interior",
        title: "ESTÉTICA",
        description: "Cuidado extremo com cada detalhe. Fórmulas exclusivas para renovar e proteger o interior do seu veículo."
      },
      {
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1920&auto=format&fit=crop",
        alt: "Car Detailing",
        title: "PROAUTO",
        description: "A marca líder em performance estética automotiva. Desenvolvida para apaixonados por carros e perfeccionistas."
      }
    ],
    manifesto: {
      line1: "NÃO É APENAS",
      line2: "LIMPEZA.",
      line3: "É A ARTE DA",
      line4: "PERFORMANCE",
      line5: "VISUAL."
    },
    solutions: {
      title: "Soluções",
      subtitle: "Escolha seu foco",
      items: [
        {
          title: "Lataria",
          desc: "Cristalização, ceras premium e lavagem de alta performance."
        },
        {
          title: "Para pneus",
          desc: "Descontaminação ferrosa e brilho extremo duradouro."
        },
        {
          title: "Para seu lar",
          desc: "Cuidado completo para a sua casa com a mesma qualidade."
        },
        {
          title: "Aroma e mais",
          desc: "Aromatização premium e cuidados específicos."
        }
      ]
    },
    showcase: {
      title1: "A COLEÇÃO",
      title2: "PREMIUM",
      explore: "Explorar",
      items: [
        { id: "lava-autos", name: "LIMPEZA", tag: "Limpeza Externa", desc: "Limpeza profunda e segura. Nossos shampoos automotivos removem a sujeira mais pesada sem agredir a pintura, mantendo o brilho original.", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80" },
        { id: "ceras-e-polidores", name: "POLIMENTO", tag: "Proteção Externa", desc: "Brilho intenso e proteção duradoura para a pintura do seu veículo. Fórmulas avançadas que removem imperfeições e criam uma camada protetora resistente.", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" },
        { id: "higiene-interna", name: "CUIDADOS ESPECÍFICOS", tag: "Cuidado Interno", desc: "Cuidado completo para o interior do seu carro. Produtos desenvolvidos para limpar, hidratar e proteger painéis, bancos de couro e tecidos.", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop" }
      ]
    },
    cta: {
      b2b: "B2B",
      b2bTitle: "Seja um\nRevendedor",
      b2c: "B2C",
      b2cTitle: "Compre\nOnline"
    },
    instagram: {
      title: "Proauto Oficial",
      handle: "@proauto_oficial",
      posts: "1232",
      followers: "26,7 mil",
      follow: "Seguir"
    },
    footer: {
      desc: "A marca líder em performance estética automotiva. Desenvolvida para apaixonados por carros, profissionais e perfeccionistas.",
      navTitle: "Navegação",
      nav: ["Produtos", "Tecnologia", "A Marca", "Onde Comprar"],
      socialTitle: "Social",
      rights: "© 2026 PROAUTO. ALL RIGHTS RESERVED.",
      designed: "DESIGNED FOR PERFORMANCE."
    },
    product: {
      back: "Voltar",
      versions: "Versões Disponíveis",
      techSheet: "Ficha Técnica",
      downloadTechSheet: "Download Ficha Técnica",
      howToUse: "Como Usar",
      videoTutorial: "Tutorial em Vídeo"
    },
    brand: {
      title: "A MARCA",
      titleAccent: "PROAUTO",
      heroText: "Desde 2005, redefinindo os padrões de estética automotiva no Brasil com tecnologia de ponta e paixão por performance.",
      historyTitle: "Nossa História",
      historyP1: "Nascida da paixão por carros e da busca incessante pela perfeição, a Proauto começou como um pequeno laboratório focado em desenvolver a cera perfeita.",
      historyP2: "Hoje, somos a marca líder em produtos de alta performance para estética automotiva, presentes em milhares de lares e estúdios de detalhamento profissional em todo o país.",
      historyP3: "Nossa missão é simples: fornecer os melhores produtos para que você possa cuidar do seu veículo com o mesmo nível de exigência de um profissional.",
      valuesTitle: "Nossos Pilares",
      values: [
        { title: "Inovação", desc: "Investimento contínuo em P&D para criar fórmulas exclusivas e mais eficientes." },
        { title: "Performance", desc: "Produtos testados em condições extremas para garantir resultados superiores." },
        { title: "Sustentabilidade", desc: "Compromisso com o meio ambiente através de embalagens recicláveis e fórmulas biodegradáveis." }
      ],
      galleryTitle: "Galeria"
    },
    contact: {
      title1: "FALE",
      title2: "CONOSCO",
      subtitle: "Estamos prontos para elevar a performance do seu negócio. Entre em contato para parcerias, distribuição ou suporte técnico.",
      headquarters: "Matriz",
      directContact: "Contato Direto",
      formTitle: "Envie uma mensagem",
      formSubtitle: "Preencha os dados abaixo e retornaremos o mais breve possível.",
      fullName: "Nome Completo",
      fullNamePlaceholder: "João Silva",
      company: "Empresa",
      companyPlaceholder: "Sua Empresa Ltda",
      email: "E-mail Corporativo",
      emailPlaceholder: "joao@empresa.com.br",
      phone: "Telefone / WhatsApp",
      phonePlaceholder: "(11) 99999-9999",
      subject: "Assunto",
      subjectPlaceholder: "Selecione o motivo do contato",
      subjectOptions: [
        { value: "revenda", label: "Quero ser um revendedor" },
        { value: "suporte", label: "Suporte Técnico" },
        { value: "comercial", label: "Dúvidas Comerciais" },
        { value: "outros", label: "Outros assuntos" }
      ],
      message: "Sua Mensagem",
      messagePlaceholder: "Como podemos ajudar o seu negócio?",
      send: "Enviar Mensagem"
    },
    products: {
      title1: "CATÁLOGO",
      title2: "PROAUTO",
      subtitle: "Explore nossa linha completa de produtos de alta performance para estética automotiva.",
      filters: "Filtros",
      categoriesTitle: "Categorias",
      searchPlaceholder: "Buscar produto...",
      showing: "Mostrando",
      showingUnit: "produtos",
      details: "Detalhes →",
      noResults: "Nenhum produto encontrado.",
      clearFilters: "Limpar Filtros",
      categories: [
        { id: "all", name: "Todos os Produtos" },
        { id: "lava-autos", name: "Lava Autos" },
        { id: "ceras-e-polidores", name: "Ceras e Polidores" },
        { id: "higiene-interna", name: "Higiene Interna" },
        { id: "pneus-e-rodas", name: "Pneus e Rodas" },
        { id: "aromatizantes", name: "Aromatizantes" },
        { id: "casa", name: "Para o seu Lar" }
      ]
    },
    buyOnline: {
      title: "ONDE ENCONTRAR",
      subtitle: "Adquira os produtos Proauto através de nossos parceiros oficiais, seja em lojas físicas ou online.",
      onlineTitle: "Loja Online",
      onlineDesc: "Compre com conforto e segurança através do nosso e-commerce oficial ou parceiros digitais. Entrega rápida para todo o Brasil.",
      buyNow: "Comprar Agora",
      physicalTitle: "Loja Física",
      physicalDesc: "Encontre os produtos Proauto nas melhores lojas de estética automotiva, supermercados e hipermercados perto de você.",
      searchPlaceholder: "Digite seu CEP ou Cidade",
      searchBtn: "Buscar",
      mainNetworks: "Principais Redes"
    },
    category: {
      dragHint: "Arraste ou use as setas"
    },
    privacy: {
      title: "Política de",
      titleAccent: "Privacidade",
      dateLocale: "pt-BR",
      lastUpdated: "Última atualização:",
      s1Title: "1. Introdução",
      s1Text: "A Proauto valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta Política de Privacidade explica como coletamos, usamos, compartilhamos e protegemos as suas informações quando você utiliza o nosso site e os nossos serviços, em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).",
      s2Title: "2. Dados que Coletamos",
      s2Intro: "Podemos coletar os seguintes tipos de dados pessoais:",
      s2Items: [
        { bold: "Dados de Contato:", text: " Nome, e-mail, número de telefone, endereço." },
        { bold: "Dados de Navegação:", text: " Endereço IP, tipo de navegador, páginas visitadas, tempo gasto no site, cookies." },
        { bold: "Dados de Transação:", text: " Informações de pagamento e histórico de compras (quando aplicável)." }
      ],
      s3Title: "3. Como Usamos Seus Dados",
      s3Intro: "Utilizamos os seus dados pessoais para as seguintes finalidades:",
      s3Items: [
        "Fornecer e melhorar nossos produtos e serviços.",
        "Processar suas transações e enviar confirmações.",
        "Responder às suas dúvidas e solicitações de suporte.",
        "Enviar comunicações de marketing e ofertas promocionais (com o seu consentimento).",
        "Cumprir obrigações legais e regulatórias."
      ],
      s4Title: "4. Compartilhamento de Dados",
      s4Intro: "Não vendemos ou alugamos seus dados pessoais para terceiros. Podemos compartilhar suas informações com:",
      s4Items: [
        "Prestadores de serviços que nos auxiliam na operação do site e na condução dos nossos negócios (ex: processadores de pagamento, serviços de hospedagem).",
        "Autoridades governamentais, quando exigido por lei ou para proteger nossos direitos."
      ],
      s5Title: "5. Seus Direitos (LGPD)",
      s5Intro: "De acordo com a LGPD, você tem o direito de:",
      s5Items: [
        "Confirmar a existência de tratamento de dados.",
        "Acessar seus dados pessoais.",
        "Corrigir dados incompletos, inexatos ou desatualizados.",
        "Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos.",
        "Revogar o seu consentimento a qualquer momento."
      ],
      s6Title: "6. Segurança",
      s6Text: "Adotamos medidas de segurança técnicas e administrativas para proteger os seus dados pessoais contra acessos não autorizados, perda, destruição ou alteração.",
      s7Title: "7. Contato",
      s7Text: "Se você tiver dúvidas sobre esta Política de Privacidade ou sobre como tratamos seus dados, entre em contato conosco através do e-mail:"
    },
    terms: {
      title: "Termos de",
      titleAccent: "Uso",
      dateLocale: "pt-BR",
      lastUpdated: "Última atualização:",
      s1Title: "1. Aceitação dos Termos",
      s1Text: "Ao acessar e utilizar o site da Proauto, você concorda em cumprir estes Termos de Uso e todas as leis e regulamentos aplicáveis. Se você não concordar com algum destes termos, está proibido de usar ou acessar este site.",
      s2Title: "2. Uso da Licença",
      s2Intro: "É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site da Proauto, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título e, sob esta licença, você não pode:",
      s2Items: [
        "Modificar ou copiar os materiais;",
        "Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);",
        "Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site da Proauto;",
        "Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou",
        "Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor."
      ],
      s3Title: "3. Isenção de Responsabilidade",
      s3Text: "Os materiais no site da Proauto são fornecidos 'como estão'. A Proauto não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um fim específico ou não violação de propriedade intelectual ou outra violação de direitos.",
      s4Title: "4. Limitações",
      s4Text: "Em nenhum caso a Proauto ou seus fornecedores serão responsáveis por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Proauto, mesmo que a Proauto ou um representante autorizado da Proauto tenha sido notificado oralmente ou por escrito da possibilidade de tais danos.",
      s5Title: "5. Precisão dos Materiais",
      s5Text: "Os materiais exibidos no site da Proauto podem incluir erros técnicos, tipográficos ou fotográficos. A Proauto não garante que qualquer material em seu site seja preciso, completo ou atual. A Proauto pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio.",
      s6Title: "6. Links",
      s6Text: "A Proauto não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Proauto do site. O uso de qualquer site vinculado é por conta e risco do usuário.",
      s7Title: "7. Modificações",
      s7Text: "A Proauto pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.",
      s8Title: "8. Lei Aplicável",
      s8Text: "Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade."
    }
  },
  en: {
    nav: {
      brand: "The Brand",
      products: "Products",
      contact: "Contact"
    },
    menu: {
      showroom: "Showroom",
      products: "Products",
      technology: "Technology",
      brand: "The Brand",
      distributors: "Resellers",
      buyOnline: "Buy Online",
      beDistributor: "Become a Reseller",
      contact: "Contact"
    },
    heroSlides: [
      {
        image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1920&auto=format&fit=crop",
        alt: "Dark Modern Car",
        title: "CLEANING",
        description: "The engineering of shine. High-performance products for those who demand the utmost in automotive aesthetics and protection."
      },
      {
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920&auto=format&fit=crop",
        alt: "Luxury Car Interior",
        title: "AESTHETICS",
        description: "Extreme care with every detail. Exclusive formulas to renew and protect your vehicle's interior."
      },
      {
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1920&auto=format&fit=crop",
        alt: "Car Detailing",
        title: "PROAUTO",
        description: "The leading brand in automotive aesthetic performance. Developed for car enthusiasts and perfectionists."
      }
    ],
    manifesto: {
      line1: "IT'S NOT JUST",
      line2: "CLEANING.",
      line3: "IT'S THE ART OF",
      line4: "VISUAL",
      line5: "PERFORMANCE."
    },
    solutions: {
      title: "Solutions",
      subtitle: "Choose your focus",
      items: [
        {
          title: "Bodywork",
          desc: "Crystallization, premium waxes, and high-performance washing."
        },
        {
          title: "For tires",
          desc: "Ferrous decontamination and extreme lasting shine."
        },
        {
          title: "For your home",
          desc: "Complete care for your home with the same quality."
        },
        {
          title: "Aroma and more",
          desc: "Premium aromatization and specific care."
        }
      ]
    },
    showcase: {
      title1: "THE PREMIUM",
      title2: "COLLECTION",
      explore: "Explore",
      items: [
        { id: "lava-autos", name: "CLEANING", tag: "Exterior Cleaning", desc: "Deep and safe cleaning. Our automotive shampoos remove the heaviest dirt without harming the paint, maintaining the original shine.", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80" },
        { id: "ceras-e-polidores", name: "POLISHING", tag: "Exterior Protection", desc: "Intense shine and lasting protection for your vehicle's paint. Advanced formulas that remove imperfections and create a tough protective layer.", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" },
        { id: "higiene-interna", name: "SPECIFIC CARE", tag: "Interior Care", desc: "Complete care for your car's interior. Products developed to clean, moisturize, and protect dashboards, leather seats, and fabrics.", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop" }
      ]
    },
    cta: {
      b2b: "B2B",
      b2bTitle: "Become a\nReseller",
      b2c: "B2C",
      b2cTitle: "Buy\nOnline"
    },
    instagram: {
      title: "Proauto Oficial",
      handle: "@proauto_oficial",
      posts: "1232",
      followers: "26.7K",
      follow: "Follow"
    },
    footer: {
      desc: "The leading brand in automotive aesthetic performance. Developed for car enthusiasts, professionals, and perfectionists.",
      navTitle: "Navigation",
      nav: ["Products", "Technology", "The Brand", "Where to Buy"],
      socialTitle: "Social",
      rights: "© 2026 PROAUTO. ALL RIGHTS RESERVED.",
      designed: "DESIGNED FOR PERFORMANCE."
    },
    product: {
      back: "Back",
      versions: "Available Versions",
      techSheet: "Tech Sheet",
      downloadTechSheet: "Download Tech Sheet",
      howToUse: "How to Use",
      videoTutorial: "Video Tutorial"
    },
    brand: {
      title: "THE BRAND",
      titleAccent: "PROAUTO",
      heroText: "Since 2005, redefining automotive aesthetics standards in Brazil with cutting-edge technology and a passion for performance.",
      historyTitle: "Our Story",
      historyP1: "Born from a passion for cars and the relentless pursuit of perfection, Proauto started as a small laboratory focused on developing the perfect wax.",
      historyP2: "Today, we are the leading brand in high-performance automotive aesthetics products, present in thousands of homes and professional detailing studios across the country.",
      historyP3: "Our mission is simple: to provide the best products so you can care for your vehicle with the same level of expertise as a professional.",
      valuesTitle: "Our Pillars",
      values: [
        { title: "Innovation", desc: "Continuous investment in R&D to create exclusive and more efficient formulas." },
        { title: "Performance", desc: "Products tested under extreme conditions to guarantee superior results." },
        { title: "Sustainability", desc: "Commitment to the environment through recyclable packaging and biodegradable formulas." }
      ],
      galleryTitle: "Gallery"
    },
    contact: {
      title1: "TALK",
      title2: "TO US",
      subtitle: "We are ready to elevate your business performance. Get in touch for partnerships, distribution, or technical support.",
      headquarters: "Headquarters",
      directContact: "Direct Contact",
      formTitle: "Send a message",
      formSubtitle: "Fill in the details below and we will get back to you as soon as possible.",
      fullName: "Full Name",
      fullNamePlaceholder: "John Smith",
      company: "Company",
      companyPlaceholder: "Your Company Ltd",
      email: "Corporate Email",
      emailPlaceholder: "john@company.com",
      phone: "Phone / WhatsApp",
      phonePlaceholder: "+1 (555) 999-9999",
      subject: "Subject",
      subjectPlaceholder: "Select the reason for contact",
      subjectOptions: [
        { value: "revenda", label: "I want to be a reseller" },
        { value: "suporte", label: "Technical Support" },
        { value: "comercial", label: "Commercial Inquiries" },
        { value: "outros", label: "Other subjects" }
      ],
      message: "Your Message",
      messagePlaceholder: "How can we help your business?",
      send: "Send Message"
    },
    products: {
      title1: "CATALOG",
      title2: "PROAUTO",
      subtitle: "Explore our full line of high-performance products for automotive aesthetics.",
      filters: "Filters",
      categoriesTitle: "Categories",
      searchPlaceholder: "Search product...",
      showing: "Showing",
      showingUnit: "products",
      details: "Details →",
      noResults: "No products found.",
      clearFilters: "Clear Filters",
      categories: [
        { id: "all", name: "All Products" },
        { id: "lava-autos", name: "Car Wash" },
        { id: "ceras-e-polidores", name: "Waxes & Polishes" },
        { id: "higiene-interna", name: "Interior Hygiene" },
        { id: "pneus-e-rodas", name: "Tires & Wheels" },
        { id: "aromatizantes", name: "Air Fresheners" },
        { id: "casa", name: "For Your Home" }
      ]
    },
    buyOnline: {
      title: "WHERE TO BUY",
      subtitle: "Purchase Proauto products through our official partners, in physical stores or online.",
      onlineTitle: "Online Store",
      onlineDesc: "Buy comfortably and safely through our official e-commerce or digital partners. Fast delivery across Brazil.",
      buyNow: "Buy Now",
      physicalTitle: "Physical Store",
      physicalDesc: "Find Proauto products at the best automotive aesthetics stores, supermarkets and hypermarkets near you.",
      searchPlaceholder: "Enter your ZIP or City",
      searchBtn: "Search",
      mainNetworks: "Main Networks"
    },
    category: {
      dragHint: "Drag or use the arrows"
    },
    privacy: {
      title: "Privacy",
      titleAccent: "Policy",
      dateLocale: "en-US",
      lastUpdated: "Last updated:",
      s1Title: "1. Introduction",
      s1Text: "Proauto values your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, share and protect your information when you use our website and services.",
      s2Title: "2. Data We Collect",
      s2Intro: "We may collect the following types of personal data:",
      s2Items: [
        { bold: "Contact Data:", text: " Name, email, phone number, address." },
        { bold: "Browsing Data:", text: " IP address, browser type, pages visited, time spent on site, cookies." },
        { bold: "Transaction Data:", text: " Payment information and purchase history (when applicable)." }
      ],
      s3Title: "3. How We Use Your Data",
      s3Intro: "We use your personal data for the following purposes:",
      s3Items: [
        "Provide and improve our products and services.",
        "Process your transactions and send confirmations.",
        "Respond to your questions and support requests.",
        "Send marketing communications and promotional offers (with your consent).",
        "Comply with legal and regulatory obligations."
      ],
      s4Title: "4. Data Sharing",
      s4Intro: "We do not sell or rent your personal data to third parties. We may share your information with:",
      s4Items: [
        "Service providers who assist us in operating the website and conducting our business (e.g., payment processors, hosting services).",
        "Government authorities, when required by law or to protect our rights."
      ],
      s5Title: "5. Your Rights",
      s5Intro: "Under applicable law, you have the right to:",
      s5Items: [
        "Confirm the existence of data processing.",
        "Access your personal data.",
        "Correct incomplete, inaccurate, or outdated data.",
        "Request anonymization, blocking, or deletion of unnecessary or excessive data.",
        "Revoke your consent at any time."
      ],
      s6Title: "6. Security",
      s6Text: "We adopt technical and administrative security measures to protect your personal data against unauthorized access, loss, destruction or alteration.",
      s7Title: "7. Contact",
      s7Text: "If you have questions about this Privacy Policy or how we handle your data, please contact us at:"
    },
    terms: {
      title: "Terms of",
      titleAccent: "Use",
      dateLocale: "en-US",
      lastUpdated: "Last updated:",
      s1Title: "1. Acceptance of Terms",
      s1Text: "By accessing and using Proauto's website, you agree to comply with these Terms of Use and all applicable laws and regulations. If you disagree with any of these terms, you are prohibited from using or accessing this website.",
      s2Title: "2. Use License",
      s2Intro: "Permission is granted to temporarily download one copy of the materials (information or software) on Proauto's website, solely for personal, non-commercial transitory viewing. This is the grant of a license, not a transfer of title, and under this license you may not:",
      s2Items: [
        "Modify or copy the materials;",
        "Use the materials for any commercial purpose or for any public display (commercial or non-commercial);",
        "Attempt to decompile or reverse engineer any software contained on Proauto's website;",
        "Remove any copyright or other proprietary notations from the materials; or",
        "Transfer the materials to another person or 'mirror' the materials on any other server."
      ],
      s3Title: "3. Disclaimer",
      s3Text: "The materials on Proauto's website are provided on an 'as is' basis. Proauto makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
      s4Title: "4. Limitations",
      s4Text: "In no event shall Proauto or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Proauto's website, even if Proauto or a Proauto authorized representative has been notified orally or in writing of the possibility of such damage.",
      s5Title: "5. Accuracy of Materials",
      s5Text: "The materials appearing on Proauto's website could include technical, typographical, or photographic errors. Proauto does not warrant that any of the materials on its website are accurate, complete, or current. Proauto may make changes to the materials contained on its website at any time without notice.",
      s6Title: "6. Links",
      s6Text: "Proauto has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Proauto of the site. Use of any such linked website is at the user's own risk.",
      s7Title: "7. Modifications",
      s7Text: "Proauto may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.",
      s8Title: "8. Governing Law",
      s8Text: "These terms and conditions are governed by and construed in accordance with the laws of Brazil and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location."
    }
  },
  es: {
    nav: {
      brand: "La Marca",
      products: "Productos",
      contact: "Contacto"
    },
    menu: {
      showroom: "Showroom",
      products: "Productos",
      technology: "Tecnología",
      brand: "La Marca",
      distributors: "Revendedores",
      buyOnline: "Compra Online",
      beDistributor: "Sé un Revendedor",
      contact: "Contacto"
    },
    heroSlides: [
      {
        image: "https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=1920&auto=format&fit=crop",
        alt: "Dark Modern Car",
        title: "LIMPIEZA",
        description: "La ingeniería del brillo. Productos de alto rendimiento para quienes exigen lo máximo en estética y protección automotriz."
      },
      {
        image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?q=80&w=1920&auto=format&fit=crop",
        alt: "Luxury Car Interior",
        title: "ESTÉTICA",
        description: "Cuidado extremo com cada detalle. Fórmulas exclusivas para renovar y proteger el interior de su vehículo."
      },
      {
        image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1920&auto=format&fit=crop",
        alt: "Car Detailing",
        title: "PROAUTO",
        description: "La marca líder en rendimiento estético automotriz. Desarrollada para apasionados por los coches y perfeccionistas."
      }
    ],
    manifesto: {
      line1: "NO ES SOLO",
      line2: "LIMPIEZA.",
      line3: "ES EL ARTE DEL",
      line4: "RENDIMIENTO",
      line5: "VISUAL."
    },
    solutions: {
      title: "Soluciones",
      subtitle: "Elige tu enfoque",
      items: [
        {
          title: "Carrocería",
          desc: "Cristalización, ceras premium y lavado de alto rendimiento."
        },
        {
          title: "Para neumáticos",
          desc: "Descontaminación ferrosa y brillo extremo duradero."
        },
        {
          title: "Para tu hogar",
          desc: "Cuidado completo para tu hogar con la misma calidad."
        },
        {
          title: "Aroma y más",
          desc: "Aromatización premium y cuidados específicos."
        }
      ]
    },
    showcase: {
      title1: "LA COLECCIÓN",
      title2: "PREMIUM",
      explore: "Explorar",
      items: [
        { id: "lava-autos", name: "LIMPIEZA", tag: "Limpieza Exterior", desc: "Limpieza profunda y segura. Nuestros champús automotrices eliminan la suciedad más pesada sin dañar la pintura, manteniendo el brillo original.", img: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?auto=format&fit=crop&q=80" },
        { id: "ceras-e-polidores", name: "PULIDO", tag: "Protección Exterior", desc: "Brillo intenso y protección duradera para la pintura de su vehículo. Fórmulas avanzadas que eliminan imperfecciones y crean una capa protectora resistente.", img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&q=80" },
        { id: "higiene-interna", name: "CUIDADOS ESPECÍFICOS", tag: "Cuidado Interior", desc: "Cuidado completo para el interior de su automóvil. Productos desarrollados para limpiar, hidratar y proteger tableros, asientos de cuero y telas.", img: "https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?q=80&w=1600&auto=format&fit=crop" }
      ]
    },
    cta: {
      b2b: "B2B",
      b2bTitle: "Sé un\nRevendedor",
      b2c: "B2C",
      b2cTitle: "Compra\nOnline"
    },
    instagram: {
      title: "Proauto Oficial",
      handle: "@proauto_oficial",
      posts: "1232",
      followers: "26,7 mil",
      follow: "Seguir"
    },
    footer: {
      desc: "La marca líder en rendimiento estético automotriz. Desarrollada para apasionados por los coches, profesionales y perfeccionistas.",
      navTitle: "Navegación",
      nav: ["Productos", "Tecnología", "La Marca", "Dónde Comprar"],
      socialTitle: "Social",
      rights: "© 2026 PROAUTO. TODOS LOS DERECHOS RESERVADOS.",
      designed: "DISEÑADO PARA EL RENDIMIENTO."
    },
    product: {
      back: "Volver",
      versions: "Versiones Disponibles",
      techSheet: "Ficha Técnica",
      downloadTechSheet: "Descargar Ficha Técnica",
      howToUse: "Cómo Usar",
      videoTutorial: "Tutorial en Video"
    },
    brand: {
      title: "LA MARCA",
      titleAccent: "PROAUTO",
      heroText: "Desde 2005, redefiniendo los estándares de estética automotriz en Brasil con tecnología de punta y pasión por el rendimiento.",
      historyTitle: "Nuestra Historia",
      historyP1: "Nacida de la pasión por los coches y la búsqueda incesante de la perfección, Proauto comenzó como un pequeño laboratorio centrado en desarrollar la cera perfecta.",
      historyP2: "Hoy, somos la marca líder en productos de alto rendimiento para estética automotriz, presentes en miles de hogares y estudios de detailing profesional en todo el país.",
      historyP3: "Nuestra misión es simple: brindar los mejores productos para que puedas cuidar tu vehículo con el mismo nivel de exigencia que un profesional.",
      valuesTitle: "Nuestros Pilares",
      values: [
        { title: "Innovación", desc: "Inversión continua en I+D para crear fórmulas exclusivas y más eficientes." },
        { title: "Rendimiento", desc: "Productos probados en condiciones extremas para garantizar resultados superiores." },
        { title: "Sostenibilidad", desc: "Compromiso con el medio ambiente mediante embalajes reciclables y fórmulas biodegradables." }
      ],
      galleryTitle: "Galería"
    },
    contact: {
      title1: "HABLE",
      title2: "CON NOSOTROS",
      subtitle: "Estamos listos para elevar el rendimiento de su negocio. Contáctenos para asociaciones, distribución o soporte técnico.",
      headquarters: "Sede",
      directContact: "Contacto Directo",
      formTitle: "Envíe un mensaje",
      formSubtitle: "Complete los datos a continuación y le responderemos a la brevedad posible.",
      fullName: "Nombre Completo",
      fullNamePlaceholder: "Juan García",
      company: "Empresa",
      companyPlaceholder: "Su Empresa SL",
      email: "E-mail Corporativo",
      emailPlaceholder: "juan@empresa.com",
      phone: "Teléfono / WhatsApp",
      phonePlaceholder: "+54 (11) 9999-9999",
      subject: "Asunto",
      subjectPlaceholder: "Seleccione el motivo del contacto",
      subjectOptions: [
        { value: "revenda", label: "Quiero ser revendedor" },
        { value: "suporte", label: "Soporte Técnico" },
        { value: "comercial", label: "Consultas Comerciales" },
        { value: "outros", label: "Otros asuntos" }
      ],
      message: "Su Mensaje",
      messagePlaceholder: "¿Cómo podemos ayudar a su negocio?",
      send: "Enviar Mensaje"
    },
    products: {
      title1: "CATÁLOGO",
      title2: "PROAUTO",
      subtitle: "Explore nuestra línea completa de productos de alto rendimiento para estética automotriz.",
      filters: "Filtros",
      categoriesTitle: "Categorías",
      searchPlaceholder: "Buscar producto...",
      showing: "Mostrando",
      showingUnit: "productos",
      details: "Detalles →",
      noResults: "Ningún producto encontrado.",
      clearFilters: "Limpiar Filtros",
      categories: [
        { id: "all", name: "Todos los Productos" },
        { id: "lava-autos", name: "Lavado de Autos" },
        { id: "ceras-e-polidores", name: "Ceras y Pulidores" },
        { id: "higiene-interna", name: "Higiene Interior" },
        { id: "pneus-e-rodas", name: "Neumáticos y Ruedas" },
        { id: "aromatizantes", name: "Aromatizantes" },
        { id: "casa", name: "Para el Hogar" }
      ]
    },
    buyOnline: {
      title: "DÓNDE COMPRAR",
      subtitle: "Adquiera los productos Proauto a través de nuestros socios oficiales, en tiendas físicas o en línea.",
      onlineTitle: "Tienda Online",
      onlineDesc: "Compre con comodidad y seguridad a través de nuestro e-commerce oficial o socios digitales. Entrega rápida en todo el país.",
      buyNow: "Comprar Ahora",
      physicalTitle: "Tienda Física",
      physicalDesc: "Encuentre los productos Proauto en las mejores tiendas de estética automotriz, supermercados e hipermercados cerca de usted.",
      searchPlaceholder: "Ingresa tu CP o Ciudad",
      searchBtn: "Buscar",
      mainNetworks: "Principales Redes"
    },
    category: {
      dragHint: "Arrastra o usa las flechas"
    },
    privacy: {
      title: "Política de",
      titleAccent: "Privacidad",
      dateLocale: "es-ES",
      lastUpdated: "Última actualización:",
      s1Title: "1. Introducción",
      s1Text: "Proauto valora su privacidad y está comprometida en proteger sus datos personales. Esta Política de Privacidad explica cómo recopilamos, usamos, compartimos y protegemos su información cuando utiliza nuestro sitio web y servicios.",
      s2Title: "2. Datos que Recopilamos",
      s2Intro: "Podemos recopilar los siguientes tipos de datos personales:",
      s2Items: [
        { bold: "Datos de Contacto:", text: " Nombre, correo electrónico, número de teléfono, dirección." },
        { bold: "Datos de Navegación:", text: " Dirección IP, tipo de navegador, páginas visitadas, tiempo en el sitio, cookies." },
        { bold: "Datos de Transacción:", text: " Información de pago e historial de compras (cuando corresponda)." }
      ],
      s3Title: "3. Cómo Usamos Sus Datos",
      s3Intro: "Utilizamos sus datos personales para los siguientes fines:",
      s3Items: [
        "Proporcionar y mejorar nuestros productos y servicios.",
        "Procesar sus transacciones y enviar confirmaciones.",
        "Responder a sus consultas y solicitudes de soporte.",
        "Enviar comunicaciones de marketing y ofertas promocionales (con su consentimiento).",
        "Cumplir con obligaciones legales y normativas."
      ],
      s4Title: "4. Compartición de Datos",
      s4Intro: "No vendemos ni alquilamos sus datos personales a terceros. Podemos compartir su información con:",
      s4Items: [
        "Proveedores de servicios que nos asisten en la operación del sitio y la conducción de nuestro negocio (por ejemplo, procesadores de pago, servicios de alojamiento).",
        "Autoridades gubernamentales, cuando lo exija la ley o para proteger nuestros derechos."
      ],
      s5Title: "5. Sus Derechos",
      s5Intro: "De acuerdo con la ley aplicable, usted tiene derecho a:",
      s5Items: [
        "Confirmar la existencia del tratamiento de datos.",
        "Acceder a sus datos personales.",
        "Corregir datos incompletos, inexactos o desactualizados.",
        "Solicitar la anonimización, bloqueo o eliminación de datos innecesarios o excesivos.",
        "Revocar su consentimiento en cualquier momento."
      ],
      s6Title: "6. Seguridad",
      s6Text: "Adoptamos medidas de seguridad técnicas y administrativas para proteger sus datos personales contra accesos no autorizados, pérdida, destrucción o alteración.",
      s7Title: "7. Contacto",
      s7Text: "Si tiene preguntas sobre esta Política de Privacidad o cómo tratamos sus datos, contáctenos a través del correo electrónico:"
    },
    terms: {
      title: "Términos de",
      titleAccent: "Uso",
      dateLocale: "es-ES",
      lastUpdated: "Última actualización:",
      s1Title: "1. Aceptación de los Términos",
      s1Text: "Al acceder y utilizar el sitio web de Proauto, usted acepta cumplir con estos Términos de Uso y todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, está prohibido de usar o acceder a este sitio.",
      s2Title: "2. Uso de la Licencia",
      s2Intro: "Se otorga permiso para descargar temporalmente una copia de los materiales (información o software) en el sitio de Proauto, solo para visualización personal transitoria no comercial. Esta es la concesión de una licencia, no una transferencia de título y, bajo esta licencia, usted no puede:",
      s2Items: [
        "Modificar o copiar los materiales;",
        "Usar los materiales con cualquier fin comercial o para exhibición pública (comercial o no comercial);",
        "Intentar descompilar o realizar ingeniería inversa de cualquier software contenido en el sitio de Proauto;",
        "Eliminar cualquier copyright u otras notaciones de propiedad de los materiales; o",
        "Transferir los materiales a otra persona o 'reflejar' los materiales en cualquier otro servidor."
      ],
      s3Title: "3. Descargo de Responsabilidad",
      s3Text: "Los materiales en el sitio de Proauto se proporcionan 'tal cual'. Proauto no ofrece garantías, expresas o implícitas, y por este medio exime y niega todas las demás garantías, incluyendo, sin limitación, garantías implícitas o condiciones de comerciabilidad, idoneidad para un propósito particular o no infracción de propiedad intelectual u otra violación de derechos.",
      s4Title: "4. Limitaciones",
      s4Text: "En ningún caso Proauto o sus proveedores serán responsables de ningún daño (incluyendo, sin limitación, daños por pérdida de datos o utilidad, o debido a interrupción del negocio) que surja del uso o la imposibilidad de usar los materiales en Proauto, incluso si Proauto o un representante autorizado de Proauto ha sido notificado oralmente o por escrito de la posibilidad de tal daño.",
      s5Title: "5. Precisión de los Materiales",
      s5Text: "Los materiales que aparecen en el sitio de Proauto pueden incluir errores técnicos, tipográficos o fotográficos. Proauto no garantiza que ninguno de los materiales en su sitio sea preciso, completo o actual. Proauto puede realizar cambios en los materiales contenidos en su sitio en cualquier momento sin previo aviso.",
      s6Title: "6. Enlaces",
      s6Text: "Proauto no ha revisado todos los sitios enlazados a su sitio y no es responsable del contenido de ninguno de esos sitios enlazados. La inclusión de cualquier enlace no implica respaldo por parte de Proauto del sitio. El uso de cualquier sitio enlazado es por cuenta y riesgo del usuario.",
      s7Title: "7. Modificaciones",
      s7Text: "Proauto puede revisar estos términos de servicio de su sitio en cualquier momento sin previo aviso. Al usar este sitio, usted acepta quedar vinculado a la versión actual de estos términos de servicio.",
      s8Title: "8. Ley Aplicable",
      s8Text: "Estos términos y condiciones se rigen e interpretan de acuerdo con las leyes de Brasil y usted se somete irrevocablemente a la jurisdicción exclusiva de los tribunales en ese estado o localidad."
    }
  }
};
