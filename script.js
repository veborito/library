const myLibrary = [];
const rows = document.getElementsByClassName("row");

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
  let book = new Book(title,author,pages,read);
  myLibrary.push(book);
}

function displayBooks(myLibrary) {
  // myLibrary.forEach(book => {
  //   const bookElement = document.createElement("div");
  //   bookElement.className = "book";
  //   bookElement.textContent = `${book.title} ${book.author}`;
  //   for (let row of rows) {
  //     if (row.clientWidth > row.scrollWidth) {
  //       row.appendChild(bookElement);
  //       break;
  //     }
  //   }
  // });
  for (let i = 0; i < 6; i++) {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    for (let row of rows) {
      row.style.overflow = "Hidden";
      if (row.clientWidth >= row.scrollWidth) {
        row.appendChild(bookElement);
        break;
      }
    }
  }
}

addBookToLibrary("Hello", "Verdecia", 123, false);
displayBooks(myLibrary);