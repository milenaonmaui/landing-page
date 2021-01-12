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

const navList = document.querySelector('#navbar__list');
const sectionsList = document.querySelectorAll('section');
let currActiveSection = document.getElementsByClassName('section__active')[0];

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
const deactivateSection = (section) => {  
    section.classList.remove('section__active');
    const navLink = document.getElementById("nav-" + section.id);
    navLink.classList.remove('nav__active');
};

const activateSection = (section) => {
    section.classList.add('section__active');
    const navLink = document.getElementById("nav-" + section.id);
    navLink.classList.add('nav__active');
};


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the navigation bar

const buildNav = () => {
    for (const section of sectionsList){       
        const newListItem = document.createElement('li');
        const navLink = document.createElement('a');
        const navLinkText = document.createTextNode(section.dataset.nav);
        navLink.appendChild(navLinkText);
        navLink.href = '#' + section.id;
        navLink.addEventListener('click', scrollToAnchorId);      
        newListItem.appendChild(navLink);
        newListItem.className = "menu__link";
        newListItem.id = "nav-" + section.id;
        navList.appendChild(newListItem);
    }
};


// Add class 'active' to section when near top of viewport

const handleActiveContent = (event) => {
    for (const section of sectionsList) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop > -1 && sectionTop < window.visualViewport.height/2) {
            deactivateSection(currActiveSection);
            activateSection(section);
            currActiveSection = section;
        }
    }
 };

// Scroll to anchor ID using scrollTO event

const scrollToAnchorId = (event) => {
    event.preventDefault();
    const sectionId = event.target.href.split("#")[1];
    const section = document.getElementById(sectionId);
    window.scrollTo(0,section.offsetTop);
};
/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

buildNav()
window.addEventListener('scroll', handleActiveContent)
