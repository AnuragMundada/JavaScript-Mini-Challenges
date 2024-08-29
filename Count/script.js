const count = document.querySelector(".count")
const decrementBtn = document.querySelector(".decrement-btn")
const incrementBtn = document.querySelector(".increment-btn")
const changeBy = document.querySelector(".changeBy")
const resetBtn = document.querySelector(".reset-btn")

decrementBtn.addEventListener("click", ()=>{
    console.log("Minus clicked")
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue - changeByValue;
})

incrementBtn.addEventListener("click", ()=>{
    console.log("Plus clicked")
    const countValue = parseInt(count.innerText)
    const changeByValue = parseInt(changeBy.value)
    count.innerText = countValue + changeByValue;
})

resetBtn.addEventListener("click", ()=>{
    count.innerText = 0;
})

