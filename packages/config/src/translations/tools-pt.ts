import type { ToolTranslationOverride } from "./tools-ar";

export const toolsPt: Record<string, ToolTranslationOverride> = {
  "compress-pdf": {
    name: "Comprimir PDF",
    actionLabel: "Comprimir PDF",
    shortDescription: "Reduza o tamanho de um PDF para compartilhar e enviar com mais facilidade, direto no seu navegador.",
    longDescription: [
      "Comprimir PDF reduz o tamanho do arquivo recodificando imagens incorporadas e removendo dados desnecessários, tornando seu documento mais fácil de enviar por e-mail, carregar ou armazenar.",
      "Escolha um nível de compressão para equilibrar tamanho e qualidade visual, e compare o tamanho antes/depois antes de baixar.",
    ],
    faq: [
      { question: "Quanto meu PDF vai reduzir?", answer: "Depende do conteúdo. PDFs com imagens grandes incorporadas costumam reduzir mais, às vezes 50-90%. PDFs com muito texto comprimem menos, pois há menos a otimizar." },
      { question: "A compressão vai deixar meu PDF borrado?", answer: "Na configuração padrão, a perda de qualidade é mínima. Com o nível de compressão mais forte, as imagens são reduzidas de forma mais agressiva, o que pode reduzir a nitidez ao ampliar." },
      { question: "A compressão é feita nos servidores da TAMPDF?", answer: "Não. Comprimir PDF funciona localmente no seu navegador, então seu arquivo nunca é enviado a lugar nenhum." },
      { question: "Posso comprimir um PDF protegido por senha?", answer: "Atualmente não. Remova a proteção por senha primeiro com outra ferramenta e depois comprima o arquivo." },
    ],
  },
  "pdf-to-jpg": {
    name: "PDF para JPG",
    actionLabel: "Converter para JPG",
    shortDescription: "Transforme cada página de um PDF em uma imagem JPG de alta qualidade.",
    longDescription: [
      "PDF para JPG converte cada página do seu PDF em uma imagem JPG separada, pronta para compartilhar, editar ou inserir em uma apresentação. Um PDF de uma página baixa como um JPG; PDFs de várias páginas são agrupados em um arquivo .zip.",
      "A conversão acontece diretamente no seu navegador usando PDF.js, então seu documento nunca é enviado a um servidor.",
    ],
    faq: [
      { question: "E se meu PDF tiver várias páginas?", answer: "Cada página se torna sua própria imagem JPG. Se houver mais de uma, elas são agrupadas em um único arquivo .zip para download." },
      { question: "Quão nítidas serão as imagens?", answer: "As páginas são renderizadas em alta resolução, adequada para telas e a maioria das necessidades de impressão. Escolha o nível de qualidade para equilibrar nitidez e tamanho do arquivo." },
      { question: "Meu PDF é enviado para algum lugar?", answer: "Não. PDF para JPG processa cada página localmente no seu navegador, então seu arquivo nunca sai do seu dispositivo." },
      { question: "Posso converter apenas uma página em vez do documento inteiro?", answer: "Atualmente, todas as páginas são convertidas. Use Juntar PDF ou um leitor de PDF para isolar uma única página antes, se você só precisar de uma imagem." },
    ],
  },
  "merge-pdf": {
    name: "Juntar PDF",
    actionLabel: "Juntar PDFs",
    shortDescription: "Combine vários arquivos PDF em um único documento, na ordem que você escolher.",
    longDescription: [
      "Juntar PDF permite combinar dois ou mais arquivos PDF em um único documento sem instalar nada. Adicione seus arquivos, arraste para reordená-los e baixe um único PDF unificado.",
      "Tudo funciona localmente no seu navegador, então seus arquivos nunca são enviados a um servidor. Isso significa que funciona até com contratos, relatórios ou documentos pessoais sensíveis.",
    ],
    faq: [
      { question: "Há um limite de quantos PDFs posso juntar?", answer: "Sem limite fixo. Como a junção acontece no seu navegador, o limite prático é a memória do seu dispositivo, não uma cota de servidor." },
      { question: "Posso mudar a ordem das páginas antes de juntar?", answer: "Sim. Depois de adicionar seus arquivos, arraste-os para a ordem que você quer que o documento final siga antes de juntar." },
      { question: "Meus arquivos são enviados para os servidores da TAMPDF?", answer: "Não. Juntar PDF processa os arquivos inteiramente no seu navegador usando tecnologia do lado do cliente, então seus documentos nunca saem do seu dispositivo." },
      { question: "A junção vai afetar a qualidade dos meus PDFs?", answer: "Não. As páginas são combinadas como estão, sem recompressão, então texto, imagens e formatação permanecem exatamente como nos originais." },
    ],
  },
  "rotate-pdf": {
    name: "Girar PDF",
    actionLabel: "Girar PDF",
    shortDescription: "Gire páginas individuais ou um PDF inteiro em 90°, 180° ou 270°, direto no seu navegador.",
    longDescription: [
      "Girar PDF permite corrigir páginas de lado ou de cabeça para baixo em segundos. Envie um ou mais PDFs, veja uma miniatura de cada página e gire o documento inteiro de uma vez ou apenas as páginas que precisarem.",
      "Tudo funciona localmente no seu navegador, então seus arquivos nunca são enviados a um servidor. Envie vários PDFs de uma vez e cada um é girado e retornado de forma independente.",
    ],
    faq: [
      { question: "Posso girar apenas uma página em vez do documento inteiro?", answer: "Sim. Clique no botão de girar de uma página para girar só ela, ou use os botões de girar tudo para aplicar a mesma rotação a todas as páginas de uma vez." },
      { question: "Quais ângulos de rotação são suportados?", answer: "Você pode girar páginas em 90°, 180° ou 270° em qualquer direção." },
      { question: "Posso girar mais de um PDF por vez?", answer: "Sim. Envie vários PDFs e cada um é girado de forma independente. Se você enviar mais de um arquivo, os PDFs girados são agrupados em um .zip para download." },
      { question: "Meu PDF é enviado para algum lugar?", answer: "Não. Girar PDF processa tudo localmente no seu navegador, então seus arquivos nunca saem do seu dispositivo." },
    ],
  },
  "compress-image": {
    name: "Comprimir imagem",
    actionLabel: "Comprimir imagens",
    shortDescription: "Reduza o tamanho de arquivos JPG, PNG e WebP mantendo a qualidade visual.",
    longDescription: [
      "Comprimir imagem reduz o tamanho das suas fotos JPG, PNG ou WebP, tornando-as mais rápidas para enviar, mandar por e-mail e carregar em sites.",
      "A compressão acontece inteiramente no seu navegador usando a API canvas, então suas fotos nunca saem do seu dispositivo, e você pode comprimir várias imagens de uma vez.",
    ],
    faq: [
      { question: "Quais formatos de imagem são suportados?", answer: "Imagens JPG, PNG e WebP são suportadas tanto na entrada quanto na saída." },
      { question: "Posso comprimir várias imagens de uma vez?", answer: "Sim. Adicione quantas imagens quiser e cada uma será comprimida e agrupada em um único .zip para download, ou baixadas individualmente." },
      { question: "Quanto posso reduzir uma imagem sem perder qualidade?", answer: "A configuração de qualidade padrão normalmente reduz o tamanho do arquivo em 60-80% sem diferença visível. Você pode ajustar o controle de qualidade para outro equilíbrio." },
      { question: "Minhas fotos são enviadas para um servidor?", answer: "Não. A compressão acontece localmente no seu navegador usando a API canvas, então suas imagens nunca são enviadas para lugar nenhum." },
    ],
  },
  "image-to-pdf": {
    name: "JPG para PDF",
    actionLabel: "Converter para PDF",
    shortDescription: "Transforme uma ou mais imagens JPG em um único documento PDF.",
    longDescription: [
      "JPG para PDF combina suas fotos JPG em um único arquivo PDF, uma imagem por página, na ordem que você escolher.",
      "Perfeito para transformar documentos digitalizados, recibos ou fotos em um PDF fácil de compartilhar. Tudo é processado localmente no seu navegador para total privacidade.",
    ],
    faq: [
      { question: "Posso combinar várias imagens em um PDF?", answer: "Sim. Adicione várias imagens e cada uma se tornará uma página no PDF resultante, na ordem em que você as organizar." },
      { question: "Que tamanho de página é usado para o PDF?", answer: "Cada página é dimensionada conforme as dimensões e orientação da imagem de origem, então nada é cortado ou esticado." },
      { question: "Minhas imagens são enviadas para algum lugar?", answer: "Não. A conversão acontece inteiramente no seu navegador, então suas imagens ficam no seu dispositivo." },
      { question: "Também suporta imagens PNG?", answer: "Sim, imagens PNG são suportadas junto com JPG. Fotos HEIC de um iPhone ainda não são suportadas; converta-as para JPG primeiro usando as opções de compartilhamento do seu telefone." },
    ],
  },
  "rotate-images": {
    name: "Girar imagens",
    actionLabel: "Girar imagens",
    shortDescription: "Gire uma ou mais imagens JPG, PNG ou WebP em 90°, 180° ou 270°.",
    longDescription: [
      "Girar imagens corrige fotos de lado ou de cabeça para baixo em segundos. Envie uma ou mais imagens, gire cada uma individualmente ou todas de uma vez, e baixe os resultados.",
      "Tudo funciona localmente no seu navegador, então suas fotos nunca são enviadas a um servidor. Envie várias imagens de uma vez e cada uma é girada e retornada de forma independente.",
    ],
    faq: [
      { question: "Quais formatos de imagem são suportados?", answer: "Imagens JPG, PNG e WebP são suportadas. Girar preserva o formato original." },
      { question: "Posso girar apenas uma imagem em vez de todas?", answer: "Sim. Clique no botão de girar de uma imagem para girar só ela, ou use os botões de girar tudo para aplicar a mesma rotação a todas de uma vez." },
      { question: "Quais ângulos de rotação são suportados?", answer: "Você pode girar imagens em 90°, 180° ou 270°." },
      { question: "Minhas fotos são enviadas para algum lugar?", answer: "Não. Girar imagens processa tudo localmente no seu navegador, então suas fotos nunca saem do seu dispositivo." },
    ],
  },
  "split-pdf": {
    name: "Dividir PDF",
    actionLabel: "Dividir PDF",
    shortDescription: "Divida um PDF em vários arquivos menores por intervalos de páginas ou em partes de tamanho fixo.",
    longDescription: [
      "Dividir PDF separa um documento grande em arquivos PDF distintos sem alterar as páginas em si. Digite intervalos como 1-3, 5, 8-10 para extrair exatamente as seções que você precisa, ou divida o documento inteiro em partes iguais com um número fixo de páginas.",
      "Tudo funciona no seu navegador — o PDF nunca é enviado a um servidor. Um único resultado baixa como um PDF; várias partes são agrupadas em um .zip.",
    ],
    faq: [
      { question: "Como eu escolho quais páginas vão em cada arquivo?", answer: "Use o campo de intervalos: algo como «1-3, 5, 8-10» produz três PDFs — páginas 1 a 3, página 5 sozinha, e páginas 8 a 10. Ou mude para «a cada N páginas» para cortar o documento em partes iguais." },
      { question: "Os arquivos divididos mantêm a qualidade original?", answer: "Sim. As páginas são copiadas como estão, sem recompressão, então texto, imagens, fontes e layout são idênticos à origem." },
      { question: "Meu PDF é enviado para algum lugar?", answer: "Não. A divisão acontece inteiramente no seu navegador, então seu documento nunca sai do seu dispositivo." },
      { question: "O que acontece com campos de formulário ou assinaturas digitais?", answer: "O conteúdo das páginas e os widgets de formulário são preservados visualmente, mas o comportamento interativo do formulário e as assinaturas não são levados para os arquivos divididos. Achate-os ou assine novamente depois, se precisar." },
    ],
  },
  "delete-pdf-pages": {
    name: "Excluir páginas do PDF",
    actionLabel: "Excluir páginas",
    shortDescription: "Remova páginas indesejadas de um PDF e baixe o documento reduzido.",
    longDescription: [
      "Excluir páginas do PDF permite descartar páginas que você não precisa — digitalizações em branco, capas, páginas duplicadas — e manter o resto na ordem original. Veja uma miniatura de cada página, toque nas que quiser remover, e baixe o resultado.",
      "Todo o processo acontece localmente no seu navegador, então seu PDF nunca é enviado. As páginas restantes são copiadas sem recompressão, então nada perde qualidade.",
    ],
    faq: [
      { question: "Posso excluir mais de uma página de uma vez?", answer: "Sim. Selecione quantas páginas quiser na grade de miniaturas, depois exclua todas em uma única etapa." },
      { question: "Posso remover todas as páginas?", answer: "Não — pelo menos uma página deve permanecer, então o botão fica desativado se você selecionar todas." },
      { question: "Excluir páginas reduz o tamanho do arquivo?", answer: "Geralmente um pouco, já que o conteúdo das páginas removidas é descartado. Recursos compartilhados como fontes podem permanecer, então use Comprimir PDF depois se o tamanho for importante." },
      { question: "Meus arquivos são enviados para um servidor?", answer: "Não. Tudo acontece no seu navegador e seu PDF nunca sai do seu dispositivo." },
    ],
  },
  "reorder-pdf-pages": {
    name: "Reordenar páginas do PDF",
    actionLabel: "Reordenar páginas",
    shortDescription: "Arraste as páginas de um PDF para uma nova ordem e salve o documento reorganizado.",
    longDescription: [
      "Reordenar páginas do PDF mostra uma miniatura de cada página que você pode arrastar para a ordem desejada — mover uma página para o início, trocar duas seções, ou inverter o documento inteiro. Botões de mover também estão disponíveis para mudanças precisas, página por página.",
      "A reorganização acontece inteiramente no seu navegador, então seu PDF nunca é enviado. As páginas são copiadas como estão, então qualidade e formatação ficam intactas.",
    ],
    faq: [
      { question: "Como eu movo uma página?", answer: "Arraste sua miniatura para a nova posição, ou use os botões de cima/baixo em cada página para movimentos individuais. A nova ordem é salva ao clicar no botão." },
      { question: "Posso inverter o documento inteiro?", answer: "Sim — arraste as páginas em ordem inversa, ou use os botões de mover. Qualquer número de páginas pode ser reorganizado de uma vez." },
      { question: "Reordenar vai mudar o conteúdo das páginas?", answer: "Não. Apenas a ordem das páginas muda — texto, imagens e layout de cada página permanecem exatamente os mesmos." },
      { question: "O PDF é enviado para algum lugar?", answer: "Não. A reordenação acontece localmente no seu navegador e seu arquivo nunca sai do seu dispositivo." },
    ],
  },
  "crop-pdf": {
    name: "Cortar PDF",
    actionLabel: "Cortar PDF",
    shortDescription: "Corte as margens de cada página do PDF definindo os valores de topo, base e laterais.",
    longDescription: [
      "Cortar PDF remove espaços em branco indesejados ou bordas de digitalização das bordas das suas páginas. Defina quanto cortar do topo, base, esquerda e direita como porcentagem, veja a pré-visualização em tempo real, e aplique a todas as páginas de uma vez.",
      "O corte ajusta a área visível da página sem excluir nenhum conteúdo — as partes cortadas ficam apenas ocultas. Tudo funciona no seu navegador, então seu PDF nunca é enviado.",
    ],
    faq: [
      { question: "O corte exclui o conteúdo fora da área cortada?", answer: "Não. Cortar PDF muda a caixa de corte da página, que oculta a área externa em visualizadores e na impressão. O conteúdo subjacente ainda está no arquivo e pode ser restaurado." },
      { question: "O mesmo corte é aplicado a todas as páginas?", answer: "Sim. As margens que você define são aplicadas a todas as páginas. Páginas de tamanhos diferentes são cortadas cada uma pela mesma porcentagem." },
      { question: "Posso cortar um documento digitalizado para remover a borda preta?", answer: "Sim — esse é um uso comum. Aumente as margens até que a pré-visualização mostre apenas o conteúdo que você quer manter." },
      { question: "Meu arquivo é enviado para um servidor?", answer: "Não. O corte acontece inteiramente no seu navegador e seu PDF fica no seu dispositivo." },
    ],
  },
  "resize-pdf": {
    name: "Redimensionar PDF",
    actionLabel: "Redimensionar PDF",
    shortDescription: "Altere o tamanho de página do PDF para A4, Carta ou uma escala personalizada, com o conteúdo ajustado e centralizado.",
    longDescription: [
      "Redimensionar PDF altera o tamanho físico de página do seu documento. Escolha um tamanho padrão como A4 ou Carta e cada página é escalada para se ajustar e centralizada, ou use uma porcentagem para reduzir ou ampliar as páginas proporcionalmente.",
      "O redimensionamento acontece no seu navegador sem envio. O conteúdo é escalado junto com a página, então nada é cortado e o layout permanece proporcional.",
    ],
    faq: [
      { question: "Quais tamanhos de página posso escolher?", answer: "A4 e Carta em retrato ou paisagem, além de A3 e A5. Você também pode inserir uma porcentagem de escala para redimensionar sem mudar a proporção." },
      { question: "Meu conteúdo vai ficar esticado?", answer: "Não. O conteúdo é escalado uniformemente para se ajustar ao novo tamanho e centralizado na página, então as proporções são preservadas e nada é cortado." },
      { question: "Posso reduzir o tamanho do arquivo de um PDF com isso?", answer: "Não diretamente — isso muda as dimensões da página, não o peso do arquivo. Use Comprimir PDF para reduzir o tamanho do arquivo." },
      { question: "Meus arquivos são enviados para algum lugar?", answer: "Não. O redimensionamento é feito localmente no seu navegador e seu PDF nunca sai do seu dispositivo." },
    ],
  },
  "png-to-pdf": {
    name: "PNG para PDF",
    actionLabel: "Converter para PDF",
    shortDescription: "Transforme uma ou mais imagens PNG em um único documento PDF, uma imagem por página.",
    longDescription: [
      "PNG para PDF combina suas imagens PNG em um único arquivo PDF, com cada imagem em sua própria página na resolução original. Adicione várias imagens, organize a ordem delas, e baixe um único documento.",
      "Ótimo para transformar capturas de tela, diagramas ou gráficos exportados em um PDF fácil de compartilhar. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas. Áreas transparentes são colocadas em fundo branco.",
    ],
    faq: [
      { question: "Posso combinar vários PNGs em um PDF?", answer: "Sim. Adicione quantas imagens PNG quiser e cada uma se tornará uma página no PDF resultante, na ordem em que você as organizar." },
      { question: "Que tamanho de página é usado?", answer: "Cada página corresponde às dimensões em pixels da imagem de origem, então as imagens não são cortadas ou esticadas." },
      { question: "O que acontece com as partes transparentes da imagem?", answer: "A transparência é achatada em um fundo branco para que a página tenha a mesma aparência em todos os visualizadores de PDF." },
      { question: "Minhas imagens são enviadas para um servidor?", answer: "Não. A conversão acontece inteiramente no seu navegador e suas imagens ficam no seu dispositivo." },
    ],
  },
  "extract-pdf-pages": {
    name: "Extrair páginas do PDF",
    actionLabel: "Extrair páginas",
    shortDescription: "Extraia as páginas escolhidas de um PDF para um novo arquivo — ou salve cada página como seu próprio PDF.",
    longDescription: [
      "Extrair páginas do PDF permite escolher exatamente as páginas que você precisa de um documento e salvá-las como um novo PDF. Veja uma miniatura de cada página, toque nas que quiser manter, e baixe-as juntas — ou como PDFs de uma página separados em um ZIP.",
      "Seu arquivo original permanece inalterado, e as páginas são copiadas como estão, então texto, imagens e formatação ficam intactos. Tudo acontece no seu navegador, então o PDF nunca é enviado.",
    ],
    faq: [
      { question: "Qual a diferença entre extrair e dividir?", answer: "Extrair salva apenas as páginas selecionadas em um novo PDF. Dividir separa o documento inteiro em várias partes por intervalos de páginas ou tamanhos fixos." },
      { question: "Posso salvar cada página extraída como arquivo separado?", answer: "Sim. Escolha «PDFs separados» e cada página selecionada se torna seu próprio PDF, agrupados em um único download .zip." },
      { question: "As páginas extraídas vão perder qualidade?", answer: "Não. As páginas são copiadas sem recompressão, então parecem exatamente como o original. Campos de formulário interativos podem se tornar conteúdo de página normal." },
      { question: "Meu PDF é enviado para um servidor?", answer: "Não. As páginas são extraídas localmente no seu navegador e seu arquivo nunca sai do seu dispositivo." },
    ],
  },
  "add-page-numbers": {
    name: "Adicionar números de página",
    actionLabel: "Adicionar números de página",
    shortDescription: "Numere as páginas de um PDF, escolhendo posição, formato e número inicial.",
    longDescription: [
      "Adicionar números de página estampa um número em cada página do seu PDF. Escolha entre seis posições, um estilo como «1», «1 / 10» ou «Página 1 de 10», defina o número inicial, e opcionalmente pule a capa.",
      "Os números são desenhados como texto real em uma fonte padrão, então imprimem com nitidez e permanecem retos mesmo em páginas giradas. Todo o processo acontece no seu navegador — seu documento nunca é enviado.",
    ],
    faq: [
      { question: "Posso começar a numeração a partir de um número diferente de 1?", answer: "Sim. Defina qualquer número inicial — útil quando seu PDF é um capítulo ou anexo de um documento maior." },
      { question: "Posso deixar a capa sem numeração?", answer: "Sim. Ative «Não numerar a primeira página» e a numeração começa na segunda página." },
      { question: "Quais dígitos são usados?", answer: "Dígitos padrão (1, 2, 3), que aparecem corretamente em qualquer leitor de PDF. Rótulos como «Página 1 de 10» são escritos em português." },
      { question: "Meu arquivo é enviado?", answer: "Não. Os números de página são adicionados localmente no seu navegador e seu PDF fica no seu dispositivo." },
    ],
  },
  "add-watermark": {
    name: "Adicionar marca d'água",
    actionLabel: "Adicionar marca d'água",
    shortDescription: "Carimbe um texto como CONFIDENCIAL ou RASCUNHO em todas as páginas de um PDF.",
    longDescription: [
      "Adicionar marca d'água coloca seu texto em cada página de um PDF — uma vez no centro ou repetido pela página toda. Escolha a cor, opacidade, tamanho e ângulo, e veja uma pré-visualização ao vivo na primeira página antes de aplicar.",
      "Português e outras escritas são totalmente suportados. A marca d'água é salva como um objeto de marca d'água padrão, e tudo acontece no seu navegador, então seu documento nunca é enviado.",
    ],
    faq: [
      { question: "Posso escrever a marca d'água em português?", answer: "Sim. O texto é renderizado com as fontes do seu navegador, então português e outras escritas são representados corretamente." },
      { question: "A marca d'água pode ser repetida pela página?", answer: "Sim. Escolha o layout «Repetido» para preencher o texto em mosaico por toda a página, ou «Uma vez, centralizado» para um único carimbo." },
      { question: "A marca d'água pode ser removida depois?", answer: "Ela é salva como um objeto de marca d'água padrão, então ferramentas que entendem marcas d'água — incluindo Remover marca d'água da TAMPDF — podem removê-la. Não é um recurso de segurança." },
      { question: "Meu PDF é enviado para algum lugar?", answer: "Não. A marca d'água é aplicada localmente no seu navegador." },
    ],
  },
  "remove-watermark": {
    name: "Remover marca d'água",
    actionLabel: "Remover marca d'água",
    shortDescription: "Remova marcas d'água adicionadas como objetos de marca d'água em um PDF.",
    longDescription: [
      "Remover marca d'água encontra e exclui marcas d'água adicionadas como objetos de marca d'água — o tipo que Adobe Acrobat, TAMPDF e a maioria dos editores de PDF criam — junto com anotações de marca d'água e camadas chamadas «Watermark». O resto de cada página permanece exatamente igual.",
      "Marcas d'água que fazem parte de uma imagem digitalizada ou mescladas ao texto normal da página não têm marcador que as distinga do conteúdo real, então não podem ser removidas automaticamente. Por favor, remova marcas d'água apenas de documentos que você tem o direito de editar. O processamento acontece no seu navegador, então seu arquivo nunca é enviado.",
    ],
    faq: [
      { question: "Quais marcas d'água podem ser removidas?", answer: "Marcas d'água adicionadas como objetos de marca d'água, anotações de marca d'água, ou camadas chamadas «Watermark» — incluindo as criadas pelo Adobe Acrobat e pela ferramenta Adicionar marca d'água da TAMPDF." },
      { question: "Por que a marca d'água do meu arquivo não foi removida?", answer: "Se uma marca d'água faz parte da imagem digitalizada de uma página ou foi achatada no texto da página, ela não pode ser separada do conteúdo real sem danificar a página." },
      { question: "Remover uma marca d'água afeta o resto da página?", answer: "Não. Apenas o conteúdo marcado como marca d'água é removido; texto, imagens e layout ficam intactos." },
      { question: "Meu arquivo é enviado?", answer: "Não. O PDF é processado localmente no seu navegador." },
    ],
  },
  "pdf-to-images": {
    name: "PDF para imagens",
    actionLabel: "Converter para imagens",
    shortDescription: "Converta cada página de um PDF em imagens PNG, JPG ou WEBP, baixadas em um arquivo ZIP.",
    longDescription: [
      "PDF para imagens renderiza cada página do seu PDF como uma imagem separada no formato que você escolher: PNG para o texto mais nítido, JPG para os arquivos menores, ou WEBP para imagens modernas e compactas. Escolha uma resolução e cada página é exportada e agrupada em um único .zip.",
      "A renderização acontece diretamente no seu navegador usando PDF.js, então seu documento nunca é enviado a um servidor.",
    ],
    faq: [
      { question: "Qual formato de imagem devo escolher?", answer: "PNG mantém texto e desenhos de linha perfeitamente nítidos. JPG produz arquivos menores e é adequado para fotos. WEBP oferece um bom equilíbrio para uso na web." },
      { question: "Qual a resolução das imagens?", answer: "Padrão renderiza a 108 dpi, Alta a 144 dpi, e Máxima a 216 dpi — alto o suficiente para imprimir a maioria dos documentos." },
      { question: "Como obtenho todas as páginas de uma vez?", answer: "Cada página é convertida e empacotada em um arquivo .zip. Um PDF de uma página baixa como uma única imagem." },
      { question: "Meu PDF é enviado?", answer: "Não. As páginas são renderizadas localmente no seu navegador." },
    ],
  },
  "images-to-pdf": {
    name: "Imagens para PDF",
    actionLabel: "Criar PDF",
    shortDescription: "Combine imagens JPG, PNG e WEBP em um único PDF, na ordem que você escolher.",
    longDescription: [
      "Imagens para PDF transforma um conjunto de fotos, digitalizações ou capturas de tela em um único documento PDF. Adicione imagens JPG, PNG ou WEBP, arraste as miniaturas para a ordem desejada, e escolha uma página A4 ou Carta (com orientação automática) ou páginas que correspondam a cada imagem.",
      "Adicione uma margem para um visual impresso limpo. Áreas transparentes são colocadas em branco, e toda a conversão acontece no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "Posso mudar a ordem das imagens?", answer: "Sim. Arraste as miniaturas ou use os botões de seta para definir a ordem das páginas antes de criar o PDF." },
      { question: "Quais formatos de imagem são suportados?", answer: "JPG, PNG e WEBP. Você pode misturar formatos no mesmo PDF." },
      { question: "Que tamanho de página o PDF vai usar?", answer: "Escolha A4 ou Carta — cada imagem é ajustada à página e virada para paisagem quando necessário — ou «Ajustar à imagem» para que cada página tenha exatamente o tamanho da sua imagem." },
      { question: "Minhas imagens são enviadas?", answer: "Não. O PDF é criado localmente no seu navegador." },
    ],
  },
  "flip-pdf": {
    name: "Inverter PDF",
    actionLabel: "Inverter PDF",
    shortDescription: "Espelhe as páginas de um PDF na horizontal ou na vertical.",
    longDescription: [
      "Inverter PDF espelha cada página do seu documento — da esquerda para a direita ou de cima para baixo. Útil para imprimir transferências térmicas, corrigir digitalizações feitas do lado errado, ou preparar artes espelhadas.",
      "Pré-visualize o resultado na primeira página antes de aplicar. A inversão também respeita páginas giradas, e tudo acontece no seu navegador, então seu arquivo nunca é enviado.",
    ],
    faq: [
      { question: "Qual a diferença entre inverter e girar?", answer: "Girar rotaciona uma página em passos de 90°. Inverter cria uma imagem espelhada, então o texto fica de trás para frente — que é o que você precisa para transferências e alguns trabalhos de impressão." },
      { question: "Posso inverter apenas uma página?", answer: "A inversão se aplica a todas as páginas. Para inverter uma única página, extraia-a primeiro com Extrair páginas do PDF." },
      { question: "A inversão reduz a qualidade?", answer: "Não. As páginas são transformadas, não renderizadas novamente, então texto e gráficos ficam tão nítidos quanto o original." },
      { question: "Meu PDF é enviado?", answer: "Não. A inversão acontece localmente no seu navegador." },
    ],
  },
  "edit-pdf-metadata": {
    name: "Editar metadados do PDF",
    actionLabel: "Editar metadados",
    shortDescription: "Altere o título, autor, assunto e palavras-chave de um PDF.",
    longDescription: [
      "Editar metadados do PDF permite ver e alterar as propriedades do documento armazenadas dentro de um PDF — título, autor, assunto, palavras-chave, criador e produtor. É isso que leitores de PDF, mecanismos de busca e gerenciadores de arquivos mostram sobre seu documento.",
      "Deixe um campo vazio para removê-lo. O conteúdo da página não é tocado, e toda a edição acontece no seu navegador, então seu arquivo nunca é enviado.",
    ],
    faq: [
      { question: "Por que editar metadados de PDF?", answer: "Um título e autor claros tornam os documentos mais fáceis de encontrar e mais profissionais ao compartilhar, e mecanismos de busca podem usá-los ao indexar PDFs." },
      { question: "Editar metadados vai mudar o conteúdo do documento?", answer: "Não. Apenas as propriedades do documento mudam; páginas, texto e imagens permanecem exatamente os mesmos." },
      { question: "Como removo uma propriedade?", answer: "Limpe o campo e salve. Campos vazios são removidos do arquivo." },
      { question: "Meu PDF é enviado?", answer: "Não. As propriedades são editadas localmente no seu navegador." },
    ],
  },
  "remove-pdf-metadata": {
    name: "Remover metadados do PDF",
    actionLabel: "Remover metadados",
    shortDescription: "Remova autor, título, software e outras propriedades ocultas de um PDF antes de compartilhá-lo.",
    longDescription: [
      "Remover metadados do PDF limpa as propriedades do documento e os dados ocultos que um PDF carrega — autor, título, assunto, palavras-chave, o software usado para criá-lo, datas de criação e pacotes de metadados XMP incorporados.",
      "É um passo rápido de privacidade antes de compartilhar um arquivo publicamente. O conteúdo da página fica intacto, e a limpeza acontece no seu navegador, então seu arquivo nunca é enviado.",
    ],
    faq: [
      { question: "Que informações são removidas?", answer: "Título, autor, assunto, palavras-chave, software de criação e produção, datas de criação e modificação, metadados XMP incorporados, e dados privados da aplicação." },
      { question: "Isso muda a aparência do documento?", answer: "Não. Apenas propriedades ocultas são removidas; cada página fica com exatamente a mesma aparência." },
      { question: "Isso remove informações pessoais impressas nas páginas?", answer: "Não. Remove apenas metadados. Nomes ou detalhes impressos nas páginas continuam visíveis." },
      { question: "Meu PDF é enviado?", answer: "Não. O arquivo é limpo localmente no seu navegador." },
    ],
  },
  "pdf-info": {
    name: "Informações do PDF",
    actionLabel: "Verificar PDF",
    shortDescription: "Veja rapidamente o número de páginas, tamanhos, versão e propriedades de um PDF.",
    longDescription: [
      "Informações do PDF lê um PDF e mostra o que há nele: o número de páginas, o tamanho de cada página em milímetros com nomes de papel como A4 ou Carta, a versão do PDF, se está criptografado ou contém um formulário preenchível, e seu título, autor, software e datas.",
      "Útil antes de imprimir, enviar ou converter um arquivo. O documento é apenas lido — nunca alterado — e tudo acontece no seu navegador, então nunca é enviado.",
    ],
    faq: [
      { question: "Quais detalhes as Informações do PDF mostram?", answer: "Número de páginas, tamanhos de página com nomes de papel, versão do PDF, tamanho do arquivo, criptografia, formulários preenchíveis, visualização web rápida, e propriedades do documento como título, autor e data de criação." },
      { question: "Informações do PDF alteram meu arquivo?", answer: "Não. O PDF é apenas lido; nada é modificado ou salvo." },
      { question: "Posso verificar um PDF protegido por senha?", answer: "Arquivos que precisam de senha para abrir não podem ser lidos sem ela. Arquivos com apenas restrições de edição são mostrados como criptografados." },
      { question: "Meu PDF é enviado?", answer: "Não. Ele é lido localmente no seu navegador." },
    ],
  },
  "resize-image": {
    name: "Redimensionar imagem",
    actionLabel: "Redimensionar imagens",
    shortDescription: "Altere a largura e a altura de imagens JPG, PNG e WEBP, por porcentagem ou pixels exatos.",
    longDescription: [
      "Redimensionar imagem altera as dimensões das suas fotos e gráficos. Escale por porcentagem, ou digite uma largura e altura exatas com a proporção travada para que nada pareça esticado. Redimensione várias imagens de uma vez e baixe-as juntas em um .zip.",
      "As imagens mantêm o formato original, e uma suavização de alta qualidade mantém as imagens reduzidas nítidas. Tudo funciona no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "O redimensionamento vai deixar minha imagem borrada?", answer: "Diminuir uma imagem a mantém nítida. Ampliá-la além do tamanho original não pode adicionar detalhes, então grandes aumentos podem parecer suaves." },
      { question: "Posso redimensionar várias imagens de uma vez?", answer: "Sim. Adicione até 20 imagens; com a proporção travada, cada uma mantém suas próprias proporções na largura que você definir." },
      { question: "Qual formato terá a imagem redimensionada?", answer: "O mesmo do original — JPG continua JPG, PNG continua PNG, e WEBP continua WEBP onde seu navegador suportar." },
      { question: "Minhas imagens são enviadas?", answer: "Não. O redimensionamento acontece localmente no seu navegador." },
    ],
  },
  "crop-image": {
    name: "Cortar imagem",
    actionLabel: "Cortar imagem",
    shortDescription: "Corte uma imagem na área desejada com uma moldura de corte arrastável.",
    longDescription: [
      "Cortar imagem remove bordas indesejadas de uma foto ou captura de tela. Arraste a moldura de corte ou seus cantos sobre a pré-visualização — ou ajuste cada borda com um controle deslizante — e veja o tamanho exato do resultado em pixels.",
      "A imagem cortada mantém seu formato e qualidade originais, e todo o processo acontece no seu navegador, então sua imagem nunca é enviada.",
    ],
    faq: [
      { question: "Posso cortar em dimensões exatas?", answer: "Ajuste cada borda com os controles deslizantes e veja o tamanho do resultado se atualizar em pixels conforme você avança." },
      { question: "O corte reduz a qualidade da imagem?", answer: "Não. Os pixels que você mantém são copiados como estão; apenas as partes fora da moldura são removidas." },
      { question: "Quais formatos posso cortar?", answer: "JPG, PNG e WEBP. O resultado mantém o mesmo formato do original." },
      { question: "Minha imagem é enviada?", answer: "Não. O corte acontece localmente no seu navegador." },
    ],
  },
  "flip-image": {
    name: "Inverter imagem",
    actionLabel: "Inverter imagens",
    shortDescription: "Espelhe imagens na horizontal ou na vertical — uma de cada vez ou em lote.",
    longDescription: [
      "Inverter imagem cria uma imagem espelhada das suas fotos: da esquerda para a direita, ou de cima para baixo. Útil para corrigir selfies tiradas com a câmera frontal, criar reflexos, ou preparar designs para transferências de impressão.",
      "Inverta várias imagens de uma vez, pré-visualize o resultado instantaneamente, e baixe-as no formato original. Tudo acontece no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "Qual a diferença entre inverter e girar?", answer: "Girar rotaciona uma imagem em passos de 90°. Inverter a espelha, como olhar em um espelho." },
      { question: "Posso inverter várias imagens de uma vez?", answer: "Sim. Adicione até 20 imagens e todas são invertidas da mesma forma, depois baixadas juntas como um .zip." },
      { question: "A inversão reduz a qualidade?", answer: "Sem perda perceptível — PNG continua sem perdas, e JPG e WEBP são salvos em alta qualidade." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A inversão acontece localmente no seu navegador." },
    ],
  },
  "png-to-jpg": {
    name: "PNG para JPG",
    actionLabel: "Converter para JPG",
    shortDescription: "Convert imagens PNG para JPG para torná-las menores e mais amplamente compatíveis.",
    longDescription: [
      "PNG para JPG converte suas imagens PNG em arquivos JPG, geralmente muito menores — ideal para fotos, anexos de e-mail e formulários de upload que só aceitam JPG. Converta várias imagens de uma vez e ajuste a qualidade para equilibrar tamanho e nitidez.",
      "JPG não suporta transparência, então áreas transparentes são preenchidas com branco. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "Por que converter PNG para JPG?", answer: "Arquivos JPG são tipicamente muito menores que PNGs para fotos e são aceitos em quase todo lugar, de e-mail a formulários online." },
      { question: "O que acontece com fundos transparentes?", answer: "JPG não tem transparência, então áreas transparentes são preenchidas com branco." },
      { question: "Posso converter muitos PNGs de uma vez?", answer: "Sim. Adicione até 30 imagens; elas são convertidas juntas e baixadas como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
  "jpg-to-png": {
    name: "JPG para PNG",
    actionLabel: "Converter para PNG",
    shortDescription: "Converta fotos JPG para imagens PNG sem perda de qualidade.",
    longDescription: [
      "JPG para PNG converte suas imagens JPG ou JPEG para o formato PNG. PNG é sem perdas, então a imagem não vai perder mais qualidade quando você editar e salvar novamente — útil para gráficos nos quais você continuará trabalhando, ou para ferramentas e plataformas que exigem PNG.",
      "Converta várias imagens de uma vez e baixe-as juntas. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "Converter JPG para PNG vai melhorar a qualidade?", answer: "Não — o detalhe já perdido no JPG não pode ser restaurado. Mas PNG evita qualquer perda adicional quando você edita e salva novamente." },
      { question: "Por que o PNG é maior que o JPG?", answer: "PNG armazena cada pixel sem compressão com perdas, então fotos geralmente ficam maiores. Essa é a troca pela qualidade sem perdas." },
      { question: "Posso converter vários JPGs de uma vez?", answer: "Sim. Adicione até 30 imagens e baixe-as como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
  "webp-to-jpg": {
    name: "WEBP para JPG",
    actionLabel: "Converter para JPG",
    shortDescription: "Converta imagens WEBP para JPG para que abram em qualquer app ou site.",
    longDescription: [
      "WEBP para JPG converte imagens WEBP modernas — comuns em sites — para JPG, o formato suportado por praticamente todo app, dispositivo e formulário de upload. Converta uma imagem ou várias de uma vez, e ajuste a qualidade para equilibrar tamanho e nitidez.",
      "Áreas transparentes são preenchidas com branco, já que JPG não suporta transparência. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "Por que converter WEBP para JPG?", answer: "Alguns apps, editores e formulários de upload mais antigos não aceitam WEBP. JPG funciona em quase todo lugar." },
      { question: "Vou perder qualidade?", answer: "Na qualidade padrão a diferença é difícil de notar. Aumente o controle de qualidade para o resultado mais nítido." },
      { question: "Posso converter várias imagens WEBP de uma vez?", answer: "Sim. Adicione até 30 imagens e baixe-as como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
  "jpg-to-webp": {
    name: "JPG para WEBP",
    actionLabel: "Converter para WEBP",
    shortDescription: "Converta fotos JPG para WEBP, gerando imagens menores e mais rápidas de carregar na web.",
    longDescription: [
      "JPG para WEBP converte suas imagens JPG para WEBP, um formato moderno que tipicamente produz arquivos notavelmente menores com qualidade visual semelhante — ótimo para acelerar sites e economizar armazenamento.",
      "Ajuste a qualidade para encontrar o equilíbrio certo e converta muitas imagens de uma vez. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas. Criar arquivos WEBP requer uma versão recente do Chrome, Edge ou Firefox.",
    ],
    faq: [
      { question: "WEBP é menor que JPG?", answer: "Geralmente sim — WEBP costuma economizar um espaço significativo com qualidade semelhante, o que ajuda as páginas a carregarem mais rápido." },
      { question: "Todos os navegadores suportam WEBP?", answer: "Todos os navegadores modernos podem exibir WEBP. Criar arquivos WEBP aqui requer uma versão recente do Chrome, Edge ou Firefox." },
      { question: "Posso converter vários JPGs de uma vez?", answer: "Sim. Adicione até 30 imagens e baixe-as como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
  "webp-to-png": {
    name: "WEBP para PNG",
    actionLabel: "Converter para PNG",
    shortDescription: "Converta imagens WEBP para PNG mantendo a transparência.",
    longDescription: [
      "WEBP para PNG converte imagens WEBP para PNG, o formato sem perdas suportado por todo editor de imagem. A transparência é preservada, então logotipos, ícones e recortes mantêm seus fundos transparentes.",
      "Converta várias imagens de uma vez e baixe-as juntas. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas.",
    ],
    faq: [
      { question: "A transparência é mantida?", answer: "Sim. PNG suporta transparência, então áreas transparentes na sua imagem WEBP permanecem transparentes." },
      { question: "Por que converter WEBP para PNG?", answer: "PNG abre em todo editor e ferramenta de design e não vai perder qualidade quando você editar e salvar novamente." },
      { question: "Posso converter vários arquivos WEBP de uma vez?", answer: "Sim. Adicione até 30 imagens e baixe-as como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
  "png-to-webp": {
    name: "PNG para WEBP",
    actionLabel: "Converter para WEBP",
    shortDescription: "Converta imagens PNG para WEBP, gerando arquivos menores que mantêm a transparência.",
    longDescription: [
      "PNG para WEBP converte suas imagens PNG para WEBP, o que geralmente torna os arquivos muito menores mantendo a transparência — ideal para gráficos de sites, ícones e capturas de tela.",
      "Escolha a qualidade, converta muitas imagens de uma vez, e baixe-as juntas. A conversão acontece inteiramente no seu navegador, então suas imagens nunca são enviadas. Criar arquivos WEBP requer uma versão recente do Chrome, Edge ou Firefox.",
    ],
    faq: [
      { question: "WEBP mantém a transparência?", answer: "Sim. WEBP suporta transparência, então áreas transparentes do PNG permanecem transparentes." },
      { question: "Quanto minhas imagens vão reduzir?", answer: "Varia, mas arquivos WEBP costumam ser significativamente menores que a mesma imagem salva como PNG." },
      { question: "Posso converter vários PNGs de uma vez?", answer: "Sim. Adicione até 30 imagens e baixe-as como um .zip." },
      { question: "Minhas imagens são enviadas?", answer: "Não. A conversão acontece localmente no seu navegador." },
    ],
  },
};
