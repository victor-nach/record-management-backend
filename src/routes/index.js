const { Router } = require('express');
const contollers = require('../controller');

const router = new Router();

router.get('/records', contollers.getAllRecords);
router.post('/records', contollers.addRecord);
router.get('/records/:id', contollers.getSingleRecord);
router.patch('/records/:id', contollers.updateRecord);
router.delete('/records/:id', contollers.deleteRecord);

module.exports = router;
