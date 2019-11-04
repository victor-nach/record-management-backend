const { Router } = require('express');
const contollers = require('../controller');

const router = new Router();

router.get('/all_records', contollers.getAllRecords);

module.exports = router;
