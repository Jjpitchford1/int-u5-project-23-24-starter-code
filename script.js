// Declare your arrays here
let happy = document.querySelector("#happy");
console.log(happy)
let happiest = ["Moana.png"];


happiest.forEach(function(x){
   console.log(x);
});

// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");



submitButton.addEventListener("click", function() {
   

let user = document.querySelector("input").value;
if (user === "Happy"){
    let img = document.createElement("img");
    img.src = happiest;
   
}

});