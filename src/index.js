// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// class of card-group
const card = document.getElementsByClassName('card-group');
// id of inner-card
const innerCard = document.getElementById('inner-card');
// get all div elements
const divs = document.getElementsByTagName('div');

// A- finding across the entire DOM
const header = document.querySelector('header'); // CSS selector
const logoTitle = document.querySelector('#logoTitle');
// Also could've done...
// querySelector('.heading');
// querySelector('h1');

const firstCard = document.querySelector('.card:nth-of-type(1)');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p'); // could also be .card-text
// C- traversing with dot notation

const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
links.forEach(link => console.log(link.textContent));
/**
 * for (let i = 0; i < links.length; i++) {
 *      console.log(links[i].textContent);
 * }
 */
// C- Turn the collection of links into a real array
const realLinksArray = Array.from(links);
console.log(realLinksArray);

// D- Use .filter to find the anchor tag with the textContent of "Home"
// filter, map, reduce, find
const home = realLinksArray.find(link => link.textContent === 'Home');

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Lambda Dog";
titleFirstCard.textContent = "Dogs Are the BEST!";
textFirstCard.textContent = "[REDACTED]";
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
link1FirstCard.setAttribute('href', 'https://www.pexels.com/search/dog');
link2FirstCard.setAttribute('href', 'https://doggoipsum.com/');
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');
header.classList.remove('sky');
header.classList.toggle('sky');
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);
blogLink.classList.add('menu-item');
blogLink.setAttribute('target', '_blank');


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]
header.remove();
document.body.prepend(header);

const data =   {
    "contact": {
        "contact-heading" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@greatidea.io",
    }
};

// Grab the elements
const contactHeading = document.querySelector('.contact-heading');
const address = document.querySelector('.address');
const phone = document.querySelector('.phone');
const email = document.querySelector('.email');
// Update said elements with data from up above
// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
