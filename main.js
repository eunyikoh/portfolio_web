// console. log('hello');
window.onload = () => {
  const menuButton = document.querySelector('#menu-button');
  const nav = document.querySelector('#nav');
  const navbar = document.querySelector('#navbar');
  const floatingButton = document.querySelector('#floating-button');

   // main 영역과 교차 영영 발생 시 navbar와 floating-button 스타일 변경
  const io = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navbar.classList.add('active');
        floatingButton.classList.add('active');
      } else {
        navbar.classList.remove('active');
        floatingButton.classList.remove('active');
      }
    })
  }, { threshold: 0.1 });

  const main = document.querySelector('#content');

  io.observe(main);

  menuButton.addEventListener('click', () => {
    nav.classList.toggle('active');
  });

  floatingButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  new SmoothScroll('a[href*="#"]');
}
