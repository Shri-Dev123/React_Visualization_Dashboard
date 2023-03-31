const express = require('express');
const router = express.Router();
const {getAllData,getDataById, createData,deleteData,updateData} = require('../controllers/dataController');

router.get('/', getAllData);
router.post('/',createData);
router.get('/:id', getDataById);
router.put('/:id',updateData);
router.delete('/:id',deleteData)

module.exports = router;
