let convertBtn = document.getElementById("convert-btn")
let inputEl = document.getElementById("input-el")
let lengthEl = document.getElementById("length-el")
let volumeEl=document.getElementById("volume-el")
let massEl=document.getElementById("mass-el")


const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click",function(){
    let baseValue=inputEl.value
    lengthEl.textContent=`${baseValue} meters=${baseValue*meterToFeet} meters`
})
convertBtn.addEventListener("click",function(){
    let baseValue=inputEl.value
    volumeEl.textContent=`${baseValue} gallon=${baseValue*literToGallon} liters`
})
convertBtn.addEventListener("click",function(){
    let baseValue=inputEl.value
    massEl.textContent=`${baseValue} gallon=${baseValue* kiloToPound} kilos`
})






















