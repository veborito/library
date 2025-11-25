let myLibrary = [];
const container = document.getElementById("container");
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

function createBookStructure(bookObj, book) {
  const trashIcon = document.createElement("img");
  trashIcon.src = "./icons/trash-2.svg";
  trashIcon.dataset.bookId = book.id;
  bookObj.deleteButton.appendChild(trashIcon)
  bookObj.bookButtons.appendChild(bookObj.deleteButton);
  bookObj.bookButtons.appendChild(bookObj.readButton);
  bookObj.bookElement.appendChild(bookObj.text);
  bookObj.bookElement.appendChild(bookObj.bookButtons);

  bookObj.bookElement.className = "book";
  bookObj.bookButtons.className = "book-buttons";
  bookObj.deleteButton.className = "delete";
  bookObj.deleteButton.dataset.bookId = book.id;
  bookObj.deleteButton.backgroundImage = "./icons/trash-2.svg";
  bookObj.readButton.className = "has-read";
  bookObj.readButton.dataset.bookId = book.id;
  bookObj.readButton.textContent = "read";
  bookObj.text.textContent = `Title: ${book.title} Author: ${book.author}`;
}

function addEventTobuttons (bookObj, book) {
  bookObj.deleteButton.addEventListener("click", (event) => {
    myLibrary = myLibrary.filter(book => book.id !== event.target.dataset.bookId);
    displayBooks(myLibrary);
  });


}

function displayBooks(myLibrary) {
  container.textContent = "";
  myLibrary.forEach(book => {
    const bookObj = {
      bookElement: document.createElement("div"),
      bookButtons: document.createElement("div"),
      deleteButton: document.createElement("button"),
      readButton: document.createElement("button"),
      text: document.createElement("p"),
    }

    createBookStructure(bookObj, book);
    addEventTobuttons(bookObj, book);

    container.appendChild(bookObj.bookElement);
  });
}