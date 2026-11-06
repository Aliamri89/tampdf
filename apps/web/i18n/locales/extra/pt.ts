import type { Dictionary } from "../../dictionaries";
import type { DeepPartial } from "../../merge";

/** Translations of the cookie-consent, legal-page, advertising and watermark copy. */
export const extra: DeepPartial<Dictionary> = {
  tool: {
    adLabel: "Publicidade"
  },
  workspace: {
    addWatermark: {
      previewLabelImage: "Pré-visualização — aplicada à imagem",
      formatsNote: "Arquivos compatíveis: PDF, JPG, PNG e WebP"
    },
    removeWatermark: {
      intro: "Remove marcas d'água adicionadas como objetos de marca d'água: em PDFs (pelo Adobe Acrobat, pelo TAMPDF e pela maioria dos editores) e em documentos do Word (Design ▸ Marca d'água). Marcas incorporadas nos pixels de uma imagem não podem ser separadas dela, por isso imagens não são compatíveis.",
      formatsNote: "Arquivos compatíveis: PDF e Word (.docx)",
      noneFoundWord: "Nenhuma marca d'água do Word foi encontrada neste documento. Só é possível remover marcas adicionadas com o recurso Marca d'água do próprio Word."
    }
  },
  consent: {
    title: "Cookies e análises",
    description: "Usamos cookies de análise (Google Analytics e Microsoft Clarity) para entender como o site é usado. Eles só funcionam se você aceitar. Seus arquivos nunca saem do seu navegador.",
    accept: "Aceitar",
    reject: "Recusar",
    settings: "Configurações de cookies",
    statusOn: "Os cookies de análise estão ativados no momento.",
    statusOff: "Os cookies de análise estão desativados no momento.",
    close: "Fechar"
  },
  staticPages: {
    privacyPolicy: {
      intro: "Como o TAMPDF trata seus arquivos e dados: os arquivos são processados no navegador e nunca enviados; o que análises, cookies e publicidade coletam; e seus direitos.",
      updated: "Última atualização: 6 de novembro de 2026.",
      sections: [
        {
          heading: "Visão geral",
          text: "O TAMPDF (tampdf.com) oferece ferramentas gratuitas no navegador para PDFs e imagens. Esta política explica o que coletamos e o que não coletamos."
        },
        {
          heading: "Seus arquivos ficam no seu dispositivo",
          text: "Os arquivos são processados localmente no seu navegador e nunca são enviados, armazenados ou compartilhados com nossos servidores ou com terceiros. Se você escolher “Salvar no Google Drive” ou “Salvar no Dropbox”, seu navegador envia o resultado diretamente ao serviço em que você entrou; nós nunca o recebemos."
        },
        {
          heading: "Informações coletadas automaticamente",
          text: "Para entender como o site é usado, mantemos contadores simples próprios em nosso servidor e, somente com seu consentimento quando exigido, usamos o Google Analytics e o Microsoft Clarity. Eles podem registrar páginas visitadas, localização aproximada, dispositivo, navegador, idioma, site de referência e qual ferramenta você usou e se funcionou. Nunca coletamos seu nome, seu e-mail nem o conteúdo dos seus arquivos."
        },
        {
          heading: "Cookies e tecnologias semelhantes",
          text: "Serviços de análise e publicidade podem definir cookies ou usar o armazenamento local. Nossa Política de Cookies os lista e explica como controlá-los, e você pode mudar sua escolha a qualquer momento em “Configurações de cookies” no rodapé."
        },
        {
          heading: "Seus direitos",
          text: "Onde leis como o GDPR, o GDPR do Reino Unido ou a CCPA se aplicam, você pode solicitar acesso, correção ou exclusão dos dados pessoais que mantemos sobre você, opor-se ao tratamento ou restringi-lo, retirar o consentimento a qualquer momento e reclamar à autoridade de proteção de dados do seu país. Use a página de Contato para fazer o pedido."
        },
        {
          heading: "Retenção de dados",
          text: "Os dados de análise são mantidos apenas pelo tempo necessário para estatísticas e para melhorar o serviço, conforme as configurações de retenção de cada provedor."
        },
        {
          heading: "Serviços e links de terceiros",
          text: "O site pode conter links ou carregar serviços de outras empresas (por exemplo Google, Microsoft e Dropbox). Elas têm suas próprias políticas de privacidade e não somos responsáveis por elas."
        },
        {
          heading: "Crianças",
          text: "O TAMPDF não é direcionado a crianças menores de 13 anos (ou de 16 onde a lei local exigir) e não coletamos intencionalmente suas informações pessoais."
        },
        {
          heading: "Segurança",
          text: "Os arquivos são processados no seu navegador e nunca enviados a nós. O site é servido por HTTPS."
        },
        {
          heading: "Alterações nesta política",
          text: "Podemos atualizar esta política; a data de “Última atualização” mostra a versão mais recente. Continuar usando o site significa que você aceita a atualização."
        },
        {
          heading: "Contato",
          text: "Dúvidas sobre esta política? Use a página de Contato."
        }
      ]
    },
    cookiePolicy: {
      intro: "Os cookies e tecnologias semelhantes que o TAMPDF usa para preferências, análises e publicidade, e como controlá-los.",
      updated: "Última atualização: 6 de novembro de 2026.",
      sections: [
        {
          heading: "O que são cookies?",
          text: "Pequenos arquivos de texto que um site armazena no seu dispositivo. Tecnologias semelhantes, como armazenamento local e pixels, funcionam de modo parecido; esta política abrange todas elas."
        },
        {
          heading: "Armazenamento estritamente necessário",
          text: "O TAMPDF lembra seu tema claro/escuro e sua escolha sobre cookies no armazenamento local do navegador. Eles não contêm dados pessoais e nunca são enviados a nós."
        },
        {
          heading: "Cookies de análise",
          text: "Com seu consentimento quando exigido, usamos o Google Analytics 4 (cookies como _ga e _ga_*) e o Microsoft Clarity (como _clck e _clsk) para medir o tráfego e entender como o site é usado; o Clarity também pode criar gravações de sessão e mapas de calor anonimizados."
        },
        {
          heading: "Gerenciar sua escolha",
          text: "Onde o consentimento é exigido, você pode aceitar ou recusar os cookies de análise no banner e mudar de ideia a qualquer momento em “Configurações de cookies” no rodapé; retirar o consentimento interrompe os scripts de análise e exclui seus cookies. Você também pode bloquear cookies no navegador — as ferramentas continuam funcionando porque seus arquivos são processados localmente."
        },
        {
          heading: "Mais controles",
          text: "Você pode recusar a publicidade personalizada em https://adssettings.google.com ou https://www.aboutads.info/choices (https://www.youronlinechoices.eu na Europa) e gerenciar os dados da Microsoft em https://account.microsoft.com/privacy."
        },
        {
          heading: "Alterações e contato",
          text: "Podemos atualizar esta política; a data acima mostra a versão mais recente. Dúvidas? Use a página de Contato."
        }
      ]
    },
    termsOfService: {
      sections: [
        {
          heading: "Aceitação dos termos",
          text: "Ao usar o TAMPDF, você concorda com estes Termos de Serviço. Se não concordar, não use nossas ferramentas."
        },
        {
          heading: "O serviço",
          text: "O TAMPDF oferece ferramentas gratuitas no navegador para trabalhar com PDFs e imagens. Todo o processamento ocorre localmente no seu navegador; seus arquivos nunca são enviados aos nossos servidores."
        },
        {
          heading: "Isenção de garantias",
          text: "As ferramentas são fornecidas “no estado em que se encontram” e “conforme disponíveis”, sem garantias de qualquer tipo, expressas ou implícitas, incluindo precisão, confiabilidade, comercialização ou adequação a um fim específico. Não garantimos que sejam livres de erros, ininterruptas ou compatíveis com todos os arquivos, navegadores ou dispositivos."
        },
        {
          heading: "Limitação de responsabilidade",
          text: "Na máxima extensão permitida por lei, o TAMPDF e seus proprietários não são responsáveis por danos indiretos, incidentais, especiais ou consequentes — incluindo perda de dados, corrupção de arquivos ou interrupção de negócios — decorrentes do uso ou da impossibilidade de usar as ferramentas."
        },
        {
          heading: "Seus arquivos",
          text: "Você é responsável por manter cópias de segurança dos originais e por verificar qualquer resultado antes de confiar nele. Como o processamento ocorre no seu navegador, não podemos acessar nem recuperar seus arquivos."
        },
        {
          heading: "Uso aceitável",
          text: "Use o TAMPDF apenas para fins lícitos e apenas com arquivos que você tenha o direito de processar. Não use as ferramentas para violar direitos de terceiros, remover marcas d'água ou proteções de conteúdo que você não pode modificar, nem para prejudicar o site."
        },
        {
          heading: "Serviços de terceiros e publicidade",
          text: "O site pode exibir publicidade e conter links ou integrações com serviços de terceiros (como Google AdSense, Google Drive e Dropbox). Não os controlamos; o uso deles é regido por seus próprios termos e políticas de privacidade."
        },
        {
          heading: "Propriedade intelectual",
          text: "O nome, o logotipo, o design, os textos e o código do TAMPDF pertencem ao TAMPDF ou a seus licenciadores. Seus arquivos continuam sendo seus; não reivindicamos direitos sobre eles."
        },
        {
          heading: "Alterações nestes termos",
          text: "Podemos atualizar estes termos de tempos em tempos. Continuar usando o TAMPDF após a publicação de alterações significa que você as aceita."
        }
      ]
    },
    adsDisclosure: {
      heading: "Publicidade",
      paragraphs: [
        "Usamos o Google AdSense para exibir anúncios. O Google e seus parceiros são fornecedores terceirizados que usam cookies, web beacons e tecnologias semelhantes para veicular anúncios com base em suas visitas anteriores a este e a outros sites.",
        "Você pode recusar a publicidade personalizada nas Configurações de anúncios do Google (https://adssettings.google.com) ou em https://www.aboutads.info/choices e saber como o Google usa dados de sites que utilizam seus serviços em https://policies.google.com/technologies/partner-sites.",
        "No Espaço Econômico Europeu, no Reino Unido e na Suíça, os anúncios só são personalizados com seu consentimento, que você pode dar ou retirar pela mensagem de consentimento exibida no site."
      ]
    }
  }
};
