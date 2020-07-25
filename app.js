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