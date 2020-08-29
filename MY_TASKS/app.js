const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event listeners
loadEventListeners();

function loadEventListeners(){
  // DOM load event, to load saved tasks from localstorage
  document.addEventListener('DOMContentLoaded', getTasks);
  //Add task event
  form.addEventListener('submit', addTask);
  //Remove task event
  taskList.addEventListener('click', removeTask);
  //Clear task event
  clearBtn.addEventListener('click', clearTasks);
  //Filter tasks event
  filter.addEventListener('keyup', filterTasks);
}

// Get Tasks from LS

function getTasks() {
  let tasks;
  //String to Array and Back
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task){
    const li = document.createElement('li');
  li.className = 'collection-item';
  //create text node and append to it
  li.appendChild(document.createTextNode(task));
  //create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);
  taskList.appendChild(li);
  });

}

function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
  }

  const li = document.createElement('li');
  li.className = 'collection-item';
  //create text node and append to it
  li.appendChild(document.createTextNode(taskInput.value));
  //create new link element
  const link = document.createElement('a');
  //Add class
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  taskList.appendChild(li);

  //Store in LS
  storeTaskInLocalStorage(taskInput.value);
  
  taskInput.value = '';
  //Append li to ul
  // console.log(li);
  e.preventDefault();
}

//Store task
function storeTaskInLocalStorage(task) {
  let tasks;
  //String to Array and Back
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Remove Task
function removeTask(e) {
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are You Sure?')) {
    e.target.parentElement.parentElement.remove();
    // console.log(e.target);

    //remove from LS
    removeTaskFromLocalStorage(e.target.parentElement.parentElement);
    }
  }  
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem) {
  let tasks;
  //String to Array and Back
  if(localStorage.getItem('tasks') === null){
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function(task, index){
    if(taskItem.textContent === task) {
      tasks.splice(index, 1);
    }
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
  // console.log(taskItem);
}
//Clear Tasks
function clearTasks() {
  //while there is still a first child
  while(taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }
  // taskList.innerHTML = '';
  clearTasksFromLocalStorage();
}

function clearTasksFromLocalStorage() {
  localStorage.clear();
}

//filter Tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  });
  // console.log(text);
}
