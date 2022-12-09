import Book from './book.js';

const allBooks = document.querySelector('.all-books-container');
const storage = JSON.parse(localStorage.getItem('bookInfo'));

const setLocalStorage = (bookCollection) => {
  localStorage.setItem('bookInfo', JSON.stringify(bookCollection));
};

class BookCollection {
  constructor() {
    this.bookInfo = storage === null ? [] : storage;
  }
  addBook(id, bookTitle, authorName) {
    const newBook = new Book(id, bookTitle, authorName);
    this.bookInfo.push(newBook);
    setLocalStorage(this.bookInfo);
    this.displayBookCollection();
  }
  displayBookCollection() {
    if (this.bookInfo.length <= 0) {
      allBooks.innerHTML = '<h3 class="no-title">No book available.<br/> Please add a new book.</h3>';
    } else {
      let allBook = this.bookInfo.map(
        (item) => `<div class="book-item-container">
        <p><span class="book-title">${item.title}</span> by ${item.author}</p>
        <button class="deleteBtn" id="${item.id}">Remove</button>
      </div>`,
      );
      allBook = allBook.join('');
      allBooks.innerHTML = allBook;
    }
    document.querySelectorAll('.deleteBtn').forEach((element) => {
      element.addEventListener('click', (e) => {
        const bookId = parseInt(e.target.id, 10);
        this.bookInfo = this.bookInfo.filter((item) => item.id !== bookId);
        setLocalStorage(this.bookInfo);
        this.displayBookCollection();
      });
    });
  }
}

export default BookCollection;