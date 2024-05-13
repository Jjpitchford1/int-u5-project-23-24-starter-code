// Declare your arrays here
let moods = document.querySelector("#moods");
console.log(moods)
let happy = ["Moana.png", "Tangled.png"];
let sad = ["Annie.png", "B&B.png"];
let spooky = ["Getout.png", "US.png"];
let nostalgic = ["LM.png", "CampR.png"];


// Make sure to declare your HTML elements as variables! 

// Submit Button 
let submitButton = document.querySelector("button");
submitButton.addEventListener("click", function() {

let user = document.querySelector("input").value;
if (user === "happy"){

    happy.forEach(function(happy){
        console.log(happy);
        let img = document.createElement("img");
        img.src = happy;
moods.appendChild(img);
     });
}
});
submitButton.addEventListener("click", function() {
   
    let user = document.querySelector("input").value;
    if (user === "sad"){
    
        sad.forEach(function(sad){
            console.log(sad);
            let img = document.createElement("img");
            img.src = sad;
    moods.appendChild(img);
         });
       
    }
    });
    submitButton.addEventListener("click", function() {

        let user = document.querySelector("input").value;
        if (user === "spooky"){
        
            spooky.forEach(function(spooky){
                console.log(spooky);
                let img = document.createElement("img");
                img.src = spooky;
        moods.appendChild(img);
             });
           
        }
        });
        submitButton.addEventListener("click", function() {
   
            let user = document.querySelector("input").value;
            if (user === "nostalgic"){
            
                nostalgic.forEach(function(nostalgic){
                    console.log(nostalgic);
                    let img = document.createElement("img");
                    img.src = nostalgic;
            moods.appendChild(img);
                 });
               
            }
            });