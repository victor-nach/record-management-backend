const { Router } = require('express');
const contollers = require('../controller');

const router = new Router();

router.get('/records', contollers.getAllRecords);
router.get('/records/:id', contollers.getSingleRecord);

module.exports = router;
