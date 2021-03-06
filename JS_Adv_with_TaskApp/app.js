//LESSON 33 setlocal storage item

// localStorage.setItem('name','John');
// localStorage.setItem('age','30');

// sessionStorage.setItem('name','Beth');

// remove from Storage
// localStorage.removeItem('name');

// get from Storage

// const name = localStorage.getItem('name');
// const age = localStorage.getItem('age');
// console.log(name, age);

// localStorage.clear();

document.querySelector('form').addEventListener('submit', function(e){

  const task = document.getElementById('task').value;

  let tasks;

  if(localStorage.getItem('tasks') === null){
    tasks = [];
  }else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  // console.log(task);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  alert('Task saved');
  e.preventDefault();
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach(function(task){
  console.log(task);
});


//LESSON 32 Event Bubbling

// document.querySelector('.card-title').addEventListener('click',
// function(){
// console.log('card title');
// });

// document.querySelector('.card-content').addEventListener('click',
// function(){
// console.log('card content');
// });

// document.querySelector('.card').addEventListener('click',
// function(){
// console.log('card');
// });

// document.querySelector('.col').addEventListener('click',
// function(){
// console.log('col');
// });

//EVENT DELEGATION

// const delItem = document.querySelector('.delete-item');

// delItem.addEventListener('click', deleteItem);

// document.body.addEventListener('click', deleteItem);

// function deleteItem(e){
//   // console.log('delete Item');
//   // console.log(e.target);
//   // if(e.target.parentElement.className === 'delete-item secondary-content'){    
//   //   console.log('delete Item');
//   // }

//   if(e.target.parentElement.classList.contains('delete-item')){    
//     console.log('delete Item');
//     e.target.parentElement.parentElement.remove();
//   }
// }

// //LESSON 31

// const form = document.querySelector('form');
// const taskInput = document.getElementById('task');
// const heading = document.querySelector('h5');
// const select = document.querySelector('select');

// taskInput.value = '';
// // form.addEventListener('submit', runEvent);

// // taskInput.addEventListener('keydown', runEvent);
// // taskInput.addEventListener('keyup', runEvent);
// // taskInput.addEventListener('keypress', runEvent);
// // taskInput.addEventListener('focus', runEvent);
// // taskInput.addEventListener('blur', runEvent);
// // taskInput.addEventListener('cut', runEvent);
// // taskInput.addEventListener('paste', runEvent);

// // taskInput.addEventListener('input', runEvent);
// select.addEventListener('change', runEvent);
// function runEvent(e) {
// console.log(`EVENT TYPE: ${e.type}`);
// console.log(e.target.value);
// //heading.innerText = e.target.value;
// // console.log(taskInput.value);
// // e.preventDefault();
// }

// //LESSON 30
// //console.log('aaaaaa');
// const clearBtn = document.querySelector('.clear-tasks');
// const card = document.querySelector('.card');
// const heading = document.querySelector('h5');

// //click
// // clearBtn.addEventListener('click', runEvent);
// //double click
// // clearBtn.addEventListener('dblclick', runEvent);
// // clearBtn.addEventListener('mousedown', runEvent);
// // clearBtn.addEventListener('mouseup', runEvent);
// // card.addEventListener('mouseenter', runEvent);
// // card.addEventListener('mouseleave', runEvent);
// // card.addEventListener('mouseover', runEvent);
// // card.addEventListener('mouseout', runEvent);
// card.addEventListener('mousemove', runEvent);

// //event handler

// function runEvent(e){
//   console.log(`EVENT TYPE: ${e.type}`);
//   heading.innerHTML = `Mouse: ${e.offsetX} MouseY: ${e.offsetY}`;
//   document.body.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},40)`;
// }

// //LESSON 29

// // document.querySelector('.clear-tasks').addEventListener('click',
// //   function(e){
// //     console.log('Hello World');

// //     //e.preventDefault();
// //   });

// // document.querySelector('.clear-tasks').addEventListener('click', onClick);

// // function onClick(e){
// //   console.log('Clicked');
// //   //e.preventDefault();
// // }

// document.querySelector('.clear-tasks').addEventListener('click', onClick);

// //document.querySelector('.clear-tasks').addEventListener('mouseover', onClick);

// function onClick(e){
//   //console.log('Clicked');
//   let val;

//   val = e;
// // event target element

// val = e.target;
// val = e.target.id;
// val = e.target.className;
// val = e.target.classList;
// e.target.innerText = 'Hello';

// // event type
// val =e.type;

// //timestamp

// val = e.timeStamp;

// //coords event relative to the window;
// val = e.clientY;
// //val = e.clientX;
// //val = e.offsetY;
// val = e.offsetX;
//   console.log(val);
// }

// //LESSON 28
// //REPLACE ELEMENT

// //Create Element
// const newHeading = document.createElement('h2');

// newHeading.id = 'task-title';

// newHeading.appendChild(document.createTextNode('Task List'));

// const oldHeading = document.getElementById('task-title');
// //parent
// const cardAction = document.querySelector('.card-action');

// cardAction.replaceChild(newHeading, oldHeading);
// //console.log(newHeading);

// //REMOVE ELEMENT

// const lis = document.querySelectorAll('li');
// const list = document.querySelector('ul');

// lis[0].remove();

// //Also can be done by remove child element

// list.removeChild(lis[3]);

// //classes and attributes

// const firstli = document.querySelector('li:first-child');

// const link = firstli.children[0];

// let val;

// //classes
// val = link.className;
// val = link.classList;
// val = link.classList[0];
// link.classList.add('test');
// link.classList.remove('test');
// val = link;

// //attributes

// val = link.getAttribute('href');
// val = link.setAttribute('href', 'http://google.com');
// link.setAttribute('title','Google');
// val = link.hasAttribute('title');
// //val = link.hasAttribute('href');
// link.removeAttribute('title');
// val = link;
// console.log(val);

// //LESSON 27

// //create element
// const li = document.createElement('li');

// // add class
// li.className = 'collection-item';

// // add id

// li.id = 'new-item';

// //Add attribute
// li.setAttribute('title', 'New-Item');

// //create text node and append

// li.appendChild(document.createTextNode('Hello World'));

// //create new link element
// const link = document.createElement('a');

// //add classes
// link.className = 'delete-item secondary-content';

// // add icon html
// link.innerHTML = '<i class="fa fa-remove"></i>';

// //append link into li
// li.appendChild(link);

// //append li as child to ul

// document.querySelector('ul.collection').appendChild(li);

// console.log(li);
// //LESSON 26
// let val;

// const list = document.querySelector('ul.collection');
// const listItem = document.querySelector('li.collection-item:first-child');
// val = listItem;
// val = list;
// //Get child Nodes ===> Nodelist
// val = list.childNodes;
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[1].nodeType;

// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment
// // 9 - Document itself
// // 10 - Doctype

// // Get children element nodes ===> HTML Collection
// val = list.children;
// val = list.children[1];
// list.children[1].textContent = 'Hello';
// //Children of Children
// val = list.children[3].children[0].id = 'test-link';
// val = list.children[3].children[0];
// //First child
// val = list.firstChild;
// val = list.firstElementChild;
// //Last child
// val = list.lastChild;
// val = list.lastElementChild;
// //Count child Elements
// val = list.childElementCount;
// // Get Parent node
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// //Get next siblings

// val = listItem.nextSibling;
// val = listItem.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling;
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling;

// //Get previous siblings

// // val = listItem.previousSibling;
// // val = listItem.previousElementSibling;

// console.log(val);

// //LESSON 25
// // document.querySelectorAll

// const items = document.querySelectorAll('ul.collection li.collection-item');
// items.forEach(function(item, index){    
//     item.textContent = `${index}: Hello`;
//   });

// const liOdd = document.querySelectorAll('li:nth-child(odd)');
// const liEven = document.querySelectorAll('li:nth-child(even)');

// liOdd.forEach(function(li, index){    
//     li.style.background = '#ccc';
//  });

// //for array and collection, as length works on collections
// for(let i = 0; i < liEven.length; i++){
//   liEven[i].style.background = '#f4f4f4';
// }

// console.log(items);

// const items = document.getElementsByClassName('collection-item');
// console.log(items);
// console.log(items[0]);
// items[0].style.color = 'red';
// items[3].textContent = 'Hello';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
//any actually all div and lists

//console.log(listItems);

// let lis = document.getElementsByTagName('li');
//  console.log(lis);
// console.log(lis[0]);
// lis[0].style.color = 'red';
// lis[3].textContent = 'Hello';

// //lis.reverse(); //error
// //convert HTML collection to an array
//  lis = Array.from(lis);
//  lis.reverse(); //error

// lis.forEach(function(li, index){
//   console.log(li.className)
//   li.textContent = `${index}: Hello`;
// });
// console.log(lis);

// //LESSON 24

//  console.log(document.querySelector('#task-title'));
//  console.log(document.querySelector('.card-title'));
//  console.log(document.querySelector('h5')); //first one

//  document.querySelector('li').style.color = 'red';
// document.querySelector('ul li').style.color = 'blue';
//  document.querySelector('li:last-child').style.color = 'red';
//  document.querySelector('li:nth-child(3)').style.color = 'yellow';
//  document.querySelector('li:nth-child(4)').textContent = 'Hello World';
//  document.querySelector('li:nth-child(odd)').style.background = '#ccc';
//  document.querySelector('li:nth-child(even)').style.background = '#f4f4f4';

// // console.log(document.getElementById('task-title'));

// // console.log(document.getElementById('task-title').id);
// // console.log(document.getElementById('task-title').className);

// // document.getElementById('task-title').style.background = '#333';
// // document.getElementById('task-title').style.color = '#fff';
// // document.getElementById('task-title').style.padding = '5px';
// // //document.getElementById('task-title').style.display = 'none';

// // document.getElementById('task-title').textContent = 'Task List';
// // document.getElementById('task-title').innerText = 'My Tasks';
// //  document.getElementById('task-title').innerHTML = '<span style="color:red">Task List</span>';

// //  const taskTitle = document.getElementById('task-title');
// //  taskTitle.innerHTML = '<span style="color:blue">Task List</span>';

// //LESSON 23 (DOM begins)

//  let val;
//  val = document;
//  val = document.all;
//  val = document.all[2];
//  val = document.all.length;
//  val = document.head;
//  val = document.body;
//  val = document.doctype;
//  val = document.domain;
//  val = document.URL;
//  val = document.characterSet;
//  val = document.contentType;

//  val = document.forms;
//  val = document.forms[0];
//  val = document.forms[0].id;
//  val = document.forms[0].method;
//  val = document.forms[0].action;
//  val = document.forms[0];
//  val = document.links;
//  val = document.links[0];
//  val = document.links[0].id;
//  val = document.links[0].className;
//  val = document.links[0].classList[0];
//  val = document.images;
//  val = document.scripts;
//  val = document.scripts[2].getAttribute('src');

// //RIGHT METHOD/WAY
// let scripts = document.scripts;
// let scriptsArr = Array.from(scripts);

// scriptsArr.forEach(function(script){
// console.log(script.getAttribute('src'));
// });

// //WRONG METHOD/WAY
// //  let scripts = document.scripts;
// //  scripts.forEach(function(script){
// //  console.log(script);
// //  });

//  console.log(val);
