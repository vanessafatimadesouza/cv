// Gera páginas HTML estáticas: o conteúdo principal não depende de JavaScript.
const fs = require('node:fs');
const path = require('node:path');

const root = __dirname;
const base = 'https://vanessafatimadesouza.github.io/cv/';
const img = (file, alt, caption = '') => `<figure class="case-shot"><a href="../../${file}" target="_blank" rel="noopener" aria-label="Abrir imagem em tamanho original: ${alt}"><img src="../../${file}" alt="${alt}" loading="lazy"></a>${caption ? `<figcaption>${caption} <span aria-hidden="true">↗</span></figcaption>` : ''}</figure>`;
const block = (label, title, body) => `<section class="story-block"><div><span class="section-index">${label}</span><h2>${title}</h2></div><div class="story-block__content">${body}</div></section>`;
const list = items => `<ul class="case-list">${items.map(item => `<li>${item}</li>`).join('')}</ul>`;
const facts = items => `<dl class="case-overview">${items.map(([label, value]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;

const cases = {
  psiu: {
    title: 'Psiu',
    description: 'Protótipo de uma experiência para organizar conversas, prioridades e pendências em um só lugar.',
    tag: 'PRODUTO AUTORAL · PROTÓTIPO',
    lead: 'Mais clareza para o que pede sua atenção.',
    role: 'Product Design · UX/UI · Front-end',
    cover: 'psiu-inicio.png',
    coverAlt: 'Tela inicial do protótipo Psiu com radar de prioridades e pendências',
    theme: 'psiu',
    intro: 'O Psiu reúne mensagens e pendências para ajudar você a perceber prioridades, recuperar o contexto e decidir o próximo passo.',
    overview: [['Desafio', 'Organizar informações e pendências que chegam por canais diferentes.'], ['Experiência', 'Prioridades, conversas e assistência em uma jornada integrada.'], ['Minha atuação', 'Concepção de produto, design de interface e desenvolvimento do protótipo.']],
    content: [

      `<section class="psiu-radar"><div class="psiu-radar__intro"><span>01 / PRIORIDADES</span><h2>Prioridades para<br>começar bem.</h2><p>O radar aproxima do centro as conversas que pedem mais atenção. Ao lado, a próxima conversa e as pendências ajudam a decidir por onde começar.</p></div><figure class="psiu-radar__screen"><img src="../../psiu-inicio.png" alt="Página inicial do Psiu com radar de prioridades e pendências"><figcaption>Visão inicial · protótipo desktop</figcaption></figure></section>`,
      block('02 / CONVERSAS E ASSISTENTE', 'Encontrar contexto sem trocar de lugar.', '<p>O protótipo apresenta uma área de conversas e uma proposta de assistente para localizar informações, pedir resumos e apoiar a organização. São demonstrados três ambientes, quatro fontes e seis conversas de exemplo.</p>'),
      `<figure class="psiu-laptop-visual"><img src="../../psiu-notebooks-ia.png" alt="Composição ilustrativa de dois notebooks mostrando conversas e assistente do Psiu"><figcaption>Conversas e assistente em uma mesma experiência. <a href="../../psiu-conversas.png" target="_blank" rel="noopener">Ver tela de conversas ↗</a> <a href="../../psiu-assistente.png" target="_blank" rel="noopener">Ver tela do assistente ↗</a></figcaption></figure>`,
      block('03 / EXPERIÊNCIA', 'Mais contexto, menos esforço.', '<p>O Psiu aproxima conversas, prioridades e pendências em uma experiência pensada para ajudar a pessoa a decidir o próximo passo com mais clareza.</p><p>Busca, filtros e navegação conectam os assuntos ao seu contexto. O assistente propõe uma forma direta de encontrar informações e retomar conversas em linguagem natural.</p><p>Desenvolvido com HTML, CSS e JavaScript, o protótipo explora essas jornadas em telas adaptadas para desktop e celular.</p>'),
      `<section class="psiu-mobile-showcase"><div class="psiu-mobile-copy"><span class="section-index">04 / EXPERIÊNCIA MOBILE</span><h2>Clareza que acompanha sua rotina.</h2><p>O radar de prioridades, as conversas e o assistente ganham uma organização adaptada para o celular.</p></div><div class="psiu-mobile-devices"><div class="psiu-device psiu-device--one" role="img" aria-label="Radar de prioridades no celular" tabindex="0"></div><div class="psiu-device psiu-device--two" role="img" aria-label="Conversas no celular" tabindex="0"></div><div class="psiu-device psiu-device--three" role="img" aria-label="Assistente no celular" tabindex="0"></div></div></section>`
    ]
  },
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
    overview: [['Desafio', 'Dar clareza a fluxos e regras de negócio de um sistema público complexo.'], ['Minha contribuição', 'Pesquisa, requisitos, fluxos, prototipação e Design System.'], ['Evidência', '45+ componentes e duas avaliações heurísticas entre versões do sistema.']],
    content: [
      block('01 / DECISÕES', 'Do contexto ao sistema.', `<p>Conectei pesquisa e requisitos ao desenho de fluxos e componentes reutilizáveis. Usei protótipos funcionais para explorar caminhos complexos e acompanhei a implementação.</p>${list(['45+ componentes no Design System.', 'Avaliação heurística do sistema legado e da versão redesenhada.', 'Exploração técnica com TypeScript, Node e React.'])}`),
      img('sidagro-mock.png', 'Interface do Cadastro Agropecuário SIDAGRO', 'Interface do sistema em contexto.'),
      block('02 / EVIDÊNCIA', 'Avaliação entre versões.', '<p>Um estudo publicado comparou duas avaliações heurísticas do SIDAGRO: uma do sistema legado e outra da versão redesenhada. A segunda identificou 43% menos problemas de usabilidade no total. É um resultado da comparação entre versões do sistema, não uma medida isolada de causalidade do design.</p><p><a class="text-link" href="https://link.springer.com/chapter/10.1007/978-3-032-05008-3_12" target="_blank" rel="noreferrer">Ler estudo publicado ↗</a></p>'),
      img('conexoes-sidagro.png', 'Visualização anonimizada de conexões entre fluxos do SIDAGRO', 'Visualização anonimizada de relações entre fluxos e telas.')
    ]
  },
  alumni: {
    title: 'Site Alumni ESAL-UFLA',
    description: 'Case do site Alumni ESAL-UFLA: arquitetura de informação, comunidade e comunicação de contribuições à universidade.',
    tag: '05 / EDUCAÇÃO E COMUNIDADE',
    lead: 'Uma experiência digital para aproximar ex-alunos da universidade.',
    role: 'UX/UI Design · Arquitetura de informação',
    cover: 'alumni-cover-art.png',
    coverAlt: 'Composição visual do site Alumni ESAL-UFLA',
    theme: 'alumni',
    intro: 'A plataforma institucional apresenta a comunidade Alumni, organiza informações sobre cursos e mostra caminhos para contribuir com projetos educacionais da ESAL-UFLA.',
    overview: [['Desafio', 'Ajudar públicos de diferentes gerações a encontrar conteúdo e formas de participar.'], ['Minha contribuição', 'Arquitetura de informação e desenho da interface.'], ['Limite da evidência', 'O valor mobilizado é dado da associação, sem atribuição ao design do site.']],
    content: [
      block('01 / DECISÃO', 'Vínculo, informação e ação.', '<p>Organizei histórias, conteúdos institucionais e possibilidades de contribuição em caminhos distintos para facilitar a orientação de ex-alunos.</p>'),
      img('alumni-tela-1.png', 'Página inicial do site Alumni ESAL-UFLA', 'Página inicial da plataforma Alumni.'),
      block('02 / CONTEXTO', 'Escala da associação.', '<p>O ecossistema da associação mobilizou mais de R$ 2 milhões. Esse é um dado de contexto da organização, não um resultado atribuído ao design deste site.</p>'),
      img('alumni-tela-3.png', 'Seção de bolsas e pesquisa do site Alumni ESAL-UFLA', 'Frentes de contribuição apresentadas na interface.')
    ]
  },
  'art-screen': {
    title: 'Art Screen — Galeria Digital',
    description: 'Design e desenvolvimento front-end de uma galeria digital funcional integrada à Met Collection API.',
    tag: '06 / DESIGN ENGINEERING',
    lead: 'Da concepção à aplicação funcional para contemplar arte.',
    role: 'Concepção · UI · Front-end · Integração com API',
    cover: 'art-screen-cover-art.png',
    coverAlt: 'Interface da galeria digital Art Screen',
    theme: 'art',
    intro: 'O Art Screen transforma uma tela, especialmente um segundo monitor, em uma galeria digital pessoal. A pessoa escolhe uma atmosfera e deixa a obra ocupar a tela com controles discretos.',
    overview: [['Desafio', 'Criar uma experiência de contemplação com pouca interferência da interface.'], ['Minha contribuição', 'Concepção, UI, front-end e integração com a API.'], ['Entrega', 'Aplicação funcional publicada com obras Open Access do Met.']],
    content: [
      block('01 / DECISÃO', 'Uma pausa intencional.', '<p>Reduzi os controles visíveis durante a contemplação para manter a atenção nas obras. Curadoria, interface e transições formam um fluxo contínuo.</p>'),
      img('art-screen-experience.png', 'Art Screen exibindo uma obra em modo de contemplação', 'Experiência em modo de contemplação.'),
      block('02 / DESIGN E CÓDIGO', 'O projeto foi além do Figma.', '<p>Concebi a experiência, desenhei a UI e desenvolvi o front-end em HTML, CSS e JavaScript. A integração com a Collection API do Metropolitan Museum of Art fornece obras Open Access para a aplicação funcional.</p><div class="case-links"><a class="text-link" href="https://vanessafatimadesouza.github.io/art-screen/" target="_blank" rel="noreferrer">Abrir experiência ↗</a><a class="text-link" href="https://github.com/vanessafatimadesouza/art-screen" target="_blank" rel="noreferrer">Ver código ↗</a></div>')
    ]
  },
  eco: {
    title: 'Eco — Créditos de Carbono',
    description: 'Case de Product Design para marketplace de créditos de carbono com simulação, relatórios e gestão.',
    tag: '02 / PLATAFORMA',
    lead: 'Transparência para conectar preservação e mercado.',
    role: 'Product Design · Web B2B',
    cover: 'eco-cover-art.png',
    coverAlt: 'Composição de floresta e dados da plataforma Eco',
    theme: 'eco',
    intro: 'A Eco organiza a negociação de créditos de carbono em uma experiência que aproxima empresas, projetos e informações de mercado.',
    overview: [['Desafio', 'Tornar etapas e dados de créditos de carbono compreensíveis.'], ['Minha contribuição', 'Jornada de consulta, simulação e gestão da plataforma.'], ['Limite da evidência', 'As métricas mostradas nas telas são dados da interface, sem impacto validado.']],
    content: [
      block('01 / DECISÃO', 'Do impacto à ação.', '<p>Organizei a jornada em apresentação, negociação, simulação e consulta. Assim, compradores e vendedores encontram as informações necessárias em cada etapa.</p>'),
      img('eco-tela-1.png', 'Página inicial da plataforma Eco', 'Apresentação da plataforma Eco.'),
      block('02 / INTERFACE', 'Informação para decidir.', '<p>As telas de gestão reúnem créditos, relatórios e transações. Os indicadores exibidos nas capturas pertencem à interface do projeto; não são apresentados aqui como impacto comprovado do design.</p>'),
      img('eco-tela-4.png', 'Painel de gestão de créditos da plataforma Eco', 'Painel de gestão e acompanhamento.')
    ]
  },
  manejo: {
    title: 'Manejo — Gestão de Rebanho',
    description: 'Case de Product Design e front-end de plataforma web para acompanhar animais, sanidade e rotina de fazendas.',
    tag: '03 / PRODUTO FUNCIONAL',
    lead: 'Dados e próximos cuidados em uma rotina rural mais clara.',
    role: 'Product Design · Front-end',
    cover: 'manejo-cover-art.png',
    coverAlt: 'Rebanho na composição visual do Manejo',
    theme: 'manejo',
    intro: 'Manejo é uma plataforma web que reúne cadastro de animais, sanidade, reprodução, partos e eventos em uma experiência voltada à rotina da fazenda.',
    overview: [['Desafio', 'Conectar dados do rebanho às próximas ações da rotina rural.'], ['Minha contribuição', 'Fluxos, interface e implementação front-end.'], ['Entrega', 'Interface funcional em React e Supabase, adaptada para celular.']],
    content: [
      block('01 / DECISÃO', 'O próximo cuidado em contexto.', '<p>Aproximei indicadores do plantel, vencimentos e ações frequentes na visão geral. Busca e filtros levam do panorama à ficha de cada animal.</p>'),
      img('manejo-painel.png', 'Painel do Manejo com visão do rebanho e próximos cuidados', 'Visão geral do rebanho.'),
      block('02 / DESIGN E CÓDIGO', 'Interface funcional.', '<p>O trabalho conecta desenho de fluxos e implementação de uma interface funcional em React e Supabase, com adaptação para celular.</p>'),
      img('manejo-mobile-painel.png', 'Painel do Manejo adaptado para celular', 'Painel adaptado para celular.')
    ]
  },
  'hive-mind': {
    title: 'Hive Mind — Gestão Pessoal',
    description: 'Case de sistema pessoal em Obsidian que conecta planejamento, projetos, conhecimento e cultura.',
    tag: '04 / SISTEMA PESSOAL',
    lead: 'Um lugar para conectar o que faço, aprendo e descubro.',
    role: 'Product Design · Obsidian · JavaScript',
    cover: 'hive-mind-cover-art.png',
    coverAlt: 'Esfera luminosa da identidade visual do Hive Mind',
    theme: 'hive',
    intro: 'O Hive Mind reúne planejamento, tarefas, projetos, conhecimento e cultura em um espaço pessoal construído no Obsidian.',
    overview: [['Desafio', 'Manter tarefas, projetos e leituras conectados no mesmo espaço.'], ['Minha contribuição', 'Concepção do sistema e implementação em Obsidian e JavaScript.'], ['Entrega', 'Painel de rotina e mapa de relações entre temas e referências.']],
    content: [
      block('01 / DECISÃO', 'Rotina e conhecimento no mesmo espaço.', '<p>Reuni tarefas, calendário e atalhos no painel inicial; leituras e projetos preservam o contexto para retomar pesquisas e estudos.</p>'),
      img('hive-mind-dashboard.png', 'Painel inicial do Hive Mind com calendário e tarefas', 'Painel inicial do sistema pessoal.'),
      block('02 / CONHECIMENTO', 'Relações visíveis.', '<p>O mapa de conhecimento oferece uma visão das relações entre temas e leituras. Ao selecionar um assunto, um painel mostra contexto e referências relacionadas.</p>'),
      `<div class="case-image-pair">${img('hive-mind-mapa-conhecimento.png', 'Mapa de conhecimento com esfera central e conexões entre temas', 'Visão geral do mapa.')}${img('hive-mind-mapa-detalhe.png', 'Mapa com painel lateral sobre Interação Humano-Computador', 'Detalhe de um tema selecionado.')}</div>`
    ]
  }
};

for (const [slug, item] of Object.entries(cases)) {
  if (['ima', 'alumni', 'eco', 'manejo', 'hive-mind', 'art-screen'].includes(slug)) {
    const legacy = fs.readFileSync(path.join(root, 'legacy-case.html'), 'utf8')
      .replace('<head>', '<head>\n  <base href="../../">')
      .replace("const project = new URLSearchParams(location.search).get('project') || 'ima';", `const project = '${slug}';`);
    const target = path.join(root, 'cases', slug);
    fs.mkdirSync(target, { recursive: true });
    fs.writeFileSync(path.join(target, 'index.html'), legacy);
    continue;
  }

  const canonical = `${base}cases/${slug}/`;
  const ogImage = `${base}${item.cover}`;
  const coverStem = item.cover.replace(/\.png$/, '');
  const cover = fs.existsSync(path.join(root, `${coverStem}-1400.webp`)) ? `<div class="static-cover__media"><img src="../../${coverStem}-1400.webp" srcset="../../${coverStem}-700.webp 700w, ../../${coverStem}-1400.webp 1400w" sizes="(max-width: 800px) 100vw, 50vw" width="1672" height="941" alt="${item.coverAlt}"></div>` : `<div class="static-cover__media"><img src="../../${item.cover}" alt="${item.coverAlt}"></div>`;
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
  <link rel="stylesheet" href="../../case-static.css?v=psiu-25">
  <link rel="stylesheet" href="../../mobile-navigation.css">
</head>
<body class="static-case static-case--${item.theme}">
  <header class="nav-shell"><a class="logo" href="../../index.html#inicio" aria-label="Vanessa Souza, voltar ao início">VS<span>°</span></a><nav aria-label="Navegação principal"><a href="../../index.html#sobre">Sobre</a><a href="../../index.html#projetos">Projetos</a><a href="../../index.html#pesquisas">Pesquisas</a><a href="../../index.html#contato">Contato</a></nav><a class="nav-cta" href="mailto:vanessafatima.desouza@gmail.com">Vamos conversar <span aria-hidden="true">↗</span></a></header>
  <main>
    ${slug === 'psiu' ? `<header class="psiu-cover"><div class="psiu-cover__inner"><a href="../../index.html#projetos" class="psiu-cover__back">← Todos os projetos</a><span class="psiu-cover__number">07 / PRODUTO AUTORAL</span><div class="psiu-cover__grid"><div><h1>psiu<span>.</span></h1><p class="psiu-cover__lead">“Mais clareza para o que pede sua atenção.”</p><div class="psiu-cover__meta"><div><span>TIPO</span><b>Product Design</b></div><div><span>FOCO</span><b>Conversas e prioridades</b></div><div><span>TECNOLOGIA</span><b>HTML · CSS · JavaScript</b></div></div></div><div class="psiu-cover__media"><img src="../../psiu-inicio.png" alt="Página inicial do Psiu com radar de prioridades e pendências"></div></div></div></header><div class="psiu-marquee" aria-label="Temas do projeto">CONVERSAS · PRIORIDADES · CONTEXTO · ASSISTENTE · ORGANIZAÇÃO · PSIu · CONVERSAS · PRIORIDADES · CONTEXTO · ASSISTENTE</div>` : `<header class="static-cover"><div class="static-cover__inner"><a class="static-cover__back" href="../../index.html#projetos">← Todos os projetos</a><div class="static-cover__grid"><div><span class="static-cover__tag">${item.tag}</span><h1>${item.title}</h1><p class="static-cover__lead">${item.lead}</p><p class="static-cover__role">${item.role}</p></div>${cover}</div></div></header>`}
    <div class="case-story">${slug === 'psiu' ? `<section class="psiu-intro"><div><span class="psiu-intro__label">SOBRE O PROJETO</span><h2>Conversas dispersas.<br><em>Uma visão clara.</em></h2></div><div class="psiu-intro__content"><p>${item.intro}</p>${facts(item.overview)}</div></section>` : `<p class="case-story__intro">${item.intro}</p>${facts(item.overview)}`}${item.content.join('\n')}<div class="case-story__next"><a href="../../sobre/">Conhecer minha atuação ↗</a></div></div>
  </main>
  <footer class="static-footer"><a href="../../index.html#projetos">← Todos os projetos</a><a href="../../index.html#contato">Vamos conversar ↗</a><span>© 2026 Vanessa Souza</span></footer>
</body>
</html>
`;
  const directory = path.join(root, 'cases', slug);
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}
