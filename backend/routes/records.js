const express = require('express');
const router = express.Router();

const record = require('../controller/record');

router.post('/add-record',record.createRecord);
router.get('/records',record.readRecord);
router.get('/:id',record.specialRecord);
router.delete('/:id',record.deleteRecord);
router.put('/:id',record.updateRecord);

module.exports = router;