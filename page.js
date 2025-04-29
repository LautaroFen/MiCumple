// page.js

// 1) Función para cargar un script externo de forma dinámica
function loadExternalScript(src) {
    return new Promise((resolve, reject) => {
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }
  
  // 2) Al cargar el DOM, traemos y arrancamos confetti
  document.addEventListener('DOMContentLoaded', () => {
    // Ruta al bundle de canvas-confetti con canal de workers
    const CONFETTI_SRC = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js';
  
    loadExternalScript(CONFETTI_SRC)
      .then(() => {
        const canvas = document.getElementById('confetiCanvas');
        // Crear instancia attaching to nuestro canvas
        const myConfetti = confetti.create(canvas, {
          resize: true,   // Se adapta si cambias tamaño de container
          useWorker: true // Para que no bloquee el hilo principal
        });
  
        // 3) Loop infinito de confeti
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