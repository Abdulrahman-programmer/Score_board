let score1 = document.getElementById("t1-score")
let score2 = document.getElementById("t2-score")
let count1 = 0
let count2 = 0
console.log(score1)
console.log(score2)
function t1_Inc(){
count1 += 1
score1.textContent = count1

}
function t2_Inc(){
count2 += 1
score2.textContent = count2

}