// THIRD ADVANCED VERSION

class EasyHTTP {
  // Make an HTTP GET Request
  async get(url) {
    const response = await fetch(url);
    const resData = await response.json();
    return resData;
  }

// Make a HTTP POST Request

  async post(url, data) {
    
    const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
      
    }
  

// Make a HTTP PUT Request

  async put(url, data) {
    const response = await fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      const resData = await response.json();
      return resData;
  }

// Make a HTTP DELETE Request

async delete(url) {
  
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    });

    const resData = await 'Resource Deleted';
    return resData;
  
}

}


// SECOND ADVANCED VERSION

// class EasyHTTP {
//   // Make an HTTP GET Request
//   get(url) {
//     return new Promise((resolve, reject) => {
//       fetch(url)
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }


// // Make a HTTP POST Request

//   post(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'POST',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }

// // Make a HTTP PUT Request

//   put(url, data) {
//     return new Promise((resolve, reject) => {
//       fetch(url, {
//         method: 'PUT',
//         headers: {
//           'Content-type': 'application/json'
//         },
//         body: JSON.stringify(data)
//       })
//       .then(res => res.json())
//       .then(data => resolve(data))
//       .catch(err => reject(err));
//     });
//   }

// // Make a HTTP DELETE Request

// delete(url) {
//   return new Promise((resolve, reject) => {
//     fetch(url, {
//       method: 'DELETE',
//       headers: {
//         'Content-type': 'application/json'
//       }
//     })
//     .then(res => res.json())
//     .then(() => resolve('Resource Deleted'))
//     .catch(err => reject(err));
//   });
// }

// }

// FIRST SIMPLE VERSION
// function easyHTTP() {
//   this.http = new XMLHttpRequest();
// }


// // Make an HTTP GET Request
// easyHTTP.prototype.get = function(url, callback) {
//   this.http.open('GET', url, true);

//   // can use arrow function as well () =>
//   // self, that
//   let self = this;
//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       // console.log(self.http.responseText);
//       // send error if there is one, want error to be the first parameter
//       callback(null, self.http.responseText);
//     }
//     else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }


// // Make an HTTP POST Request
// easyHTTP.prototype.post = function(url, data, callback) {
//   this.http.open('POST', url, true);
//   //the data type that we are working with
//   // application/json
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make an HTTP PUT Request
// easyHTTP.prototype.put = function(url, data, callback) {
//   this.http.open('PUT', url, true);
//   //the data type that we are working with
//   // application/json
//   this.http.setRequestHeader('Content-type', 'application/json');

//   let self = this;
//   this.http.onload = function() {
//     callback(null, self.http.responseText);
//   }

//   this.http.send(JSON.stringify(data));
// }

// // Make an HTTP DELETE Request
// // Make an HTTP GET Request
// easyHTTP.prototype.delete = function(url, callback) {
//   this.http.open('DELETE', url, true);

//   // can use arrow function as well () =>
//   // self, that
//   let self = this;
//   this.http.onload = function() {
//     if(self.http.status === 200) {
//       // console.log(self.http.responseText);
//       // send error if there is one, want error to be the first parameter
//       callback(null, 'Post Deleted');
//     }
//     else {
//       callback('Error: ' + self.http.status);
//     }
//   }

//   this.http.send();
// }