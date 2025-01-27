document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.website');
    const videoCards = document.querySelectorAll('.video-card');
  
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.getAttribute('data-category');
  
        videoCards.forEach(card => {
          if (category === 'all' || card.getAttribute('data-category') === category) {
            card.style.display = 'block';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  });
  