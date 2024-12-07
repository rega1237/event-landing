/*const name = document.getElementById("name");
const email = document.getElementById("email");

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Perform an AJAX request to submit the form
    var xhr = new XMLHttpRequest();
    xhr.open("POST", this.action);
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
          console.log(response);
          document.getElementById("form").reset(); //Clear the form fields
          if(window.location.href.includes('#form')){
            window.location.href = `${window.location.href.replace('#form', 'gracias')}`; // Redirect to a new page
          }else {
            window.location.href = `${window.location.href}/reclamar_entrada`; // Redirect to a new page
          }
        } else {
          // Error response
          console.error("Error:", xhr.status, xhr.statusText);
        }
      }
    };
    xhr.send(new FormData(this));
  });*/

  
