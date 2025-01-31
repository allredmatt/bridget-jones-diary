//for current date and time
// document.getElementById("datetime").value = new Date().toISOString().slice(0, 16);

const dateInput = document.querySelector("#entry-date form") //check if this works as well with the code above
const titleInput = document.querySelector("#entry-title form")
const textInput = document.querySelector("#entry-text")
const submitBtn = document.querySelector("form")
const entriesUL = document.querySelector("#entrySection > ul")

const mainUrl = 'https://bridget-jones-diary.onrender.com'

submitBtn.addEventListener("submit", extractEntry)

function extractEntry(e) {
    e.preventDefault()
    postEntryData(e.target)
    e.target[0].value = ""
}

async function postEntryData(entry) {
    const data = {
        "title": entry['entry-title'].value,
        "text": entry['entry-text'].value
    }
    const options = {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {
            "Content-type": "application/json"
          }
    }
    try {
        const response = await fetch(`${mainUrl}/entries`, options)
        if (response.status === 201) {
            //location.reload()
        } else {
            throw "Error: http status code =" + response.status
        }
        
    } catch (err) {
        console.log(err)
    }
        
}

async function fetchDairyData() {
    try {
        const response = await fetch(`${mainUrl}/entries`)
        if (response.status === 200) {
            const data = await response.json()
            data.forEach(entry => addEntry(entry))
        } else {
            throw "Error: http status code =" + response.status
        }
        
    } catch (err) {
        console.log(err)
    }
}

fetchDairyData()

//continue setting up from here after creating the html file

function addEntry(entry) {
    const li = document.createElement("li")
    li.textContent = `${entry.title}: ${entry.text}`  //check this one
    entriesUL.appendChild(li) //check which is from the above
}