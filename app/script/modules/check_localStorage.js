// Check if browser's local storage is empty or not
export default function checkStorage() {
  let arrBooks;
  if (localStorage.getItem('books') === null) {
    arrBooks = [];
  } else {
    arrBooks = JSON.parse(localStorage.getItem('books'));
  }
  return arrBooks;
}