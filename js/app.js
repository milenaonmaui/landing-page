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
const sectionsList = document.querySelectorAll('section');
let currActiveSection = document.getElementsByClassName('section__active')[0];
console.log(sectionsList)

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function deactivateSection(section){  
        section.classList.remove('section__active')
}

function activateSection(section) {
    section.classList.add('section__active')
    console.log("Activated section", section)
}

function showNavLink(id) {

}

function hideNavLink(id){

}



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
        navLink.addEventListener('click', scrollToAnchorId)        
        newListItem.appendChild(navLink)
        newListItem.className = "menu__link"
        navList.appendChild(newListItem)
    }
}


// Add class 'active' to section when near top of viewport

function handleActiveContent(event) {
    for (const section of sectionsList) {
        const sectionTop = section.getBoundingClientRect().top
        if (sectionTop > 0 && sectionTop < window.visualViewport.height/2){
            console.log("Deactivating ", currActiveSection)
            deactivateSection(currActiveSection)
            activateSection(section)
            currActiveSection = section;
        }
    }
 }



// Scroll to anchor ID using scrollTO event

function scrollToAnchorId(event){
    event.preventDefault();
    console.log(event.target)

}
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav()
window.addEventListener('scroll', handleActiveContent)

// Scroll to section on link click

// Set sections as active
