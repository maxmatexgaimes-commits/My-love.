// Páginas do livro
const paginas = document.querySelectorAll('.pagina');
let atual = 0;

// Abrir livro e tocar música com fade-in
document.getElementById('abrirLivroBtn').addEventListener('click', () => {
  document.getElementById('carta').style.display = 'none';
  document.getElementById('livro-section').style.display = 'block';
  const musica = document.getElementById('musica');
  musica.volume = 0.1;
  musica.play();
  let fade = setInterval(() => { if(musica.volume < 1) musica.volume += 0.01; else clearInterval(fade); }, 200);
});

// Virar página
document.getElementById('proximaBtn').addEventListener('click', () => {
  if (atual < paginas.length - 1) {
    paginas[atual].classList.add('virada');
    atual++;
  }
});

// Contador desde 11/09/2025
const inicio = new Date("2025-09-11");
setInterval(() => {
  const agora = new Date();
  const diff = agora - inicio;
  const dias = Math.floor(diff / 86400000);
  document.getElementById('contador').innerHTML =
    `Estamos juntos há <b>${dias}</b> dias 💖`;
}, 1000);

// Criar pétalas animadas
for (let i = 0; i < 30; i++) {
  let p = document.createElement('div');
  p.className = 'petala';
  p.innerHTML = '🌸';
  p.style.left = Math.random() * 100 + '%';
  p.style.animationDuration = 4 + Math.random() * 6 + 's';
  p.style.fontSize = 16 + Math.random()*12 + 'px';
  document.querySelector('.sakura').appendChild(p);
}