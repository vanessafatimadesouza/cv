const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const projectPreviews = {
  ima: { src: 'ima-cover-art.png', alt: 'Arte editorial sobre o sistema agropecuário do IMA', label: 'IMA', title: 'IMA — Cadastro Agropecuário', description: 'Redesenho de um sistema público para organizar propriedades, produtores e fluxos de fiscalização.', tags: ['Product Design', 'Design System', 'Figma', 'React'] },
  alumni: { src: 'alumni-cover-art.png', alt: 'Arte editorial sobre a comunidade Alumni ESAL UFLA', label: 'ALUMNI', title: 'Alumni ESAL UFLA', description: 'Plataforma que aproxima ex-alunos e transforma conexão em impacto para a educação.', tags: ['UX/UI Design', 'Web Design', 'Comunidade'] },
  eco: { src: 'eco-cover-art.png', alt: 'Arte editorial sobre floresta, dados e créditos de carbono', label: 'ECO', title: 'Eco — Créditos de Carbono', description: 'Marketplace B2B que conecta preservação, empresas e impacto ambiental com transparência.', tags: ['Product Design', 'Web B2B', 'Marketplace'] },
  'art-screen': { src: 'art-screen-cover-art.png', alt: 'Composição editorial do Art Screen com a interface exibida em uma galeria digital', label: 'ART SCREEN', title: 'Art Screen — Galeria Digital', description: 'Experiência para transformar uma tela em galeria: a pessoa escolhe uma atmosfera e contempla obras Open Access do acervo do Met.', tags: ['Experience Design', 'Front-end', 'Met Collection API'] },
};
Object.entries(projectPreviews).forEach(([project, preview]) => {
  const visual = document.querySelector(`[data-project="${project}"] .project-visual`);
  if (!visual) return;
  const label = visual.querySelector('.case-preview-label');
  const image = new Image();
  image.className = 'project-preview';
  image.src = preview.src;
  image.alt = preview.alt;
  const action = document.createElement('a');
  action.className = 'project-preview-action';
  action.href = `case.html?project=${project}`;
  action.setAttribute('aria-label', `Abrir case ${preview.title}`);
  action.innerHTML = `<b aria-hidden="true">↗</b>`;
  visual.replaceChildren(image, action);
  const card = visual.closest('.project');
  card.querySelector('.project-info')?.remove();
  const heading = document.createElement('div');
  heading.className = 'project-card-heading';
  heading.innerHTML = `<span>${project === 'ima' ? '01' : project === 'alumni' ? '02' : project === 'eco' ? '03' : '04'} / PROJETO</span><h3>${preview.title}</h3>`;
  const footer = document.createElement('div');
  footer.className = 'project-card-footer';
  footer.innerHTML = `<p>${preview.description}</p><div>${preview.tags.map(tag => `<i>${tag}</i>`).join('')}</div>`;
  visual.before(heading);
  visual.after(footer);
});

const rotatingPhrase = document.querySelector('.rotating-phrase');
if (rotatingPhrase) {
  const phrases = [
    'cada detalhe gera impacto.',
    'cada detalhe cria conexão.',
    'cada detalhe faz a diferença.'
  ];
  let phraseIndex = 0;
  setInterval(() => {
    rotatingPhrase.classList.add('is-changing');
    setTimeout(() => {
      phraseIndex = (phraseIndex + 1) % phrases.length;
      rotatingPhrase.textContent = phrases[phraseIndex];
      rotatingPhrase.classList.remove('is-changing');
    }, 350);
  }, 5000);
}

document.querySelectorAll('.magnetic').forEach(el => {
  el.addEventListener('pointermove', e => {
    const r = el.getBoundingClientRect();
    el.style.transform = `translate(${(e.clientX-r.left-r.width/2)*.12}px, ${(e.clientY-r.top-r.height/2)*.12}px)`;
  });
  el.addEventListener('pointerleave', () => el.style.transform = '');
});

const cases = {
  ima: { tag:'PRODUCT DESIGN · DESIGN SYSTEM', title:'IMA — Cadastro Agropecuário', text:'Sistema governamental para o Instituto Mineiro de Agropecuária. O trabalho organizou fluxos complexos e criou uma base visual consistente para dar velocidade ao produto e clareza aos usuários.', stats:['3.500+ conexões no Figma','800+ variáveis','45+ componentes'] },
  alumni: { tag:'UX/UI · COMMUNITY', title:'Alumni ESAL UFLA', text:'Uma experiência digital feita para aproximar gerações de ex-alunos e transformar conexão em impacto concreto para a educação.', stats:['R$ 2M+ arrecadados','Comunidade ativa','Experiência responsiva'] },
  eco: { tag:'PRODUCT DESIGN · WEB', title:'Eco — Créditos de Carbono', text:'Plataforma completa de comercialização de créditos de carbono com marketplace, métricas de impacto e transações transparentes.', stats:['8.5M+ t CO₂','Dashboard em tempo real','Marketplace certificado'] },
  'art-screen': { tag: 'EXPERIENCE DESIGN · FRONT-END', title: 'Art Screen — Galeria Digital', text: 'Experiência minimalista que transforma uma tela em galeria, com obras Open Access do Metropolitan Museum of Art e controles pensados para contemplação.', stats: ['6 atmosferas', 'Obras em domínio público', 'HTML, CSS e JavaScript'] }
};
const modal = document.querySelector('.case-modal');
document.querySelectorAll('.project-trigger').forEach(btn => btn.addEventListener('click', () => {
  const data = cases[btn.closest('.project').dataset.project];
  modal.querySelector('.modal-tag').textContent = data.tag;
  modal.querySelector('h2').textContent = data.title;
  modal.querySelector('p').textContent = data.text;
  modal.querySelector('.modal-stats').innerHTML = data.stats.map(item => `<span>${item}</span>`).join('');
  modal.showModal();
}));
modal.querySelector('.modal-close').addEventListener('click', () => modal.close());
modal.addEventListener('click', e => { if (e.target === modal) modal.close(); });
