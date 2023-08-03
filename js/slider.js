const slider = () => {
  // /----Slider SWIPER  https://swiperjs.com/get-started---/

  const swiper = new Swiper(".swiper", {
    // If we need pagination
    pagination: {
      el: ".swiper-pagination",
    },
    // Navigation arrows
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Add effect SWIPER https://swiperjs.com/demos#effect-fade
    effect: "fade",
    speed: 1000,
  });
};

slider();

/**https://www.youtube.com/watch?v=GM-h07HbeBk&t=161s */

/**https://www.youtube.com/watch?v=tE3M7Gi_gbA */

/**https://www.youtube.com/watch?v=0LxS-NBnanU */

/**https://www.youtube.com/watch?v=jfUTaFKOJBw */
