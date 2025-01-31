const db = require('../../dataBase/connect')

/* SQL Table
CREATE TABLE entries (
    entries_id INT GENERATED ALWAYS AS IDENTITY,
    date TIMESTAMP DEFAULT NOW(),
    title VARCHAR(50),
    text TEXT,
    category VARCHAR(50),
    PRIMARY KEY (entries_id)
)*/

class Entry {

    constructor({entries_id, date, title, text, category}) {
    this.entries_id = entries_id
    this.date = new Date(date)
    this.title = title
    this.text = text
    this.category = category
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM entries ORDER BY date DESC;")
        if(!response.rows || response.rows.length === 0) {throw Error("No diary entries available")}
        return response.rows.map(ent => new Entry(ent))
    }

    static async getOneById(id) {
        const response = await db.query("SELECT * FROM entries WHERE entries_id = $1", [id])
        if(response.rows.length !== 1) { throw Error("Unable to locate entry") }
        return new Entry(response.rows[0])
    }

    static async create(data) {
        const {title, text, category} = data
        const newEntry = await db.query("INSERT INTO entries (title, text, category) VALUES ($1, $2, $3) RETURNING *;", [title, text, category])
        return new Entry(newEntry.rows[0])
    }

    async update(data){
        const {id, title, text, category} = data
        const response = await db.query(`UPDATE entries SET title=$2, text=$3, category=$4 WHERE entries_id = $1 RETURNING *;`, [id, title, text, category])
    }
}

module.exports = Entry