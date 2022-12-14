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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const sectionsList = document.querySelectorAll('section'); 
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
// Build menu 
// build the nav
for (i = 0; i < sectionsList.length; i++) {
    let listItem = document.createElement('li');
    let sectionLink = document.createElement('a');
    sectionLink.setAttribute('id', `${sectionsList[i].id}Link`); 
    sectionLink.setAttribute('data-link', `${sectionsList[i].id}`) 
    sectionLink.setAttribute('class', 'menu__link')
    sectionLink.href = ""; 
    //sectionLink.style.margin = '1rem'; 
    sectionLink.innerHTML = `${sectionsList[i].dataset.nav}`; 
    listItem.appendChild(sectionLink);
    document.getElementById('navbar__list').appendChild(listItem); 
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Add class 'your-active-class' to section when near top of viewport
function makeActiveClass() {
    for (let section of sectionsList) {
        // define variable for the viewport
        let viewport = section.getBoundingClientRect(); 
        // define variable for the navItem for related section
        let linkClass = document.getElementById(`${section.id}Link`);
        //console.log(linkClass); 
        if (viewport.top <= 150 && viewport.bottom >=150) {
            // add active class to section in the viewport
            section.classList.add('active'); 
            // add active class for the related navItem
            linkClass.classList.add('active');
        } else {
            // remove active class to section in the viewport
            section.classList.remove('active');
            // remove active class for the related navItem
            linkClass.classList.remove('active');
        }
    }
}


// Scroll to anchor ID using scrollTO event
// Scroll to section on link click
const links2Sections = document.querySelectorAll('a');
links2Sections.forEach((item) => {
    item.addEventListener('click', ()=>{
        event.preventDefault(); 
        const el = document.getElementById(item.dataset.link);
        el.scrollIntoView({behavior: 'smooth', block: 'start'});
    })
})
// Set sections as active
document.addEventListener('scroll', () => makeActiveClass());  

// Contact Form
const submit = document.querySelector('#submit');
submit.addEventListener('submit', (e) => {
    e.preventDefault(); 
    const name = document.querySelector('#name').value; 
    const email = document.querySelector('#email').value;
    const user = {name, email}; 
    console.log(user)
    const title = document.createElement('h4');
    const formName = document.createElement('p');
    const formEmail = document.createElement('p'); 
    title.textContent=`Collected data from form: `; 
    formName.textContent=`NAME: ${name}`;
    formEmail.textContent=`EMAIL: ${email}`; 
    submit.appendChild(title); 
    submit.appendChild(formName);
    submit.appendChild(formEmail); 
    document.querySelectorAll('input').forEach(input => input.value = ""); 
    return console.log("form submitted... ");
})
