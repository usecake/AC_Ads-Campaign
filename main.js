const actionIcon = document.querySelector(".cell__action__icon");
const actionMenu = document.querySelector(".action__menu");
const toggleMenu = () => {
  actionMenu.classList.toggle("hidden");
};

actionIcon.addEventListener("click", toggleMenu);

// dark mode
// target the switch element
const darkModeToggle = document.querySelector(
  ".sidebar__icons--darkmode-input"
);
const darkModeToggleHandler = (e) => {
  console.log('start')
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    console.log(documentElement, ':done')
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    console.log('wrong')
  }
};

darkModeToggle.addEventListener("change", darkModeToggleHandler);
