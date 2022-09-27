// display error message if storage is empty
export default function emptyStorage() {
  if (localStorage.getItem('books') === null || localStorage.getItem('books') === '[]') {
    document.querySelector('.list-empty').style.display = 'block';
  } else {
    document.querySelector('.list-empty').style.display = 'none';
  }
}