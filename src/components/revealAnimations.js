import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export const fadeInOnScroll = (selector) => {
  gsap.from(selector, {
    opacity: 0,
    y: -50,
    duration: 1,
    scrollTrigger: {
      trigger: selector,
      start: "top 80%",
      end: "bottom 20%",
      scrub: true,
    },
  });
};

export const fadeFromBottom = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    });
    gsap.from(el, {
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    });
  });
};

export const fadeFromTop = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    });
    gsap.from(el, {
      y: -50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 95%",
      },
    });
  });
};

export const fadeFromSides = (containerSelector, leftElement, rightElement) => {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach((container) => {
    const elLeft = container.querySelector(leftElement);
    const elRight = container.querySelector(rightElement);

    gsap.from(elLeft, {
      opacity: 0,
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
      },
    });

    gsap.from(elRight, {
      opacity: 0,
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: container,
        start: "top 90%",
      },
    });
  });
};

export const fadeFromLeft = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
    gsap.from(el, {
      x: -50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  });
};

export const fadeFromRight = (selector) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      duration: 2,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
    gsap.from(el, {
      x: 50,
      duration: 1,
      scrollTrigger: {
        trigger: el,
        start: "top 90%",
      },
    });
  });
};

// export const fadeFromLeft = (selector, options = {}) => {
//   gsap.from(selector, {
//     x: -100,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: selector,
//       start: "top 80%",
//       ...options.scrollTrigger,
//     },
//     ...options,
//   });
// };

// export const fadeFromRight = (selector, options = {}) => {
//   gsap.from(selector, {
//     x: 100,
//     opacity: 0,
//     duration: 1,
//     scrollTrigger: {
//       trigger: selector,
//       start: "top 80%",
//       ...options.scrollTrigger,
//     },
//     ...options,
//   });
// };
