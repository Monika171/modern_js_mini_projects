// //LESSON 21

// // Global Scope

// var a = 1;
// let b = 2;
// const c = 3;

// // function test (){
// // var a = 4;
// // let b = 5;
// // const c = 6;
// // console.log('Function Scope', a, b, c);
// // }
// // test();

// // if(true) {
// //   //Block scope
// // var a = 4;
// // let b = 5;
// // const c = 6;
// // console.log('If Scope', a, b, c); // If Scope 4 5 6
// // }
// // console.log('Global Scope', a, b, c); // Global Scope 4 2 3

// // for (let a = 0; a < 10; a++){
// //   console.log( `loop: ${a}`);
// // }
// console.log('Global Scope', a, b, c);

// //LESSON 20
// // WINDOW METHODS / OBJECTS / PROPERTIES

// let val;

// // Outer, Inner height and width

// //val = window.outerHeight;
// //val = window.outerWidth;
// val = window.innerHeight;
// val = window.innerWidth;
// //scroll points;
// val = window.scrollY;
// val = window.scrollX;

// // Location Objects
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// // //Redirect
// // window.location.href = 'http://google.com';

// // //Reload
// // window.location.reload();

// //History Object

// //window.history.go(-2);
// //val = window.history.length;

// //Navigator Object
// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;
// console.log(val);
// // if(confirm('Are you sure')){
// //   console.log('yes');
// // } else {
// //   console.log('no');
// // }

// // const input = prompt();
// // alert(input);
// //window.console.log(123);
// //window.alert('Hellow world');

// //LESSON 19

// //FORIN

// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40
// }
// for(let x in user){
//     console.log(`${x} : ${user[x]}`);
// }

// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// //FOREACH
// // cars.forEach(function(car){
// //   console.log(car);
// // });

// // cars.forEach(function(car, index, array){
// //   console.log(`${index}: ${car}`);
// //   console.log(array);
// // });

// // //MAP
// // const users = [
// //   {id:1, name:'John'},
// //   {id:2, name:'Sara'},
// //   {id:3, name:'Karen'},
// //   {id:4, name:'Steve'},
// // ];

// // const ids = users.map(function(user){
// //   return user.id;
// // });
// // console.log(ids);

// // for(let i = 0; i < cars.length; i++)
// // {
// //   console.log(cars[i]);
// // }

// // let i = 1;
// // do {
// //   console.log('Number '+i);
// //   i++;
// // }
// // while(i<10);

// // let i = 0;

// // while(i < 10) {
// //   console.log('Number '+i);
// //   i++;
// // }

// // for(let i = 0; i <= 10; i++){
  
// //   if(i === 2){
// //     console.log('2 is my fav number');
// //     continue;
// //   }

// //   if(i === 5){
// //     console.log('Stop the loop');
// //     break;
// //   }

// //   console.log('Number '+i);
// // }

// //LESSON 18

// //PROPERTY METHODS

// // When function is put inside object, it's called 'method'

// const todo = {
//   add: function(){
//     console.log('Add todo..');
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// }

// todo.delete = function(){
//   console.log(`Delete todo...`);
// }

// todo.add();
// todo.edit(22);
// todo.delete();

// // IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS : IIFEs

// // (function(){
// //   console.log('IIFE Ran..');
// // })();

// // (function(name){
// //   console.log('Hello '+name);
// // })('ABC');

// //FUNCTION EXPRESSIONS eg, in hoistings?, enclosures?
// //putting function as a variable assignment
// //named anonymous
// //eg: const square = function square(){}

// const square = function(x = 3){
// return x*x;
// };

// //console.log(square(8));


// function greet(firstName = 'John', lastName = 'Doe'){
//   // if(typeof firstName === 'undefined'){
//   //   firstName = 'John'
//   // }
//   // if(typeof lastName === 'undefined'){
//   //   lastName = 'Doe'
//   // }
//   //console.log('Hello');
//   return 'Hello ' + firstName + ' '+ lastName;
// }

// //console.log(greet());
// //console.log(greet('Steve','Smith'))

// //LESSON 17

// const color = 'yellow';

// switch(color){
//   case 'red':
//     console.log('color is red');
//     break;
//   case 'blue':
//     console.log('color is blue');
//     break;
//   default:
//     console.log('color is not red or blue');
//     break;
// }

// let day;
// switch (new Date().getDay()){
//     case 0:
//       day = 'Sunday';
//       break;
//     case 1:
//       day = 'Monday';
//       break;
//     case 2:
//       day = 'Tuesday';
//       break;
//     case 3:
//       day = 'Wednesday';
//       break;
//     case 4:
//       day = 'Thursday';
//       break;
//     case 5:
//       day = 'Friday';
//       break;
//     case 6:
//       day = 'Saturday';
//       break;

// }

// console.log(`Today is ${day}`);

// //LESSON 16
// const id = 100;

// const color = 'yellow';

// const name = 'Steve';
// const age = 70;

// if(id === 100)
// console.log('correct');
// else
// console.log('incorrect');

// console.log(id === 100 ? 'correct': 'incorrect');

// if(age <16 || age > 65){
//   console.log(`${name} cannot run in race`)
// } else {
//   console.log(`${name} is registered for race`);
// }


// if(age > 0 && age < 12){
//   console.log(`${name} is a child`)
// } else if(age >=13 && age <=19){
//   console.log(`${name} is a teenager`);
// } else {
//   console.log(`${name} is an adult`);
// }


// if(color === 'red'){
//   console.log('color is red');
// } else if(color === 'blue'){
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }


// if (id > 100){
// console.log('correct');
// } else{
//   console.log('incorrect');
// }

// //IMPORTANT
// if(typeof id !== 'undefined'){
//   console.log(`The ID is ${id}`);
// } else{
//   console.log('no id');
// }
// if (id == 100){
// console.log('correct');
// } else{
//   console.log('incorrect');
// }

// if (id != 101){
//   console.log('correct');
//   } else{
//     console.log('incorrect');
//   }

// if (id === 100){
//   console.log('correct');
//   } else{
//     console.log('incorrect');
//   }

// if (id !== 100){
//   console.log('correct');
//   } else{
//     console.log('incorrect');
//   }

// //LESSON 15

// let val;
// const today = new Date();
// let birthday = new Date('9-10-1981 11:25:00');

// birthday = new Date('September 10 1981');
// birthday = new Date('9/10/1981');

// //val = today;
// //val = today.toString();
// //val = birthday;

// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(2);
// birthday.setDate(12);
// birthday.setFullYear(1985);
// birthday.setHours(3);
// birthday.setMinutes(30);
// birthday.setSeconds(25);
// //console.log(val);
// console.log(birthday);

// //console.log(typeof val);

// //LESSON 14

// const person = {
// firstName: 'Steve',
// lastName:'Smith',
// age: 33,
// email: 'steve@aol.com',
// hobbies: ['music', 'sports'],
// address: {
//   city: 'Miami',
//   state: 'FL'
// },
// getBirthYear: function(){
//   return 2017 - this.age;
// }
// }

// let val;
// val = person;
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies[1];
// val = person.address.state;
// val = person.address['city'];

// val = person.getBirthYear();

// const people = [
// {name:'John', age:30},
// {name:'Mike', age:36},
// {name:'Nancy', age:34},
// ];

// for(let i=0; i<people.length; i++){
//   console.log(people[i].name);
// }

// //console.log(val);

// //LESSON 13
// const numbers = [43,56,33,23,44,36,5];
// const numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple','Banana','Orange','Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:2}, new Date()];
// let val;
// val = numbers.length;
// val = Array.isArray(numbers);
// val = numbers[0];
// numbers[2] = 110;
// val = numbers.indexOf(36);
// numbers.push(250);
// //Add to front
// numbers.unshift(120);
// numbers.pop();
// //Remove from front
// numbers.shift();
// numbers.splice(1,3);
// numbers.reverse();
// val = numbers.concat(numbers2);
// val = fruit.sort();
// val = numbers.sort();

// val = numbers.sort(function(x,y){
// return x - y;
// });

// val = numbers.sort(function(x,y){
//   return y - x;
//   });
// function under50(num){
//   return num < 50;
// }

// val = numbers.find(under50);

// function over50(num){
//   return num > 50;
// }

// val = numbers.find(over50);

// console.log(numbers);
// console. log(val);


// //LESSON 12

// const name = 'John';
// const age = '31';
// const job = 'Web Developer';
// const city = 'Miami';
// let html;

// // html = '<ul><li>Name: '+name+'</li><li>Age: '+age+'</li><li>Job: '+job+'</li><li>City: '+city+'</li></ul>';

// // html = '<ul>'+
// // '<li>Name: '+name+'</li>'+
// // '<li>Age: '+age+'</li>'+
// // '<li>Job: '+job+'</li>'+
// // '<li>City: '+city+'</li>'+
// // '</ul>';

// function hello() {
//   return 'hello';
// }

// html = `<ul>
// <li>Name: ${name}</li>
// <li>Age: ${age}</li>
// <li>Job: ${job}</li>
// <li>${2+2}</li>
// <li>${hello()}</li>
// <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// </ul>`;
// document.body.innerHTML = html;


// //LESSON 11
// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = 'Hello there my name is mon';
// const tags = 'web design, web development, programming';

// let val;

// val = firstName + lastName;
// val = firstName + ' ' + lastName;
// val = 'Brad ';
// val += 'Traversy';
// val = 'Hello, my name is '+ firstName + 'and Iam ' + age + 'years old';
// val = 'That\'s awesome, I can\'t wait';
// val = "That's awesome, I can't wait!!";
// val = firstName.length;
// val = firstName.concat(' ',lastName);
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();
// val = firstName[1];
// val = firstName.indexOf('a');
// val = firstName.lastIndexOf('m'); //??????
// val = firstName.charAt('4');
// val = firstName.charAt(firstName.length - 1);
// val = firstName.substring(0,4);
// val = firstName.slice(0,4);
// val = firstName.slice(-3);
// val = str.split(' ');
// val = tags.split(',');
// val = str.replace('mon', 'sam');

// val = str.includes('foo');

// console.log(str);
// console.log(val);

// //LESSON 10

// const num1 = 100;
// const num2 = 50;
// let val;

// val = Math.PI;
// val = Math.E;
// val = Math.round(2.4);
// val = Math.ceil(2.4);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.min(2,34,56,7899,3,4,-5);
// val = Math.max(2,34,56,7899,3,4,-5);
// val = Math.random();
// val = Math.floor(Math.random()*20 + 1);

// console.log(val);

// //LESSON 9
// let  val;

// val = String(555);
// val = String(4+4);
// val = String(true);
// val = String(new Date());
// val = String([1,2,3,4]);

// val = (5).toString();
// val = (true).toString();

// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');
// val = Number([1,2,3]);

// val = parseInt('100.67');
// val = parseFloat('100.67');

// // console.log(val);
// // console.log(typeof val);
// // console.log(val.toFixed(2));
// //console.log(val.length);

// const val1 = String(6);
// const val2 = 8;
// const sum = Number(val1 + val2);

// console.log(sum);
// console.log(typeof sum);

//LESSON 8

// const name ="John Doe";
// const age = 45;
// const hasKids = true;
// const car = null;
// let test;
// const sym = Symbol();

// const hobbies = ['movies', 'music'];
// const address = {
//   city: 'Boston',
//   state: 'MA'
// }
// const today = new Date();
// console.log(today);
// console.log(typeof today);


//LESSON 7

//var, let, const

// var name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

// var greeting;
// console.log(greeting);
// greeting= 'Hello';
// console.log(greeting);

// var firstName = 'John';
// var first_name = 'Sara';
// var FirstName = 'Tom';   //oop

// let name = 'John Doe';
// console.log(name);

// name = 'Steve Smith';
// console.log(name);

//CONST

// const name = 'John';
// console.log(name);

//name = 'Sara';
//const greeting;

// const person = {
//   name: 'John',
//   age: 30
// }

// person.name = 'Sara';
// console.log(person);

// const numbers = [1,2,3,4,5];
// numbers.push(7);
// console.log(numbers);

/*
//LESSON 6
alert('Hello World');

console.log('Hello World');
console.log(123);
console.log(true);
var greeting = 'Hello';
console.log(greeting);
console.log([1,2,3,4]);
console.log({a:1,b:2});
console.table({a:4,b:2});

console.error('This is some error');
console.clear();
console.warn('This is a warning');
console.time('Hello');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.timeEnd('Hello');
*/