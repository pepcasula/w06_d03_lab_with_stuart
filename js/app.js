document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', formHandler);
  

});




const formHandler = function (event) {
  event.preventDefault();
  const bookTitle = event.target.title.value;
  const bookAuthor = event.target.author.value;
  const bookCategory = event.target.category.value;
  const textBlock = document.querySelector('#reading-list');
  const bookItem = document.createElement(`li`)
  bookItem.textContent = `${bookTitle}, ${bookAuthor}, ${bookCategory}`;
  textBlock.appendChild(bookItem);
  document.getElementById("new-item-form").reset();
};