// JavaScript Code goes here
console.log("Internal JS console message.")
console.log(document)
// console.log(document)
// alert("Bah humbug")
// window.onload = function() {
//     alert("Hello, class")
// }

//PROMPTS //
let index = 0
let changer = ["red", "lime", "orange"]
const student = prompt("What is your name?")
console.log(student)
document.write(`<p>Hello, ${student}!</p>`)

// WRITE TO ELEMENT BY ID
document.getElementById("myH1").textContent = "I love JavaScript";
// PAGE STYLING
document.body.style.backgroundColor = "black"
document.body.style.color = "lime"
document.body.style.fontFamily = "helvetica";
document.getElementById("myH1").addEventListener("click", function(){
    // function
    index++
    if (index >= changer.length) {
        index = 0
    }
    document.getElementById("myH1").style.color = changer[index]

});
document.getElementById("Butt").addEventListener("click", function(){
    index++
    if (index >= changer.length) {
        index = 0
    }
    let classes = document.getElementsByClassName("colorchange")
    for (let i = 0; i <= changer.length; i++) {
        classes[i].style.color = changer[index]
    }
});