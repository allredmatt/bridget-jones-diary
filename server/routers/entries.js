const { Router } = require('express')

const entryController = require('../controllers/entries')

const entryRouter = Router()

entryRouter.get("/", entryController.index)
//entryRouter.get('/dates/', () => console.log("Route hit"))
entryRouter.get('/dates/:start&:end', entryController.search)
entryRouter.get("/:id", entryController.show)
entryRouter.post("/", entryController.create)
entryRouter.patch("/:id", entryController.update)
entryRouter.delete("/:id", entryController.destroy)

module.exports = entryRouter