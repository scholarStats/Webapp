const express = require('express');

const controllerDB = require('../controllers/controllerDB');
const router = express.Router();

router
    .route('/create')
    .get(controllerDB.getCreateMark)
    .post(controllerDB.createMark);

router 
    .route('/collectionMarks/:id')
    .get(controllerDB.getCollectionMarks);

router 
    .route('/collectionMarks/')
    .get(controllerDB.getAllCollectionMarks);

router.
    route('/getUsers')
    .get(controllerDB.getUsers);

router
    .route('/update')
    .get(controllerDB.getUpdateMark)
    .post(controllerDB.updateMark);

router
    .route('/delete/:id')
    .delete(controllerDB.deleteMark);

router
    .route('/createUser')
    .post(controllerDB.createUser);


module.exports = router;