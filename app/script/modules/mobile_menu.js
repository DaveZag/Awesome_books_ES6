import {
  body, openBtn, navbar, closeBtn,
} from './components.js';

const menu = () => {
  const mediaQuery = window.matchMedia('(max-width: 767px)');

  function checkMedia(e) {
    // Check if the media query is true
    if (e.matches) {
      openBtn.addEventListener('click', () => {
        navbar.classList.add('shown');
        document.querySelector('.open').style.display = 'none';

        document.querySelectorAll('section, footer').forEach((element) => {
          element.classList.add('background');
        });

        closeBtn.style.display = 'flex';
        closeBtn.style.transition = 'display';
        closeBtn.style.transitionDuration = '200ms';
        body.style.overflowY = 'hidden';
      });

      closeBtn.addEventListener('click', () => {
        navbar.classList.remove('shown');
        document.querySelector('.open').style.display = 'flex';

        document.querySelectorAll('section, footer').forEach((element) => {
          element.classList.remove('background');
        });
        closeBtn.style.display = 'none';
        document.querySelector('.test').style.backgroundColor = 'none';
        body.style.overflowY = 'auto';
      });
    }
  }

  mediaQuery.addEventListener('change', checkMedia);
  checkMedia(mediaQuery);
};

export default menu;