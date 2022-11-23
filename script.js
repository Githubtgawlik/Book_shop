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

const main = document.createElement("main");
main.setAttribute("id", "main");
body.append(main);

const section = document.createElement("section");
section.setAttribute("id", "section");
main.append(section);

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
    let book_title = document.createElement("h2");
    let book_author_p = document.createElement("p");
    let book_price_cart = document.createElement("div");
    let price = document.createElement("p");
    let cart = document.createElement("input");
    let about_info = document.createElement("input");

    div.appendChild(book_card_img);
    book_card_img.appendChild(book_image_link);
    book_image_link.after(book_info);
    book_info.appendChild(book_info_content);
    book_card_img.after(book_description);
    book_info_content.after(book_info_button);
    book_description.appendChild(book_author_p);
    book_author_p.after(book_title);
    book_title.after(book_price_cart);
    book_price_cart.appendChild(price);
    price.after(about_info);
    about_info.after(cart);

    book_image_link.src = data[i].imageLink;
    book_title.innerHTML = data[i].title;
    book_author_p.innerHTML = data[i].author;
    price.innerHTML = data[i].price + ` $`;
    book_info_content.innerHTML = data[i].description;

    div.id = "book_card";
    book_card_img.id = "book_card_img";
    book_image_link.id = "book_image";
    book_info.id = "book_info";
    book_description.id = "book_description";
    book_title.id = "book_book_title_id";
    book_author_p.id = "book_author_id";
    book_price_cart.id = "book_price_cart";
    price.id = "price";
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

const order_section = document.createElement("section");
order_section.setAttribute("id", "order_section");
main.append(order_section);

const my_order = document.createElement("div");
my_order.setAttribute("id", "my_order");
order_section.append(my_order);

const h2 = document.createElement("h2");
h2.innerText = "My order";
order_section.append(h2);

const footer = document.createElement("footer");
footer.setAttribute("id", "footer");
body.append(footer);

const footer_div = document.createElement("div");
footer_div.setAttribute("id", "footer_div");
footer.append(footer_div);

const footer_txt = document.createElement("p");
footer_txt.setAttribute("id", "footer_txt");
footer_div.append(footer_txt);
footer_txt.innerHTML = "RSSchool Example - created by Tomasz Gawlik";
