const {Router} = require('express');
const {getAll, getById, postExplorer, putExplorer, deleteExplorer} = require('../controllers/explorers');

const router = Router();

router.get('/', getAll);

router.get('/:id', getById)

router.post('/', postExplorer)

router.put('/:id', putExplorer)

router.delete('/:id', deleteExplorer)

module.exports = router;