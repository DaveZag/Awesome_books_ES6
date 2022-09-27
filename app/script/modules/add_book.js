import * as component from './components.js';
import saveToLocal from './save_to_localStorage.js';
import printBook from './printBooks.js';
import Book from './book.js';
import emptyStorage from './list_error_msg.js';

// add event listenener to add button and call the needed functions like saveToLocal, printBook...
export default function addBook() {
  component.addBtn.addEventListener('click', () => {
    if (component.bookTitle.value !== '' && component.bookAuthor !== '') {
      const newBook = new Book(component.bookTitle.value, component.bookAuthor.value);
      saveToLocal(newBook);
      printBook(newBook);
      emptyStorage();
      component.bookTitle.value = '';
      component.bookAuthor.value = '';
    } else {
      document.querySelector('.error').innerText = 'Please Enter a the Title and the Author';
      document.querySelector('.error').style.display = 'flex';
    }
  });

  document.querySelectorAll('input').forEach((input) => {
    input.addEventListener('focus', () => {
      document.querySelector('.error').style.display = 'none';
    });
  });
}