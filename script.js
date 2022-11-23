const body = document.body;

const nav = document.createElement("nav");
nav.setAttribute("id", "nav");
body.append(nav);

const icon1 = document.createElement("img");
icon1.setAttribute("src", "./icons/books.png");
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
icon2.setAttribute("src", "./icons/basket.png");
icon2.setAttribute("id", "icon2");
icon2.setAttribute("width", "50");
icon2.setAttribute("height", "50");
icon2.setAttribute("alt", "Basket");
nav.appendChild(icon2);

const h1 = document.createElement("h1");
h1.innerText = "Welcome to my Book Shop (under construction)";
body.append(h1);

//BOOKS Catalog//

const section = document.createElement("section");
section.setAttribute("id", "section");
body.append(section);

fetch("./books.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log(err);
  });

function appendData(data) {
  let mainContainer = document.getElementById("section");
  for (let i = 0; i < data.length; i++) {
    let div = document.createElement("div");
    let book_card_img = document.createElement("div");
    let book_image_link = document.createElement("img");
    let book_info = document.createElement("div");
    let book_info_content = document.createElement("p");
    let book_info_button = document.createElement("input");
    let book_description = document.createElement("div");
    let title = document.createElement("h2");
    let author_p = document.createElement("p");
    let price_cart_div = document.createElement("div");
    let price = document.createElement("p");
    let cart = document.createElement("input");
    let about_info = document.createElement("input");

    div.appendChild(book_card_img);
    book_card_img.appendChild(book_image_link);
    book_image_link.after(book_info);
    book_info.appendChild(book_info_content);
    book_card_img.after(book_description);
    book_info_content.after(book_info_button);
    book_description.appendChild(author_p);
    author_p.after(title);
    title.after(price_cart_div);
    price_cart_div.appendChild(price);
    price.after(about_info);
    about_info.after(cart);

    book_image_link.src = data[i].imageLink;
    title.innerHTML = data[i].title;
    author_p.innerHTML = data[i].author;
    price.innerHTML = data[i].price + ` $`;
    book_info_content.innerHTML = data[i].description;

    div.id = "book_card";
    book_card_img.id = "book_card_img";
    book_image_link.id = "book_image";
    book_info.id = "book_info";
    book_description.id = "book_description";
    title.id = "title_id";
    author_p.id = "author_id";
    price_cart_div.id = "price_cat_div";
    price.id = "price_id";
    about_info.id = "about_info";
    about_info.type = "submit";
    about_info.value = "Show more";
    cart.id = "cart";
    cart.type = "submit";
    cart.value = "Add to Cart";
    book_info_button.id = "book_info_button";
    book_info_button.type = "submit";
    book_info_button.value = "Close";

    mainContainer.appendChild(div);
  }
}

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
body.append(footer);
