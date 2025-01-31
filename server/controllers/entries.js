const Entry = require("../models/Entry");

async function index(req, res) {
    try {
        const entries = await Entry.getAll();
        res.status(200).json(entries);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function show(req, res) {
    try {
        const entryId = req.params.id;
        const entries = await Entry.getOneById(entryId);
        res.status(201).json(entries);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function create(req, res) {
    try {
        const entry = req.body;
        const newEntry = await Entry.create(entry);
        res.status(201).json(newEntry);
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

async function update(req, res) {
    try {
        const id = req.params.id
        const existingEntry = await Entry.getOneById(id)

        const updatedEntry = await existingEntry.update({...existingEntry, ...req.body})
        res.status(200).json(updatedEntry)
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

module.exports = {
    index,
    show,
    create,
};
