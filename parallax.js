(function () {
  const layers = document.querySelectorAll('[data-depth]');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  const ease = 0.08;

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth  - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function tick() {
    currentX += (targetX - currentX) * ease;
    currentY += (targetY - currentY) * ease;

    layers.forEach((el) => {
      const depth = parseFloat(el.dataset.depth);
      const dir = el.classList.contains('parallax-bg') ? -1 : 1;
      const x = currentX * depth * 100 * dir;
      const y = currentY * depth * 100 * dir;
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    });

    requestAnimationFrame(tick);
  }

  requestAnimationFrame(tick);
})();
