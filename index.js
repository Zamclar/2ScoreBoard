let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    // console.log("The button was clicked")
    count = count + 1
    countEl.innerText = count
    console.log(count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countStr.textContent = 0
    count = 0
}



// LEARN PLUS EQUAL OPERATOR

// count = count + 1 is the same as count += 1

// 1. Grab the save-el paragrah and store it in a variable called saveEl
// let countEl = document.getElementById("count-el")
// let count = 0

// let saveEl = document.getElementById("save-el")


// function increment() {
//     count += 1
//     countEl.innerText = count
// }

// function save() {
//     let countStr = count + " - "
//     saveEl.textContent += countStr
      
//     // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
//     console.log(count)
// }

// Node.textContent 
// Node kinda means HTML element