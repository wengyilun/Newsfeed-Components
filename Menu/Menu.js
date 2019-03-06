
let isMenuOpen = false;

const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
  
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelectorAll('.menu')[0];

// create a reference to the ".menu-button" class
const menuButton = document.querySelectorAll('.menu-button')[0]

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', function(e){
  e.stopPropagation();
  console.log('menuButton Clicked')
  toggleMenu()
})

//stretch

// If the click event is dispatched from anything other than menu class
document.body.addEventListener('click', function(e){
  let classList = Array.from(e.target.classList);
  
  console.log(`class ${e.target} clicked`)
  console.log(`classList ${classList}`)

  if(!classList.includes("menu")){
    debugger
    menu.classList.remove('menu--open')
  }
})