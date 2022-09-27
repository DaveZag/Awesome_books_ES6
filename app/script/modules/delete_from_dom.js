import deleteInStorage from './delete_in_localStorage.js';

export default function deleteFromDom(e) {
  const item = e.target;
  const parent = item.parentElement;

  if (e.target.nodeName === 'BUTTON') {
    parent.remove();
    deleteInStorage(parent);
  }
}