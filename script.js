const myLibrary = [];
const rows = document.getElementsByClassName("row");
const dialog = document.querySelector("dialog");
const dialogButton = document.getElementById("dialog-button");
const closeButton = document.getElementById("close");
const form = document.querySelector("form");

dialogButton.addEventListener("click", () => dialog.showModal())
closeButton.addEventListener("click", () => dialog.close())
form.addEventListener("submit", addBookForm)

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


function addBookForm (event) {
  event.preventDefault(); 
  const formData = new FormData(event.target)
  const read = formData.get("read") == "true" ? true : false;
  addBookToLibrary( formData.get("book_title"),
                    formData.get("book_author"),
                    parseInt(formData.get("book_pages")),
                    read  )
  displayBooks(myLibrary);
  dialog.close(); 
}


function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title,author,pages,read);
  myLibrary.push(book);
}

function displayBooks(myLibrary) {
  myLibrary.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.className = "book";
    bookElement.textContent = `${book.title} ${book.author}`;
    for (let row of rows) {
      row.style.overflow = "Hidden";
      if (row.clientWidth >= row.scrollWidth) {
        row.appendChild(bookElement);
        break;
      }
    }
  });
}