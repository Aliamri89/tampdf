import type { Dictionary } from "../dictionaries";
import type { DeepPartial } from "../merge";

export const pt: DeepPartial<Dictionary> = {
  header: { languageMenu: { ariaLabel: "Mudar idioma" } },
  breadcrumb: { home: "Início" },
  tool: {
    processedClient: "Processado no seu navegador — os arquivos nunca são enviados",
    faqHeading: "Perguntas frequentes",
    relatedHeading: "Ferramentas relacionadas",
    metaTitleSuffix: "— Ferramenta gratuita online",
  },
  article: {
    tocHeading: "Índice",
    readingTime: "{minutes} min de leitura",
    readingTimeOne: "1 min de leitura",
    readingTimeTwo: "2 min de leitura",
    published: "Publicado em {date}",
    updated: "Atualizado em {date}",
    relatedHeading: "Artigos relacionados",
    previousArticle: "Anterior",
    nextArticle: "Próximo",
    ctaDefaultHeading: "Pronto para experimentar {tool}?",
    ctaCompressPdfButtonLabel: "Comprimir PDF grátis",
  },
  card: { comingSoon: "Em breve" },
  home: {
    heroHighlight: "PDF",
    heroSubtitle: "Ferramentas de PDF gratuitas, rápidas e fáceis de usar",
    toolPicker: {
      trigger: "Escolher uma ferramenta de PDF",
      ariaLabel: "Menu de ferramentas de PDF",
      loadMore: "Mais ferramentas",
      allShown: "Todas as ferramentas exibidas",
    },
    features: { devices: "Funciona em qualquer dispositivo", fast: "Rápido", secure: "Seguro" },
  },
  footer: {
    rights: "Todos os direitos reservados.",
    privacyNote: "Os arquivos são processados com segurança e nunca armazenados por mais tempo do que o necessário.",
    moreCount: "+{count} mais",
    company: "Empresa",
    legal: "Legal",
    aboutUs: "Sobre nós",
    contactUs: "Contato",
    blog: "Blog",
    faq: "Perguntas frequentes",
    privacyPolicy: "Política de privacidade",
    termsOfService: "Termos de serviço",
    cookiePolicy: "Política de cookies",
  },
  staticPages: {
    note: "Esta página é um espaço reservado — o conteúdo completo chegará em breve.",
    aboutUs: {
      title: "Sobre nós",
      intro:
        "O TAMPDF é um conjunto de ferramentas online gratuitas criado para tornar tarefas diárias com arquivos — unir, dividir, comprimir e converter PDFs, imagens e documentos — rápidas, privadas e sem esforço.",
    },
    contactUs: {
      title: "Contato",
      intro: "Tem uma dúvida, encontrou um bug ou quer sugerir uma nova ferramenta? Adoraríamos ouvir você.",
    },
    blog: { title: "Blog", intro: "Estamos preparando artigos sobre formatos de arquivo, dicas de produtividade e novidades do produto." },
    faq: {
      title: "Perguntas frequentes",
      intro: "Respostas gerais sobre o TAMPDF serão publicadas aqui em breve. Enquanto isso, cada ferramenta tem seu próprio FAQ.",
    },
    privacyPolicy: {
      title: "Política de privacidade",
      intro: "Nossa política de privacidade completa, explicando exatamente como o TAMPDF trata seus arquivos e dados, está sendo finalizada e será publicada aqui em breve.",
    },
    termsOfService: {
      title: "Termos de serviço",
      intro: "Estes Termos de serviço regem o uso das ferramentas e do site do TAMPDF, incluindo nossa isenção de garantias e limitação de responsabilidade.",
    },
    cookiePolicy: {
      title: "Política de cookies",
      intro: "Detalhes sobre os cookies e tecnologias semelhantes usados pelo TAMPDF serão publicados aqui em breve.",
    },
  },
  dropzone: {
    browse: "ou clique para procurar",
    defaultLabel: "Arraste e solte seu arquivo aqui",
    unsupportedType: "{name} não é um tipo de arquivo suportado e foi ignorado.",
    unsupportedTypePlural: "{count} arquivos não tinham um tipo suportado e foram ignorados.",
    tooLarge: "{name} é muito grande (máx. {max}) e foi ignorado.",
    tooLargePlural: "{count} arquivos eram muito grandes (máx. {max}) e foram ignorados.",
    maxFilesReached: "Você já adicionou o máximo de {max} arquivos para esta ferramenta.",
    maxFilesExceeded: "Esta ferramenta permite até {max} arquivos por vez, então apenas {added} dos seus arquivos foram adicionados.",
  },
  fileList: { moveUp: "Mover para cima", moveDown: "Mover para baixo", remove: "Remover {name}" },
  result: {
    ready: "Seu arquivo está pronto",
    download: "Baixar",
    startOver: "Recomeçar",
    smaller: "menor",
    originalSize: "Tamanho original",
    newSize: "Novo tamanho",
    reducedBy: "Reduzido em",
    spaceSaved: "Espaço economizado",
  },
  notFound: {
    title: "Página não encontrada",
    description: "A página que você procura não existe ou pode ter sido movida.",
    cta: "Voltar ao início",
  },
};
