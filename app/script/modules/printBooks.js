import { bookContainer } from './components.js';

// Print book in the book list section
export default function printBook(book) {
  const div = document.createElement('div');
  div.classList.add('bookBox');
  bookContainer.appendChild(div);
  const textContainer = document.createElement('div');
  textContainer.classList.add('bookText');
  textContainer.innerHTML = `
      
                  <p class="book-title">"${book.title}" </p>
                  by
                  <p>${book.author} </p>`;

  div.appendChild(textContainer);
  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-btn');
  removeButton.innerText = 'Remove';
  div.appendChild(removeButton);
}