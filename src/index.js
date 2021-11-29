// 👉 1- Finding an element on the page and saving a reference to it
//  Older: getElementById, getElementsByTagName, getElementsByClassName
//  Newer: querySelector, querySelectorAll
//  Select the following single elements from the div.card

const nav = document.getElementById('mainNav');
const paras = document.getElementsByTagName('p');
const cards = document.getElementsByClassName('card-group');

const imgTop = document.querySelector('.card-img-top');
const goodParas = document.querySelectorAll('p');

// A- finding across the entire DOM
const header = document.querySelector('header');
const logoTitle = document.querySelector('#logoTitle');
const firstCard = document.querySelector('.card:nth-of-type(1)');
// B- finding within one particular element
const imageFirstCard = firstCard.querySelector('img');
const titleFirstCard = firstCard.querySelector('h2');
const subtitleFirstCard = firstCard.querySelector('h3');
const textFirstCard = firstCard.querySelector('p');
// C- traversing with dot notation
const link1FirstCard = textFirstCard.nextElementSibling;
const link2FirstCard = link1FirstCard.nextElementSibling;


// 👉 2- Finding collections of elements in the DOM
// A- Find all the anchor tags inside the nav element
const links = document.querySelectorAll('nav a');
// B- Loop over the links and console.log their text content
links.forEach(function(link) {
    console.log(link);
});
/**
 * links.forEach(link => console.log(link));
 */
/**
 * for (let i = 0; i < links.length; i++) {
 *   console.log(links[i]);
 * }
 */
// C- Turn the collection of links into a real array
const linksRealArray = Array.from(links);

// D- Use .find to find the anchor tag with the textContent of "Home"
const foundLink = linksRealArray.find(link => link.textContent === 'Home');

/**
 * === strict equality, no type coersion '1' === 1 NOOOOO
 * ==  loose equality, type coersion '1' == 1 never, ever, ever use double equals
 */

// 👉 3- Changing an element's text content
//  A- Change the cat-related content into dog-related content
logoTitle.textContent = "Bloomtech Dog";
titleFirstCard.textContent = "Bloomtech Blog";
subtitleFirstCard.textContent = "By CRHarding";
textFirstCard.textContent = "Lorem ipsum dolor sit amet";
link2FirstCard.textContent = "Dog Ipsum";

//  B- Have the students research online the difference between textContent and innerText


// 👉 4- Changing any property
//  A- Using dot notation to change a few attributes
//  B- Using .setAttribute to change a few attributes


// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
//  B- By manipulating inline styles on the element


// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"


// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
