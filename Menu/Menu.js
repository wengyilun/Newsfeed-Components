
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu')[0];

// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button')[0]

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(){
  toggleMenu()
})