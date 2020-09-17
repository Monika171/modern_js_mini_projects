// ES5 version

// Book Constructor
// creates the actual book
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Contructor
// set of prototype methods -add book, show the book, alert

function UI(){}

UI.prototype.addBookToList = function(book){
  // console.log(book);
  const list = document.getElementById('book-list');

  // create tr element
  const row = document.createElement('tr');

  // Insert cols
  row.innerHTML = `
  <td>${book.title}</td>
  <td>${book.author}</td>
  <td>${book.isbn}</td>
  <td><a href="#" class='delete'>X</a></td>
  `;

  list.appendChild(row);
  // console.log(row);
}

// Show Alert
UI.prototype.showAlert = function(message, className) {
  // Create div
  const div = document.createElement('div');

  //Add classes
  div.className = `alert ${className}`;

  //Add text
  div.appendChild(document.createTextNode(message));

  //Add parent
  const conatiner = document.querySelector('.container');

  //Get form
  const form = document.querySelector('#book-form');

  //Insert alert (what to insert, before what)
  conatiner.insertBefore(div, form);

  // Timeout after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').remove();
  }, 3000);
}

// Delete Book
UI.prototype.deleteBook = function(target) {
  if(target.className === 'delete') {
    target.parentElement.parentElement.remove();
  }
}

// Clear Fields
UI.prototype.clearFields = function(){
  document.getElementById('title').value = '';
  document.getElementById('author').value = '';
  document.getElementById('isbn').value = '';
}


// Event Listeners for adding a book
document.getElementById('book-form').addEventListener('submit', function(e){
// console.log('test');
const title = document.getElementById('title').value,
      author = document.getElementById('author').value,
      isbn = document.getElementById('isbn').value;
// console.log(title, author, isbn);

// instantiating book
const book = new Book(title, author, isbn);

// instantiate UI
const ui = new UI();
// console.log(ui);

// Validate
if(title === '' || author === '' || isbn === '') {
  // alert('Failed');
  // Error alert
  ui.showAlert('Please fill in all the fields', 'error');
}else {

// Add book to list
ui.addBookToList(book);

//Show success
ui.showAlert('Book Added', 'success');

ui.clearFields();
// console.log(book);

}

e.preventDefault();
});

// Event Listener for delete

document.getElementById('book-list').addEventListener('click', function(e){
  
  // Instantiate UI
  const ui = new UI();

  ui.deleteBook(e.target);

  // Show message
ui.showAlert('Book removed!', 'success');

  e.preventDefault();
});