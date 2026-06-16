export type Lang = "en" | "pt";

export const dictionary = {
  en: {
    nav: {
      about: "House",
      capabilities: "Capabilities",
      categories: "Portfolio",
      intelligence: "Intelligence",
      reach: "Global Reach",
      contact: "Contact",
      cta: "Request access",
    },
    hero: {
      eyebrow: "Market Intelligence for Ingredients",
      title_a: "The broker between",
      title_em: "origin",
      title_b: "and the world's tables.",
      lede:
        "XPICE sources, curates and moves spices, herbs and food ingredients across borders — pairing decades of trading legacy with live market intelligence so buyers decide with certainty.",
      primary: "Start a sourcing brief",
      secondary: "Explore the portfolio",
      scroll: "Scroll to discover",
    },
    stats: {
      title: "A trading house measured in trust.",
      items: [
        { value: "30+", label: "Years sourcing ingredients" },
        { value: "40+", label: "Origin countries mapped" },
        { value: "120+", label: "Ingredients under curation" },
        { value: "98%", label: "On-spec delivery rate" },
      ],
    },
    about: {
      tag: "01 — The House",
      title: "An ingredients broker built for a faster, more demanding market.",
      body_1:
        "For three decades the JR Spice name has stood for honest sourcing and a deep network of growers, mills and processors. XPICE carries that legacy forward — same roots, sharper instruments.",
      body_2:
        "We sit between the field and the factory: reading harvests, currencies and demand so that every shipment is the right grade, at the right moment, at a defensible price.",
      pillars: [
        { k: "Legacy", v: "A trusted name and grower relationships earned over generations." },
        { k: "Intelligence", v: "Live pricing, harvest and logistics data behind every quote." },
        { k: "Curation", v: "Only ingredients that pass our origin and quality bar reach you." },
      ],
    },
    capabilities: {
      tag: "02 — Capabilities",
      title: "Everything between the harvest and your warehouse.",
      lede: "One partner across sourcing, intelligence, quality and logistics.",
      items: [
        {
          n: "01",
          t: "Global Sourcing",
          d: "Direct access to origin — spices, herbs, seeds and naturals from the regions that grow them best.",
        },
        {
          n: "02",
          t: "Market Intelligence",
          d: "Harvest forecasts, price curves and currency exposure translated into clear buying windows.",
        },
        {
          n: "03",
          t: "Quality & Compliance",
          d: "Specification control, documentation and traceability from lot to delivery.",
        },
        {
          n: "04",
          t: "Logistics & Trade",
          d: "Consolidation, freight and customs handled end-to-end across continents.",
        },
      ],
    },
    categories: {
      tag: "03 — Portfolio",
      title: "A curated portfolio of ingredients.",
      lede: "From the bold and aromatic to the quietly functional — sourced to specification.",
      items: [
        { t: "Spices", d: "Pepper, paprika, turmeric, cumin, cinnamon and more.", tone: "saffron" },
        { t: "Herbs", d: "Oregano, basil, parsley, rosemary — dried and milled.", tone: "green" },
        { t: "Seeds & Grains", d: "Sesame, coriander, fennel, mustard and pulses.", tone: "navy" },
        { t: "Dehydrated", d: "Onion, garlic, tomato and vegetable powders.", tone: "saffron" },
        { t: "Naturals & Extracts", d: "Colours, oleoresins and clean-label functionals.", tone: "green" },
        { t: "Custom Blends", d: "Formulated to your recipe, scaled to your line.", tone: "navy" },
      ],
    },
    intelligence: {
      tag: "04 — Market Intelligence",
      title: "We don't just sell ingredients. We read the market.",
      body:
        "Prices for natural ingredients move with weather, currency and demand. Our desk turns that noise into signal — so you buy at the right moment, not the anxious one.",
      points: [
        "Harvest & yield monitoring across key origins",
        "Price trend and volatility analysis by commodity",
        "Currency and freight exposure modelling",
        "Quarterly outlook briefings for your category",
      ],
      ticker: [
        { name: "Black Pepper", trend: "up", note: "tight supply" },
        { name: "Turmeric", trend: "down", note: "strong harvest" },
        { name: "Paprika", trend: "up", note: "demand up" },
        { name: "Cumin", trend: "flat", note: "stable" },
        { name: "Sesame", trend: "up", note: "freight pressure" },
        { name: "Oregano", trend: "down", note: "ample stock" },
      ],
    },
    reach: {
      tag: "05 — Global Reach",
      title: "Sourcing from origin. Delivering to the world.",
      lede:
        "An operating network across the Americas, Europe, Africa and Asia — close to the growers, close to your line.",
      regions: [
        { r: "Americas", d: "Origin sourcing & regional distribution" },
        { r: "Europe", d: "Compliance, blending & key accounts" },
        { r: "Africa & Middle East", d: "High-value spice origins" },
        { r: "Asia", d: "Volume origins & emerging demand" },
      ],
    },
    process: {
      tag: "06 — How we work",
      title: "From brief to delivery, in four clear moves.",
      steps: [
        { n: "01", t: "Brief", d: "We map your ingredient, grade, volume and timing." },
        { n: "02", t: "Source & Price", d: "We match origin and lock a defensible price window." },
        { n: "03", t: "Qualify", d: "Samples, specs and documentation are confirmed before shipping." },
        { n: "04", t: "Deliver", d: "Freight, customs and delivery — tracked to your door." },
      ],
    },
    clients: {
      tag: "07 — Trust",
      title: "Trusted by the kitchens, mills and factories that feed the world.",
      lede:
        "Food manufacturers, blenders, distributors and retailers rely on XPICE for ingredients they can stake a recipe on.",
      tags: ["Food Manufacturing", "Spice Blenders", "Retail & Private Label", "Distribution", "Foodservice"],
    },
    cta: {
      title: "Let's source your next ingredient — intelligently.",
      lede: "Tell us what you need. We'll come back with origin options, a price view and a timeline.",
      button: "Start a conversation",
      email: "trade@xpice.com",
    },
    footer: {
      tagline: "Market Intelligence for Ingredients.",
      nav: "Navigate",
      contactTitle: "Contact",
      legal: "All rights reserved.",
      rebrand: "Formerly JR Spice",
    },
  },

  pt: {
    nav: {
      about: "A Casa",
      capabilities: "Competências",
      categories: "Portfólio",
      intelligence: "Inteligência",
      reach: "Alcance Global",
      contact: "Contato",
      cta: "Solicitar acesso",
    },
    hero: {
      eyebrow: "Inteligência de Mercado para Ingredientes",
      title_a: "O broker entre a",
      title_em: "origem",
      title_b: "e as mesas do mundo.",
      lede:
        "A XPICE busca, cura e movimenta especiarias, ervas e ingredientes alimentícios entre fronteiras — unindo décadas de legado em trading a inteligência de mercado em tempo real para que o comprador decida com certeza.",
      primary: "Iniciar um briefing",
      secondary: "Ver o portfólio",
      scroll: "Role para descobrir",
    },
    stats: {
      title: "Uma trading house medida em confiança.",
      items: [
        { value: "30+", label: "Anos buscando ingredientes" },
        { value: "40+", label: "Países de origem mapeados" },
        { value: "120+", label: "Ingredientes sob curadoria" },
        { value: "98%", label: "Entregas dentro do spec" },
      ],
    },
    about: {
      tag: "01 — A Casa",
      title: "Um broker de ingredientes feito para um mercado mais rápido e exigente.",
      body_1:
        "Por três décadas, o nome JR Spice representou sourcing honesto e uma rede profunda de produtores, moinhos e processadores. A XPICE leva esse legado adiante — mesmas raízes, instrumentos mais afiados.",
      body_2:
        "Ficamos entre o campo e a indústria: lendo safras, câmbio e demanda para que cada embarque tenha o grade certo, no momento certo, a um preço defensável.",
      pillars: [
        { k: "Legado", v: "Um nome de confiança e relações com produtores construídas por gerações." },
        { k: "Inteligência", v: "Preço, safra e logística em tempo real por trás de cada cotação." },
        { k: "Curadoria", v: "Só ingredientes que passam pela nossa régua de origem e qualidade chegam até você." },
      ],
    },
    capabilities: {
      tag: "02 — Competências",
      title: "Tudo entre a colheita e o seu armazém.",
      lede: "Um parceiro único em sourcing, inteligência, qualidade e logística.",
      items: [
        {
          n: "01",
          t: "Sourcing Global",
          d: "Acesso direto à origem — especiarias, ervas, sementes e naturais das regiões que melhor as cultivam.",
        },
        {
          n: "02",
          t: "Inteligência de Mercado",
          d: "Previsões de safra, curvas de preço e exposição cambial traduzidas em janelas claras de compra.",
        },
        {
          n: "03",
          t: "Qualidade & Compliance",
          d: "Controle de especificação, documentação e rastreabilidade do lote à entrega.",
        },
        {
          n: "04",
          t: "Logística & Trade",
          d: "Consolidação, frete e alfândega resolvidos ponta a ponta entre continentes.",
        },
      ],
    },
    categories: {
      tag: "03 — Portfólio",
      title: "Um portfólio curado de ingredientes.",
      lede: "Do marcante e aromático ao discretamente funcional — buscado sob especificação.",
      items: [
        { t: "Especiarias", d: "Pimenta, páprica, cúrcuma, cominho, canela e mais.", tone: "saffron" },
        { t: "Ervas", d: "Orégano, manjericão, salsa, alecrim — secas e moídas.", tone: "green" },
        { t: "Sementes & Grãos", d: "Gergelim, coentro, erva-doce, mostarda e leguminosas.", tone: "navy" },
        { t: "Desidratados", d: "Cebola, alho, tomate e vegetais em pó.", tone: "saffron" },
        { t: "Naturais & Extratos", d: "Corantes, oleoresinas e funcionais clean-label.", tone: "green" },
        { t: "Blends Customizados", d: "Formulados para sua receita, escalados para sua linha.", tone: "navy" },
      ],
    },
    intelligence: {
      tag: "04 — Inteligência de Mercado",
      title: "Não vendemos só ingredientes. Lemos o mercado.",
      body:
        "Os preços de ingredientes naturais se movem com clima, câmbio e demanda. Nossa mesa transforma esse ruído em sinal — para você comprar no momento certo, não no momento ansioso.",
      points: [
        "Monitoramento de safra e produtividade nas principais origens",
        "Análise de tendência e volatilidade de preço por commodity",
        "Modelagem de exposição cambial e de frete",
        "Briefings trimestrais de perspectiva para sua categoria",
      ],
      ticker: [
        { name: "Pimenta-do-reino", trend: "up", note: "oferta apertada" },
        { name: "Cúrcuma", trend: "down", note: "safra forte" },
        { name: "Páprica", trend: "up", note: "demanda alta" },
        { name: "Cominho", trend: "flat", note: "estável" },
        { name: "Gergelim", trend: "up", note: "pressão de frete" },
        { name: "Orégano", trend: "down", note: "estoque amplo" },
      ],
    },
    reach: {
      tag: "05 — Alcance Global",
      title: "Buscando na origem. Entregando para o mundo.",
      lede:
        "Uma rede operacional nas Américas, Europa, África e Ásia — perto dos produtores, perto da sua linha.",
      regions: [
        { r: "Américas", d: "Sourcing de origem & distribuição regional" },
        { r: "Europa", d: "Compliance, blending & grandes contas" },
        { r: "África & Oriente Médio", d: "Origens de especiarias de alto valor" },
        { r: "Ásia", d: "Origens de volume & demanda emergente" },
      ],
    },
    process: {
      tag: "06 — Como trabalhamos",
      title: "Do briefing à entrega, em quatro movimentos claros.",
      steps: [
        { n: "01", t: "Briefing", d: "Mapeamos seu ingrediente, grade, volume e timing." },
        { n: "02", t: "Sourcing & Preço", d: "Conectamos a origem e travamos uma janela de preço defensável." },
        { n: "03", t: "Qualificação", d: "Amostras, specs e documentação confirmadas antes do embarque." },
        { n: "04", t: "Entrega", d: "Frete, alfândega e entrega — rastreados até a sua porta." },
      ],
    },
    clients: {
      tag: "07 — Confiança",
      title: "A confiança das cozinhas, moinhos e fábricas que alimentam o mundo.",
      lede:
        "Indústrias de alimentos, blenders, distribuidores e varejistas contam com a XPICE para ingredientes nos quais se pode apostar uma receita.",
      tags: ["Indústria de Alimentos", "Blenders de Especiarias", "Varejo & Marca Própria", "Distribuição", "Foodservice"],
    },
    cta: {
      title: "Vamos buscar seu próximo ingrediente — com inteligência.",
      lede: "Conte o que você precisa. Voltamos com opções de origem, visão de preço e um prazo.",
      button: "Começar uma conversa",
      email: "trade@xpice.com",
    },
    footer: {
      tagline: "Inteligência de Mercado para Ingredientes.",
      nav: "Navegar",
      contactTitle: "Contato",
      legal: "Todos os direitos reservados.",
      rebrand: "Anteriormente JR Spice",
    },
  },
};

export type Dict = (typeof dictionary)["en"];
