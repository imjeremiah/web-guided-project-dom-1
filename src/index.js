// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

// getElementById
const nav = document.getElementById('mainNav');
// console.log(nav);

// getElementsByClassName
const navItems = document.getElementsByClassName('menu-item');
// console.log(navItems);

// querySelector + querySelectorAll
// A- finding across the entire DOM
const header = document.querySelector('header'); // -> <header>
// console.log(header);
const logoTitle = document.querySelector('#logoTitle');
// console.log(logoTitle);
logoTitle.textContent = "Jeremiah's Profile!";
const firstCard = document.querySelector('.card:nth-of-type(1)');
// console.log(firstCard);
// B- finding within one particular element
const imageFirstCard = document.querySelector('.card img');
// console.log(imageFirstCard);
const titleFirstCard = document.querySelector('.card-title');
// console.log(titleFirstCard);
const subtitleFirstCard = document.querySelector('.card-subtitle');
// console.log(subtitleFirstCard);
const textFirstCard = document.querySelector('.card-text');
// console.log(textFirstCard);
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
// console.log(link1FirstCard);
const link2FirstCard = link1FirstCard.nextElementSibling;
// console.log(link2FirstCard);


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
links.forEach(link => {
    console.log(link.textContent);
});
// C- Turn the collection of links into a real array
const linksArray = Array.from(links);
// console.log(linksArray);
// D- Use .filter to find the anchor tag with the textContent of "Home"
const homeLink = linksArray.find(link => {
    return link.textContent === "Home";
});
console.log(homeLink);

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Bloom Dogs";
//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
logoTitle.className = 'logo heading banana';
//  B- Using .setAttribute to change a few attributes
imageFirstCard.src = 'https://www.dogsbestfriendtraining.com/wp-content/uploads/2021/04/iStock-1248789778-1.jpg';

link1FirstCard.setAttribute('href', 'https//www.pixels.com/search/dog');

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add('sky');
header.classList.remove('sky');
//  B- By manipulating inline styles on the element
header.style.fontSize = '2em';

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement('a');
blogLink.textContent = 'Blog';
blogLink.href = '#';
document.querySelector('nav').appendChild(blogLink);

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector('.card-group').appendChild(secondCard);

const data = {
    "constat": {
        "contact-heading": "Contact"
    }
}

const contactHeading = document.querySelector('.contact-heading');
contactHeading.textContent = data["contact"]["contact-heading"];

// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
