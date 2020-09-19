document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  // also sometimes xmlhttp

  const xhr = new XMLHttpRequest();

  // OPEN - specify type of request we wanna make and
  // URL or the file name we wanna make it to
  // and asynchronous, so third parameter true
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // For spinners/loaders, OPTIONAL
  // Starts with readystate = 3, so we can put spinner or loader
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  // Directly readystate = 4
  xhr.onload = function(){
  console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function() {
  // console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }

  // In case something goes wrong
  xhr.onerror = function() {
    console.log('Request error...');
  }

  // To Finalise Everything, call 'send'
  xhr.send();

  // HTTP Statuses eg:
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
  
  // readyState Values
  // 0: request not initialised
  // 1: server connection established
  // 2: request received
  // 3: processing request
  // 4: request finished and response is ready


}