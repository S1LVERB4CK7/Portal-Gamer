

document.addEventListener("DOMContentLoaded", () => {
  // ---------------- SLIDER ----------------
  const slides = document.querySelector('.slides');
  const images = document.querySelectorAll('.slides img');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');

  if (slides && images.length > 0) {
    let counter = 0;

    function updateSlider() {
      slides.style.transform = `translateX(-${counter * 100}%)`;
    }

    // 👉 Botão Próximo
    nextBtn.addEventListener('click', () => {
      counter++;
      if (counter >= images.length) counter = 0; // evita o espaço em branco
      updateSlider();
    });

    // 👉 Botão Anterior
    prevBtn.addEventListener('click', () => {
      counter--;
      if (counter < 0) counter = images.length - 1;
      updateSlider();
    });

    // 👉 Auto play
    setInterval(() => {
      counter++;
      if (counter >= images.length) counter = 0;
      updateSlider();
    }, 3000);
  }

  // ---------------- MENU LATERAL ----------------
  const menuToggle = document.querySelector('.menu-toggle');
  const sidebar = document.querySelector('.sidebar');

  if (menuToggle && sidebar) {
    menuToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      sidebar.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
      if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove('active');
      }
    });
  }

  // ---------------- NOTÍCIAS DINÂMICAS ----------------
  const noticiasContainer = document.querySelector('#noticias .cards-container');

  if (noticiasContainer) {
    const noticias = [
      {
        titulo: "Call of Duty: Novo modo zumbi surpreende os fãs",
        descricao: "A Activision revelou um novo modo de jogo cooperativo que mistura sobrevivência e estratégia.",
        imagem: "img/cod6.jpg.jpg"
      },
      {
        titulo: "GTA 6 tem novo trailer confirmado!",
        descricao: "Rockstar promete o lançamento mais ambicioso da franquia, com gráficos de nova geração e mapa ampliado.",
        imagem: "img/gta6.jpg.jpg"
      },
      {
        titulo: "Valorant recebe novo agente misterioso",
        descricao: "O novo personagem chega com habilidades únicas de manipulação de som — o hype está alto!",
        imagem: "img/valorant.jpg.jpg"
      },
      {
        titulo: "Cyberpunk 2077 ganha DLC final com Keanu Reeves",
        descricao: "‘Phantom Liberty’ encerra a saga com estilo — e muitos upgrades técnicos.",
        imagem: "img/cyberpunk.jpg.jpg"
      }
    ];

    noticias.forEach(noticia => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <img src="${noticia.imagem}" alt="${noticia.titulo}">
        <h3>${noticia.titulo}</h3>
        <p>${noticia.descricao}</p>
      `;
      noticiasContainer.appendChild(card);
    });

    // 👉 Animação suave dos cards
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      setTimeout(() => {
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, i * 100);
    });
  }
});




