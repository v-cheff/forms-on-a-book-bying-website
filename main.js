let selectButtons = document.querySelectorAll(".product-btn");

let book = document.querySelector('[name="book"]')
let quantity = document.querySelector('[name="quantity"]')
let name = document.querySelector('[name="name"]')
let address = document.querySelector('[name="address"]')
let date = document.querySelector('[name="date"]')


for (select of selectButtons) {
  select.addEventListener("click", function() {
    let activeBook = this.closest("div")
    let bookTitle = activeBook.querySelector("h3").innerText;
    let nameAutor = activeBook.querySelector(".autor").innerText;
    book.value = '"' + bookTitle + '" (' + nameAutor + ")";
    quantity.value = "1";
  })
}

document.querySelector(".form-btn").addEventListener("click", function() {
  document.querySelector(".popup-content h2").innerText = name.value + ", спасибо за заказ!"
  console.log(name.value)
  document.querySelector(".popup-content p").innerText = "Книга " + book.value + " в количестве " + quantity.value +  "шт. будет доставлена " + date.value + " по адресу " + address.value;

  document.querySelector(".popup").style.display = "flex";
})

document.querySelector(".close-popup").addEventListener("click", function() {
  document.querySelector(".popup").style.display = "none";
})


