const sqlite3 = require('sqlite3').verbose();
const pathDb = "./public/scholarDB.db"

    // idMark autoinc
    // valueMark
    // idSubject
    // dateMark

exports.getCreateMark = (req, res) => {
    //Rendering pagina voti
    let scholarDB = new sqlite3.Database(pathDb);
    let stmt = `SELECT idSubject, nameSubject FROM subjects;`
    scholarDB.all(stmt, (err, subjects) => {
        if(err){
            throw err;
        }
        res.send(subjects);
    });
}

exports.createMark = (req, res) =>{
    //Creazione elemento
    console.log(req.body);
    let scholarDB = new sqlite3.Database(pathDb);
    let date = new Date();
    let formattedDate = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}`;
    console.log(formattedDate)
    scholarDB.run(`INSERT INTO marks VALUES(NULL, ${req.body.votoValore}, ${req.body.idMateria}, "${formattedDate}");`);
    scholarDB.close();
    res.send(true);
}

exports.getCollectionMarks = (req, res) => {
    //get table voti
}

exports.getUpdateMark = (req, res) =>{
    let scholarDB = new sqlite3.Database(pathDb);
    let stmt = `SELECT idSubject, nameSubject FROM subjects;`
    scholarDB.all(stmt, (err, subjects) => {
        if(err){
            throw err;
        }
    
        stmt = `SELECT * FROM marks where idMark = ${req.params.id};`;
        scholarDB.all(stmt, (err, mark) =>{
            if(err){
                throw err;
            }

            res.send(mark, subjects);
        })
    });
}

exports.updateMark = (req, res) =>{
    let scholarDB = new sqlite3.Database(pathDb);
    scholarDB.run(`UPDATE mark SET valueMark = ${req.body.votoValore}, idSubject = ${req.body.votoValore} where idMark = ${req.body.votoId};`);
    scholarDB.close();
}

exports.deleteMark = (req, res) => {

    let id = req.params.id;
    let scholarDB = new sqlite3.Database(pathDb);
    scholarDB.run(`DELETE FROM mark WHERE idMark = ${id};`);
    scholarDB.close;
}

