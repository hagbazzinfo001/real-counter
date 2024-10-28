// var button = document.getElementById("incrementButton");
// var counter = 0; // Initialize counter

// button.addEventListener("click", function() {
//     counter++; // Increment counter
//     document.getElementById("output").value = counter; // Update input field value with the new counter value
// });
// // reset counter
// document.getElementById("resetButton").addEventListener("click", function() {
//     counter = 0; // Reset counter to zero
//     document.getElementById("output").value = counter; // Update input field to show 0
// });
     

var counter1  = 0; // Initialize counter

// Handle Increment Icon Click
document.getElementById("incrementIcon1").addEventListener("click", function() {
    counter1++; // Increment counter
    document.getElementById("output1").value = counter1; // Update input field
});

// Handle Reset Icon Click
document.getElementById("resetIcon1").addEventListener("click", function() {
    counter1 = 0; // Reset counter to zero
    document.getElementById("output1").value = counter1; // Update input field
});
// 
// function  myMode() {
//     var element = document.body;
//     element.classList.toggle("darkMode");
//     var x = document.getElementById("myMode");
//     if (x.innerHTML === "Light") {
//       x.innerHTML = "Dark";
//     } else {
//       x.innerHTML = "Light";
//     }
//  }
//   

//  
function  myMode() {
    var element = document.body;
    element.classList.toggle("darkMode");
    var x = document.getElementById("myMode");
    if (x.innerHTML === "Light") {
      x.innerHTML = "Dark";
    } else {
      x.innerHTML = "Light";
    }
 }
 document.getElementById("myButton").addEventListener("click", function() {
    window.location.href = "./arabic.html";
 });