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


