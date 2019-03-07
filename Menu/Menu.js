
let isMenuOpen = false;

const toggleMenu = (e) => {
  // Toggle the "menu--open" class on your menu refence.
  e.stopPropagation();
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu')[0];

// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button')[0]

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click',  toggleMenu)

//stretch
// If the click event is dispatched from anything other than menu class
document.body.addEventListener('click', function(e){
  let classList = Array.from(e.target.classList);
  if(!classList.includes("menu")){
    menu.classList.remove('menu--open')
  }
})