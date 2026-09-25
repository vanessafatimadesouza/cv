// Gera páginas HTML estáticas: o conteúdo principal não depende de JavaScript.
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const base = 'https://vanessafatimadesouza.github.io/cv/';
const img = (file, alt, caption = '') => `<figure class="case-shot"><a href="../../${file}" target="_blank" rel="noopener" aria-label="Abrir imagem em tamanho original: ${alt}"><img src="../../${file}" alt="${alt}" loading="lazy"></a>${caption ? `<figcaption>${caption} <span aria-hidden="true">↗</span></figcaption>` : ''}</figure>`;
const block = (label, title, body) => `<section class="story-block"><div><span class="section-index">${label}</span><h2>${title}</h2></div><div class="story-block__content">${body}</div></section>`;
const list = items => `<ul class="case-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;

const cases = {
  ima: {
    title: 'SIDAGRO / IMA',
    description: 'Case de Product Design, UX Research e Design System para o sistema de defesa agropecuária do IMA.',
    tag: '01 / SISTEMA GOVERNAMENTAL',
    lead: 'Clareza para um sistema de defesa agropecuária de alta complexidade.',
    role: 'Product Design · UX Research · Design System',
    cover: 'ima-cover-art.png',
    coverAlt: 'Composição visual do SIDAGRO para o IMA',
    theme: 'government',
    intro: 'O SIDAGRO é um sistema governamental ligado à defesa agropecuária de Minas Gerais. Fluxos extensos, diferentes perfis e regras de negócio exigem uma interface consistente e compreensível.',
    content: [
      block('01 / ATUAÇÃO', 'Do contexto ao sistema.', `<p>Minha atuação conectou pesquisa, análise de requisitos, definição de fluxos, prototipação e Design System. Também acompanhei a implementação e usei protótipos funcionais para explorar fluxos complexos.</p>${list(['45+ componentes no Design System.', 'Avaliação heurística do sistema legado e da versão redesenhada.', 'Exploração técnica com TypeScript, Node e React.'])}`),
      img('sidagro-mock.png', 'Interface do Cadastro Agropecuário SIDAGRO', 'Interface do sistema em contexto.'),
      block('02 / EVIDÊNCIA', 'Avaliação entre versões.', '<p>Um estudo publicado comparou duas avaliações heurísticas do SIDAGRO: uma do sistema legado e outra da versão redesenhada. A segunda identificou 43% menos problemas de usabilidade no total. É um resultado da comparação entre versões do sistema, não uma medida isolada de causalidade do design.</p><p><a class="text-link" href="https://link.springer.com/chapter/10.1007/978-3-032-05008-3_12" target="_blank" rel="noreferrer">Ler estudo publicado ↗</a></p>'),
      img('conexoes-sidagro.png', 'Visualização anonimizada de conexões entre fluxos do SIDAGRO', 'Visualização anonimizada de relações entre fluxos e telas.')
    ]
  },
  fundecc: {
    title: 'FUNDECC — sistemas e pesquisa',
    description: 'Atuação de Vanessa Souza em Product Discovery, UX Research, Design Systems, acessibilidade e liderança em projetos da FUNDECC.',
    tag: '02 / ATUAÇÃO PROFISSIONAL',
    lead: 'Pesquisa, design e engenharia em sistemas do agronegócio.',
    role: 'Product Discovery · UX Research · Liderança UX/UI',
    cover: '',
    theme: 'fundecc',
    intro: 'Minha atuação na FUNDECC reúne projetos governamentais estaduais ligados ao agronegócio e avaliações especializadas em sistemas institucionais. O trabalho parte de necessidades e regras de negócio, atravessa a prototipação e segue até a validação e o acompanhamento da implementação.',
    content: [
      block('01 / PROJETOS', 'Problemas diferentes, método conectado.', `<div class="case-project-list"><article><h3>AgroDigital</h3><p>Projeto do conjunto de sistemas governamentais estaduais ligados ao agronegócio.</p></article><article><h3>SAF — Sistema de Apoio ao Fiscal</h3><p>Apoio a atividades fiscais e ao controle de processos de emergência zoossanitária.</p></article><article><h3>AFI — Assistente Fiscal Inteligente</h3><p>Assistente apresentado na área de emergências sanitárias do SAF.</p></article></div>`),
      `<div class="case-image-pair">${img('fundecc-saf-emergencias.png', 'Tela do SAF com cartões de emergências sanitárias e acesso ao AFI', 'SAF: visão de emergências sanitárias.')}${img('fundecc-afi-inicio.png', 'Tela inicial do AFI com sugestões de perguntas', 'AFI: entrada do assistente fiscal.')}</div>`,
      img('fundecc-afi-conversa.png', 'Tela de conversa do AFI com pergunta e resposta sobre uma emergência zoossanitária', 'AFI: exemplo de conversa na interface.'),
      block('02 / ATUAÇÃO', 'Da descoberta à implementação.', `<p>Product Discovery, levantamento e refinamento de requisitos, UX Research, fluxos, prototipação de alta fidelidade, Design Systems, avaliações heurísticas, acessibilidade, validação com stakeholders, acompanhamento da implementação e liderança de UX/UI.</p><p>Também atuei em avaliação heurística e estrutural de sistemas institucionais e de projetos sobre reconhecimento e monitoramento de bovinos em cochos, incluindo a análise da relação entre comportamento alimentar e produção leiteira.</p>`),
      block('03 / ESCALA', 'Experiência observável.', `<div class="case-facts"><div><strong>120+</strong><span>módulos projetados e evoluídos</span></div><div><strong>30+</strong><span>interações de pesquisa, descoberta e validação com usuários e clientes</span></div><div><strong>5</strong><span>profissionais de UX/UI sob minha liderança</span></div><div><strong>7</strong><span>projetos além do Figma, com protótipos funcionais ou desenvolvimento</span></div></div><p class="case-caveat">Fluxo de prototipação rápida associado a aproximadamente 2x mais telas produzidas por sprint.</p>`)
    ]
  },
  alumni: {
    title: 'Site Alumni ESAL-UFLA',
    description: 'Case do site Alumni ESAL-UFLA: arquitetura de informação, comunidade e comunicação de contribuições à universidade.',
    tag: '06 / EDUCAÇÃO E COMUNIDADE',
    lead: 'Uma experiência digital para aproximar ex-alunos da universidade.',
    role: 'UX/UI Design · Arquitetura de informação',
    cover: 'alumni-cover-art.png',
    coverAlt: 'Composição visual do site Alumni ESAL-UFLA',
    theme: 'alumni',
    intro: 'A plataforma institucional apresenta a comunidade Alumni, organiza informações sobre cursos e mostra caminhos para contribuir com projetos educacionais da ESAL-UFLA.',
    content: [
      block('01 / DESAFIO', 'Vínculo, informação e ação.', '<p>O site precisa acolher ex-alunos de diferentes gerações e tornar fácil encontrar conteúdos institucionais, histórias e possibilidades de contribuição. Organizei esses caminhos em uma arquitetura de informação clara.</p>'),
      img('alumni-tela-1.png', 'Página inicial do site Alumni ESAL-UFLA', 'Página inicial da plataforma Alumni.'),
      block('02 / CONTEXTO', 'Escala da associação.', '<p>O ecossistema da associação mobilizou mais de R$ 2 milhões. Esse é um dado de contexto da organização, não um resultado atribuído ao design deste site.</p>'),
      img('alumni-tela-3.png', 'Seção de bolsas e pesquisa do site Alumni ESAL-UFLA', 'Frentes de contribuição apresentadas na interface.')
    ]
  },
  'art-screen': {
    title: 'Art Screen — Galeria Digital',
    description: 'Design e desenvolvimento front-end de uma galeria digital funcional integrada à Met Collection API.',
    tag: '07 / DESIGN ENGINEERING',
    lead: 'Da concepção à aplicação funcional para contemplar arte.',
    role: 'Concepção · UI · Front-end · Integração com API',
    cover: 'art-screen-cover-art.png',
    coverAlt: 'Interface da galeria digital Art Screen',
    theme: 'art',
    intro: 'O Art Screen transforma uma tela, especialmente um segundo monitor, em uma galeria digital pessoal. A pessoa escolhe uma atmosfera e deixa a obra ocupar a tela com controles discretos.',
    content: [
      block('01 / PRODUTO', 'Uma pausa intencional.', '<p>A experiência reduz estímulos visuais para manter a atenção nas obras. Curadoria, interface e transições foram pensadas como partes do mesmo fluxo.</p>'),
      img('art-screen-experience.png', 'Art Screen exibindo uma obra em modo de contemplação', 'Experiência em modo de contemplação.'),
      block('02 / DESIGN E CÓDIGO', 'O projeto foi além do Figma.', '<p>Concebi a experiência, desenhei a UI e desenvolvi o front-end em HTML, CSS e JavaScript. A integração com a Collection API do Metropolitan Museum of Art fornece obras Open Access para a aplicação funcional.</p><div class="case-links"><a class="text-link" href="https://vanessafatimadesouza.github.io/art-screen/" target="_blank" rel="noreferrer">Abrir experiência ↗</a><a class="text-link" href="https://github.com/vanessafatimadesouza/art-screen" target="_blank" rel="noreferrer">Ver código ↗</a></div>')
    ]
  },
  eco: {
    title: 'Eco — Créditos de Carbono',
    description: 'Case de Product Design para marketplace de créditos de carbono com simulação, relatórios e gestão.',
    tag: '03 / PLATAFORMA',
    lead: 'Transparência para conectar preservação e mercado.',
    role: 'Product Design · Web B2B',
    cover: 'eco-cover-art.png',
    coverAlt: 'Composição de floresta e dados da plataforma Eco',
    theme: 'eco',
    intro: 'A Eco organiza a negociação de créditos de carbono em uma experiência que aproxima empresas, projetos e informações de mercado.',
    content: [
      block('01 / JORNADA', 'Do impacto à ação.', '<p>A plataforma apresenta a proposta, explica as etapas da negociação e oferece caminhos para simulação e consulta de créditos. O foco do design é tornar informações complexas legíveis para quem compra, vende ou acompanha operações.</p>'),
      img('eco-tela-1.png', 'Página inicial da plataforma Eco', 'Apresentação da plataforma Eco.'),
      block('02 / INTERFACE', 'Informação para decidir.', '<p>As telas de gestão reúnem créditos, relatórios e transações. Os indicadores exibidos nas capturas pertencem à interface do projeto; não são apresentados aqui como impacto comprovado do design.</p>'),
      img('eco-tela-4.png', 'Painel de gestão de créditos da plataforma Eco', 'Painel de gestão e acompanhamento.')
    ]
  },
  manejo: {
    title: 'Manejo — Gestão de Rebanho',
    description: 'Case de Product Design e front-end de plataforma web para acompanhar animais, sanidade e rotina de fazendas.',
    tag: '04 / PRODUTO FUNCIONAL',
    lead: 'Dados e próximos cuidados em uma rotina rural mais clara.',
    role: 'Product Design · Front-end',
    cover: 'manejo-cover-art.png',
    coverAlt: 'Rebanho na composição visual do Manejo',
    theme: 'manejo',
    intro: 'Manejo é uma plataforma web que reúne cadastro de animais, sanidade, reprodução, partos e eventos em uma experiência voltada à rotina da fazenda.',
    content: [
      block('01 / PRODUTO', 'O próximo cuidado em contexto.', '<p>A visão geral aproxima indicadores do plantel, próximos vencimentos e ações frequentes. A busca e os filtros levam do panorama à ficha de cada animal.</p>'),
      img('manejo-painel.png', 'Painel do Manejo com visão do rebanho e próximos cuidados', 'Visão geral do rebanho.'),
      block('02 / DESIGN E CÓDIGO', 'Interface funcional.', '<p>O trabalho conecta desenho de fluxos e implementação de uma interface funcional em React e Supabase, com adaptação para celular.</p>'),
      img('manejo-mobile-painel.png', 'Painel do Manejo adaptado para celular', 'Painel adaptado para celular.')
    ]
  },
  'hive-mind': {
    title: 'Hive Mind — Gestão Pessoal',
    description: 'Case de sistema pessoal em Obsidian que conecta planejamento, projetos, conhecimento e cultura.',
    tag: '05 / SISTEMA PESSOAL',
    lead: 'Um lugar para conectar o que faço, aprendo e descubro.',
    role: 'Product Design · Obsidian · JavaScript',
    cover: 'hive-mind-cover-art.png',
    coverAlt: 'Esfera luminosa da identidade visual do Hive Mind',
    theme: 'hive',
    intro: 'O Hive Mind reúne planejamento, tarefas, projetos, conhecimento e cultura em um espaço pessoal construído no Obsidian.',
    content: [
      block('01 / SISTEMA', 'Rotina e conhecimento no mesmo espaço.', '<p>O painel inicial aproxima tarefas, calendário e atalhos. Nos espaços de conhecimento, leituras e projetos mantêm contexto para continuar pesquisas e estudos.</p>'),
      img('hive-mind-dashboard.png', 'Painel inicial do Hive Mind com calendário e tarefas', 'Painel inicial do sistema pessoal.'),
      block('02 / CONHECIMENTO', 'Relações visíveis.', '<p>O mapa de conhecimento oferece uma visão das relações entre temas e leituras. Ao selecionar um assunto, um painel mostra contexto e referências relacionadas.</p>'),
      `<div class="case-image-pair">${img('hive-mind-mapa-conhecimento.png', 'Mapa de conhecimento com esfera central e conexões entre temas', 'Visão geral do mapa.')}${img('hive-mind-mapa-detalhe.png', 'Mapa com painel lateral sobre Interação Humano-Computador', 'Detalhe de um tema selecionado.')}</div>`
    ]
  }
};

for (const [slug, item] of Object.entries(cases)) {
  const canonical = `${base}cases/${slug}/`;
  const ogImage = `${base}${item.cover || 'vanessa-hero.jpg'}`;
  const cover = item.cover
    ? `<div class="static-cover__media"><img src="../../${item.cover}" alt="${item.coverAlt}"></div>`
    : '<div class="static-cover__media static-cover__media--type" aria-hidden="true"><span>FUNDECC<small>AGRODIGITAL · SAF · AFI</small></span></div>';
  const html = `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="${item.description}">
  <meta property="og:type" content="article">
  <meta property="og:title" content="${item.title} — Vanessa Souza">
  <meta property="og:description" content="${item.description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${ogImage}">
  <link rel="canonical" href="${canonical}">
  <title>${item.title} — Vanessa Souza | Product Designer</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&family=Manrope:wght@400;500;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="../../styles.css">
  <link rel="stylesheet" href="../../case-static.css">
</head>
<body class="static-case static-case--${item.theme}">
  <header class="nav-shell"><a class="logo" href="../../index.html#inicio" aria-label="Vanessa Souza, voltar ao início">VS<span>°</span></a><nav aria-label="Navegação principal"><a href="../../index.html#sobre">Sobre</a><a href="../../index.html#projetos">Projetos</a><a href="../../index.html#pesquisas">Pesquisas</a><a href="../../index.html#contato">Contato</a></nav><a class="nav-cta" href="mailto:vanessafatima.desouza@gmail.com">Vamos conversar <span aria-hidden="true">↗</span></a></header>
  <main>
    <header class="static-cover">
      <div class="static-cover__inner"><a class="static-cover__back" href="../../index.html#projetos">← Todos os projetos</a><div class="static-cover__grid"><div><span class="static-cover__tag">${item.tag}</span><h1>${item.title}</h1><p class="static-cover__lead">${item.lead}</p><p class="static-cover__role">${item.role}</p></div>${cover}</div></div>
    </header>
    <div class="case-story"><p class="case-story__intro">${item.intro}</p>${item.content.join('\n')}${item.theme === 'fundecc' ? '' : '<div class="case-story__next"><a href="../fundecc/">Conhecer minha atuação na FUNDECC ↗</a></div>'}</div>
  </main>
  <footer class="static-footer"><a href="../../index.html#projetos">← Todos os projetos</a><a href="../../index.html#contato">Vamos conversar ↗</a><span>© 2026 Vanessa Souza</span></footer>
</body>
</html>
`;
  const directory = path.join(root, 'cases', slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}
