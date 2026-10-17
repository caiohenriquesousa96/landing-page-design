// Espera todo o HTML carregar antes de executar os scripts
document.addEventListener('DOMContentLoaded', () => {

  // 1. INICIALIZAÇÃO DAS ANIMAÇÕES AOS (Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // 2. LÓGICA DO FAQ ACCORDION (Perguntas Frequentes)
  const faqQuestions = document.querySelectorAll('.faq-question');
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const item = question.parentElement;
      item.classList.toggle('active');
    });
  });

  // 3. CARROSSEL / SLIDESHOW AUTOMÁTICO DOS CARDS
  function initPortfolioSlideshows() {
    const thumbs = document.querySelectorAll('.portfolio-thumb');

    thumbs.forEach(thumb => {
      const slides = thumb.querySelectorAll('.slide-img');
      if (slides.length <= 1) return; // Se tiver só 1 imagem, não faz nada

      let currentIndex = 0;

      setInterval(() => {
        // Remove a classe 'active' da imagem atual
        slides[currentIndex].classList.remove('active');

        // Avança para a próxima imagem (ou volta para a primeira)
        currentIndex = (currentIndex + 1) % slides.length;

        // Adiciona a classe 'active' na nova imagem
        slides[currentIndex].classList.add('active');
      }, 3500); // Alterna a cada 3.5 segundos
    });
  }

  initPortfolioSlideshows();

});