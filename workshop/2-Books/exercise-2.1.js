// Exercise 2.1
// ------------

// Create a Book class and then intantiate it 5 times with various books
// include the following properties in the constructor
//    - title (string)
//    - genre (string)
//    - author (string)
//    - isRead (boolean - whether or not you've read the book)
//
// Declare the books as book1, book2, book3, book4, book5
//
// If the book doesn't provide a value for `isRead`, it should default to
// `false`.
//
// Console.log them to verify that all is working.

class Book {
  constructor(title, genre, author, isRead) {
    this.title = title;
    this.genre = genre;
    this.author = author;
    this.isRead = isRead || false;
  }
}

const book1 = new Book('The Shining', 'Horror' ,'Stephen King');
const book2 = new Book('American Gods', 'Fiction', 'Neil Gaiman');
const book3 = new Book('Eloquent JavaScript', 'Programming', 'Marijn Haverbeke');
const book4 = new Book('The Eire Affair', 'Fantasy', 'Jasper Fforde', true);
const book5 = new Book('The Revisionists', 'Science-ficion', 'Thomas Mullen', true);

console.log(book1, book2, book3, book4, book5);