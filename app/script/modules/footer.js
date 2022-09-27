const date = () => {
  const year = new Date().getFullYear();
  const footerDate = document.querySelector('.footer span');
  footerDate.innerText = year;
};

export default date;