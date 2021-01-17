/*
//1. Basic Object Literal
const book1 = {
   title: 'Book 1',
   author: 'John Doe',
   year: '2023',
   getSummary: function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
};

console.log(book1.getSummary());
console.log(Object.values(book1));
console.log(Object.keys(book1));
*/

/*
//2. Constructors & 3. Prototype
//Constructor
function Book(title, author, year){
   // console.log('Book Initiated..');
   this.title = title;
   this.author = author;
   this.year = year;
   this.getSummary = function() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

// console.log(book1.getSummary());
// console.log(book2.getSummary());

//getAge
Book.prototype.getAge = function() {
   const years = new Date().getFullYear() - this.year;
   return `${this.title} is ${years} year old`;
}

// console.log(book2.getAge());

//revise / change year
Book.prototype.revise = function(newYear) {
   this.year = newYear;
   this.revised = true;
}

//Instantiate
const book1 = new Book('Book 1', 'John Doe', '2012');
const book2 = new Book('Book 2', 'Sam Dill', '2015');

console.log(book2);
book2.revise('2018');
console.log(book2);

*/
/*
//4.Inheritance
//Constructor
function Book(title, author, year){
   // console.log('Book Initiated..');
   this.title = title;
   this.author = author;
   this.year = year;

}
//get Summary
Book.prototype.getSummary = function() {
   return `${this.title} was written by ${this.author} in ${this.year}`;
}

//Magazine Constructor
function Magazine (title, author, year, month){
   Book.call(this, title, author, year);
   this.month = month;
}

//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

//Instantiate Magazine Object
const mag1 = new Magazine('Mag 1', 'Peter', '2099', 'December');

//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;

console.log(mag1.getSummary());
console.log(mag1);
*/

/*
//5.Object Create
const bookProtos = {
   getSummary: function () {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   },
   getAge : function() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} year old`;
   }
};

//Create Object
const book1 = Object.create(bookProtos);
book1.title = 'Book 1';
book1.author = 'Bill';
book1.year = '2222';
console.log(book1);

*/
/*
//6.Class
class Book {
   constructor(title, author, year){
      this.title = title;
      this.author = author;
      this.year = year;
   }
   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
   getAge() {
      const years = new Date().getFullYear() - this.year;
      return `${this.title} is ${years} year old`;
   }
   revise (newYear) {
      this.year = newYear;
      this.revised = true;
   }
}
*/

//6.SubClass
class Book {
   constructor(title, author, year){
      this.title = title;
      this.author = author;
      this.year = year;
   }
   getSummary() {
      return `${this.title} was written by ${this.author} in ${this.year}`;
   }
}

class Magazine extends Book {
   constructor(title, author, year, month) {
      super(title, author, year);
      this.month = month;
   }
}

const mag1 = new Magazine ('Mag1', 'Will', '2022', 'Jannuary');
console.log(mag1.getSummary());