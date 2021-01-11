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

const navList = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll('section')
console.log(sectionsList)

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function deactivateSection(){
    const section = document.getElementsByClassName('section__active');
    if (section){
        section[0].classList.remove('section__active')
    } 
}

function activateSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.add('section__active')
    console.log("Activated section", section)
}
deactivateSection()
activateSection("about")

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav removing link to active section

function buildNav() {
    const activeSectionId = document.getElementsByClassName('section__active')[0].id;
    for (const section of sectionsList){       
        if (section.id === activeSectionId) continue;
        const newListItem = document.createElement('li');
        const navLink = document.createElement('a');
        const navLinkText = document.createTextNode(section.dataset.nav);
        navLink.appendChild(navLinkText);
        navLink.href = '#' + section.id;        
        newListItem.appendChild(navLink)
        newListItem.className = "menu__link"
        navList.appendChild(newListItem)
    }
}


// Add class 'active' to section when near top of viewport

buildNav()

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
