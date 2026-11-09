$(document).ready(function () {
  // Slider
  $("#autoWidth").lightSlider({
    adaptiveHeight: true,
    auto: true,
    item: 1,
    slideMargin: 0,
    loop: true,
    pause: 4000,
    speed: 800,
    mode: 'fade',
    pager: false,
    controls: true
  });

  // Navbar scroll effect
  const navbarHome = document.querySelector(".navbarHome");
  if (navbarHome) {
    window.addEventListener("scroll", () => {
      navbarHome.classList.toggle("scroll", window.scrollY > 100);
    });
  }

  // Animasi Counter Ngitung
  const counters = document.querySelectorAll('.count');
  const speed = 500; // makin gede makin lambat. 500 udah enak

  const animateCounter = (counter) => {
      const target = +counter.getAttribute('data-target');
      let count = 0;
      const increment = target / speed;

      const updateCount = () => {
          count += increment;
          if (count < target) {
              counter.innerText = Math.ceil(count);
              setTimeout(updateCount, 10);
          } else {
              counter.innerText = target;
          }
      };
      updateCount();
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              animateCounter(entry.target);
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.5 });

  counters.forEach(counter => observer.observe(counter));
});