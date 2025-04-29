function loadExternalScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  
  
  document.addEventListener('DOMContentLoaded', () => {
    
    const CONFETTI_SRC = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
  
    loadExternalScript(CONFETTI_SRC)
      .then(() => {
        const canvas = document.getElementById('confetiCanvas');
        
        const myConfetti = confetti.create(canvas, {
          resize: true,   
          useWorker: true 
        });
  
        setInterval(() => {
          myConfetti({
            particleCount: 7,
            spread: 65,
            startVelocity: 30,
            origin: { y: 0, x: Math.random() },
            colors: ['#FFD700', '#FF69B4', '#87CEFA', '#FF6347', '#00FA9A']
          });
        }, 250);
      })
      .catch(err => {
        console.error('Error cargando canvas-confetti:', err);
      });
  });