const body = document.body;

const nav = document.createElement("nav");
nav.setAttribute("id", "nav");
body.append(nav);

const icon1 = document.createElement("img");
icon1.setAttribute("src", "../icons/books.png");
icon1.setAttribute("id", "icon1");
icon1.setAttribute("width", "50");
icon1.setAttribute("height", "50");
icon1.setAttribute("alt", "Books");
nav.appendChild(icon1);

const ul = document.createElement("ul");
nav.append(ul);
const bottoms = ["", "Home", "News", "Contact", "About"];

const fragment = new DocumentFragment();
for (const bottom of bottoms) {
  const li = document.createElement("li");
  li.textContent = bottom;
  li.setAttribute("id", "li");
  fragment.append(li);
}
ul.append(fragment);

const icon2 = document.createElement("img");
icon2.setAttribute("src", "../icons/basket.png");
icon2.setAttribute("id", "icon2");
icon2.setAttribute("width", "50");
icon2.setAttribute("height", "50");
icon2.setAttribute("alt", "Basket");
nav.appendChild(icon2);

const h1 = document.createElement("h1");
h1.innerText = "Welcome to my Book Shop (under construction)";
body.append(h1);

// fetch("../books.json") //path to the file with json data
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// for (var i = 0; i < arr.length; i++) {
//   document.write("<br><br>array index: " + i);
//   var obj = arr[i];
//   for (var key in obj) {
//     var value = obj[key];
//     document.write("<br> - " + key + ": " + value);
//   }
// }

const BooksCatalog = document.createElement("div");
BooksCatalog.setAttribute("id", "BooksCatalog");
body.append(BooksCatalog);

const book1 = document.createElement("div");
book1.innerText = "Book1";
BooksCatalog.append(book1);

const book2 = document.createElement("div");
book2.innerText = "Book2";
BooksCatalog.append(book2);

const book3 = document.createElement("div");
book3.innerText = "Book3";
BooksCatalog.append(book3);

const myObj = JSON.parse();
let text = "";
for (let i in myObj.author) {
  text += myObj.author[i] + ", ";
}
document.getElementById("demo").innerHTML = text;
//
//
//
// document.getElementById("myBtn").addEventListener("click", displayDate);

// document
//   .getElementsByClassName("myBtn")[1]
//   .addEventListener("click", displayDate);

// document
//   .getElementsByTagName("button")[0]
//   .addEventListener("click", displayDate);

// function displayDate() {
//   document.getElementById("demo").innerHTML = Date();
// }

// const books = [
//   {
//     title: "...book1.....",
//     author: "...... ",
//     price: 123,
//     imgUrl: "jakiś URL z neta",
//   },

//   {
//     title: "...book 2......",
//     author: "...... ",
//     price: 123,
//     imgUrl: "jakiś URL z neta",
//   },
// ];

// const para = document.createElement("div");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
