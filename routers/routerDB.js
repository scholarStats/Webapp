const express = require('express');

const controllerDB = require('../controllers/controllerDB');
const router = express.Router();

router
    .route('/create')
    .get(controllerDB.getCreateMark)
    .post(controllerDB.createMark);

router 
    .route('/collectionMarks')
    .get(controllerDB.getCollectionMarks);

router
    .route('/update')
    .get(controllerDB.getUpdateMark)
    .post(controllerDB.updateMark);

router
    .route('/delete/:id')
    .delete(controllerDB.deleteMark);


module.exports = router;