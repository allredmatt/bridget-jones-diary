//for current date and time
// document.getElementById("datetime").value = new Date().toISOString().slice(0, 16);

const dateInput = document.querySelector("#entry-date form") //check if this works as well with the code above
const titleInput = document.querySelector("#entry-title form")
const textInput = document.querySelector("#entry-text")
const submitBtn = document.querySelector("#entry-btn")


textInput.addEventListener("submit", extractEntry)

function extractEntry(e) {
    e.preventDefault()
    fetchEntryData(e.target[0].value)
    e.target[0].value = ""
}

async function fetchEntryData(entry) {
    try {
        const response = await fetch(`https://bridget-jones-diary.onrender.com/entries${entry}`)
        if (response.ok) {
            const data = await response.json()    
            addEntry(data)
        } else {
            throw "Error: http status code =" + response.status
        }
        
    } catch (err) {
        console.log(err)
    }
        
}

let entry = ''

//continue setting up from here after creating the html file

function addEntry(entry) {
    const li = document.createElement("li")
    li.textContent = fruit.name //check this one
    fruitList.appendChild(li) //check which is from the above

    calories += fruit.nutritions.calories
    fruitNutrition.textContent = calories
}