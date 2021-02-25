const app = require ('./app');
const express = require ('express');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT} || localhost:${PORT}`);
});


