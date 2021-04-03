const app = require('./app');

const PORT = process.env.PORT || 9000;
app.listen(PORT, () =>{
    console.log(`ScholarMERN_BackEnd || SERVER STARTED ON PORT ${PORT}`);
});

