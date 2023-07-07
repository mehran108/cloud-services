const $ = require('jquery');
import LocomotiveScroll from 'locomotive-scroll';


  // scrollTrigger Process Dot Animation
setTimeout(() => {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("[data-scroll-container]"),
    smooth: true,
    smoothMobile: true
   });

   // Locomotive scroll height gets updated according to Dom Height
   new ResizeObserver(() => locoScroll.update()).observe(
     document.querySelector("[data-scroll-container]")
   );
   locoScroll.on("scroll", ScrollTrigger.update);
   ScrollTrigger.scrollerProxy("[data-scroll-container]", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
   });
   const pinTopSec = gsap.timeline({
    scrollTrigger: {
      scroller: "[data-scroll-container]",
      trigger: ".top_content_wrap",
      pin: true,
      scrub: 2,
      pinSpacing: false,
      start: "top 30%",
      end: "bottom -14%",
      markers: false,
      toggleActions: "play complete reverse reset" ,
      ease: "power3.inOut"
    }
  });

  pinTopSec.to('.top_content_wrap', { top: 50, duration: 1});
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
  pinTopSec.to('.case_full_banner', { width: "100%", duration: 1},"-=2.2");

}, 1);
