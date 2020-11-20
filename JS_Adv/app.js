// Lesson 67 The FetchAPI



// Lesson 67 The FetchAPI

// document.getElementById('button1').addEventListener('click', getText);

// document.getElementById('button2').addEventListener('click', getJson);

// document.getElementById('button3').addEventListener('click', getExternal);

// // Get from exxternal API

// function getExternal() {
//   fetch('https://api.github.com/users')
//   .then(function(res) {
//     return(res.json()); //the file
//   })
//   .then(function(data){
//     console.log(data); //in the file
//     let output = '';
//     data.forEach(function(user){
//       output += `<li>${user.login}</li>`;
//     });

//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err){
//     console.log(err);
//   });

// }


// // Get local json data

// function getJson() {
//   fetch('posts.json')
//   .then(function(res) {
//     return(res.json()); //the file
//   })
//   .then(function(data){
//     console.log(data); //in the file
//     let output = '';
//     data.forEach(function(post){
//       output += `<li>${post.title}</li>`;
//     });

//     document.getElementById('output').innerHTML = output;
//   })
//   .catch(function(err){
//     console.log(err);
//   });

// }

// // Get local text file data

// function getText() {
//   fetch('text.txt')
//   .then(function(res) {
//     return(res.text()); //the file
//   })
//   .then(function(data){
//     console.log(data); //in the file
//     document.getElementById('output').innerHTML = data;
//   })
//   .catch(function(err){
//     console.log(err);
//   });

// }


// Lesson 66 ES6 Promises

// const posts = [
//   {
//     title: "Post One",
//     body: 'This is post one'
//   },
//   {
//     title: "Post Two",
//     body: 'This is post two'
//   }
// ];

// // Asynchronous
// function createPost(post) {

//   // create promise and for errors 'reject'
//   return new Promise(function(resolve, reject){
//     setTimeout(function(){
//       posts.push(post);

//       const error = false;
//       if(!error) {
//         resolve();
//       } else {
//         reject('Error: Something went wrong');
//       }
      
//     }, 2000);
  

//   });  
// }

// function getPosts() {
// setTimeout(function(){
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//   });
//   document.body.innerHTML = output;
// }, 1000)
// }

// // when we get a promise reponse, we handle it with .then
// createPost({
//   title: "Post Three",
//   body: 'This is post three'
// })
// .then(getPosts)
// .catch(function(err){
//   console.log(err);
// });


// Lesson 63 Callback Functions

// to mimic our server and database
// const posts = [
//   {
//     title: "Post One",
//     body: 'This is post one'
//   },
//   {
//     title: "Post Two",
//     body: 'This is post two'
//   }
// ];

// // Asynchronous // pass in callback
// function createPost(post, callback) {
//   setTimeout(function(){
//     posts.push(post);
//     callback();
//   }, 2000);

// }

// function getPosts() {
// setTimeout(function(){
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//   });
//   document.body.innerHTML = output;
// }, 1000)
// }

// createPost({
//   title: "Post Three",
//   body: 'This is post three'
// },getPosts);


// No post three, SYNCHRONOUS
// function createPost(post) {
//   setTimeout(function(){
//     posts.push(post);
//   }, 2000);

// }

// function getPosts() {
// setTimeout(function(){
//   let output = '';
//   posts.forEach(function(post){
//     output += `<li>${post.title}</li>`;
//   });
//   document.body.innerHTML = output;
// }, 1000)
// }

// createPost({
//   title: "Post Three",
//   body: 'This is post three'
// });

// getPosts();

// Lesson 50 Inheritance(sub classes) and extending classes

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     //this.birthday = new Date(dob);
//   }

//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     //since its extending Person, we want to call person constructor, to do that use 'super()'

//     super(firstName, lastName);

//     this.phone = phone;
//     this.membership = membership;
//   }

//   static getMembershipCost() {
//     return 500;
//   }
// }

// const john = new Customer('John', 'Doe', '555-555-6666','Standard');

// console.log(john);
// console.log(john.greeting());

// console.log(Customer.getMembershipCost());

// Lesson 49 ES6 classes

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//     getsMarried(newLastName){
//     this.lastName = newLastName;
//   }

//   static addNumbers(x,y){
//     return x + y;
//   }
// }

// const mary = new Person('Mary', 'Williams', '11-13-1980');
// // LOOK STATIC METHODS- without instantiating an object
// // eg: adding two numbers as its a standalone method? like we dont need specific properties?


// mary.getsMarried('Thompson');
// console.log(mary);
// console.log(mary.greeting());
// console.log(mary.calculateAge());
// //console.log(mary.addNumbers(1,2)); //mary.addNumbers is not a function
// console.log(Person.addNumbers(3,7));


// Lesson 48 create objects using Object.create

// Object with different prototype method
// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName){
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// // console.log(mary);
// mary.getsMarried('Thompson');
// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());


// Lesson 47 - Prototypal Inheritance

// Person Constructor

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// //Greeting
// Person.prototype.greeting = function(){
// return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('John', 'Doe');

// // console.log(person1.greeting());

// // Customer constructor
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this, firstName, lastName);
//   // first argument 'this'
//   // next whatever been inherited
//   // Now extra properties
//   this.phone = phone;
//   this.membership = membership; 
// }

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return customer
// Customer.prototype.constructor = Customer;

// // Create customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-6666', 'Standard');

// console.log(customer1);
// // console.log(customer1.greeting()); // Not inheriting prototype, Inherit the Person prototype methods

// Customer.prototype.greeting = function(){
//   return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
//   } //override

// console.log(customer1.greeting());


// Lesson 46
//prototype is object itself
//all objects inherit objects from their prototype
//called Object.prototype

//in the example Person.prototype

// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();    
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970); 
       
//   // }
// }

// // Calculate age
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();    
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);     
// }

// // Get full name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person('John', 'Doe','8-12-1990');
// const mary = new Person('Mary', 'Johnson','March 20 1978');

// console.log(mary);
// console.log(john.calculateAge());
// console.log(mary.getFullName());

// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));
// //this is in the prototype and is not the part of own property

//Lesson 45 primitive built in constructors

// const name1 = 'Jeff';
// const name2 = new String('Jeff');

// //we can add properties to name2
// // name2.foo = 'bar';
// // console.log(name2);

// // //problem when matching types
// // console.log(typeof name1);
// // console.log(typeof name2);

// if(name === 'Jeff') {
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// // Number
// const num1 = 5;
// const num2 = new Number(5);

// console.log(typeof(num2));

// // Boolean
// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(typeof(bool2));

// // Function
// const getSum1 = function(x, y){
//   return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return x+y');
// console.log(getSum1(1,3));
// console.log(getSum2(1,4));

// // Object
// const john1 = {name: "john"};
// const john2 = new Object({name: "John"});
// console.log(john2);

// // Arrays
// const arr1 = [2,6,7,9];
// const arr2 = new Array(4,6,7,9);
// console.log(arr2);

// // Regular Expressions
// const re1 = /\w+/;
// const re2 = new RegExp('\\w+'); // escape '\'

// console.log(re2);

// Lesson 44 - this keyword

// const brad = {
//   name: 'Brad',
//   age: 30
// }

// console.log(brad);
// console.log(brad.age);

////////////

//Person constructor
//Contructor starts with capital

// function Person(name){
//   this.name = name;
//   // console.log(this);

// }
// // console.log(this);
// // this.alert(1);

// const brad = new Person('Brad');
// const john = new Person('John');

// // console.log(john);

//////////

// function Person(name, dob){
//   this.name = name;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   this.calculateAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
    
//     // 1970 ------1981|         --> this.birthday.getTime()
//     // 1970 ----------|-------2020 --> Date.now()
//     // 2020 minus 1981
//     // --------------|-------| x <- in milliseconds but from 1970. to 2009. we need how many years.
//     // 1970 -----------|2009 x (a year)
//     // we need difference (how many years.->39)
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970); 
       
//   }
// }
// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);
// // console.log(john.age);
// const brad = new Person('Brad', '9-10-1980');
// console.log(brad.calculateAge());
