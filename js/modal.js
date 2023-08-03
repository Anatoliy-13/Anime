const modal = () => {
  const modal = document.querySelector(".search-model");
  const madalBtn = document.querySelector(".icon_search");
  const modalClose = modal.querySelector(".search-close-switch");
  // const modalSearch = document.getElementById("search-input");
  const searchInput = document.querySelector("#search-input");
  const wrapper = document.querySelector(".search-model-resalt");

  wrapper.style.width = "100%";
  wrapper.style.maxWidth = "500px";

  const debounce = (func, ms = 500) => {
    let timer;

    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, ms);
    };
  };

  const searchDebounce = debounce((searchString) => {
    searchFunc(searchString);
  }, 800);

  const renderFunc = (items) => {
    wrapper.innerHTML = "";

    items.forEach((item) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `
        <a  class="p-2 text-white" href="/Anime/anime-details.html?itemId=${item.id}">${item.title}</a>
    `
      );
      console.log(item);
    });
  };

  const searchFunc = (searchStr) => {
    fetch("https://anime-8e3eb-default-rtdb.firebaseio.com/anime.json")
      .then((respons) => respons.json())
      .then((data) => {
        const filteredData = data.filter((dataItem) => {
          return (
            dataItem.title.toLowerCase().includes(searchStr.toLowerCase()) ||
            dataItem.description.toLowerCase().includes(searchStr.toLowerCase())
          );
        });

        renderFunc(filteredData.slice(0, 5));
      });
  };

  madalBtn.addEventListener("click", () => {
    // modal.style.display = "block";
    modal.classList.add("active");
  });

  modalClose.addEventListener("click", () => {
    // modal.style.display = "none";
    modal.classList.remove("active");
    wrapper.innerHTML = "";
  });

  searchInput.addEventListener("input", (event) => {
    searchDebounce(event.target.value);
  });
};

modal();
