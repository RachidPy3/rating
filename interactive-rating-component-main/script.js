const submitBtn = document.querySelector("button")
document.querySelector(".thanks-popup").style.display = "none"

submitBtn.addEventListener("click", ()=>{
    document.querySelector(".box").style.display = "none"
    document.querySelector(".thanks-popup").style.display = "block"
})