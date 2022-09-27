import checkStorage from './check_localStorage.js';

// save book to browser's local storage
export default function saveToLocal(book) {
  const arrBooks = checkStorage();
  arrBooks.push(book);
  localStorage.setItem('books', JSON.stringify(arrBooks));
}