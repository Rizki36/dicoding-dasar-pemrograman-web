const main = () => {
  document
    .querySelector(".header__navigation-menu")
    .addEventListener("click", () => {
      document
        .querySelector(".header__navigation")
        .classList.toggle("header__navigation-open");
    });
};

main();
