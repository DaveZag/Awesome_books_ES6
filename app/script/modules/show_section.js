export default function showSection() {
  const navigation = document.querySelector('.nav-links');
  const links = navigation.getElementsByClassName('nav-link');

  for (let count = 0; count < links.length; count += 1) {
    links[count].addEventListener('click', (e) => {
      const current = document.querySelectorAll('.active');
      const sections = document.querySelectorAll('.content');
      current[0].className = current[0].className.replace(' active', '');
      e.target.className += ' active';

      sections[0].className = sections[0].className.replace(' show', '');

      for (let counter = 0; counter < sections.length; counter += 1) {
        if (e.target.getAttribute('data-show') === sections[counter].id && sections[counter].classList.contains('show') !== true) {
          sections[counter].className += ' show';
        } else {
          sections[counter].classList.remove('show');
        }
      }
    });
  }
}
