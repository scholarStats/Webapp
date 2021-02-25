const express = require('express');

const app = express();

exports.getIndex = (req, res) =>{
    res.status(200).render('index');
}