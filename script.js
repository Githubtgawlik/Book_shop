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
icon2.setAttribute("src", "../icons/basket.png");
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
  const mainContainer = document.getElementById("section");
  for (const i = 0; i < data.length; i++) {
    const div = document.createElement("div");
    const image_link_div = document.createElement("div");
    const image_link = document.createElement("img");
    const image_info = document.createElement("div");
    const image_info_content = document.createElement("p");
    const image_info_button = document.createElement("input");
    const bottom_div = document.createElement("div");
    const title = document.createElement("h2");
    const author_p = document.createElement("p");
    const price_cart_div = document.createElement("div");
    const price = document.createElement("p");
    const cart = document.createElement("input");
    const about_info = document.createElement("input");

    div.appendChild(image_link_div);
    image_link_div.appendChild(image_link);
    image_link.after(image_info);
    image_info.appendChild(image_info_content);
    image_link_div.after(bottom_div);
    image_info_content.after(image_info_button);
    bottom_div.appendChild(author_p);
    author_p.after(title);
    title.after(price_cart_div);
    price_cart_div.appendChild(price);
    price.after(about_info);
    about_info.after(cart);

    image_link.src = data[i].imageLink;
    title.innerHTML = data[i].title;
    author_p.innerHTML = data[i].author;
    price.innerHTML = data[i].price + ` $`;
    image_info_content.innerHTML = data[i].description;

    div.id = "card_div_id_inner"; // section
    image_link_div.id = "image_link_div";
    image_link.id = "image_id";
    image_info.id = "image_info";
    bottom_div.id = "bottom_div";
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
    image_info_button.id = "image_info_button";
    image_info_button.type = "submit";
    image_info_button.value = "Close";

    mainContainer.appendChild(div);
  }
}
