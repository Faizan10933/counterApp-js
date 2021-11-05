count = 0
countEL = document.getElementById("count-el")
prv = document.getElementById("save-el")

function increment(){
    count=count+1
    console.log(count)
    countEL.innerText = count
}

function save(){
    //let countStr =count + " - "
    prv.innerText+= count+ " - "
    countEL.innerText = 0
    count=0

}

// function save() {
//     let countStr = count + " - "
//     prv.textContenttStr
//     countEl.textContent = 0
//     count = 0
// }