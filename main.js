import BookCollection from './modules/bookCollection.js';

const submitBtn = document.querySelector('#submitBtn');
const bookTitle = document.querySelector('#bookTitle');
const authorName = document.querySelector('#authorName');

const bookCollection = new BookCollection();

const addBook = (e) => {
  console.log('hola')
  e.preventDefault();

  let temp = -1;
  // eslint-disable-next-line array-callback-return
  bookCollection.bookInfo.map((object) => {
    if (object.id > temp) {
      temp = object.id;
    }
  });

  if (bookTitle.value && authorName.value) {
    bookCollection.addBook(temp + 1, bookTitle.value, authorName.value);
    bookTitle.value = '';
    authorName.value = '';
  }
};

bookCollection.displayBookCollection();
submitBtn.addEventListener('click', addBook);

const bookList = document.querySelector('#nav-booklist a');
const addNewBook = document.querySelector('#nav-add a');
const contact = document.querySelector('#nav-contact a');
const bookListSection = document.getElementById('bookList');
const addNewBookSection = document.getElementById('addNewBook');
const contactSection = document.getElementById('contact');

bookList.addEventListener('click', () => {
  bookList.classList.add('active');
  addNewBook.classList.remove('active');
  contact.classList.remove('active');
  bookListSection.classList.remove('hidden');
  addNewBookSection.classList.add('hidden');
  contactSection.classList.add('hidden');
});

addNewBook.addEventListener('click', () => {
  bookList.classList.remove('active');
  addNewBook.classList.add('active');
  contact.classList.remove('active');
  bookListSection.classList.add('hidden');
  addNewBookSection.classList.remove('hidden');
  contactSection.classList.add('hidden');
});

contact.addEventListener('click', () => {
  bookList.classList.remove('active');
  addNewBook.classList.remove('active');
  contact.classList.add('active');
  bookListSection.classList.add('hidden');
  addNewBookSection.classList.add('hidden');
  contactSection.classList.remove('hidden');
});

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');
const icon = navToggle.querySelector('.fa-times');
const openIcon = navToggle.querySelector('.fa-bars');

navToggle.addEventListener('click', () => {
  links.classList.toggle('show-links');
  icon.classList.toggle('close-icon');
  openIcon.classList.toggle('open-icon');
});