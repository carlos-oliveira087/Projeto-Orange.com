const button2 = document.getElementById("button2")
const button4 = document.getElementById("button4")

button2.addEventListener("click", gopage0)
button4.addEventListener("click", gopage0)

function gopage0(){
    window.location.href = "pgophone.html";
}



const button0 = document.getElementById("button0")
const button1 = document.getElementById("button1")
const button3 = document.getElementById("button3")

button0.addEventListener("click", goCheckout)
button1.addEventListener("click", goCheckout)
button3.addEventListener("click", goCheckout)

function goCheckout() {
    window.location.href = "checkout.html";
}



const button5 = document.getElementById("button5")

button5.addEventListener("click", gopage1)

function gopage1(){
    window.location.href = "checkout.html";
}



const button6 = document.getElementById("button6")

button6.addEventListener("click", gopage2)

function gopage2(){
    window.location.href = "pgslapbook.html";
}










