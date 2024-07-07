const actionIcon = document.querySelector('.cell__action__icon');
const actionMenu = document.querySelector('.action__menu');
const toggleMenu = ()=> {
  actionMenu.classList.toggle('hidden')
}

actionIcon.addEventListener('click', toggleMenu)