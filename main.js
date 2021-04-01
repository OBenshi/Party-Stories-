
let params = (new URL(document.location)).searchParams;
thanks = document.getElementById("thanks");
var nameo = params.get('Name');
console.log(nameo)

var pop = "Thank you"+" "+nameo+" "+"for sharing your story!"
thanks.innerText = pop;


