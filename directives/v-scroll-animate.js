// directives/v-scroll-animate.js
export default {
  mounted(el) {
    el.classList.add('fade-in-up');

    const observer = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          el.classList.add('appear');
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.1,
      }
    );

    observer.observe(el);
  },
};
