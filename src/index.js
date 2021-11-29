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
logoTitle.className = "logo heading banana";
imageFirstCard.src = "https://herepup.com/wp-content/uploads/2015/12/Dog-Advice-1-1.jpg";
//  B- Using .setAttribute to change a few attributes
link2FirstCard.setAttribute("href", "https://doggoipsum.com/");
link1FirstCard.setAttribute("href", "https://www.pexels.com/search/dogs/");

// 👉 5- Changing the styling of an element
//  A- By changing the class names on the element with the classList API
header.classList.add("sky");
header.classList.remove("sky");
header.classList.toggle("sky");
//  B- By manipulating inline styles on the element
header.style.fontSize = "2em";

// 👉 6- Creating new elements from scratch and appending them
// Create a new link inside the nav for "Blog"
const blogLink = document.createElement("a");
blogLink.textContent = "Blog";
blogLink.href = "#";
document.querySelector("nav").appendChild(blogLink);
/**
 * const name = "Casey";
 * const secondName = name;
 * 
 * const obj = { name: "Casey" };
 * const secondObj = obj;
 */

// 👉 7- Making a copy of the card and appending it to the card group
// DOM nodes can only exist in one spot in the DOM
// We cannot append the same copy multiple times
const secondCard = firstCard.cloneNode(true);
document.querySelector(".card-group").appendChild(secondCard);

const data =   {
    "contact": {
        "contact-heading" : "Contact",
        "address" : "123 Way 456 Street Somewhere, USA",
        "phone" : "1 (888) 888-8888",
        "email" : "sales@greatidea.io",
    }
};

const contactHeading = document.querySelector(".contact-heading");
const address = document.querySelector(".address");
const phone = document.querySelector(".phone");
const email = document.querySelector(".email");

contactHeading.textContent = data["contact"]["contact-heading"];
address.textContent = data["contact"]["address"];
/**
 * dot notation, bracket notation
 * contactHeading = {
 *   textContent: blah,
 *   age: 54
 * }
 * const var = "age";
 * contactHeading[var]
 */


// 👉 8- Removing an existing element and putting it back [STRETCH if time allows]


// 👉 9- Show to students the insertAdjacentHTML method [STRETCH if time allows]
