let Display = document.querySelector("#Display");
let mytxtbox1 = document.querySelector("#mytxtbox1");
let mytxtbox2 = document.querySelector("#mytxtbox2");
let mybtn = document.querySelector("#mybtn")
let result;

mybtn.addEventListener("click", function () {
    result = parseInt(mytxtbox1.value) + parseInt(mytxtbox2.value);
    Display.textContent = result;
} ) 