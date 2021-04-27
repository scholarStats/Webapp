const sqlite3 = require('sqlite3').verbose();
const nodemailer = require('nodemailer');
const pathDb = "./public/scholarDB.db";


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

exports.createUser = (req, res) => {
    //create user and send email
    console.log(req.body);
    let randomstring = Math.random().toString(36).slice(-8);
    let scholarDB = new sqlite3.Database(pathDb);
    scholarDB.run(`INSERT INTO users VALUES(NULL, "${req.body.valoreEmail}", "${randomstring}");`);
    scholarDB.close();
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'mattycarly02@gmail.com',
            pass: '07081276MA'
        }
    });
    const mailDetail = {
        from: 'mattycarly02@gmail.com',
        to: `${req.body.valoreEmail}`,
        subject: 'Credenziali di accesso a Scholar Stats',
        html: `<div style="padding:30px" align="center"><img src="https://upload.wikimedia.org/wikipedia/commons/a/ab/Android_O_Preview_Logo.png" width="50" height="50" alt=""/><hr><h3>Schoolar Stats </h3> <h5>Credenziali di accesso </h5><b>Username:</b> ${req.body.valoreEmail} <b>Password</b>: ${randomstring} <p>Utilizza queste credenziali per accedere alla Dashboard dell'app Scholar Stats. In caso di problemi, contattare l'assistenza</p></div>`
    }
    transporter.sendMail(mailDetail, (err, info) => {
        if(err) throw err;
        console.log("Email inviata correttamente...");
    });
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

