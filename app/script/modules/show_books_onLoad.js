import checkStorage from './check_localStorage.js';
import printBook from './printBooks.js';
import * as component from './components.js';
import deleteFromDom from './delete_from_dom.js';

export default function displayOnLoad() {
  document.addEventListener('DOMContentLoaded', () => {
    const arrBooks = checkStorage();
    arrBooks.forEach((book) => {
      printBook(book);
    });

    // delete when delete button is clicked
    component.bookContainer.addEventListener('click', (e) => {
      deleteFromDom(e);
    });
  });
}