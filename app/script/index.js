// module to display a section on navlink click
import showSection from './modules/show_section.js';

// module to display error message only if storage is empty
import emptyStorage from './modules/list_error_msg.js';

// module to print book if any is saved in local storage when page is loaded
import displayOnLoad from './modules/show_books_onLoad.js';

// module to check if there is any user input and then add book to browser's local storage
import addBook from './modules/add_book.js';

// module to display menu and remove bodyscroll
import menu from './modules/mobile_menu.js';

// footer date
import date from './modules/footer.js';

// top time
import topTime from './modules/get_time.js';

// time at the top of the page
setInterval(topTime, 1000);
// menu interactions
menu();
// check storage
emptyStorage();
// show section on click
showSection();
// show Books when page is loaded
displayOnLoad();
// validate user input
addBook();
// footer
date();