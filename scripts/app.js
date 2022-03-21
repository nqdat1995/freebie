document.addEventListener("DOMContentLoaded", function () {
  const menuOpen = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  const menu = document.querySelector(".menu");
  if (!menuOpen || !menuClose || !menu) return;
  menuOpen.addEventListener("click", function () {
    console.log(1);
    menu.classList.add("is-active");
  });
  menuClose.addEventListener("click", function () {
    console.log(2);
    menu.classList.remove("is-active");
  });
  document.addEventListener("click", function (e) {
    console.log(3);
    if (!menu.contains(e.target) && !e.target.matches(".menu-toggle")) {
      console.log(e.target);
      console.log(4);
      menu.classList.remove("is-active");
    }
  });
});
