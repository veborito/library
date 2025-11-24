const myLibrary = [];
const booksContainer = document.getElementById("container");

function Book(title, author, pages, read) {
  if (!new.target) {
        throw new TypeError("calling Foo constructor without new is invalid");
  }
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title,author,pages,read));
}

function displayBooks(myLibrary) {
  //booksContainer.style.backgroundColor = "red";
  // for (let book in myLibrary) {
  //   const bookElement = document.createElement("book");
  // }
  for (let i = 0; i < 40; i++) {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    booksContainer.appendChild(bookElement);
  }
}

addBookToLibrary("Hello", "Verdecia", 123, false);

displayBooks(myLibrary);

console.log(myLibrary);
myLibrary.pop();
console.log(myLibrary);