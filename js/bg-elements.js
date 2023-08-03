const bgElements = () => {
  const elements = document.querySelectorAll(".set-bg");
      /**Перебор каждого массива элементов */
  elements.forEach((elem) => {
    elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
  });
};

bgElements();
