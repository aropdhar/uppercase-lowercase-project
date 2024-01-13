let input = document.querySelector(".inputbox");
let btn = document.querySelector(".btn");
let convert_content = document.querySelector(".convert_content");
let lowerbtn = document.querySelector(".lowerbtn");
let repeatbtn = document.querySelector(".repeatbtn");

btn.addEventListener("click" , function(){

    convert_content.innerHTML = input.value.toUpperCase();

})

lowerbtn.addEventListener("click" , function(){

    convert_content.innerHTML = input.value.toLowerCase();

})

repeatbtn.addEventListener("click" , function(){

    convert_content.innerHTML = input.value.repeat(20);

})