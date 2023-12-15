const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')
// const authMiddleware = require('../middleware/authMiddleware')

router.post('/', brandController.create)
router.get('/', brandController.getAll)
router.get('/:id', brandController.get)
router.delete('/:id', brandController.delete)
router.put('/:id', brandController.update)
router.delete('/', brandController.deleteAll)
module.exports = router