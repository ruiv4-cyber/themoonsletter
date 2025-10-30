const numStars = 80;

for (let i = 0; i < numStars; i++) {
  const star = document.createElement('div');
  star.classList.add('star');
  document.body.appendChild(star);

  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const duration = 5 + Math.random() * 10;
  const size = 1 + Math.random() * 3;

  star.style.left = `${x}%`;
  star.style.top = `${y}%`;
  star.style.width = `${size}px`;
  star.style.height = `${size}px`;
  star.style.animationDuration = `${duration}s`;
}
