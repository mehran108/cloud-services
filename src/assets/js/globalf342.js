import LocomotiveScroll from 'locomotive-scroll';

setTimeout(() => {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true
   });
   locoScroll.on('scroll', (position) => {
    if ((position.scroll.y) > 5) {
      document.querySelector('body').classList.add('scrolled');
    } else {
      document.querySelector('body').classList.remove('scrolled');
    }
  });
}, 1);

