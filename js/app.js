/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
//const fragment = document.createDocumentFragment();
const sections = {
    about: "Our Story",
    products: "Products",
    location: "Find Us",
    contact: "Contact Us"
}
const navList = document.querySelector('#navbar__list');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

function buildNav(currSection) {
    for (const section in sections){
        if (section === currSection) continue;
        const newListItem = document.createElement('li')
        newListItem.appendChild(document.createTextNode(sections[section]))
        newListItem.className = "menu__link"
        navList.appendChild(newListItem)
    }
}
// Add class 'active' to section when near top of viewport
let currSection = "products"
buildNav(currSection)
// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
