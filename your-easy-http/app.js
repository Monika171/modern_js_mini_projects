// SECOND ADVANCED VERSION

const http = new EasyHTTP;

// User Data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Delete User
const users = http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));


// // Update/Put User
// const users = http.put('https://jsonplaceholder.typicode.com/users/2', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// // Create User
// const users = http.post('https://jsonplaceholder.typicode.com/users', data)
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// Get Users
// const users = http.get('https://jsonplaceholder.typicode.com/users')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

// FIRST SIMPLE VERSION

// const http = new easyHTTP;


// // Get Posts
// // http.get('https://jsonplaceholder.typicode.com/posts', function(err, posts){
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(posts);
// //   } 

// // });


// // Get Single Post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', function(err, post){
// //   if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   } 

// // });

// // Create Data
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// // Create Post
// // http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post) {
// //     if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   } 

// // });

// // Update Post
// // http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
// //     if(err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   } 
// // });

// // Delete Post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function(err, response){
//   if(err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   } 
// });
