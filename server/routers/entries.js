const { Router } = require('express')

const entryController = require('../controllers/entries')

const entryRouter = Router()

entryRouter.get("/", entryController.index)
entryRouter.get("/:id", entryController.show)
entryRouter.post("/", entryController.create)
// entryRouter.patch("/:id", entryController.update)
// entryRouter.delete("/:id", entryController.destroy)

module.exports = entryRouter