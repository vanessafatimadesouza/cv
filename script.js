const glow = document.querySelector('.cursor-glow');
window.addEventListener('pointermove', e => { glow.style.left = `${e.clientX}px`; glow.style.top = `${e.clientY}px`; });

const observer = new IntersectionObserver(entries => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

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
  eco: { tag:'PRODUCT DESIGN · WEB', title:'Eco — Créditos de Carbono', text:'Plataforma completa de comercialização de créditos de carbono com marketplace, métricas de impacto e transações transparentes.', stats:['8.5M+ t CO₂','Dashboard em tempo real','Marketplace certificado'] }
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
